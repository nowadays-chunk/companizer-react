import React, { useState } from 'react';
import { Box, Typography, Paper, Button, Stepper, Step, StepLabel, StepContent, Alert } from '@mui/material';
import { Gavel, Check, Close, ArrowForward, ArrowBack } from '@mui/icons-material';

const WorkflowApprovals = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [status, setStatus] = useState('PENDING'); // PENDING, APPROVED, REJECTED

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleApprove = () => {
        setStatus('APPROVED');
        handleNext();
    };

    const handleReject = () => {
        setStatus('REJECTED');
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Typography variant="h5" fontWeight="600">Approval Workflow</Typography>
                <Box>
                    {status === 'PENDING' && (
                        <>
                            <Button
                                variant="outlined"
                                color="error"
                                startIcon={<Close />}
                                sx={{ mr: 1 }}
                                onClick={handleReject}
                            >
                                Reject
                            </Button>
                            <Button
                                variant="contained"
                                color="success"
                                startIcon={<Check />}
                                onClick={handleApprove}
                            >
                                Approve
                            </Button>
                        </>
                    )}
                    {status === 'APPROVED' && <Button variant="contained" color="success" disabled startIcon={<Check />}>Approved</Button>}
                    {status === 'REJECTED' && <Button variant="contained" color="error" disabled startIcon={<Close />}>Rejected</Button>}
                </Box>
            </Box>

            {status === 'REJECTED' && (
                <Alert severity="error" sx={{ mb: 3 }}>This application has been rejected by the Finance Manager.</Alert>
            )}

            <Paper sx={{ p: 3 }}>
                <Stepper orientation="vertical" activeStep={activeStep}>
                    <Step completed={activeStep > 0}>
                        <StepLabel>
                            <Typography variant="subtitle1" fontWeight="bold">Submitted</Typography>
                            <Typography variant="caption">By John Doe - 2025-04-10</Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography>Credit calculation initiated and submitted for review.</Typography>
                        </StepContent>
                    </Step>
                    <Step completed={status === 'APPROVED' || activeStep > 1} active={activeStep === 1 && status === 'PENDING'}>
                        <StepLabel error={status === 'REJECTED'}>
                            <Typography variant="subtitle1" fontWeight="bold">Manager Review</Typography>
                            <Typography variant="caption">Current Stage</Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography paragraph>Pending approval from Finance Manager.</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                        size="small"
                                        endIcon={<ArrowForward />}
                                    >
                                        Pass Stage
                                    </Button>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                        size="small"
                                        startIcon={<ArrowBack />}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                    <Step completed={status === 'APPROVED'}>
                        <StepLabel>Final Authorization</StepLabel>
                        <StepContent>
                            <Typography>Approved by Finance Manager. Ready for filing.</Typography>
                        </StepContent>
                    </Step>
                </Stepper>
            </Paper>
        </Box>
    );
};

export default WorkflowApprovals;
