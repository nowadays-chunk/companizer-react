import React from 'react';
import { Box, Typography, Paper, Checkbox, FormControlLabel, FormGroup, Button, Chip } from '@mui/material';

const PeriodCloseControls = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Period-End & Close Controls</Typography>
            <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6">Closing Checklist - June 2025</Typography>
                    <Chip label="Open" color="primary" />
                </Box>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Calculate and Post Accrued Interest" />
                    <FormControlLabel control={<Checkbox />} label="Run Amortization of Premium/Discount" />
                    <FormControlLabel control={<Checkbox />} label="Update Fair Values (FVTPL/FVOCI)" />
                    <FormControlLabel control={<Checkbox />} label="Post FX Revaluation Journals" />
                    <FormControlLabel control={<Checkbox />} label="Verify Intercompany Eliminations" />
                </FormGroup>
                <Box sx={{ mt: 3 }}>
                    <Button variant="contained" color="error">Close Period</Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default PeriodCloseControls;
