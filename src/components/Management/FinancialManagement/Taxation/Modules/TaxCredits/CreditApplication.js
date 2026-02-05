import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Card, CardContent, CircularProgress, Alert } from '@mui/material';
import { AssignmentTurnedIn, CheckCircle } from '@mui/icons-material';

const CreditApplication = () => {
    const [liability, setLiability] = useState(50000);
    const [availableCredit, setAvailableCredit] = useState(12500);
    const [applyAmount, setApplyAmount] = useState(12500);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleApply = () => {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSuccess(true);
        }, 1500);
    };

    const netLiability = liability - applyAmount;

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">Credit Application</Typography>

            {success && (
                <Alert severity="success" sx={{ mb: 3 }} icon={<CheckCircle fontSize="inherit" />}>
                    Credit applied successfully! Your tax liability has been updated.
                </Alert>
            )}

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom display="flex" alignItems="center">
                            <AssignmentTurnedIn sx={{ mr: 1 }} color="primary" /> Apply Credit
                        </Typography>
                        <Box component="form" noValidate autoComplete="off">
                            <TextField
                                fullWidth
                                label="Tax Liability (Estimated)"
                                type="number"
                                value={liability}
                                onChange={(e) => setLiability(Number(e.target.value))}
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Credit Available to Apply"
                                value={availableCredit}
                                disabled
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Amount to Apply"
                                type="number"
                                value={applyAmount}
                                onChange={(e) => setApplyAmount(Math.min(Number(e.target.value), availableCredit))}
                                margin="normal"
                                helperText={`Max: $${availableCredit.toLocaleString()}`}
                                error={applyAmount > availableCredit}
                            />
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ mt: 2 }}
                                onClick={handleApply}
                                disabled={isSubmitting || success || applyAmount <= 0}
                            >
                                {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Confirm Application'}
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ bgcolor: 'primary.light', color: 'white' }}>
                        <CardContent>
                            <Typography variant="h6" color="inherit" gutterBottom>Impact Simulation</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body1" color="inherit">Liability before credit:</Typography>
                                <Typography variant="body1" fontWeight="bold" color="inherit">${liability.toLocaleString(undefined, { minimumFractionDigits: 2 })}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, color: 'rgba(255,255,255,0.8)' }}>
                                <Typography variant="body1" color="inherit">Credit applied:</Typography>
                                <Typography variant="body1" fontWeight="bold" color="inherit">-${applyAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</Typography>
                            </Box>
                            <Box sx={{ my: 2, borderTop: '1px solid rgba(255,255,255,0.3)' }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="h6" color="inherit">Net Liability:</Typography>
                                <Typography variant="h5" fontWeight="bold" color="inherit">${netLiability.toLocaleString(undefined, { minimumFractionDigits: 2 })}</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CreditApplication;
