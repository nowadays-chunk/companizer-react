import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Speed } from '@mui/icons-material';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const dataMonth = [
    { name: 'Headcount', x: 100, fill: '#8884d8' },
    { name: 'Machine Hours', x: 80, fill: '#83a6ed' },
    { name: 'Energy Usage', x: 45, fill: '#8dd1e1' },
    { name: 'Logistics SLA', x: 92, fill: '#82ca9d' },
];

const dataQuarter = [
    { name: 'Headcount', x: 98, fill: '#8884d8' },
    { name: 'Machine Hours', x: 85, fill: '#83a6ed' },
    { name: 'Energy Usage', x: 60, fill: '#8dd1e1' },
    { name: 'Logistics SLA', x: 95, fill: '#82ca9d' },
];

const OperationalMetricsVariance = () => {
    const [period, setPeriod] = useState('month');
    const [data, setData] = useState(dataMonth);

    const handlePeriodChange = (event, newPeriod) => {
        if (newPeriod !== null) {
            setPeriod(newPeriod);
            setData(newPeriod === 'month' ? dataMonth : dataQuarter);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Speed color="primary" /> Operational Metrics Variance
                </Typography>
                <ToggleButtonGroup value={period} exclusive onChange={handlePeriodChange} size="small">
                    <ToggleButton value="month">Current Month</ToggleButton>
                    <ToggleButton value="quarter">Q3 YTD</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: 400 }}>
                        <Typography variant="h6" sx={{ p: 2 }}>Non-Financial KPIs (% of Goal)</Typography>
                        <ResponsiveContainer width="100%" height="80%">
                            <RadialBarChart innerRadius="10%" outerRadius="80%" barSize={20} data={data}>
                                <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="x" />
                                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{ top: '50%', right: 0, transform: 'translate(0, -50%)', lineHeight: '24px' }} />
                                <Tooltip />
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </Card>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography color="text.secondary">Headcount</Typography>
                            <Typography variant="h4">{period === 'month' ? '450' : '448'}</Typography>
                            <Typography variant="caption" color="text.secondary">
                                Budget: {period === 'month' ? '440 (+10)' : '445 (+3)'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography color="text.secondary">Energy Efficiency</Typography>
                            <Typography variant="h4">{period === 'month' ? '-5.2%' : '-3.8%'}</Typography>
                            <Typography variant="caption" color="error">Below Target</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OperationalMetricsVariance;
