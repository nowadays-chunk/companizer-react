import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { AttachMoney, ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataMonthly = [
    { name: 'Jan', actual: 4000, budget: 2400 },
    { name: 'Feb', actual: 3000, budget: 1398 },
    { name: 'Mar', actual: 2000, budget: 9800 },
    { name: 'Apr', actual: 2780, budget: 3908 },
    { name: 'May', actual: 1890, budget: 4800 },
    { name: 'Jun', actual: 2390, budget: 3800 },
];

const dataQuarterly = [
    { name: 'Q1', actual: 9000, budget: 13598 },
    { name: 'Q2', actual: 7060, budget: 12508 },
];

const RevenueVariance = () => {
    const [view, setView] = useState('monthly');
    const [chartData, setChartData] = useState(dataMonthly);

    const handleViewChange = (event, newView) => {
        if (newView !== null) {
            setView(newView);
            setChartData(newView === 'monthly' ? dataMonthly : dataQuarterly);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AttachMoney color="primary" /> Revenue Variance (Price vs. Volume)
                </Typography>
                <ToggleButtonGroup
                    value={view}
                    exclusive
                    onChange={handleViewChange}
                    size="small"
                >
                    <ToggleButton value="monthly">Monthly</ToggleButton>
                    <ToggleButton value="quarterly">Quarterly</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ height: 400, p: 2 }}>
                        <Typography variant="h6" gutterBottom>Revenue Performance Trends</Typography>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual Revenue" />
                                <Line type="monotone" dataKey="budget" stroke="#82ca9d" name="Budgeted Revenue" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Card>
                            <CardContent>
                                <Typography color="text.secondary">Price Variance</Typography>
                                <Typography variant="h4" color="success.main" sx={{ display: 'flex', alignItems: 'center' }}>
                                    +$12,500 <ArrowUpward fontSize="small" />
                                </Typography>
                                <Typography variant="caption">Higher unit prices achieved</Typography>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <Typography color="text.secondary">Volume Variance</Typography>
                                <Typography variant="h4" color="error.main" sx={{ display: 'flex', alignItems: 'center' }}>
                                    -$8,200 <ArrowDownward fontSize="small" />
                                </Typography>
                                <Typography variant="caption">Lower units sold than planned</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RevenueVariance;
