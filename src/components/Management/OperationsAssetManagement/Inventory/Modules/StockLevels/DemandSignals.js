
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    LinearProgress
} from '@mui/material';
import {
    ShowChart
} from '@mui/icons-material';

const DemandSignals = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <ShowChart color="primary" /> Demand Signals & Forecasting
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Run Rate Analysis</Typography>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">30-Day Velocity</Typography>
                                <Typography variant="h4">25 Units / Day</Typography>
                                <Typography variant="caption">Trending Up (+5%)</Typography>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" display="flex" justifyContent="space-between">
                                    Forecast vs Actual <Typography variant="caption">95% Accuracy</Typography>
                                </Typography>
                                <LinearProgress variant="determinate" value={95} color="success" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DemandSignals;
