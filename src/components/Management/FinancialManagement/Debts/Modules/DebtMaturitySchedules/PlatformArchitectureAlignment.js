import React from 'react';
import { Box, Typography, Paper, Alert } from '@mui/material';

const PlatformArchitectureAlignment = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Platform Alignment</Typography>
            <Paper sx={{ p: 3 }}>
                <Alert severity="info" sx={{ mb: 2 }}>Integrated with Task System for Upcoming Maturities.</Alert>
                <Alert severity="info">Linked to Report Builder for custom datasets.</Alert>
            </Paper>
        </Box>
    );
};
export default PlatformArchitectureAlignment;
