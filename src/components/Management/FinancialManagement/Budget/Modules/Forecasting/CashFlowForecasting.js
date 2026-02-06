import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { AccountBalance } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
    { name: 'Jul', netFlow: 2000 },
    { name: 'Aug', netFlow: -1500 },
    { name: 'Sep', netFlow: 3500 },
    { name: 'Oct', netFlow: 500 },
    { name: 'Nov', netFlow: -1000 },
    { name: 'Dec', netFlow: 4000 },
];

const CashFlowForecasting = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <AccountBalance color="primary" /> Cash Flow Forecasting
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ height: 400, p: 2 }}>
                        <Typography variant="h6" gutterBottom>Net Cash Flow Projection (Direct Method)</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <ReferenceLine y={0} stroke="#000" />
                                <Bar dataKey="netFlow" fill="#8884d8" name="Net Cash Flow" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Liquidity Alert</Typography>
                            <Typography variant="body2" color="error" paragraph sx={{ mt: 1 }}>
                                Warning: Projected cash dip in August due to tax payment and inventory build.
                            </Typography>
                            <Typography variant="caption" component="div">
                                Recommended: Draw $500k from credit line in late July.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CashFlowForecasting;
