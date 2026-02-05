import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, LinearProgress } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';

const CouponManagement = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Coupon & Interest Management</Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Next Coupon Date</Typography>
                            <Typography variant="h5">Oct 15, 2025</Typography>
                            <Typography variant="body2" color="primary">US Govt Bond 4.5%</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Accrued Interest (YTD)</Typography>
                            <Typography variant="h5">$ 45,200.00</Typography>
                            <LinearProgress variant="determinate" value={65} sx={{ mt: 2 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Withholding Tax</Typography>
                            <Typography variant="h5">$ 1,200.00</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Upcoming Coupon Schedule</Typography>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">2025-10-15</TimelineOppositeContent>
                        <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
                        <TimelineContent>
                            <Typography>Coupon Payment</Typography>
                            <Typography variant="body2">Exp: $12,500</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">2026-04-15</TimelineOppositeContent>
                        <TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator>
                        <TimelineContent>
                            <Typography>Coupon Payment</Typography>
                            <Typography variant="body2">Exp: $12,500</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">2026-10-15</TimelineOppositeContent>
                        <TimelineSeparator><TimelineDot /></TimelineSeparator>
                        <TimelineContent>
                            <Typography>Coupon Payment</Typography>
                            <Typography variant="body2">Exp: $12,500</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Paper>
        </Box>
    );
};

export default CouponManagement;
