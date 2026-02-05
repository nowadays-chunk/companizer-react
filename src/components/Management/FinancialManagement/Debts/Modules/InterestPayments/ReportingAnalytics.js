import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Card,
    CardContent
} from '@mui/material';

const ReportingAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Interest Analytics & Reporting</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">YTD Interest Expense</Typography>
                            <Typography variant="h4">$ 450k</Typography>
                            <Typography variant="caption" color="error">↑ 5% vs Budget</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Avg Borrowing Cost</Typography>
                            <Typography variant="h4">5.2%</Typography>
                            <Typography variant="caption" color="textSecondary">Weighted Average Rate</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Next Due</Typography>
                            <Typography variant="h4">$ 15k</Typography>
                            <Typography variant="caption">Nov 15, 2023</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Late Payments</Typography>
                            <Typography variant="h4">0</Typography>
                            <Typography variant="caption" color="success.main">System Health Good</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f8f9fa' }}>
                        <Typography color="textSecondary">[Bar Chart: Monthly Interest Expense Trend]</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f8f9fa' }}>
                        <Typography color="textSecondary">[Pie Chart: Interest by Lender]</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReportingAnalytics;
