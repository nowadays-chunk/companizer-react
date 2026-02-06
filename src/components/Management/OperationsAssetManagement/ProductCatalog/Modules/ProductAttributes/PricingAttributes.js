
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
    FormControlLabel,
    Alert
} from '@mui/material';
import {
    AttachMoney,
    TrendingUp
} from '@mui/icons-material';

const PricingAttributes = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <AttachMoney color="primary" /> Pricing & Costing Impact
            </Typography>

            <Alert severity="info" sx={{ mb: 3 }}>
                This attribute can be used to drive price calculations for configurable products.
            </Alert>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Price Adjustment Rules</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Define how this attribute value changes the base price.
                            </Typography>

                            <Box sx={{ mb: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                <Typography variant="subtitle2">Value: "15 inch" (Default)</Typography>
                                <Typography variant="body2" color="text.secondary">No Charge</Typography>
                            </Box>

                            <Box sx={{ mb: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                <Typography variant="subtitle2">Value: "17 inch"</Typography>
                                <Grid container spacing={2} sx={{ mt: 0.5 }}>
                                    <Grid item xs={6}>
                                        <TextField
                                            size="small"
                                            label="Price Impact"
                                            defaultValue="50"
                                            InputProps={{ startAdornment: <InputAdornment position="start">+</InputAdornment> }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            size="small"
                                            label="Type"
                                            defaultValue="Fixed Amount"
                                            disabled
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Cost Drivers</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch checked />} label="Impacts Product Cost" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Cost Multiplier"
                                        defaultValue="1.0"
                                        helperText="Factor to multiply base material cost"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ p: 2, border: '1px dashed grey', borderRadius: 1 }}>
                                        <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <TrendingUp color="success" fontSize="small" /> Margin Analysis
                                        </Typography>
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            Current attribute configuration allows for <strong>25% margin</strong> on premium selections.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PricingAttributes;
