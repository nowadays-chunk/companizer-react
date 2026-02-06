import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Analytics } from '@mui/icons-material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const allData = [
    { name: 'Jan', uv: 4000, pv: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398 },
    { name: 'Mar', uv: 2000, pv: 9800 },
    { name: 'Apr', uv: 2780, pv: 3908 },
    { name: 'May', uv: 1890, pv: 4800 },
    { name: 'Jun', uv: 2390, pv: 3800 },
    { name: 'Jul', uv: 3490, pv: 4300 },
    { name: 'Aug', uv: 3000, pv: 3400 },
    { name: 'Sep', uv: 2000, pv: 3100 },
];

const BudgetReportingAnalytics = () => {
    const [period, setPeriod] = useState('Q1');

    const getData = () => {
        if (period === 'Q1') return allData.slice(0, 3);
        if (period === 'Q2') return allData.slice(3, 6);
        if (period === 'Q3') return allData.slice(6, 9);
        return allData; // YTD
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Analytics color="primary" /> Reporting & Analytics
                </Typography>
                <ToggleButtonGroup
                    value={period}
                    exclusive
                    onChange={(e, newPeriod) => { if (newPeriod) setPeriod(newPeriod); }}
                    size="small"
                >
                    <ToggleButton value="Q1">Q1</ToggleButton>
                    <ToggleButton value="Q2">Q2</ToggleButton>
                    <ToggleButton value="Q3">Q3</ToggleButton>
                    <ToggleButton value="YTD">YTD</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Burn Rate Analysis ({period})</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={getData()}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" animationDuration={500} />
                                    <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" animationDuration={500} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Variance KPI</Typography>
                            <Typography variant="h3" color="error">-12.5%</Typography>
                            <Typography variant="body2" color="text.secondary">Unfavorable variance YTD</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Remaining Budget</Typography>
                            <Typography variant="h3" color="success">$1.2M</Typography>
                            <Typography variant="body2" color="text.secondary">Available for H2</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Forecast Accuracy</Typography>
                            <Typography variant="h3" color="primary">94%</Typography>
                            <Typography variant="body2" color="text.secondary">Last 6 months</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BudgetReportingAnalytics;
