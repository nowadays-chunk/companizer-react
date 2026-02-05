import React from 'react';
import { Box, Typography, Grid, TextField, Paper, Select, MenuItem, InputLabel, FormControl, FormControlLabel, Switch } from '@mui/material';

const InterestConfiguration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Interest Configuration</Typography>
            <Paper sx={{ p: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Interest Type</InputLabel>
                            <Select label="Interest Type">
                                <MenuItem value="fixed">Fixed</MenuItem>
                                <MenuItem value="floating">Floating</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Base Rate / Index (e.g., SOFR)" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Margin / Spread (%)" type="number" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Day Count Convention</InputLabel>
                            <Select label="Day Count Convention">
                                <MenuItem value="30/360">30/360</MenuItem>
                                <MenuItem value="ACT/360">ACT/360</MenuItem>
                                <MenuItem value="ACT/365">ACT/365</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Compounding Frequency</InputLabel>
                            <Select label="Compounding Frequency">
                                <MenuItem value="monthly">Monthly</MenuItem>
                                <MenuItem value="quarterly">Quarterly</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Switch />} label="Capitalize Interest" />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default InterestConfiguration;
