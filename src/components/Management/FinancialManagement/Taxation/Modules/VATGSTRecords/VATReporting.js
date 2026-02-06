import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jan', output: 40000, input: 24000 },
    { month: 'Feb', output: 30000, input: 13980 },
    { month: 'Mar', output: 20000, input: 9800 },
    { month: 'Apr', output: 27800, input: 39080 },
    { month: 'May', output: 18900, input: 4800 },
    { month: 'Jun', output: 23900, input: 3800 },
];

const VATReporting = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Detailed Reporting</Typography>

            <Paper sx={{ height: 500, p: 3 }}>
                <Typography variant="h6" gutterBottom>Input vs Output VAT Trend</Typography>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                        <Legend />
                        <Bar dataKey="output" name="Output VAT (Sales)" fill="#2196f3" />
                        <Bar dataKey="input" name="Input VAT (Purchase)" fill="#4caf50" />
                    </BarChart>
                </ResponsiveContainer>
            </Paper>
        </Box>
    );
};

export default VATReporting;
