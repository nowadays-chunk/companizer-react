import React from 'react';
import { Box, Typography, Paper, Grid, TextField, InputAdornment, MenuItem } from '@mui/material';
import { Business } from '@mui/icons-material';

const AssetMasterIntegration = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <Business color="primary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Asset Master Data</Typography>
            </Box>

            <Paper elevation={2} sx={{ p: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="Asset ID" defaultValue="FIX-AST-0059" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="Asset Name" defaultValue="Heavy Machinery Type X" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Acquisition Cost"
                            defaultValue="150000"
                            InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Salvage Value"
                            defaultValue="15000"
                            InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="Depreciation Method" select defaultValue="sl">
                            <MenuItem value="sl">Straight Line</MenuItem>
                            <MenuItem value="ddb">Double Declining Balance</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="Useful Life (Years)" defaultValue="10" type="number" />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default AssetMasterIntegration;
