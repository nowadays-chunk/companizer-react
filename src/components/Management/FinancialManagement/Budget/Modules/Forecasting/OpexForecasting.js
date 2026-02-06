import React from 'react';
import { Box, Typography, Grid, Card, CardContent, TextField, InputAdornment } from '@mui/material';
import { MoneyOff } from '@mui/icons-material';

const OpexForecasting = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <MoneyOff color="primary" /> OpEx Forecasting
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Baseline Adjustments</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                                <TextField
                                    label="General Inflation Rate"
                                    defaultValue="3.5"
                                    InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
                                />
                                <TextField
                                    label="Payroll Increase Assumption"
                                    defaultValue="4.0"
                                    InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
                                />
                                <TextField
                                    label="Rent/Utilities Escalation"
                                    defaultValue="2.0"
                                    InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ bgcolor: '#eceff1' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Projected 12-Month OpEx</Typography>
                            <Typography variant="h3" color="primary.dark" sx={{ my: 4, textAlign: 'center' }}>
                                $4,250,000
                            </Typography>
                            <Typography variant="caption" display="block" align="center">
                                +3.8% vs Trailing 12 Months
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OpexForecasting;
