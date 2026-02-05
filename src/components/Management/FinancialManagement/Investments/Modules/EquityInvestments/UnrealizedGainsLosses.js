import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { ShowChart } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Q1', Gain: 4000, Loss: 2400 },
    { name: 'Q2', Gain: 3000, Loss: 1398 },
    { name: 'Q3', Gain: 2000, Loss: 9800 },
    { name: 'Q4', Gain: 2780, Loss: 3908 },
];

const UnrealizedGainsLosses = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Unrealized Gains & Losses</Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#e8f5e9' }}>
                        <CardContent>
                            <Typography color="textSecondary">Total Unrealized Gain (YTD)</Typography>
                            <Typography variant="h4" color="success.main">+ $ 125,000</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#ffebee' }}>
                        <CardContent>
                            <Typography color="textSecondary">Impact to P&L (FVTPL)</Typography>
                            <Typography variant="h4" color="error.main">- $ 15,000</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#e3f2fd' }}>
                        <CardContent>
                            <Typography color="textSecondary">Reserve in OCI (FVOCI)</Typography>
                            <Typography variant="h4" color="primary.main">$ 140,000</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ p: 3, height: 400 }}>
                <Typography variant="h6" gutterBottom>Valuation Movement Tracking</Typography>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Gain" fill="#82ca9d" />
                        <Bar dataKey="Loss" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </Paper>
        </Box>
    );
};

export default UnrealizedGainsLosses;
