import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Subsidiaries', value: 400 },
    { name: 'Associates', value: 300 },
    { name: 'FVTPL', value: 300 },
    { name: 'FVOCI', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const InvestmentDashboard = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Executive Dashboard</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom>Portfolio Composition</Typography>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
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
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Card sx={{ bgcolor: '#263238', color: 'white' }}>
                                <CardContent>
                                    <Typography variant="overline" color="grey.400">Total AUM</Typography>
                                    <Typography variant="h3">$ 42.5M</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card>
                                <CardContent>
                                    <Typography variant="overline" color="textSecondary">Top Performer</Typography>
                                    <Typography variant="h6">Alpha Tech Corp</Typography>
                                    <Typography variant="body2" color="success.main">+ 24% IRR</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InvestmentDashboard;
