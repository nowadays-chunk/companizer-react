import React from 'react';
import { Box, Typography, Paper, Grid, Divider } from '@mui/material';
import { AttachMoney, TrendingDown } from '@mui/icons-material';

const ValuationIntegration = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>Valuation Impact</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ p: 4 }}>
                        <Typography variant="h6" gutterBottom>Aged Stock Value</Typography>
                        <Grid container alignItems="center">
                            <Grid item xs={6}>
                                <Typography variant="body2" color="textSecondary">Gross Value (90+ Days)</Typography>
                                <Typography variant="h4">$1,250,000</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Box display="flex" alignItems="center" color="error.main">
                                    <TrendingDown sx={{ mr: 1 }} />
                                    <Typography variant="body1">Potential Write-down</Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Divider sx={{ my: 3 }} />

                        <Typography variant="subtitle2" gutterBottom>Provision for Obsolescence</Typography>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <Typography>Current GL Provision</Typography>
                            <Typography fontWeight="bold">$950,000</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography>Recommended Increase</Typography>
                            <Typography fontWeight="bold" color="error">+$300,000</Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ p: 4, bgcolor: '#e8eaf6' }}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <AttachMoney color="primary" sx={{ mr: 1 }} />
                            <Typography variant="h6">Asset Reporting</Typography>
                        </Box>
                        <Typography variant="body2" paragraph>
                            Aged inventory categorization flows directly into the Balance Sheet under Current Assets vs. Non-Current Assets (if applicable).
                        </Typography>
                        <Typography variant="caption" display="block">Last Sync with Finance: Today, 10:00 AM</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ValuationIntegration;
