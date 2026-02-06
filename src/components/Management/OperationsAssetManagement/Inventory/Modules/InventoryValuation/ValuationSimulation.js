import React from 'react';
import { Box, Typography, Button, Paper, Grid, Slider } from '@mui/material';
import { Science } from '@mui/icons-material';

const ValuationSimulation = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>Scenario Simulation</Typography>
            <Paper elevation={2} sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom>Simulate Cost Changes</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography gutterBottom>Raw Material Price Increase</Typography>
                        <Slider defaultValue={10} valueLabelDisplay="auto" step={1} marks min={-20} max={50} />
                        <Typography variant="caption" display="block" gutterBottom>Current Setting: +10%</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography gutterBottom>Exchange Rate Fluctuation (USD/EUR)</Typography>
                        <Slider defaultValue={0} valueLabelDisplay="auto" step={0.5} marks min={-10} max={10} />
                        <Typography variant="caption" display="block" gutterBottom>Current Setting: 0%</Typography>
                    </Grid>
                </Grid>

                <Box mt={4} p={3} bgcolor="#e8f5e9" borderRadius={2}>
                    <Typography variant="h6" color="success.main" gutterBottom>projected Impact</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography variant="body2">Current Valuation</Typography>
                            <Typography variant="h5">$12,000,000</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2">Projected Valuation</Typography>
                            <Typography variant="h5" fontWeight="bold">$12,850,000</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2">Change</Typography>
                            <Typography variant="h5" color="error">+$850,000</Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box mt={3} display="flex" justifyContent="flex-end">
                    <Button variant="contained" startIcon={<Science />}>Run New Simulation</Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default ValuationSimulation;
