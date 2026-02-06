import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
    Grid,
    Paper,
    Divider
} from '@mui/material';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const dataBase = [
    { month: 'Jan', inflow: 4000, outflow: 2400 },
    { month: 'Feb', inflow: 3000, outflow: 1398 },
    { month: 'Mar', inflow: 2000, outflow: 9800 },
    { month: 'Apr', inflow: 2780, outflow: 3908 },
    { month: 'May', inflow: 1890, outflow: 4800 },
    { month: 'Jun', inflow: 2390, outflow: 3800 },
    { month: 'Jul', inflow: 3490, outflow: 4300 },
];

const dataBest = [
    { month: 'Jan', inflow: 5000, outflow: 2000 },
    { month: 'Feb', inflow: 4000, outflow: 1200 },
    { month: 'Mar', inflow: 3000, outflow: 8000 },
    { month: 'Apr', inflow: 3500, outflow: 3000 },
    { month: 'May', inflow: 2500, outflow: 4000 },
    { month: 'Jun', inflow: 3000, outflow: 3200 },
    { month: 'Jul', inflow: 4500, outflow: 3800 },
];

const dataWorst = [
    { month: 'Jan', inflow: 3000, outflow: 2800 },
    { month: 'Feb', inflow: 2000, outflow: 1600 },
    { month: 'Mar', inflow: 1500, outflow: 10500 },
    { month: 'Apr', inflow: 2000, outflow: 4500 },
    { month: 'May', inflow: 1200, outflow: 5200 },
    { month: 'Jun', inflow: 1800, outflow: 4200 },
    { month: 'Jul', inflow: 2500, outflow: 4800 },
];

const CashFlowVisualizer = () => {
    const [scenario, setScenario] = useState('base');

    const handleScenarioChange = (event, newScenario) => {
        if (newScenario !== null) {
            setScenario(newScenario);
        }
    };

    const getData = () => {
        switch (scenario) {
            case 'best': return dataBest;
            case 'worst': return dataWorst;
            case 'base':
            default: return dataBase;
        }
    };

    const getNetCashFlow = () => {
        const data = getData();
        return data.reduce((acc, curr) => acc + (curr.inflow - curr.outflow), 0);
    };

    const netCashFlow = getNetCashFlow();

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h5" gutterBottom component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <ShowChartIcon color="primary" /> Cash Flow Scenarios
                        </Typography>
                        <ToggleButtonGroup
                            value={scenario}
                            exclusive
                            onChange={handleScenarioChange}
                            aria-label="scenario"
                            size="small"
                            color="primary"
                        >
                            <ToggleButton value="base">Base Case</ToggleButton>
                            <ToggleButton value="best">Best Case</ToggleButton>
                            <ToggleButton value="worst">Worst Case</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{ p: 2, height: 400 }}>
                        <Typography variant="subtitle1" gutterBottom>
                            Projected Inflow vs Outflow
                        </Typography>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={getData()}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="inflow" stackId="1" stroke="#8884d8" fill="#8884d8" name="Inflow" />
                                <Area type="monotone" dataKey="outflow" stackId="2" stroke="#82ca9d" fill="#82ca9d" name="Outflow" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                Net Cash Flow (6 Months)
                            </Typography>
                            <Typography variant="h4" component="div" color={netCashFlow >= 0 ? 'success.main' : 'error.main'}>
                                ${netCashFlow.toLocaleString()}
                            </Typography>
                            <Box mt={2}>
                                <Typography variant="body2" color="textSecondary">
                                    Scenario Impact Analysis
                                </Typography>
                                <Divider sx={{ my: 1 }} />
                                <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <TrendingUpIcon color="success" />
                                    <Typography variant="body2">Peak Inflow: {Math.max(...getData().map(d => d.inflow)).toLocaleString()}</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <TrendingDownIcon color="error" />
                                    <Typography variant="body2">Peak Outflow: {Math.max(...getData().map(d => d.outflow)).toLocaleString()}</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CashFlowVisualizer;
