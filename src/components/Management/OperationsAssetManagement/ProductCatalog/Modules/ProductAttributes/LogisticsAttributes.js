
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    FormControlLabel,
    Checkbox,
    InputAdornment
} from '@mui/material';
import {
    LocalShipping,
    Straighten
} from '@mui/icons-material';

const LogisticsAttributes = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <LocalShipping color="primary" /> Inventory & Logistics
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Physical Dimensions</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Checkbox checked />} label="Defines Physical Aspect" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Weight Impact" InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Volume Impact" InputProps={{ endAdornment: <InputAdornment position="end">m³</InputAdornment> }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Dimension String" placeholder="L x W x H" InputProps={{ startAdornment: <Straighten fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} /> }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Handling & Storage</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Checkbox />} label="Fragile" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Checkbox />} label="Temperature Sensitive" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Storage Condition" placeholder="e.g. Dry, Cool Place" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Shelf Life" placeholder="e.g. 12 months" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LogisticsAttributes;
