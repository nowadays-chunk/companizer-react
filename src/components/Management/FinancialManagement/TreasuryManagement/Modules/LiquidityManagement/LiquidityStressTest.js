import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Alert
} from '@mui/material';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine
} from 'recharts';

const baseData = [
    { day: 'D1', liquidity: 500000 },
    { day: 'D2', liquidity: 480000 },
    { day: 'D3', liquidity: 520000 },
    { day: 'D4', liquidity: 450000 },
    { day: 'D5', liquidity: 300000 },
];

const stressData = [
    { day: 'D1', liquidity: 500000 },
    { day: 'D2', liquidity: 380000 }, // Shock
    { day: 'D3', liquidity: 220000 },
    { day: 'D4', liquidity: 150000 }, // Breach?
    { day: 'D5', liquidity: 90000 },
];

const LiquidityStressTest = () => {
    const [scenario, setScenario] = useState('base');

    const data = scenario === 'base' ? baseData : stressData;

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Liquidity Stress Testing</Typography>

            <Grid container spacing={3} mb={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel>Scenario Selection</InputLabel>
                                <Select value={scenario} label="Scenario Selection" onChange={(e) => setScenario(e.target.value)}>
                                    <MenuItem value="base">Baseline Forecast</MenuItem>
                                    <MenuItem value="delayed_ar">Severe: 30-Day AR Delay</MenuItem>
                                    <MenuItem value="fx_shock">Severe: 20% FX Devaluation</MenuItem>
                                    <MenuItem value="bank_freeze">Crisis: Secondary Bank Freeze</MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant="contained" color="error" fullWidth>Run Simulation</Button>
                        </CardContent>
                    </Card>

                    {scenario !== 'base' && (
                        <Alert severity="error" variant="outlined">
                            <strong>Warning:</strong> Minimum liquidity threshold breached on Day 4 under this scenario.
                        </Alert>
                    )}
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card elevation={3} sx={{ height: 400 }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Typography variant="h6" gutterBottom>Survival Horizon Analysis</Typography>
                            <ResponsiveContainer width="100%" height="90%">
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="day" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <ReferenceLine y={100000} label="Min Threshold" stroke="red" strokeDasharray="3 3" />
                                    <Line type="monotone" dataKey="liquidity" stroke={scenario === 'base' ? "#82ca9d" : "#ff0000"} strokeWidth={2} name="Available Liquidity" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LiquidityStressTest;
