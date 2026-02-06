
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid
} from '@mui/material';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts';
import { Insights } from '@mui/icons-material';

const data = [
    { name: 'Jan', ecos: 4 },
    { name: 'Feb', ecos: 7 },
    { name: 'Mar', ecos: 3 },
    { name: 'Apr', ecos: 5 },
    { name: 'May', ecos: 8 },
];

const UpdateAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Insights color="primary" /> Change Analytics
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Change Volume (ECOs per Month)</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="ecos" fill="#8884d8" name="ECOs" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Metrics</Typography>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2" color="text.secondary">Avg. Approval Time</Typography>
                                <Typography variant="h4">4.2 Days</Typography>
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2" color="text.secondary">Cost of Change (YTD)</Typography>
                                <Typography variant="h4">$45,200</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UpdateAnalytics;
