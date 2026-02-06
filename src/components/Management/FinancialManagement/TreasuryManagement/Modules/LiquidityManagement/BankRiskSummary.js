import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    LinearProgress
} from '@mui/material';

const bankExposure = [
    { bank: 'JPMorgan Chase', amount: 1250000, limit: 2000000, rating: 'AA-' },
    { bank: 'Bank of America', amount: 450000, limit: 1000000, rating: 'A+' },
    { bank: 'HSBC', amount: 850000, limit: 1500000, rating: 'A' },
    { bank: 'Silicon Valley Bank', amount: 5000, limit: 10000, rating: 'Restricted' },
];

const BankRiskSummary = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Counterparty & Concentration Risk</Typography>

            <Grid container spacing={3}>
                {bankExposure.map((b) => (
                    <Grid item xs={12} md={6} key={b.bank}>
                        <Card>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" mb={1}>
                                    <Typography variant="h6">{b.bank}</Typography>
                                    <Typography variant="h6" color={b.amount > b.limit ? 'error.main' : 'textPrimary'}>
                                        ${(b.amount / 1000).toFixed(0)}k / ${(b.limit / 1000).toFixed(0)}k
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={(b.amount / b.limit) * 100}
                                    color={b.rating === 'Restricted' ? 'error' : (b.amount / b.limit > 0.8 ? 'warning' : 'primary')}
                                    sx={{ height: 10, borderRadius: 5, mb: 1 }}
                                />
                                <Box display="flex" justifyContent="space-between">
                                    <Typography variant="caption">Exposure Limit Utilization</Typography>
                                    <Typography variant="caption" sx={{ fontWeight: 'bold' }}>Credit Rating: {b.rating}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BankRiskSummary;
