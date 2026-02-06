import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Buildings', value: 50000 },
    { name: 'Machinery', value: 120000 },
    { name: 'Vehicles', value: 30000 },
    { name: 'IT Equipment', value: 15000 },
];

const DepreciationAnalytics = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>Depreciation Analytics</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={2} sx={{ p: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom>YTD Depreciation Expense by Category</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                <Bar dataKey="value" fill="#3f51b5" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="h6">Key Metrics</Typography>
                        <Box mt={3}>
                            <Typography variant="caption">Total Gross Asset Value</Typography>
                            <Typography variant="h5">$4,500,000</Typography>
                        </Box>
                        <Box mt={3}>
                            <Typography variant="caption">Total Accumulated Depreciation</Typography>
                            <Typography variant="h5" color="textSecondary">$1,200,000</Typography>
                        </Box>
                        <Box mt={3}>
                            <Typography variant="caption">Net Book Value</Typography>
                            <Typography variant="h4" color="primary">$3,300,000</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DepreciationAnalytics;
