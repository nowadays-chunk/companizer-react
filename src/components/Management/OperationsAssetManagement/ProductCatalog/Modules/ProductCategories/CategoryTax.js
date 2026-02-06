
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    Autocomplete,
    FormControlLabel,
    Switch,
    Alert
} from '@mui/material';
import {
    Policy,
    Gavel
} from '@mui/icons-material';

const CategoryTax = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Gavel color="primary" /> Tax & Compliance
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Default Tax Rules</Typography>
                            <Alert severity="info" sx={{ mb: 2 }}>Products in this category will inherit these settings unless overridden.</Alert>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        options={['Standard Rate (20%)', 'Reduced Rate (5%)', 'Zero Rated (0%)', 'Exempt']}
                                        renderInput={(params) => <TextField {...params} label="Default VAT/GST Tax Class" />}
                                        defaultValue="Standard Rate (20%)"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="tax code" placeholder="e.g. TAX-200" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch checked />} label="Subject to Sales Tax" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Regulatory Classification</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Default HS Code (First 4-6 digits)" placeholder="8471..." />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch />} label="Environmental Tax Applies (WEEE/Eco)" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch />} label="Luxury Tax Applies" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch />} label="Digital Services Tax (DST)" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryTax;
