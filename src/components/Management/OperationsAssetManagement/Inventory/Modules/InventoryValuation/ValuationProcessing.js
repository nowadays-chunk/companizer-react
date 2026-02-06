import React from 'react';
import { Box, Typography, Button, Paper, Grid, Switch, FormControlLabel, Divider } from '@mui/material';
import { Update, Schedule } from '@mui/icons-material';

const ValuationProcessing = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4">Processing Control</Typography>
                <Button variant="outlined" startIcon={<Schedule />}>Schedule Run</Button>
            </Box>

            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Real-Time vs Periodic Valuation</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Box p={3} border="1px solid #e0e0e0" borderRadius={2}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="subtitle1" fontWeight="bold">Real-Time Valuation</Typography>
                                <Switch defaultChecked />
                            </Box>
                            <Typography variant="body2" color="textSecondary">
                                Continuously update inventory value upon every stock movement (Receipts, Issues, Transfers).
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box p={3} border="1px solid #e0e0e0" borderRadius={2}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="subtitle1" fontWeight="bold">Month-End Processing</Typography>
                                <Switch defaultChecked />
                            </Box>
                            <Typography variant="body2" color="textSecondary">
                                Perform final valuation adjustments, overhead allocation, and GL posting at period close.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box mt={4}>
                    <Typography variant="h6" gutterBottom>Last Processing Run</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography variant="caption" display="block">Status</Typography>
                            <Typography varaint="body1" color="success.main" fontWeight="bold">Completed Checks</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="caption" display="block">Date</Typography>
                            <Typography varaint="body1">Oct 26, 2023 23:59:59</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="caption" display="block">Processed Items</Typography>
                            <Typography varaint="body1">12,450 SKU</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};

export default ValuationProcessing;
