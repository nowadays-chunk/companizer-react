import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 30 },
    { name: 'Mar', value: 20 },
    { name: 'Apr', value: 27 },
    { name: 'May', value: 18 },
    { name: 'Jun', value: 23 },
    { name: 'Jul', value: 34 },
];

const FixedIncomeDashboard = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Fixed Income Portfolio Dashboard</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: 'primary.dark', color: 'white' }}>
                        <CardContent>
                            <Typography variant="overline" sx={{ opacity: 0.8 }}>Total Accrued Interest (YTD)</Typography>
                            <Typography variant="h4">$ 142,500</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: 'secondary.dark', color: 'white' }}>
                        <CardContent>
                            <Typography variant="overline" sx={{ opacity: 0.8 }}>Weighted Avg Yield</Typography>
                            <Typography variant="h4">4.85%</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="overline" color="textSecondary">Maturity Wall (Next 12M)</Typography>
                            <Typography variant="h4" color="error.main">$ 1.2M</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 3, height: 350 }}>
                        <Typography variant="h6" gutterBottom>Portfolio Value Trend</Typography>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FixedIncomeDashboard;
