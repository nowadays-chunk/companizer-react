
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
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from 'recharts';
import { Insights } from '@mui/icons-material';

const data = [
    { name: '13 Inch', value: 400 },
    { name: '15 Inch', value: 300 },
    { name: '17 Inch', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const AttributeAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Insights color="primary" /> Attribute Usage Analytics
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Adoption Rate</Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="h3" color="primary">85%</Typography>
                                <Typography variant="body2" color="text.secondary">of applicable products have this attribute populated.</Typography>
                            </Box>
                            <Box sx={{ mt: 4 }}>
                                <Typography variant="subtitle2" gutterBottom>Data Quality Score</Typography>
                                <LinearProgress variant="determinate" value={92} color="success" sx={{ height: 10, borderRadius: 5 }} />
                                <Typography variant="caption" sx={{ mt: 0.5, display: 'block', textAlign: 'right' }}>92/100</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Card sx={{ height: 400 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Sales by Attribute Value</Typography>
                            <ResponsiveContainer width="100%" height={320}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={100}
                                        fill="#8884d8"
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
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AttributeAnalytics;
