
import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip } from '@mui/material';
import { Calculate } from '@mui/icons-material';

const AutoReplenishment = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Calculate color="primary" /> Auto-Replenishment Calculations
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                        <CardContent>
                            <Typography variant="h6">Calculated Reorder Point</Typography>
                            <Typography variant="h2" fontWeight="bold">1,250</Typography>
                            <Typography variant="caption">Units</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Safety Stock Recommendation</Typography>
                            <Typography variant="h2" color="text.secondary">350</Typography>
                            <Typography variant="caption" display="block" gutterBottom>Units based on 98% Service Level</Typography>
                            <Chip label="98% Service Level" color="success" size="small" />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2">Economic Order Quantity (EOQ)</Typography>
                            <Typography variant="h5">5,000 Units</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2">Next Calculation</Typography>
                            <Typography variant="h5">Tomorrow, 02:00 AM</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AutoReplenishment;
