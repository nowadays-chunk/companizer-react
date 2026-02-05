import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Divider, ToggleButton, ToggleButtonGroup, Chip, Stack } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';

const fxData = [
    { name: 'EUR', gain: 1500, exposure: 50000 },
    { name: 'GBP', gain: -800, exposure: 25000 },
    { name: 'JPY', gain: 200, exposure: 10000 },
];

const FXReturnImpact = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('all');
    const [viewMode, setViewMode] = useState('gain_loss');

    const getBarColor = (value) => value >= 0 ? '#4caf50' : '#f44336';

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">FX & Multi-Currency Returns</Typography>
                <Stack direction="row" spacing={2}>
                    <ToggleButtonGroup
                        value={selectedCurrency}
                        exclusive
                        onChange={(e, v) => v && setSelectedCurrency(v)}
                        size="small"
                    >
                        <ToggleButton value="all">All Currencies</ToggleButton>
                        <ToggleButton value="eur">EUR Only</ToggleButton>
                        <ToggleButton value="gbp">GBP Only</ToggleButton>
                        <ToggleButton value="jpy">JPY Only</ToggleButton>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup
                        value={viewMode}
                        exclusive
                        onChange={(e, v) => v && setViewMode(v)}
                        size="small"
                    >
                        <ToggleButton value="gain_loss">Gain/Loss</ToggleButton>
                        <ToggleButton value="exposure">Exposure</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Box>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: 350 }}>
                        <Typography variant="h6">FX Gain/Loss by Currency</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <BarChart data={fxData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" />
                                <Tooltip />
                                <Bar dataKey="gain" fill="#8884d8" name="FX Impact (USD)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Currency Exposure Analysis</Typography>
                            <Box sx={{ my: 2 }}>
                                <Typography variant="subtitle2">EUR Assets</Typography>
                                <Typography variant="h4">€ 45,000</Typography>
                                <Typography variant="body2" color="success.main">Return (Local): +4.5%</Typography>
                                <Typography variant="body2" color="textSecondary">Return (USD): +5.2% (FX Tailwind)</Typography>
                                <Divider sx={{ my: 2 }} />

                                <Typography variant="subtitle2">GBP Assets</Typography>
                                <Typography variant="h4">£ 20,000</Typography>
                                <Typography variant="body2" color="success.main">Return (Local): +3.0%</Typography>
                                <Typography variant="body2" color="error.main">Return (USD): +2.1% (FX Headwind)</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FXReturnImpact;
