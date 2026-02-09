import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    Card,
    CardContent,
    InputAdornment,
    Divider
} from '@mui/material';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/ForeignCurrencyInterest';

const ForeignCurrencyInterest = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Foreign Currency Interest</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>FX Rate Management</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Functional Currency" defaultValue="USD" disabled />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Payment Currency" defaultValue="EUR" disabled />
                            </Grid>

                            <Grid item xs={12}>
                                <Divider sx={{ my: 1 }} />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Accrual Rate (Avg)"
                                    defaultValue="1.0800"
                                    type="number"
                                    helperText="Rate used for expense recognition"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Payment Spot Rate"
                                    defaultValue="1.1000"
                                    type="number"
                                    helperText="Rate on payment value date"
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Impact Analysis</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Card sx={{ bgcolor: '#fafafa' }}>
                                <CardContent>
                                    <Typography variant="caption" color="textSecondary">Interest Amount (EUR)</Typography>
                                    <Typography variant="h6">€ 10,000</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ bgcolor: '#fafafa' }}>
                                <CardContent>
                                    <Typography variant="caption" color="textSecondary">Cash Outflow (USD)</Typography>
                                    <Typography variant="h6">$ 11,000</Typography>
                                    <Typography variant="caption">@ 1.10 Spot</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card sx={{ bgcolor: '#ffebee' }}>
                                <CardContent>
                                    <Typography color="error" gutterBottom>FX Realized Loss</Typography>
                                    <Typography variant="h4">- $ 200.00</Typography>
                                    <Typography variant="body2">
                                        Expense booked @ 1.08 ($10,800)<br />
                                        Paid @ 1.10 ($11,000)
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ForeignCurrencyInterest;
