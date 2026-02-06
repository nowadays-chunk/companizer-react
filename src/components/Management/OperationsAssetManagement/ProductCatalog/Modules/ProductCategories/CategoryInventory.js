
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    InputAdornment,
    Switch,
    FormControlLabel
} from '@mui/material';
import {
    Inventory,
    Timeline,
    TrendingUp
} from '@mui/icons-material';

const CategoryInventory = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Inventory color="primary" /> Inventory & Planning Defaults
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Replenishment Rules</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Default Lead Time" defaultValue="14" InputProps={{ endAdornment: <InputAdornment position="end">days</InputAdornment> }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Safety Stock Coverage" defaultValue="30" InputProps={{ endAdornment: <InputAdornment position="end">days</InputAdornment> }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch checked />} label="Allow Backorders" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Valuation</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Costing Method" defaultValue="FIFO" disabled />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle2" sx={{ mt: 2 }}>Category Totals</Typography>
                                    <Box sx={{ mt: 1 }}>
                                        <Typography variant="body2" color="text.secondary">Total Stock Value</Typography>
                                        <Typography variant="h6">$1,245,000.00</Typography>
                                    </Box>
                                    <Box sx={{ mt: 1 }}>
                                        <Typography variant="body2" color="text.secondary">Total SKU Count</Typography>
                                        <Typography variant="h6">145</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Forecasting</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Seasonal Factor" defaultValue="High (Q4 Peak)" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Growth Rate" defaultValue="+10%" InputProps={{ endAdornment: <TrendingUp color="success" /> }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch checked />} label="Include in Demand Plan" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryInventory;
