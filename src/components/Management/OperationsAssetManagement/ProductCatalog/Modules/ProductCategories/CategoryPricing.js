
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
    Divider,
    Slider
} from '@mui/material';
import {
    PriceChange,
    Percent,
    LocalOffer
} from '@mui/icons-material';

const CategoryPricing = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <PriceChange color="primary" /> Pricing & Discounts
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Category-Wide Adjustments</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Switch />}
                                        label="Enforce Category Pricing Rules"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography gutterBottom>Base Markup on Cost</Typography>
                                    <Box sx={{ px: 2 }}>
                                        <Slider defaultValue={30} step={5} min={0} max={100} valueLabelDisplay="auto" />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Target Margin (%)"
                                        defaultValue="25"
                                        InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Promotions</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Current Promotion"
                                        defaultValue="Summer Tech Sale"
                                        InputProps={{ startAdornment: <LocalOffer fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} /> }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Discount Amount"
                                        defaultValue="10"
                                        InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField type="date" fullWidth label="Valid Until" InputLabelProps={{ shrink: true }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Tiered Pricing Defaults</Typography>
                            <Box sx={{ mb: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                <Typography variant="subtitle2">Wholesale Tier 1 (Qty 50+)</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                    <Percent color="primary" fontSize="small" />
                                    <Typography variant="body2">15% Discount on Base Price</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ mb: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                <Typography variant="subtitle2">Wholesale Tier 2 (Qty 200+)</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                    <Percent color="primary" fontSize="small" />
                                    <Typography variant="body2">25% Discount on Base Price</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ mb: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                <Typography variant="subtitle2">Employee Pricing</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                    <PriceChange color="success" fontSize="small" />
                                    <Typography variant="body2">Cost + 10%</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryPricing;
