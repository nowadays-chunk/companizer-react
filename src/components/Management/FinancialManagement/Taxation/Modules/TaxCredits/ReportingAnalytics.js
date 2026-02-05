import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { TrendingUp, AccountBalanceWallet, AccessTime, PieChart } from '@mui/icons-material';

const ReportingAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">Reports & Analytics</Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
                Insights into tax credit utilization, expiration risks, and financial impact.
            </Typography>

            {/* Summary Cards */}
            <Grid container spacing={3} mb={4}>
                {[
                    { title: 'Total Credits Available', value: '$1.2M', icon: AccountBalanceWallet, color: 'primary.main' },
                    { title: 'Credits Utilized (YTD)', value: '$450k', icon: TrendingUp, color: 'success.main' },
                    { title: 'Expiring within 90 Days', value: '$85k', icon: AccessTime, color: 'warning.main' },
                    { title: 'Utilization Rate', value: '38%', icon: PieChart, color: 'info.main' },
                ].map((card, idx) => (
                    <Grid item xs={12} md={6} lg={3} key={idx}>
                        <Card elevation={1}>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Box>
                                        <Typography variant="subtitle2" color="textSecondary">{card.title}</Typography>
                                        <Typography variant="h4" fontWeight="700">{card.value}</Typography>
                                    </Box>
                                    <card.icon sx={{ fontSize: 40, color: card.color, opacity: 0.8 }} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Charts Area */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, height: 350 }}>
                        <Typography variant="h6" gutterBottom>Utilization Trend (Last 12 Months)</Typography>
                        <Box sx={{ height: 280, bgcolor: 'action.hover', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography color="textSecondary">[Chart: Credit Usage vs Availability]</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: 350 }}>
                        <Typography variant="h6" gutterBottom>Portfolio Mix</Typography>
                        <Box sx={{ height: 280, bgcolor: 'action.hover', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography color="textSecondary">[Pie Chart: By Credit Type]</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReportingAnalytics;
