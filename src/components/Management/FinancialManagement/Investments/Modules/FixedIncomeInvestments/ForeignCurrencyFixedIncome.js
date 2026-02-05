import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

const ForeignCurrencyFixedIncome = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>FX & Multi-Currency Handling</Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">EUR Holdings (Base USD)</Typography>
                            <Typography variant="h4">€ 5,000,000</Typography>
                            <Typography variant="body2">Avg Rate: 1.10</Typography>
                            <Typography variant="body2">Current Rate: 1.08</Typography>
                            <Typography variant="h6" color="error" sx={{ mt: 2 }}>Unrealized FX Loss: $ (100,000)</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Translation Adjustments</Typography>
                <Typography variant="body2" paragraph>
                    System automatically calculates FX Gain/Loss on interest accruals and principal valuation at period end.
                </Typography>
            </Paper>
        </Box>
    );
};

export default ForeignCurrencyFixedIncome;
