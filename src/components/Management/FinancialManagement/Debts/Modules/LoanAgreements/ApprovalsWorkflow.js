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
    Avatar,
    Chip
} from '@mui/material';

const ApprovalsWorkflow = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Approvals & Workflow</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Active Authorization Chain</Typography>

                        <Stepper orientation="vertical" activeStep={1}>
                            <Step expanded>
                                <StepLabel>
                                    <Typography variant="subtitle1">Loan Agreement Creation</Typography>
                                    <Typography variant="caption">Initiated by John Doe on Oct 10, 2023</Typography>
                                </StepLabel>
                                <StepContent>
                                    <Box sx={{ mb: 2 }}>
                                        <Chip label="Completed" color="success" size="small" />
                                    </Box>
                                </StepContent>
                            </Step>

                            <Step expanded>
                                <StepLabel>
                                    <Typography variant="subtitle1">Finance Manager Review</Typography>
                                    <Typography variant="caption">Assigned to: Jane Smith</Typography>
                                </StepLabel>
                                <StepContent>
                                    <Typography variant="body2" sx={{ mb: 2 }}>
                                        Verification of interest rates, terms, and covenant definitions.
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Button variant="contained" size="small">Approve</Button>
                                        <Button variant="outlined" color="error" size="small">Reject</Button>
                                    </Box>
                                </StepContent>
                            </Step>

                            <Step>
                                <StepLabel>
                                    <Typography variant="subtitle1">CFO / Treasury Head Approval</Typography>
                                    <Typography variant="caption">Required for loans > $1M</Typography>
                                </StepLabel>
                            </Step>

                            <Step>
                                <StepLabel>
                                    <Typography variant="subtitle1">Final Execution</Typography>
                                </StepLabel>
                            </Step>
                        </Stepper>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Workflow Configurations</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box>
                                <Typography variant="subtitle2">Loan Creation</Typography>
                                <Typography variant="caption">Threshold: $500k+</Typography>
                                <Typography variant="body2">Requires: 2 Approvers</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2">Disbursement</Typography>
                                <Typography variant="body2">Requires: Treasury Approval</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2">Modifications</Typography>
                                <Typography variant="body2">Requires: Full Re-approval</Typography>
                            </Box>
                        </Box>
                        <Button variant="outlined" sx={{ mt: 3 }} fullWidth>Configure Policies</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ApprovalsWorkflow;
