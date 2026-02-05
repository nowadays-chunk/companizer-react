import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Checkbox, FormControlLabel, Button, Alert, Divider, LinearProgress, Card, CardContent, Stack, Chip } from '@mui/material';
import { LockClock, DoneAll, Warning, CheckCircle } from '@mui/icons-material';

const PeriodCloseReturns = () => {
    const [checklist, setChecklist] = useState({
        prices: false,
        fx: false,
        actions: false,
        calc: false,
        gl: false
    });

    const completedCount = Object.values(checklist).filter(Boolean).length;
    const totalCount = Object.keys(checklist).length;
    const progress = (completedCount / totalCount) * 100;

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Period-End Close: Returns & Valuation</Typography>
                <Button variant="contained" color="error" startIcon={<LockClock />}>Lock Period (June 2025)</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Close Checklist</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="1. Market Prices Updated & Verified" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="2. FX Rates Imported & Revaluation Run" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="3. Corporate Actions (Dividends/Splits) Processed" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox />} label="4. Return Calculation Batch Completed (Success)" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox />} label="5. GL Postings Generated & Validated" />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Alert severity="warning" sx={{ mb: 2 }}>
                        <strong>Pending Items:</strong> 2 critical validations remaining before close.
                    </Alert>
                    <Paper sx={{ p: 2, bgcolor: 'success.light', color: 'success.contrastText' }}>
                        <Typography variant="subtitle2">Last Closed Period</Typography>
                        <Typography variant="h4">May 2025</Typography>
                        <Typography variant="caption">Closed by: Admin on 2025-06-03</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PeriodCloseReturns;
