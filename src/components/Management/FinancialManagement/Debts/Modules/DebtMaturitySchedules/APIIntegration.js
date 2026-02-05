import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';

const APIIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>API Integration Status</Typography>
            <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography>/api/debt/maturity-schedule</Typography>
                    <Chip label="Active" color="success" size="small" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography>/api/debt/reclassification</Typography>
                    <Chip label="Active" color="success" size="small" />
                </Box>
            </Paper>
        </Box>
    );
};
export default APIIntegration;
