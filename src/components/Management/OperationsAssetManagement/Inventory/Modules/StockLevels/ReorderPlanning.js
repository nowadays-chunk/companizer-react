
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Slider,
    TextField,
    Button
} from '@mui/material';
import {
    Timeline,
    Update
} from '@mui/icons-material';

const ReorderPlanning = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Timeline color="primary" /> Reorder Planning & Optimization
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Reorder Parameters (Calculated)</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" color="text.secondary">Min Stock Level</Typography>
                                    <Typography variant="h5">200</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" color="text.secondary">Max Stock Level</Typography>
                                    <Typography variant="h5">1,000</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" color="text.secondary">Safety Stock</Typography>
                                    <Typography variant="h5">150</Typography>
                                    <Typography variant="caption">Buffer for 2 weeks demand</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" color="text.secondary">Reorder Point</Typography>
                                    <Typography variant="h5">350</Typography>
                                    <Typography variant="caption">Triggers Purchase Order</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Economic Order Quantity (EOQ)</Typography>
                            <Typography variant="body2" paragraph>
                                Based on annual demand of 5,000 units and holding cost of $2.50/unit.
                            </Typography>
                            <Box sx={{ mb: 3, textAlign: 'center', p: 2, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                                <Typography variant="h4" color="primary">450 Units</Typography>
                                <Typography variant="subtitle2">Optimal Order Size</Typography>
                            </Box>
                            <Button variant="outlined" startIcon={<Update />} fullWidth>Recalculate EOQ</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReorderPlanning;
