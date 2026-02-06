import React from 'react';
import { Box, Typography, Divider, Paper, Grid } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: '0-30 Days', value: 4000000 },
    { name: '31-60 Days', value: 2500000 },
    { name: '61-90 Days', value: 1000000 },
    { name: '90-180 Days', value: 500000 },
    { name: '>180 Days', value: 200000 },
];

const ValuationAging = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>Inventory Aging Analysis</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={2} sx={{ p: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom>Inventory Value by Age</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)} />
                                <Legend />
                                <Bar dataKey="value" fill="#8884d8" name="Inventory Value" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <AccessTime color="error" sx={{ mr: 1 }} />
                            <Typography variant="h6">Obsolescence Risk</Typography>
                        </Box>
                        <Typography variant="h4" color="error">$200,000</Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>Value of stock older than 180 days.</Typography>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="subtitle2">Recommended Provision</Typography>
                        <Typography variant="h5">$150,000</Typography>
                        <Typography variant="caption">Based on 75% write-down policy for {'>'}180 days.</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ValuationAging;
