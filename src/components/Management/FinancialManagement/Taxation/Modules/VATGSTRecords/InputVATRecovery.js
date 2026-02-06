import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Fully Recoverable', value: 450000, color: '#4caf50' },
    { name: 'Partially Recoverable', value: 120000, color: '#ff9800' },
    { name: 'Non-Recoverable', value: 30000, color: '#f44336' },
];

const InputVATRecovery = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Input VAT Recovery</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ height: 400, p: 2 }}>
                        <Typography variant="h6" align="center">Recovery Distribution</Typography>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, mb: 2 }}>
                        <Typography variant="subtitle2" color="textSecondary">Total Input VAT</Typography>
                        <Typography variant="h4">$600,000</Typography>
                    </Paper>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="subtitle2" color="textSecondary">Recoverable Ratio</Typography>
                        <Typography variant="h4" color="success.main">95%</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InputVATRecovery;
