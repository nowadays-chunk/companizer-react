import React, { useState } from 'react';
import { Box, Typography, Paper, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { period: 'Q1 2023', vat: 38000, wht: 10000, income: 75000 },
    { period: 'Q2 2023', vat: 42000, wht: 11500, income: 78000 },
    { period: 'Q3 2023', vat: 45000, wht: 12000, income: 82000 },
    { period: 'Q4 2023', vat: 48000, wht: 13000, income: 85000 },
    { period: 'Q1 2024', vat: 45230, wht: 12450, income: 89100 },
];

const TaxAnalytics = () => {
    const [timeframe, setTimeframe] = useState('quarterly');

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Tax Analytics & Trends</Typography>
                <ToggleButtonGroup
                    value={timeframe}
                    exclusive
                    onChange={(e, v) => v && setTimeframe(v)}
                    size="small"
                >
                    <ToggleButton value="monthly">Monthly</ToggleButton>
                    <ToggleButton value="quarterly">Quarterly</ToggleButton>
                    <ToggleButton value="yearly">Yearly</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Multi-Period Tax Analysis</Typography>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="period" />
                        <YAxis />
                        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                        <Legend />
                        <Line type="monotone" dataKey="vat" stroke="#8884d8" name="VAT" strokeWidth={2} />
                        <Line type="monotone" dataKey="wht" stroke="#82ca9d" name="WHT" strokeWidth={2} />
                        <Line type="monotone" dataKey="income" stroke="#ffc658" name="Income Tax" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </Paper>
        </Box>
    );
};

export default TaxAnalytics;
