import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { Psychology, AutoGraph } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Week 1', actual: 120, predicted: 118 },
    { name: 'Week 2', actual: 132, predicted: 125 },
    { name: 'Week 3', actual: 101, predicted: 128 },
    { name: 'Week 4', actual: 145, predicted: 140 },
    { name: 'Week 5', predicted: 148 },
    { name: 'Week 6', predicted: 155 },
];

const PredictiveAnalyticsAI = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Psychology color="primary" /> Predictive Analytics AI
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ height: 400, p: 2 }}>
                        <Typography variant="h6" gutterBottom>Sales Volume Prediction (Next 2 Weeks)</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="actual" stroke="#000" strokeWidth={2} name="Actual Sales" />
                                <Line type="monotone" dataKey="predicted" stroke="#8884d8" strokeDasharray="5 5" name="AI Prediction" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                <AutoGraph color="secondary" />
                                <Typography variant="h6">Anomaly Detected</Typography>
                            </Box>
                            <Typography variant="body2" paragraph>
                                Week 3 Actuals were significantly lower than predicted range.
                            </Typography>
                            <Chip label="Investigating" color="warning" size="small" />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PredictiveAnalyticsAI;
