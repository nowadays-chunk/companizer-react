import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Grid, TextField, LinearProgress, Snackbar, Alert } from '@mui/material';
import { Calculate, Refresh } from '@mui/icons-material';

const VarianceCalculationEngine = () => {
    const [calculating, setCalculating] = useState(false);
    const [progress, setProgress] = useState(100);
    const [lastRun, setLastRun] = useState('2024-07-31 23:59');

    const handleRecalculate = () => {
        setCalculating(true);
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setCalculating(false);
                    setLastRun(new Date().toLocaleString());
                    return 100;
                }
                return prev + 10;
            });
        }, 300);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Calculate color="primary" /> Variance Calculation Engine
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Refresh />}
                    onClick={handleRecalculate}
                    disabled={calculating}
                >
                    {calculating ? 'Processing...' : 'Recalculate All'}
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Calculation Status</Typography>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                {calculating ? 'Processing Period: August 2024' : 'Processing Period: July 2024'}
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                value={progress}
                                color={calculating ? "primary" : "success"}
                                sx={{ mt: 1, height: 10, borderRadius: 5 }}
                            />
                            <Typography variant="caption" align="right" display="block">
                                {calculating ? `Running ${progress}%` : 'Completed 100%'}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <TextField label="Last Run" value={lastRun} InputProps={{ readOnly: true }} fullWidth />
                            <TextField label="Processing Time" defaultValue="0.4s" InputProps={{ readOnly: true }} fullWidth />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, bgcolor: '#e3f2fd' }}>
                        <Typography variant="subtitle1" color="primary">Summary</Typography>
                        <Typography variant="h4">$12,450</Typography>
                        <Typography variant="body2">Net Unfavorable Variance</Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Snackbar open={!calculating && progress === 100 && lastRun !== '2024-07-31 23:59'} autoHideDuration={3000}>
                <Alert severity="success">Variances recalculated successfully!</Alert>
            </Snackbar>
        </Box>
    );
};

export default VarianceCalculationEngine;
