import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, ToggleButton, ToggleButtonGroup, Stack, Chip } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';

const data = [
    { name: 'Jan', portfolio: 2.0, benchmark: 1.5 },
    { name: 'Feb', portfolio: 2.8, benchmark: 2.0 },
    { name: 'Mar', portfolio: 3.5, benchmark: 2.8 },
    { name: 'Apr', portfolio: 3.2, benchmark: 3.0 },
    { name: 'May', portfolio: 4.1, benchmark: 3.5 },
    { name: 'Jun', portfolio: 5.2, benchmark: 4.0 },
];

const ReturnAnalyticsDashboard = () => {
    const [chartType, setChartType] = useState('cumulative');
    const [timeframe, setTimeframe] = useState('1y');

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Investment Returns Dashboard</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3, height: 450 }}>
                        <Typography variant="h6" gutterBottom>Cumulative Return vs Benchmark</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="portfolio" stroke="#8884d8" strokeWidth={2} name="Our Portfolio" />
                                <Line type="monotone" dataKey="benchmark" stroke="#82ca9d" strokeWidth={2} strokeDasharray="5 5" name="Benchmark" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReturnAnalyticsDashboard;
