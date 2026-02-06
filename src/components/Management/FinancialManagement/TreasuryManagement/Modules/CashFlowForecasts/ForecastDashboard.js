import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Stack,
    Chip,
    Button
} from '@mui/material';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend
} from 'recharts';
import DownloadIcon from '@mui/icons-material/Download';
import RefreshIcon from '@mui/icons-material/Refresh';

const data = [
    { month: 'Jan', baseline: 4000, actual: 2400 },
    { month: 'Feb', baseline: 3000, actual: 1398 },
    { month: 'Mar', baseline: 2000, actual: 9800 },
    { month: 'Apr', baseline: 2780, actual: 3908 },
    { month: 'May', baseline: 1890, actual: 4800 },
    { month: 'Jun', baseline: 2390, actual: 3800 },
    { month: 'Jul', baseline: 3490, actual: 4300 },
];

const liquidityData = [
    { name: 'Opening Balance', value: 150000 },
    { name: 'Net Cash Flow', value: 25000 },
    { name: 'Closing Balance', value: 175000 },
];

const ForecastDashboard = () => {
    const [version, setVersion] = useState('v1');
    const [horizon, setHorizon] = useState('3m');

    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h5">Cash Flow Forecast Dashboard</Typography>
                <Stack direction="row" spacing={2}>
                    <Button startIcon={<RefreshIcon />} variant="outlined">Refresh Data</Button>
                    <Button startIcon={<DownloadIcon />} variant="contained">Export Report</Button>
                </Stack>
            </Box>

            <Grid container spacing={3} mb={3}>
                <Grid item xs={12} md={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel>Forecast Version</InputLabel>
                        <Select value={version} label="Forecast Version" onChange={(e) => setVersion(e.target.value)}>
                            <MenuItem value="v1">V1 - Baseline (Approved)</MenuItem>
                            <MenuItem value="v2">V2 - Optimistic</MenuItem>
                            <MenuItem value="v3">V3 - Stress Test</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel>Time Horizon</InputLabel>
                        <Select value={horizon} label="Time Horizon" onChange={(e) => setHorizon(e.target.value)}>
                            <MenuItem value="13w">13-Week Rolling</MenuItem>
                            <MenuItem value="3m">3 Months</MenuItem>
                            <MenuItem value="12m">12 Months (Annual)</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" spacing={1} alignItems="center" height="100%">
                        <Typography variant="body2" color="textSecondary">Currency:</Typography>
                        <Chip label="USD (Reporting)" color="primary" variant="outlined" />
                        <Chip label="EUR" variant="outlined" />
                        <Chip label="GBP" variant="outlined" />
                    </Stack>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card elevation={3} sx={{ height: 400 }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Typography variant="h6" gutterBottom>Net Cash Flow Position</Typography>
                            <ResponsiveContainer width="100%" height="90%">
                                <AreaChart
                                    data={data}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Area type="monotone" dataKey="baseline" stackId="1" stroke="#8884d8" fill="#8884d8" name="Forecast" />
                                    <Area type="monotone" dataKey="actual" stackId="2" stroke="#82ca9d" fill="#82ca9d" name="Actuals" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card elevation={3} sx={{ height: 400 }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Typography variant="h6" gutterBottom>Liquidity Summary (Current Period)</Typography>
                            <ResponsiveContainer width="100%" height="90%">
                                <BarChart
                                    data={liquidityData}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#ffc658" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ForecastDashboard;
