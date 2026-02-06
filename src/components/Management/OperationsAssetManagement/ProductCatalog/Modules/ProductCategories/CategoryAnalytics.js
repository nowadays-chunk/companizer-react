
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    LinearProgress
} from '@mui/material';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import { Insights } from '@mui/icons-material';

const salesData = [
    { name: 'Hardware', Sales: 4000, Profit: 2400 },
    { name: 'Services', Sales: 3000, Profit: 1398 },
    { name: 'Software', Sales: 2000, Profit: 9800 },
    { name: 'Accessories', Sales: 2780, Profit: 3908 },
    { name: 'Other', Sales: 1890, Profit: 4800 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CategoryAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Insights color="primary" /> Category Performance
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>Category Revenue</Typography>
                            <Typography variant="h4">$5.2M</Typography>
                            <Typography variant="body2" color="success.main">+8% vs last month</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>Gross Margin</Typography>
                            <Typography variant="h4">42%</Typography>
                            <Typography variant="body2" color="error.main">-1% vs last month</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>Active Products</Typography>
                            <Typography variant="h4">145</Typography>
                            <Typography variant="body2" color="text.secondary">Total SKUs</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>Avg. Order Value</Typography>
                            <Typography variant="h4">$850</Typography>
                            <Typography variant="body2" color="success.main">+5% vs last month</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Card sx={{ height: 400 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Sub-Category Mix</Typography>
                            <ResponsiveContainer width="100%" height={320}>
                                <BarChart data={salesData} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" />
                                    <YAxis dataKey="name" type="category" />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Sales" fill="#8884d8" />
                                    <Bar dataKey="Profit" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: 400 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Inventory Health</Typography>
                            <Box sx={{ mt: 2 }}>
                                <Box sx={{ mb: 3 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2">Slow Moving</Typography>
                                        <Typography variant="body2">15%</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={15} color="warning" />
                                </Box>
                                <Box sx={{ mb: 3 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2">Overstocked</Typography>
                                        <Typography variant="body2">10%</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={10} color="error" />
                                </Box>
                                <Box sx={{ mb: 3 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2">Optimal</Typography>
                                        <Typography variant="body2">75%</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={75} color="success" />
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryAnalytics;
