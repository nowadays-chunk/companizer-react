import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, FormGroup, FormControlLabel, Switch, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { TrackChanges } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Q1', forecast: 4000, actual: 4100, variance: 100, accuracy: '97.6%' },
    { name: 'Q2', forecast: 3000, actual: 2950, variance: -50, accuracy: '98.3%' },
    { name: 'Q3', forecast: 2000, actual: 2300, variance: 300, accuracy: '87.0%' },
    { name: 'Q4', forecast: 2780, actual: 2600, variance: -180, accuracy: '93.5%' },
];

const ForecastAccuracyTracking = () => {
    const [showForecast, setShowForecast] = useState(true);
    const [showActual, setShowActual] = useState(true);

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TrackChanges color="primary" /> Forecast Accuracy Tracking
                </Typography>
                <FormGroup row>
                    <FormControlLabel control={<Switch checked={showForecast} onChange={() => setShowForecast(!showForecast)} />} label="Show Forecast" />
                    <FormControlLabel control={<Switch checked={showActual} onChange={() => setShowActual(!showActual)} />} label="Show Actuals" />
                </FormGroup>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ height: 400, p: 2 }}>
                        <Typography variant="h6" gutterBottom>Forecast vs Actuals Breakdown</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {showForecast && <Bar dataKey="forecast" fill="#8884d8" name="Forecast" />}
                                {showActual && <Bar dataKey="actual" fill="#82ca9d" name="Actuals" />}
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Accuracy Scorecard</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                                <Typography variant="h2" color="primary">94.1%</Typography>
                            </Box>
                            <Typography variant="caption" display="block" align="center" paragraph>
                                Weighted MAPE (Mean Absolute Percentage Error)
                            </Typography>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Period</TableCell>
                                        <TableCell align="right">Accuracy</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell align="right">{row.accuracy}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ForecastAccuracyTracking;
