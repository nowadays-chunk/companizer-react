import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Checkbox, FormControlLabel, Button } from '@mui/material';
import { Gamepad } from '@mui/icons-material';

const WhatIfSimulations = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Gamepad color="primary" /> What-If Simulations
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Simulation: Market Entry - Asia</Typography>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Hire Regional Team (+$500k)" />
                            <FormControlLabel control={<Checkbox />} label="Sponsor Tech Summit (+$100k)" />
                            <FormControlLabel control={<Checkbox />} label="Aggressive Pricing (-10% Revenue)" />

                            <Button variant="contained" fullWidth sx={{ mt: 2 }}>Run Simulation</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card sx={{ height: '100%', bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography color="text.secondary">Select parameters and run simulation to see projected P&L impact.</Typography>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WhatIfSimulations;
