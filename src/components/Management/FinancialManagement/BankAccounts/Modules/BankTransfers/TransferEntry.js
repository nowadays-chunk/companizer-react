import React, { useState } from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    TextField,
    MenuItem,
    Button,
    Stepper,
    Step,
    StepLabel,
    Divider,
    FormControlLabel,
    Checkbox,
    useTheme,
    Alert,
    CircularProgress
} from '@mui/material';
import { bankTransferFunds } from '../../../../../../utils/clientQueries';
import { fieldsConfig, collectionName, entityName } from './Modules/General/TransferEntry';

const TransferEntry = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Type & Accounts', 'Details & Amount', 'Review'];
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const [formData, setFormData] = useState({
        transferType: 'internal',
        fromAccountId: 'op-us',
        toAccountId: 'sv-uk',
        amount: '',
        currency: 'USD',
        transferDate: new Date().toISOString().split('T')[0],
        description: '',
        referenceNumber: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const handleSubmit = async () => {
        setLoading(true);
        setMessage(null);
        try {
            await bankTransferFunds({
                fromAccountId: formData.fromAccountId,
                toAccountId: formData.toAccountId,
                amount: parseFloat(formData.amount),
                currency: formData.currency,
                transferDate: formData.transferDate,
                description: formData.description,
                referenceNumber: formData.referenceNumber
            });
            setMessage({ type: 'success', text: 'Transfer submitted successfully!' });
            setActiveStep(0);
            setFormData({ ...formData, amount: '', description: '', referenceNumber: '' });
        } catch (error) {
            console.error(error);
            setMessage({ type: 'error', text: 'Failed to submit transfer.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            {message && <Alert severity={message.type} sx={{ mb: 3 }} onClose={() => setMessage(null)}>{message.text}</Alert>}

            <Card>
                <CardHeader
                    title="New Bank Transfer"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <Divider />
                <CardContent>
                    <Box sx={{ width: '100%', mb: 4 }}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>

                    {activeStep === 0 && (
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    select fullWidth label="Transfer Type"
                                    name="transferType"
                                    value={formData.transferType}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="internal">Internal (Same Entity)</MenuItem>
                                    <MenuItem value="intercompany">Intercompany</MenuItem>
                                    <MenuItem value="external">External / Supplier</MenuItem>
                                    <MenuItem value="fx">FX / Cross-Currency</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    select fullWidth label="Source Account"
                                    name="fromAccountId"
                                    value={formData.fromAccountId}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="op-us">Operating Account - US (USD)</MenuItem>
                                    <MenuItem value="pay-us">Payroll Account - US (USD)</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    select fullWidth label="Destination Account"
                                    name="toAccountId"
                                    value={formData.toAccountId}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="sv-uk">Savings Account - UK (GBP)</MenuItem>
                                    <MenuItem value="ext">External Vendor...</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                    )}

                    {activeStep === 1 && (
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth label="Amount"
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth label="Currency"
                                    name="currency"
                                    value={formData.currency}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth label="Date"
                                    type="date"
                                    name="transferDate"
                                    value={formData.transferDate}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth label="Reference Number"
                                    name="referenceNumber"
                                    value={formData.referenceNumber}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth label="Description"
                                    multiline rows={2}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    )}

                    {activeStep === 2 && (
                        <Box>
                            <Typography variant="h6" gutterBottom>Review Transfer Details</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}><Typography color="textSecondary">Type:</Typography></Grid>
                                <Grid item xs={6}><Typography fontWeight="bold">{formData.transferType}</Typography></Grid>

                                <Grid item xs={6}><Typography color="textSecondary">From:</Typography></Grid>
                                <Grid item xs={6}><Typography fontWeight="bold">{formData.fromAccountId}</Typography></Grid>

                                <Grid item xs={6}><Typography color="textSecondary">To:</Typography></Grid>
                                <Grid item xs={6}><Typography fontWeight="bold">{formData.toAccountId}</Typography></Grid>

                                <Grid item xs={6}><Typography color="textSecondary">Amount:</Typography></Grid>
                                <Grid item xs={6}><Typography fontWeight="bold">{formData.amount} {formData.currency}</Typography></Grid>

                                <Grid item xs={6}><Typography color="textSecondary">Date:</Typography></Grid>
                                <Grid item xs={6}><Typography fontWeight="bold">{formData.transferDate}</Typography></Grid>
                            </Grid>
                        </Box>
                    )}

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                        <Button disabled={activeStep === 0 || loading} onClick={handleBack} sx={{ mr: 1 }}>
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : activeStep === steps.length - 1 ? 'Submit Transfer' : 'Next'}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TransferEntry;
