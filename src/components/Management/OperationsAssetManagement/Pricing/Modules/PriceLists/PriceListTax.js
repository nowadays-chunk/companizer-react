
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    FormControlLabel,
    Switch,
    TextField,
    Autocomplete,
    InputAdornment
} from '@mui/material';
import {
    AccountBalance,
    Percent
} from '@mui/icons-material';

const PriceListTax = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <AccountBalance color="primary" /> Tax & Financial Compliance
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Tax Inclusion</Typography>
                            <Box sx={{ p: 2, border: '1px solid #eee', borderRadius: 1, mb: 3 }}>
                                <FormControlLabel
                                    control={<Switch />}
                                    label="Prices Include VAT/GST (Gross Pricing)"
                                />
                                <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 1 }}>
                                    If enabled, calculated tax will be deducted from the listed price to find the net revenue.
                                    If disabled, tax is added on top of the listed price at checkout.
                                </Typography>
                            </Box>

                            <Autocomplete
                                options={['Standard Rate (20%)', 'Reduced Rate (5%)', 'Zero Rated (0%)', 'Exempt']}
                                renderInput={(params) => <TextField {...params} label="Default Tax Class" />}
                                defaultValue="Standard Rate (20%)"
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Regulatory Adjustments</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Eco-Tax / Recycling Fee"
                                        helperText="Fixed amount per unit"
                                        InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Excise Duty"
                                        helperText="Percentage of value"
                                        InputProps={{ endAdornment: <InputAdornment position="end"><Percent fontSize="small" /></InputAdornment> }}
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

export default PriceListTax;
