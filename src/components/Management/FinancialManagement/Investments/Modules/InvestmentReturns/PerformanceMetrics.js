import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Divider, TextField, MenuItem, Chip, Stack, Alert } from '@mui/material';
import { TrendingUp, TrendingDown, Info } from '@mui/icons-material';

const PerformanceMetrics = () => {
    const [benchmark, setBenchmark] = useState('spy');
    const [period, setPeriod] = useState('ytd');

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Performance Metrics & KPIs</Typography>
                <Stack direction="row" spacing={2}>
                    <TextField
                        select
                        size="small"
                        label="Benchmark"
                        value={benchmark}
                        onChange={(e) => setBenchmark(e.target.value)}
                        sx={{ minWidth: 150 }}
                    >
                        <MenuItem value="spy">S&P 500 (SPY)</MenuItem>
                        <MenuItem value="agg">Bloomberg Agg (AGG)</MenuItem>
                        <MenuItem value="msci">MSCI World</MenuItem>
                    </TextField>
                    <TextField
                        select
                        size="small"
                        label="Period"
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        sx={{ minWidth: 120 }}
                    >
                        <MenuItem value="mtd">MTD</MenuItem>
                        <MenuItem value="qtd">QTD</MenuItem>
                        <MenuItem value="ytd">YTD</MenuItem>
                        <MenuItem value="1y">1 Year</MenuItem>
                    </TextField>
                </Stack>
            </Box>

            <Alert severity="info" sx={{ mb: 3 }}>
                Comparing portfolio performance against <strong>{benchmark.toUpperCase()}</strong> for <strong>{period.toUpperCase()}</strong> period
            </Alert>

            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Card sx={{ height: '100%', borderLeft: 5, borderColor: 'primary.main' }}>
                        <CardContent>
                            <Typography variant="overline" color="textSecondary">Sharpe Ratio</Typography>
                            <Typography variant="h3">1.8</Typography>
                            <Typography variant="caption">Risk-Adjusted Return (Good)</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ height: '100%', borderLeft: 5, borderColor: 'secondary.main' }}>
                        <CardContent>
                            <Typography variant="overline" color="textSecondary">Information Ratio</Typography>
                            <Typography variant="h3">0.6</Typography>
                            <Typography variant="caption">Active Return / Tracking Error</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ height: '100%', borderLeft: 5, borderColor: 'error.main' }}>
                        <CardContent>
                            <Typography variant="overline" color="textSecondary">Max Drawdown</Typography>
                            <Typography variant="h3">-4.2%</Typography>
                            <Typography variant="caption">12-Month Low</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ height: '100%', borderLeft: 5, borderColor: 'success.main' }}>
                        <CardContent>
                            <Typography variant="overline" color="textSecondary">Alpha (vs SPY)</Typography>
                            <Typography variant="h3">+1.2%</Typography>
                            <Typography variant="caption">Excess Return</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ p: 3, mt: 3 }}>
                <Typography variant="h6">Metric Definitions</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2">TWR (Time-Weighted Return)</Typography>
                        <Typography variant="body2" color="textSecondary">Eliminates the effect of cash flows. Best for manager performance.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2">IRR (Money-Weighted Return)</Typography>
                        <Typography variant="body2" color="textSecondary">Includes effect of cash flow timing. Best for actual investor experience.</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default PerformanceMetrics;
