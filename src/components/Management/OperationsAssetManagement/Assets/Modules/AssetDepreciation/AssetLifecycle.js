import React from 'react';
import { Box, Typography, Paper, Stepper, Step, StepLabel } from '@mui/material';
import { Timeline } from '@mui/icons-material';

const steps = ['Acquisition', 'In-Service', 'Depreciation', 'Maintenance/Upgrade', 'Retirement', 'Disposal'];

const AssetLifecycle = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <Timeline color="primary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Asset Lifecycle</Typography>
            </Box>

            <Paper elevation={2} sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom>Vehicle Fleet - Truck #44</Typography>
                <Box sx={{ width: '100%', mt: 4 }}>
                    <Stepper activeStep={2} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <Box mt={4} p={2} bgcolor="#e3f2fd">
                    <Typography variant="subtitle2">Current Stage: Depreciation</Typography>
                    <Typography variant="body2">
                        Asset is currently active and depreciating on a schedule. Next major event: Scheduled Maintenance in 2 months.
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default AssetLifecycle;
