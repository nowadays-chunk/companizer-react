import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Button,
    TextField
} from '@mui/material';

const ApprovalsWorkflow = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Payment Approval Workflow</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Stepper orientation="vertical" activeStep={1}>
                            <Step expanded>
                                <StepLabel>
                                    <Typography variant="subtitle1">Preparation</Typography>
                                    <Typography variant="caption">Submitted by Analyst on Nov 10</Typography>
                                </StepLabel>
                                <StepContent>
                                    <Typography variant="body2" color="success.main">Completed</Typography>
                                </StepContent>
                            </Step>

                            <Step expanded>
                                <StepLabel>
                                    <Typography variant="subtitle1">Finance Manager Review</Typography>
                                    <Typography variant="caption">Pending Action</Typography>
                                </StepLabel>
                                <StepContent>
                                    <Box sx={{ mt: 2, mb: 1 }}>
                                        <Typography variant="body2" gutterBottom>
                                            Please review the interest calculation and tax deduction breakdown.
                                        </Typography>
                                        <TextField fullWidth multiline rows={2} label="Comments" placeholder="Enter approval notes..." sx={{ mb: 2 }} />
                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            <Button variant="contained" color="success">Approve</Button>
                                            <Button variant="outlined" color="error">Reject</Button>
                                        </Box>
                                    </Box>
                                </StepContent>
                            </Step>

                            <Step>
                                <StepLabel>Treasury Release</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Bank Processing</StepLabel>
                            </Step>
                        </Stepper>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Policy Rules</Typography>
                        <Typography variant="body2" paragraph>• Payments &gt; $10k require 2 approvers.</Typography>
                        <Typography variant="body2" paragraph>• Payments &gt; $100k require CFO sign-off.</Typography>
                        <Button variant="text">View Full Policy</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ApprovalsWorkflow;
