import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Paper, Slider, TextField, CircularProgress } from '@mui/material';
import { Psychology, AutoGraph } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PlanningForecastingIntegration = () => {
    const [running, setRunning] = useState(false);
    const [multiplier, setMultiplier] = useState(1.1);
    const [data, setData] = useState([
        { name: '2022', actual: 4000, forecast: 4100 },
        { name: '2023', actual: 3000, forecast: 3200 },
        { name: '2024', actual: 2000, forecast: 2400 },
        { name: '2025', actual: 2780, forecast: 2900 },
        { name: '2026', actual: 1890, forecast: 2500 },
    ]);

    const runScenario = () => {
        setRunning(true);
        setTimeout(() => {
            const newData = data.map(d => ({
                ...d,
                forecast: d.forecast * multiplier
            }));
            setData(newData);
            setRunning(false);
        }, 1000);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Psychology color="primary" /> Planning & Forecasting Integration
                </Typography>
                <Button
                    variant="contained"
                    startIcon={running ? <CircularProgress size={20} color="inherit" /> : <AutoGraph />}
                    onClick={runScenario}
                    disabled={running}
                >
                    {running ? 'Simulating...' : 'Run Scenario'}
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom>Projected Growth vs Actuals</Typography>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="actual" stroke="#8884d8" animationDuration={500} />
                                <Line type="monotone" dataKey="forecast" stroke="#82ca9d" strokeDasharray="5 5" animationDuration={500} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>What-If Analysis</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
                            <Box>
                                <Typography gutterBottom>Revenue Growth Multiplier (x{multiplier})</Typography>
                                <Slider
                                    value={multiplier}
                                    onChange={(e, v) => setMultiplier(v)}
                                    min={0.5}
                                    max={2.0}
                                    step={0.1}
                                    valueLabelDisplay="auto"
                                />
                            </Box>
                            <Box>
                                <Typography gutterBottom>OpEx Reduction Target (%)</Typography>
                                <Slider defaultValue={5} min={0} max={20} step={1} valueLabelDisplay="auto" />
                            </Box>
                            <TextField label="Scenario Name" defaultValue="Optimistic Q3" fullWidth size="small" />
                            <Button variant="outlined" fullWidth>Save Forecast Version</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PlanningForecastingIntegration;
