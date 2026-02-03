
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Grid, Paper, Divider, Chip } from '@mui/material';
import { TermCalculator } from './TermCalculator';
import { DiscountEngine } from './DiscountEngine';
import { InstallmentManager } from './InstallmentManager';

export const TermTestBench = ({ termConfig }) => {
    const [testDate, setTestDate] = useState(new Date().toISOString().split('T')[0]);
    const [testAmount, setTestAmount] = useState(1000);
    const [results, setResults] = useState(null);

    useEffect(() => {
        if (!termConfig) return;

        // Run Simulations
        const baseDate = new Date(testDate);

        // 1. Due Date
        const dueDate = TermCalculator.calculateDueDate(termConfig, baseDate);

        // 2. Installments
        const installments = InstallmentManager.generateInstallments(
            termConfig.installment_plan,
            Number(testAmount),
            baseDate,
            termConfig
        );

        // 3. Discount (Simulation: if paid today? Or if paid within discount window?)
        // Let's show the potential discount expiry
        const discountInfo = DiscountEngine.calculateDiscount(
            termConfig.discount_rules,
            Number(testAmount),
            baseDate,
            baseDate // Check eligibility as of start date (always available initially)
        );

        setResults({ dueDate, installments, discountInfo });
    }, [termConfig, testDate, testAmount]);

    if (!termConfig) return null;

    return (
        <Paper variant="outlined" sx={{ p: 2, mt: 3, bgcolor: 'background.default' }}>
            <Typography variant="h6" gutterBottom color="primary">
                Term Logic Simulator
            </Typography>
            <Typography variant="body2" paragraph>
                Test how this term behaves with hypothetical data.
            </Typography>

            <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                    <TextField
                        label="Test Invoice Date"
                        type="date"
                        fullWidth
                        value={testDate}
                        onChange={(e) => setTestDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Test Amount"
                        type="number"
                        fullWidth
                        value={testAmount}
                        onChange={(e) => setTestAmount(e.target.value)}
                    />
                </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            {results && (
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle2" color="textSecondary">Calculated Due Date</Typography>
                        <Typography variant="h5">
                            {results.dueDate ? results.dueDate.toLocaleDateString() : '-'}
                        </Typography>
                        <Typography variant="caption">
                            Method: {termConfig.due_date_method}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle2" color="textSecondary">Installments</Typography>
                        {results.installments.map((inst, i) => (
                            <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                <Typography variant="body2">#{inst.seq} {inst.percent}%</Typography>
                                <Typography variant="body2">
                                    {inst.amount.toFixed(2)} on {inst.due_date.toLocaleDateString()}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle2" color="textSecondary">Potential Discount</Typography>
                        {results.discountInfo && results.discountInfo.status !== 'unavailable' ? (
                            <Box>
                                <Chip
                                    label={`${results.discountInfo.discountPercent}% Off`}
                                    color="success"
                                    size="small"
                                    sx={{ mr: 1 }}
                                />
                                <Typography variant="caption" display="block">
                                    Expires: {results.discountInfo.expiryDate?.toLocaleDateString()}
                                </Typography>
                                <Typography variant="body2">
                                    Save: {results.discountInfo.discountAmount}
                                </Typography>
                            </Box>
                        ) : (
                            <Typography variant="body2" color="textSecondary">None Configured</Typography>
                        )}
                    </Grid>
                </Grid>
            )}
        </Paper>
    );
};
