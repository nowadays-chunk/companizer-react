import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Card,
    CardContent,
    LinearProgress
} from '@mui/material';

const AccruedVsPaidHandling = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Accrued vs Paid Interest Analysis</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Total Accrued (Liability)</Typography>
                            <Typography variant="h4">$ 125,000</Typography>
                            <Typography variant="caption" color="textSecondary">Cumulative since inception</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Total Paid (Cash)</Typography>
                            <Typography variant="h4" color="success.main">$ 100,000</Typography>
                            <Typography variant="caption" color="textSecondary">Successfully cleared</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', bgcolor: '#fff3e0' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Current Outstanding Accrual</Typography>
                            <Typography variant="h4" color="warning.main">$ 25,000</Typography>
                            <Typography variant="caption" color="textSecondary">To be paid next cycle</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Payment Coverage Ratio</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box sx={{ width: '100%', mr: 1 }}>
                                <LinearProgress variant="determinate" value={80} sx={{ height: 12, borderRadius: 5 }} />
                            </Box>
                            <Box sx={{ minWidth: 35 }}>
                                <Typography variant="body2" color="text.secondary">80%</Typography>
                            </Box>
                        </Box>
                        <Typography variant="body2" color="textSecondary">
                            80% of total accrued interest has been paid out.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AccruedVsPaidHandling;
