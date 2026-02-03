
import React from 'react';
import { Box, Typography, Grid, Paper, Tabs, Tab } from '@mui/material';

const AgingAnalysis = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Deep Dive Analysis</Typography>

            <Tabs value={value} onChange={handleChange} sx={{ mb: 2 }}>
                <Tab label="Entity & Region" />
                <Tab label="Customer Segments" />
                <Tab label="Currency & FX" />
            </Tabs>

            {/* 3. Customer & Group Aging / 8. Segmentation */}
            {value === 0 && (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, height: 400 }}>
                            <Typography variant="h6">Group Consolidated Aging</Typography>
                            <Typography color="textSecondary">Heatmap of Subsidiary vs Region Performance would go here.</Typography>
                            {/* Placeholder for complex pivot table or map */}
                        </Paper>
                    </Grid>
                </Grid>
            )}

            {value === 1 && (
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper sx={{ p: 2, height: 300 }}>
                            <Typography variant="h6">By Industry</Typography>
                            {/* Mock Data List */}
                            <Box sx={{ mt: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
                                    <Typography>Retail</Typography> <Typography>15% Overdue</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
                                    <Typography>Manufacturing</Typography> <Typography>45% Overdue</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
                                    <Typography>SaaS</Typography> <Typography>5% Overdue</Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper sx={{ p: 2, height: 300 }}>
                            <Typography variant="h6">By Sales Representative</Typography>
                            <Typography color="textSecondary">Ranking of sales reps by portfolio DSO.</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            )}

            {/* 7. Multi-Currency & FX Aging */}
            {value === 2 && (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6">Currency Exposure</Typography>
                            <Grid container sx={{ mt: 2 }}>
                                <Grid item xs={3} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h4">USD</Typography>
                                    <Typography color="textSecondary">65% of Total</Typography>
                                </Grid>
                                <Grid item xs={3} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h4">EUR</Typography>
                                    <Typography color="textSecondary">20% of Total</Typography>
                                    <Typography color="error" variant="caption">FX Risk - High</Typography>
                                </Grid>
                                <Grid item xs={3} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h4">GBP</Typography>
                                    <Typography color="textSecondary">10% of Total</Typography>
                                </Grid>
                                <Grid item xs={3} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h4">JPY</Typography>
                                    <Typography color="textSecondary">5% of Total</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default AgingAnalysis;
