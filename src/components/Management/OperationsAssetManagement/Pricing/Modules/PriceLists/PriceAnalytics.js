
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
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';
import { Insights } from '@mui/icons-material';

const data = [
    { name: 'Electronics', prev: 4000, current: 4200 },
    { name: 'Clothing', prev: 3000, current: 3100 },
    { name: 'Home', prev: 2000, current: 1950 },
    { name: 'Garden', prev: 2780, current: 2900 },
];

const PriceAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Insights color="primary" /> Margin & Impact Analytics
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Projected Margin Impact</Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="h3" color="success.main">+2.4%</Typography>
                                <Typography variant="body2" color="text.secondary">Estimated increase in gross margin</Typography>
                            </Box>
                            <Box sx={{ mt: 4 }}>
                                <Typography variant="subtitle2" gutterBottom>Price Coverage</Typography>
                                <LinearProgress variant="determinate" value={98} color="primary" sx={{ height: 10, borderRadius: 5 }} />
                                <Typography variant="caption" sx={{ mt: 0.5, display: 'block', textAlign: 'right' }}>98% of SKUs have active price</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Revenue Impact by Category</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="prev" fill="#8884d8" name="Previous List" />
                                    <Bar dataKey="current" fill="#82ca9d" name="Current List" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PriceAnalytics;
