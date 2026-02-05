import React from 'react';
import { Box, Typography, Paper, FormControlLabel, Checkbox } from '@mui/material';

const ControlsDataIntegrity = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Controls & Data Integrity</Typography>
            <Paper sx={{ p: 3 }}>
                <FormControlLabel control={<Checkbox defaultChecked disabled />} label="Prevent Negative Remaining Term" />
                <Box />
                <FormControlLabel control={<Checkbox defaultChecked disabled />} label="Enforce Amortization Consistency" />
                <Box />
                <FormControlLabel control={<Checkbox defaultChecked disabled />} label="Mandatory Approval for Date Changes" />
            </Paper>
        </Box>
    );
};
export default ControlsDataIntegrity;
