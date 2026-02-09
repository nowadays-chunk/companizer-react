import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    TextField,
    MenuItem,
    Stepper,
    Step,
    StepLabel,
    FormControl,
    InputLabel,
    Select
} from '@mui/material';
import { fieldsConfig, collectionName, entityName } from './Modules/General/LoanModifications';

const LoanModifications = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Loan Modifications & Restructuring</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Initiate Modification</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Modification Type</InputLabel>
                                    <Select label="Modification Type" defaultValue="">
                                        <MenuItem value="rate_change">Interest Rate Change</MenuItem>
                                        <MenuItem value="term_extension">Term Extension</MenuItem>
                                        <MenuItem value="principal_reschedule">Principal Rescheduling</MenuItem>
                                        <MenuItem value="payment_holiday">Payment Holiday</MenuItem>
                                        <MenuItem value="covenant_waiver">Covenant Waiver</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField fullWidth type="date" label="Effective Date" InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Button variant="contained" fullWidth size="large" sx={{ height: '56px' }}>Start Workflow</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>Impact Simulation</Typography>
                        <TextField fullWidth label="New Interest Rate (%)" type="number" margin="normal" />
                        <TextField fullWidth label="New Maturity Date" type="date" margin="normal" InputLabelProps={{ shrink: true }} />

                        <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                            <Typography variant="subtitle2">Projected Impact</Typography>
                            <Grid container sx={{ mt: 1 }}>
                                <Grid item xs={6}>
                                    <Typography variant="body2">Total Interest (Old):</Typography>
                                    <Typography variant="body1">$ 50,000</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">Total Interest (New):</Typography>
                                    <Typography variant="body1" color="primary">$ 42,000</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Button variant="outlined" sx={{ mt: 2 }} fullWidth>Run Full Simulation</Button>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>Modification History</Typography>
                        <Stepper orientation="vertical" activeStep={0}>
                            <Step expanded>
                                <StepLabel>
                                    <Typography variant="subtitle2">Rate Amendment - Oct 2023</Typography>
                                    <Typography variant="caption" display="block">Approved by CFO</Typography>
                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>
                                    <Typography variant="subtitle2">Covenant Waiver - Jan 2023</Typography>
                                    <Typography variant="caption" display="block">Completed</Typography>
                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>
                                    <Typography variant="subtitle2">Initial Agreement - Jan 2022</Typography>
                                    <Typography variant="caption" display="block">Origination</Typography>
                                </StepLabel>
                            </Step>
                        </Stepper>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LoanModifications;
