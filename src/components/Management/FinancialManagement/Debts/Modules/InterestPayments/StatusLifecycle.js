import React from 'react';
import { Box, Typography, Paper, Chip, Stepper, Step, StepLabel } from '@mui/material';

const StatusLifecycle = () => {
    const steps = ['Draft', 'Scheduled', 'Pending Approval', 'Approved', 'Paid', 'Reconciled'];
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Status Lifecycle Tracker</Typography>
            <Paper sx={{ p: 3 }}>
                <Stepper alternativeLabel activeStep={2}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <Chip label="Current State: Pending Approval" color="warning" sx={{ fontSize: '1.2rem', p: 2 }} />
                </Box>
            </Paper>
        </Box>
    );
};
export default StatusLifecycle;
