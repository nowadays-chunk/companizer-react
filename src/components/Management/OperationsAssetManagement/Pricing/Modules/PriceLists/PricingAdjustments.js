
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    InputAdornment,
    FormControlLabel,
    Switch,
    Slider
} from '@mui/material';
import {
    Tune,
    Add,
    Remove
} from '@mui/icons-material';

const PricingAdjustments = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Tune color="primary" /> Dynamic Adjustments & Modifiers
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Cost-Plus Calculation</Typography>
                            <Box sx={{ mb: 2 }}>
                                <FormControlLabel control={<Switch />} label="Enable Cost-Plus Pricing" />
                            </Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography gutterBottom>Base Margin Target</Typography>
                                    <Slider
                                        defaultValue={30}
                                        valueLabelDisplay="auto"
                                        marks={[{ value: 0, label: '0%' }, { value: 30, label: '30%' }, { value: 100, label: '100%' }]}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Attribute Modifiers</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Adjust price based on product configuration variants.
                            </Typography>

                            <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1, mb: 1 }}>
                                <Typography variant="subtitle2">Size: XL</Typography>
                                <TextField
                                    size="small"
                                    fullWidth
                                    defaultValue="2.00"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Add fontSize="small" /></InputAdornment>,
                                        endAdornment: <InputAdornment position="end">USD</InputAdornment>
                                    }}
                                    sx={{ mt: 1 }}
                                />
                            </Box>
                            <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                <Typography variant="subtitle2">Color: Custom</Typography>
                                <TextField
                                    size="small"
                                    fullWidth
                                    defaultValue="15"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Add fontSize="small" /></InputAdornment>,
                                        endAdornment: <InputAdornment position="end">%</InputAdornment>
                                    }}
                                    sx={{ mt: 1 }}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Surcharges & Fees</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Small Order Fee"
                                        helperText="Applied if order total < $500"
                                        defaultValue="25.00"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Fuel Surcharge"
                                        defaultValue="2.5"
                                        InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PricingAdjustments;
