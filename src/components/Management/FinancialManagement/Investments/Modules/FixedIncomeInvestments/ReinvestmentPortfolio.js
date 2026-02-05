import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardHeader, CardContent } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Govt Bonds', value: 45 },
    { name: 'Corp Bonds', value: 35 },
    { name: 'T-Bills', value: 20 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const ReinvestmentPortfolio = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Reinvestment & Portfolio</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: 400 }}>
                        <Typography variant="h6">Sector Concentration</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <PieChart>
                                <Pie data={data} cx="50%" cy="50%" outerRadius={100} label dataKey="value">
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom>Reinvestment Queue</Typography>
                        <Box sx={{ mt: 2 }}>
                            <Card sx={{ mb: 2, bgcolor: 'background.default' }}>
                                <CardHeader title="Proceeds from Bond A" subheader="Available: 2025-11-21" />
                                <CardContent>
                                    <Typography variant="body2">$1,000,000 to be redeployed. Strategy: Short-term T-bills.</Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ bgcolor: 'background.default' }}>
                                <CardHeader title="Coupon Aggregation" subheader="Expected Q4" />
                                <CardContent>
                                    <Typography variant="body2">$125,000 projected. Auto-sweep to Money Market.</Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReinvestmentPortfolio;
