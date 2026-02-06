
import React from 'react';
import { Box, Typography, Card, CardContent, Grid, CircularProgress } from '@mui/material';
import { Assessment } from '@mui/icons-material';

const ReorderAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Assessment color="primary" /> Performance KPIs
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                            <CircularProgress variant="determinate" value={98} size={80} color="success" />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="caption" component="div" color="text.secondary">
                                    98%
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant="subtitle1" sx={{ mt: 2 }}>Service Level</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Stockout Frequency</Typography>
                            <Typography variant="h4">0.5%</Typography>
                            <Typography variant="caption" color="success.main">↓ 0.2% vs last month</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Inventory Turnover</Typography>
                            <Typography variant="h4">8.5x</Typography>
                            <Typography variant="caption">Annualized</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">ROP Accuracy</Typography>
                            <Typography variant="h4">94%</Typography>
                            <Typography variant="caption">Forecast vs Actual Trigger</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReorderAnalytics;
