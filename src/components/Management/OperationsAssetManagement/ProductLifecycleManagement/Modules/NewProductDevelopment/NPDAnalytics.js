
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid
} from '@mui/material';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend
} from 'recharts';
import { Insights } from '@mui/icons-material';

const data = [
    { name: 'Idea', value: 40 },
    { name: 'Concept', value: 20 },
    { name: 'Develop', value: 10 },
    { name: 'Launch', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const NPDAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Insights color="primary" /> NPD Pipeline Analytics
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Innovation Funnel</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
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
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Key Performance Indicators</Typography>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2" color="text.secondary">Avg. Time to Market</Typography>
                                <Typography variant="h4">8.5 Months</Typography>
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2" color="text.secondary">R&D Spend vs Budget</Typography>
                                <Typography variant="h4" color="success.main">92%</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">New Product Vitality Index</Typography>
                                <Typography variant="h4">25%</Typography>
                                <Typography variant="caption">% Revenue from products launched in last 3 years</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NPDAnalytics;
