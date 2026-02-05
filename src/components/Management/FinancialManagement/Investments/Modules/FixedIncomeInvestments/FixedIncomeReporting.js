import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardActionArea, CardContent, Divider } from '@mui/material';
import { Assessment, CalendarMonth, TrendingUp, HistoryEdu } from '@mui/icons-material';

const FixedIncomeReporting = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Reporting & Analytics</Typography>

            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>Standard Reports</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardActionArea>
                            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                <Assessment color="primary" sx={{ mr: 2 }} />
                                <Box>
                                    <Typography variant="h6">Investment Register</Typography>
                                    <Typography variant="body2" color="textSecondary">Detailed list of all holdings.</Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardActionArea>
                            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                <CalendarMonth color="primary" sx={{ mr: 2 }} />
                                <Box>
                                    <Typography variant="h6">Coupon Schedule</Typography>
                                    <Typography variant="body2" color="textSecondary">Expected inflow forecast.</Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardActionArea>
                            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                <TrendingUp color="primary" sx={{ mr: 2 }} />
                                <Box>
                                    <Typography variant="h6">Fair Value Movement</Typography>
                                    <Typography variant="body2" color="textSecondary">YTD valuation changes.</Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardActionArea>
                            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                <HistoryEdu color="primary" sx={{ mr: 2 }} />
                                <Box>
                                    <Typography variant="h6">Amortization Schedule</Typography>
                                    <Typography variant="body2" color="textSecondary">Premium/Discount schedules.</Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FixedIncomeReporting;
