import React from 'react';
import { Box, Typography, Button, Paper, Grid, TextField, InputAdornment } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';

const AssetRevaluation = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4">Asset Revaluation</Typography>
                <Button variant="contained" color="warning" startIcon={<TrendingUp />}>Post Revaluation</Button>
            </Box>

            <Paper elevation={2} sx={{ p: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="Select Asset" defaultValue="Building - North Wing" disabled />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Current Net Book Value"
                            defaultValue="1200000"
                            disabled
                            InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="New Fair Market Value"
                            InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="Reason for Revaluation" defaultValue="Market Appraisal FY24" />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default AssetRevaluation;
