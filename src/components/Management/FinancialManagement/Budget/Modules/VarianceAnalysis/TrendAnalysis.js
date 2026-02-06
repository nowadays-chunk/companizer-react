import React, { useState } from 'react';
import { Box, Typography, Paper, Switch, FormControlLabel } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const baseData = [
    { name: 'Q1', favorable: 4000, unfavorable: 2400 },
    { name: 'Q2', favorable: 3000, unfavorable: 1398 },
    { name: 'Q3', favorable: 2000, unfavorable: 9800 },
    { name: 'Q4', favorable: 2780, unfavorable: 3908 },
];

const forecastData = [
    ...baseData,
    { name: 'Q1 2025 (F)', favorable: 4500, unfavorable: 2000 },
    { name: 'Q2 2025 (F)', favorable: 5000, unfavorable: 1800 },
];

const TrendAnalysis = () => {
    const [showForecast, setShowForecast] = useState(false);

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TrendingUp color="primary" /> Variance Trend Analysis
                </Typography>
                <FormControlLabel
                    control={<Switch checked={showForecast} onChange={() => setShowForecast(!showForecast)} />}
                    label="Show Forecast Projection"
                />
            </Box>

            <Paper sx={{ p: 3, height: 400 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={showForecast ? forecastData : baseData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="favorable" fill="#82ca9d" name="Favorable Variance" />
                        <Bar dataKey="unfavorable" fill="#ff8042" name="Unfavorable Variance" />
                        {showForecast && <ReferenceLine x="Q4" stroke="red" strokeDasharray="3 3" label="Current" />}
                    </BarChart>
                </ResponsiveContainer>
            </Paper>
        </Box>
    );
};

export default TrendAnalysis;
