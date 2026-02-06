import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: '0-30 Days', value: 45 },
    { name: '31-60 Days', value: 25 },
    { name: '61-90 Days', value: 20 },
    { name: '90+ Days', value: 10 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const InventoryAgingDashboard = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>Aging Dashboard</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={2} sx={{ p: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom>Inventory Distribution by Age</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                                <Typography variant="h3" color="primary">42</Typography>
                                <Typography variant="body1">Avg Days in Inventory</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                                <Typography variant="h3" color="secondary">15%</Typography>
                                <Typography variant="body1">% Slow Moving Items</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InventoryAgingDashboard;
