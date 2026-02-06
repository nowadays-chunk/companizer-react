
import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
    { name: 'Week 1', demand: 400, forecast: 420 },
    { name: 'Week 2', demand: 300, forecast: 320 },
    { name: 'Week 3', demand: 550, forecast: 500 },
    { name: 'Week 4', demand: 450, forecast: 460 },
];

const DemandAnalysis = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TrendingUp color="primary" /> Demand-Based Analysis
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Consumption Trend vs Forecast</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="demand" stroke="#8884d8" name="Actual Demand" strokeWidth={2} />
                                    <Line type="monotone" dataKey="forecast" stroke="#82ca9d" name="Forecast" strokeDasharray="5 5" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Avg. Weekly Usage</Typography>
                            <Typography variant="h4">425 Units</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Seasonality Factor</Typography>
                            <Typography variant="h4">1.2x (High)</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Demand Std. Dev.</Typography>
                            <Typography variant="h4">45 Units</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DemandAnalysis;
