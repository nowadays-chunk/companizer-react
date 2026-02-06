import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { Assessment } from '@mui/icons-material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', value: 10000000 },
    { name: 'Feb', value: 10500000 },
    { name: 'Mar', value: 11000000 },
    { name: 'Apr', value: 10800000 },
    { name: 'May', value: 11500000 },
    { name: 'Jun', value: 12000000 },
];

const ValuationAnalytics = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <Assessment color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h4">Valuation Analytics</Typography>
            </Box>

            <Paper elevation={2} sx={{ p: 3, height: 400, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Total Inventory Value Trend (YTD)</Typography>
                <ResponsiveContainer width="100%" height="90%">
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)} />
                        <Area type="monotone" dataKey="value" stroke="#3f51b5" fill="#e8eaf6" />
                    </AreaChart>
                </ResponsiveContainer>
            </Paper>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h2" color="primary">12%</Typography>
                        <Typography variant="body1">Value Growth (YoY)</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h2" color="secondary">4.5</Typography>
                        <Typography variant="body1">Inventory Turnover Ratio</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h2" color="error">2.1%</Typography>
                        <Typography variant="body1">Write-off as % of Sales</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ValuationAnalytics;
