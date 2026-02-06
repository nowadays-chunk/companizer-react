import React from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import { Timeline, Delete, LocalOffer } from '@mui/icons-material';

const LifecycleManagement = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>Product Lifecycle Strategy</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
                        <Timeline sx={{ fontSize: 50, color: 'info.main', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>Introduction / Growth</Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>Monitor turnover closely. No aging issues expected yet.</Typography>
                        <Button variant="outlined">View Products</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
                        <LocalOffer sx={{ fontSize: 50, color: 'warning.main', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>Maturity / Decline</Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>High risk of stagnation. Plan promotions for aged stock.</Typography>
                        <Button variant="contained" color="warning">Plan Promotion</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
                        <Delete sx={{ fontSize: 50, color: 'error.main', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>Discontinuation</Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>Liquidate remaining stock. Stop procurement.</Typography>
                        <Button variant="contained" color="error">Initiate Disposal</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LifecycleManagement;
