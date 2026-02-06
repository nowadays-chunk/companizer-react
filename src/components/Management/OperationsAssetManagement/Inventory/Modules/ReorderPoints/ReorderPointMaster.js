
import React from 'react';
import { Box, Typography, Card, CardContent, Grid, TextField, Button, MenuItem } from '@mui/material';
import { Settings } from '@mui/icons-material';

const ReorderPointMaster = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Settings color="primary" /> Reorder Point Master Data
            </Typography>
            <Card>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="Product ID" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="Location / Warehouse" select>
                                <MenuItem value="WH-001">Main Warehouse</MenuItem>
                                <MenuItem value="WH-002">Regional Hub</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField fullWidth label="Min Stock Level" type="number" />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField fullWidth label="Max Stock Level" type="number" />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField fullWidth label="Safety Stock" type="number" />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField fullWidth label="Reorder Quantity" type="number" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="Reorder Method" select>
                                <MenuItem value="min_max">Min / Max</MenuItem>
                                <MenuItem value="rop">Reorder Point (ROP)</MenuItem>
                                <MenuItem value="mrp">MRP Driven</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary">Save Configuration</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ReorderPointMaster;
