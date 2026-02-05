import React from 'react';
import { Box, Typography, Paper, FormControlLabel, Switch, Grid, Alert } from '@mui/material';

const DataIntegrityControls = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Controls & Validation Rules</Typography>
            <Alert severity="info" sx={{ mb: 3 }}>Global settings for interest payment processing.</Alert>
            <Paper sx={{ p: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <FormControlLabel control={<Switch defaultChecked />} label="Prevent Duplicate Payments" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControlLabel control={<Switch defaultChecked />} label="Validate against Amortization Schedule" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControlLabel control={<Switch defaultChecked />} label="Lock Paid Records" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControlLabel control={<Switch />} label="Allow Partial Payments" />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default DataIntegrityControls;
