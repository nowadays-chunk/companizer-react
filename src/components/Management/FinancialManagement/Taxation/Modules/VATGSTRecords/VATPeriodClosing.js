import React from 'react';
import { Box, Typography, Paper, Button, Step, Stepper, StepLabel } from '@mui/material';
import { Lock } from '@mui/icons-material';

const VATPeriodClosing = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Period Closing: Q1 2025</Typography>

            <Paper sx={{ p: 4, my: 3 }}>
                <Stepper activeStep={1} alternativeLabel>
                    <Step key="Agg"><StepLabel>Aggregate Transactions</StepLabel></Step>
                    <Step key="Rec"><StepLabel>Reconcile GL</StepLabel></Step>
                    <Step key="Lock"><StepLabel>Lock Registers</StepLabel></Step>
                    <Step key="Close"><StepLabel>Close Period</StepLabel></Step>
                </Stepper>
            </Paper>

            <Box sx={{ textAlign: 'center' }}>
                <Button variant="contained" size="large" color="error" startIcon={<Lock />}>
                    Execute Period Close
                </Button>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    All draft transactions will be carried forward.
                </Typography>
            </Box>
        </Box>
    );
};

export default VATPeriodClosing;
