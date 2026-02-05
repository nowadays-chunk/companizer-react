import React from 'react';
import { Box, Typography, Paper, FormControlLabel, Switch } from '@mui/material';

const AutomationRules = () => (
    <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>Automation & Rules</Typography>
        <Paper sx={{ p: 3 }}>
            <FormControlLabel control={<Switch />} label="Auto-approve payments < $1,000" />
            <FormControlLabel control={<Switch />} label="Auto-post accrual reversals" />
        </Paper>
    </Box>
);
export default AutomationRules;
