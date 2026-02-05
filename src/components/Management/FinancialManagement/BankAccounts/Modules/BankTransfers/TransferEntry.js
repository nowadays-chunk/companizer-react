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
    useTheme
} from '@mui/material';

const TransferEntry = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Type & Accounts', 'Details & Amount', 'Review'];

    return (
        <Box sx={{ p: 3 }}>
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
                                <TextField select fullWidth label="Transfer Type" defaultValue="internal">
                                    <MenuItem value="internal">Internal (Same Entity)</MenuItem>
                                    <MenuItem value="intercompany">Intercompany</MenuItem>
                                    <MenuItem value="external">External / Supplier</MenuItem>
                                    <MenuItem value="fx">FX / Cross-Currency</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField select fullWidth label="Source Account" defaultValue="">
                                    <MenuItem value="op-us">Operating Account - US (USD)</MenuItem>
                                    <MenuItem value="pay-us">Payroll Account - US (USD)</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField select fullWidth label="Destination Account" defaultValue="">
                                    <MenuItem value="sv-uk">Savings Account - UK (GBP)</MenuItem>
                                    <MenuItem value="ext">External Vendor...</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                    )}

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                        <Button disabled={activeStep === 0} onClick={() => setActiveStep((prev) => prev - 1)} sx={{ mr: 1 }}>
                            Back
                        </Button>
                        <Button variant="contained" onClick={() => setActiveStep((prev) => prev + 1)}>
                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TransferEntry;
