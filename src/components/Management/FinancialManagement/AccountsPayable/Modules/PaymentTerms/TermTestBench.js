import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Grid, Paper, Divider, Chip, Button } from '@mui/material';
import { TermCalculator } from './TermCalculator';
import { DiscountEngine } from './DiscountEngine';
import { InstallmentManager } from './InstallmentManager';

import { apApplyPaymentTerm } from '../../../../../../utils/clientQueries';

export const TermTestBench = ({ termConfig }) => {
    const [testDate, setTestDate] = useState(new Date().toISOString().split('T')[0]);
    const [testAmount, setTestAmount] = useState(1000);
    const [results, setResults] = useState(null);
    const [backendResults, setBackendResults] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!termConfig) return;

        // Run Local Simulations
        const baseDate = new Date(testDate);
        const dueDate = TermCalculator.calculateDueDate(termConfig, baseDate);
        const installments = InstallmentManager.generateInstallments(termConfig.installment_plan, Number(testAmount), baseDate, termConfig);
        const discountInfo = DiscountEngine.calculateDiscount(termConfig.discount_rules, Number(testAmount), baseDate, baseDate);

        setResults({ dueDate, installments, discountInfo });
        setBackendResults(null); // Reset backend results on change
    }, [termConfig, testDate, testAmount]);

    const handleBackendSimulation = async () => {
        if (!termConfig) return;
        setLoading(true);
        try {
            const response = await apApplyPaymentTerm({
                termId: termConfig.id,
                amount: Number(testAmount),
                date: testDate
            });
            setBackendResults(response);
        } catch (error) {
            console.error("Backend simulation failed", error);
        } finally {
            setLoading(false);
        }
    };

    if (!termConfig) return null;

    return (
        <Paper variant="outlined" sx={{ p: 2, mt: 3, bgcolor: 'background.default' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" color="primary">Term Logic Simulator</Typography>
                <Button
                    variant="outlined"
                    onClick={handleBackendSimulation}
                    disabled={loading}
                    size="small"
                >
                    {loading ? 'Simulating...' : 'Verify on Backend'}
                </Button>
            </Box>

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
                        <Box>
                            <Typography variant="h5" component="span">
                                {results.dueDate ? results.dueDate.toLocaleDateString() : '-'}
                            </Typography>
                            {backendResults && (
                                <Typography variant="caption" color="secondary" display="block">
                                    Backend: {backendResults.dueDate ? new Date(backendResults.dueDate).toLocaleDateString() : 'N/A'}
                                </Typography>
                            )}
                        </Box>
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
