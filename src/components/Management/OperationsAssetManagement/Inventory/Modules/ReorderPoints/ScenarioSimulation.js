
import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Slider } from '@mui/material';
import { Science } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Current', stockoutRisk: 5, inventoryCost: 100 },
    { name: 'Simulated', stockoutRisk: 1, inventoryCost: 125 },
];

const ScenarioSimulation = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Science color="primary" /> "What-If" Scenario Simulation
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Impact on Risk vs Cost</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={data}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="stockoutRisk" fill="#ff8042" name="Stockout Risk %" />
                                    <Bar dataKey="inventoryCost" fill="#8884d8" name="Inv. Cost Index" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Simulation Controls</Typography>
                            <Typography gutterBottom>Service Level Target</Typography>
                            <Slider defaultValue={95} valueLabelDisplay="auto" step={1} min={80} max={99.9} />
                            <Typography gutterBottom sx={{ mt: 3 }}>Demand Spike Multiplier</Typography>
                            <Slider defaultValue={1.0} valueLabelDisplay="auto" step={0.1} min={0.5} max={2.0} />
                            <Typography gutterBottom sx={{ mt: 3 }}>Supplier Delay (Days)</Typography>
                            <Slider defaultValue={0} valueLabelDisplay="auto" step={1} min={0} max={30} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ScenarioSimulation;
