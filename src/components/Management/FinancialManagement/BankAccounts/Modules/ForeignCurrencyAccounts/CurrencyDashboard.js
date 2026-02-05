import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Card,
    CardContent
} from '@mui/material';

const CurrencyDashboard = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Currency Exposure Dashboard
            </Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                        <CardContent>
                            <Typography variant="h6">Total Net Exposure</Typography>
                            <Typography variant="h3">$1.2M</Typography>
                            <Typography variant="caption">USD Equivalent • Long Position</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Top Exposure Currency</Typography>
                            <Typography variant="h3" color="primary">EUR</Typography>
                            <Typography variant="body2">65% of total foreign holdings</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Value at Risk (VaR)</Typography>
                            <Typography variant="h3" color="error.main">$45k</Typography>
                            <Typography variant="body2">Daily 95% Confidence</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f9f9f9' }}>
                        <Typography color="textSecondary">[Pie Chart: Exposure by Currency]</Typography>
                        {/* Placeholder for Recharts/Highcharts */}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f9f9f9' }}>
                        <Typography color="textSecondary">[Line Chart: Exchange Rate Volatility (30 Days)]</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CurrencyDashboard;
