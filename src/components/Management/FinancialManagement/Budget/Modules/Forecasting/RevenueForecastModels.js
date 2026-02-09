import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { MonetizationOn, ShowChart } from '@mui/icons-material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { fieldsConfig, collectionName, entityName } from './Modules/General/RevenueForecastModels';

const data = [
    { name: 'Month 1', pipeline: 4000, trend: 2400 },
    { name: 'Month 2', pipeline: 3000, trend: 1398 },
    { name: 'Month 3', pipeline: 2000, trend: 9800 },
    { name: 'Month 4', pipeline: 2780, trend: 3908 },
    { name: 'Month 5', pipeline: 1890, trend: 4800 },
    { name: 'Month 6', pipeline: 2390, trend: 3800 },
];

const RevenueForecastModels = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <MonetizationOn color="primary" /> Revenue Forecast Models
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ height: 400, p: 2 }}>
                        <Typography variant="h6" gutterBottom>Projection Sources</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorPipeline" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="pipeline" stroke="#8884d8" fillOpacity={1} fill="url(#colorPipeline)" name="Pipeline Weighted" />
                                <Area type="monotone" dataKey="trend" stroke="#82ca9d" fillOpacity={1} fill="url(#colorTrend)" name="Historical Trend" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Confidence Scoring</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <ShowChart color="success" />
                                <Typography variant="body1">Pipeline: 85% Weighted Probability</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <ShowChart color="warning" />
                                <Typography variant="body1">Trend: Seasonal smoothing applied</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RevenueForecastModels;
