import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Slider, TextField, Chip } from '@mui/material';
import { Settings, TrendingUp, TrendingDown } from '@mui/icons-material';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/DriverBasedModeling';

const DriverBasedModeling = () => {
    const [drivers, setDrivers] = useState({
        headcount: { current: 450, growth: 5, impact: 0 },
        units: { current: 12000, growth: 10, impact: 0 },
        inflation: { current: 3.2, adj: 0, impact: 0 }
    });

    useEffect(() => {
        setDrivers(prev => ({
            ...prev,
            headcount: { ...prev.headcount, impact: Math.round(prev.headcount.current * (1 + prev.headcount.growth / 100)) },
            units: { ...prev.units, impact: Math.round(prev.units.current * (1 + prev.units.growth / 100)) },
            inflation: { ...prev.inflation, impact: (prev.inflation.current + prev.inflation.adj).toFixed(1) }
        }));
    }, [drivers.headcount.growth, drivers.units.growth, drivers.inflation.adj]);

    const handleChange = (driver, key, value) => {
        setDrivers(prev => ({
            ...prev,
            [driver]: { ...prev[driver], [key]: value }
        }));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Settings color="primary" /> Driver-Based Modeling
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="h6">Headcount</Typography>
                                <Chip label={`${drivers.headcount.impact} FTEs`} color="primary" icon={<TrendingUp />} />
                            </Box>
                            <Typography color="text.secondary" paragraph>Impacts: Salaries, Benefits, IT Costs</Typography>
                            <TextField label="Current Value" value={drivers.headcount.current} fullWidth sx={{ mb: 2 }} disabled />
                            <Typography gutterBottom>Growth Rate: {drivers.headcount.growth}%</Typography>
                            <Slider
                                value={drivers.headcount.growth}
                                onChange={(_, v) => handleChange('headcount', 'growth', v)}
                                min={-10} max={20}
                                valueLabelDisplay="auto"
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="h6">Units Sold</Typography>
                                <Chip label={`${drivers.units.impact} Units`} color="success" icon={<TrendingUp />} />
                            </Box>
                            <Typography color="text.secondary" paragraph>Impacts: Revenue, COGS, Shipping</Typography>
                            <TextField label="Current Value" value={drivers.units.current} fullWidth sx={{ mb: 2 }} disabled />
                            <Typography gutterBottom>Growth Rate: {drivers.units.growth}%</Typography>
                            <Slider
                                value={drivers.units.growth}
                                onChange={(_, v) => handleChange('units', 'growth', v)}
                                min={0} max={50}
                                color="secondary"
                                valueLabelDisplay="auto"
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="h6">Inflation</Typography>
                                <Chip label={`${drivers.inflation.impact}%`} color="warning" icon={<TrendingDown />} />
                            </Box>
                            <Typography color="text.secondary" paragraph>Impacts: OpEx, Material Costs</Typography>
                            <TextField label="Current Value" value={`${drivers.inflation.current}%`} fullWidth sx={{ mb: 2 }} disabled />
                            <Typography gutterBottom>Adjustment: +{drivers.inflation.adj}%</Typography>
                            <Slider
                                value={drivers.inflation.adj}
                                onChange={(_, v) => handleChange('inflation', 'adj', v)}
                                min={0} max={5}
                                step={0.1}
                                color="warning"
                                valueLabelDisplay="auto"
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DriverBasedModeling;
