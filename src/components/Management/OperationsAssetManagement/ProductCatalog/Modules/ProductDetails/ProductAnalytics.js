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
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line
} from 'recharts';
import { Insights } from '@mui/icons-material';

const data = [
    { name: 'Jan', Sales: 4000, Profit: 2400 },
    { name: 'Feb', Sales: 3000, Profit: 1398 },
    { name: 'Mar', Sales: 2000, Profit: 9800 },
    { name: 'Apr', Sales: 2780, Profit: 3908 },
    { name: 'May', Sales: 1890, Profit: 4800 },
    { name: 'Jun', Sales: 2390, Profit: 3800 },
];

const ProductAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Insights color="primary" /> Product Analytics & Performance
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>Total Sales (YTD)</Typography>
                            <Typography variant="h4">$1.2M</Typography>
                            <Typography variant="body2" color="success.main">+12% vs last year</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>Units Sold</Typography>
                            <Typography variant="h4">8,450</Typography>
                            <Typography variant="body2" color="success.main">+5% vs last year</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>Avg. Margin</Typography>
                            <Typography variant="h4">58%</Typography>
                            <Typography variant="body2" color="error.main">-2% vs last year</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>Inventory Turnover</Typography>
                            <Typography variant="h4">4.2x</Typography>
                            <Typography variant="body2" color="text.secondary">Annually</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Card sx={{ height: 400 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Sales & Profit Trend</Typography>
                            <ResponsiveContainer width="100%" height={320}>
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
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
                            <Typography variant="h6" gutterBottom>Return Reasons</Typography>
                            <Box sx={{ mt: 2 }}>
                                <Box sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2">Defective</Typography>
                                        <Typography variant="body2">45%</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={45} color="error" />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2">Changed Mind</Typography>
                                        <Typography variant="body2">30%</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={30} color="warning" />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2">Wrong Item Sent</Typography>
                                        <Typography variant="body2">15%</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={15} color="info" />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2">Other</Typography>
                                        <Typography variant="body2">10%</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={10} color="success" />
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductAnalytics;
