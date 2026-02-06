import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

const ReportingAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight="600" gutterBottom>Reporting & Analytics</Typography>
            <Typography variant="body2" color="textSecondary" mb={3}>
                Insights into withholding tax liabilities, exposure, and trends.
            </Typography>

            <Grid container spacing={3} mb={3}>
                {[
                    { title: 'Total WHT Liability (YTD)', value: '$124,500', sub: '+12% vs last year' },
                    { title: 'Remitted Amount (YTD)', value: '$110,000', sub: '88% Compliance Rate' },
                    { title: 'Pending Remittance', value: '$14,500', sub: 'Due in 15 days' },
                    { title: 'Avg. Effective Rate', value: '12.4%', sub: '-0.5% vs last year' },
                ].map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card elevation={0} variant="outlined">
                            <CardContent>
                                <Typography variant="subtitle2" color="textSecondary">{item.title}</Typography>
                                <Typography variant="h4" fontWeight="bold" my={1}>{item.value}</Typography>
                                <Typography variant="caption" color={item.sub.includes('+') ? 'success.main' : 'text.secondary'}>
                                    {item.sub}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f8f9fa' }}>
                        <Typography color="textSecondary">[Chart Placeholder: Monthly WHT Trends]</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f8f9fa' }}>
                        <Typography color="textSecondary">[Chart: WHT by Jurisdiction]</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReportingAnalytics;
