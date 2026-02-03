
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Paper
} from '@mui/material';

const RevenueAnalytics = () => {
    return (
        <Box p={3}>
            <Typography variant="h5" gutterBottom>Revenue Analytics</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f0f0f0' }}>
                        <Typography color="textSecondary">[Revenue Trend Chart Placeholder]</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography color="textSecondary">Top Customer (YTD)</Typography>
                            <Typography variant="h6">Acme Corp</Typography>
                            <Typography variant="h4">$1.2M</Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Avg. Revenue Per User</Typography>
                            <Typography variant="h4">$850</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f0f0f0' }}>
                        <Typography color="textSecondary">[Revenue by Product Category]</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f0f0f0' }}>
                        <Typography color="textSecondary">[Revenue by Region]</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RevenueAnalytics;
