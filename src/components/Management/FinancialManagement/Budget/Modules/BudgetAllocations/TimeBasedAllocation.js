import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Stepper, Step, StepLabel, Switch, FormControlLabel, Grid } from '@mui/material';
import { Timeline } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TimeBasedAllocation = () => {
    const [rolling, setRolling] = useState(true);
    const [frontLoad, setFrontLoad] = useState(false);
    const [data, setData] = useState([
        { name: 'Q1', amount: 4000 },
        { name: 'Q2', amount: 3000 },
        { name: 'Q3', amount: 2000 },
        { name: 'Q4', amount: 2780 },
    ]);

    useEffect(() => {
        if (frontLoad) {
            setData([
                { name: 'Q1', amount: 6000 },
                { name: 'Q2', amount: 3000 },
                { name: 'Q3', amount: 1500 },
                { name: 'Q4', amount: 1280 },
            ]);
        } else {
            setData([
                { name: 'Q1', amount: 4000 },
                { name: 'Q2', amount: 3000 },
                { name: 'Q3', amount: 2000 },
                { name: 'Q4', amount: 2780 },
            ]);
        }
    }, [frontLoad]);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Timeline color="primary" /> Time-Based Allocation
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Distribution Pattern</Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} sx={{ height: 300 }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={data}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="amount" fill="#8884d8" animationDuration={500} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <FormControlLabel
                                            control={<Switch checked={rolling} onChange={(e) => setRolling(e.target.checked)} />}
                                            label="Allow Rolling Budgets"
                                        />
                                        <FormControlLabel
                                            control={<Switch checked={frontLoad} onChange={(e) => setFrontLoad(e.target.checked)} />}
                                            label="Front-Load Allocation"
                                        />
                                        <FormControlLabel control={<Switch disabled />} label="Even Spread (Monthly)" />
                                        <Stepper activeStep={frontLoad ? 2 : 1} orientation="vertical">
                                            <Step><StepLabel>Annual Definition</StepLabel></Step>
                                            <Step><StepLabel>Quarterly Breakdown</StepLabel></Step>
                                            <Step><StepLabel>Monthly Adjustments</StepLabel></Step>
                                        </Stepper>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TimeBasedAllocation;
