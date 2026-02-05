import React from 'react';
import { Box, Typography, Paper, Grid, Alert, LinearProgress, Tooltip } from '@mui/material';

const ForecastingLiquidityPlanning = () => {
    const forecastData = [
        { month: 'Nov', debt: 5, cash: 12 },
        { month: 'Dec', debt: 8, cash: 10 },
        { month: 'Jan', debt: 15, cash: 9 }, // Gap
        { month: 'Feb', debt: 4, cash: 11 },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Forecasting & Liquidity Planning</Typography>
            <Alert severity="warning" sx={{ mb: 3 }}>Liquidity Gap detected in January due to Bullet Repayment ($15M).</Alert>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Cash Outflow Forecast vs Available Liquidity</Typography>

                <Box sx={{ mt: 4, height: 250, display: 'flex', alignItems: 'flex-end', gap: 4, px: 2 }}>
                    {forecastData.map((data) => (
                        <Box key={data.month} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-end', height: '100%', gap: 1 }}>
                                {/* Debt Bar */}
                                <Tooltip title={`Debt Service: $${data.debt}M`}>
                                    <Box sx={{
                                        flex: 1,
                                        bgcolor: '#ef5350',
                                        height: `${data.debt * 5}%`, // Scale scale
                                        transition: 'height 0.5s',
                                        borderRadius: '4px 4px 0 0'
                                    }} />
                                </Tooltip>
                                {/* Cash Bar */}
                                <Tooltip title={`Projected Cash: $${data.cash}M`}>
                                    <Box sx={{
                                        flex: 1,
                                        bgcolor: '#42a5f5',
                                        height: `${data.cash * 5}%`,
                                        transition: 'height 0.5s',
                                        borderRadius: '4px 4px 0 0'
                                    }} />
                                </Tooltip>
                            </Box>
                            <Typography variant="caption" sx={{ mt: 1 }}>{data.month}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}><Box sx={{ width: 12, height: 12, bgcolor: '#ef5350', mr: 1 }} /><Typography variant="caption">Debt Service</Typography></Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}><Box sx={{ width: 12, height: 12, bgcolor: '#42a5f5', mr: 1 }} /><Typography variant="caption">Available Liquidity</Typography></Box>
                </Box>
            </Paper>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, bgcolor: '#ffebee' }}>
                        <Typography variant="subtitle2" color="error">Gap Analysis: January</Typography>
                        <Typography variant="body2">
                            Projected Shortfall: $6.0M. Recommendation: Draw on Revolver B (Limit: $50M) by Dec 28.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ForecastingLiquidityPlanning;
