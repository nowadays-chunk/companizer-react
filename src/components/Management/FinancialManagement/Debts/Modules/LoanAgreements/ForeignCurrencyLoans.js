import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    InputAdornment,
    Switch,
    FormControlLabel,
    Card,
    CardContent
} from '@mui/material';

const ForeignCurrencyLoans = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Foreign Currency Loans</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>FX Settings</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Functional Currency" defaultValue="USD" disabled />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Loan Currency" defaultValue="EUR" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Initial Exchange Rate"
                                    type="number"
                                    defaultValue="1.08"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">USD/EUR</InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Switch defaultChecked />} label="Auto-Revalue Principal at Month-End" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Switch defaultChecked />} label="Track Unrealized FX Gains/Losses" />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Exposure & Revaluation</Typography>
                        <Card sx={{ mb: 2, bgcolor: '#f8f9fa' }}>
                            <CardContent>
                                <Typography variant="subtitle2" color="textSecondary">Current Exposure</Typography>
                                <Typography variant="h4">€ 1,000,000.00</Typography>
                                <Typography variant="body2">= $ 1,080,000.00 (at origination)</Typography>
                                <Typography variant="body2" fontWeight="bold">= $ 1,100,000.00 (at current spot)</Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ bgcolor: '#fff3e0' }}>
                            <CardContent>
                                <Typography variant="subtitle2" color="warning.main">Unrealized FX Loss</Typography>
                                <Typography variant="h5" color="error.main">- $ 20,000.00</Typography>
                                <Typography variant="caption">MTM Revaluation Pending</Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ForeignCurrencyLoans;
