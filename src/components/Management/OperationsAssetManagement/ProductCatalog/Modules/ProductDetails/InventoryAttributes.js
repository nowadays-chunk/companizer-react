
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    FormControlLabel,
    Switch,
    InputAdornment
} from '@mui/material';
import {
    Inventory,
    LocalShipping,
    Straighten
} from '@mui/icons-material';

const InventoryAttributes = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Inventory color="primary" /> Inventory & Logistics Attributes
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Stock Management</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch checked />} label="Manage Stock Level" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Minimum Order Qty (MOQ)" type="number" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Safety Stock Level" type="number" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Reorder Point" type="number" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Lead Time (Days)" type="number" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Physical Dimensions</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Weight" InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Volume" InputProps={{ endAdornment: <InputAdornment position="end">m³</InputAdornment> }} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField fullWidth label="Length" InputProps={{ endAdornment: <InputAdornment position="end">cm</InputAdornment> }} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField fullWidth label="Width" InputProps={{ endAdornment: <InputAdornment position="end">cm</InputAdornment> }} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField fullWidth label="Height" InputProps={{ endAdornment: <InputAdornment position="end">cm</InputAdornment> }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Warehouse Locations</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth label="Default Warehouse" defaultValue="Main DC - New York" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth label="Bin / Rack Location" defaultValue="A-12-04" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth label="Picking Strategy" defaultValue="FIFO (First In First Out)" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InventoryAttributes;
