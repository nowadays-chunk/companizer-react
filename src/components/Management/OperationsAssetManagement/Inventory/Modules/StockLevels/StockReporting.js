
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid
} from '@mui/material';
import {
    Assessment
} from '@mui/icons-material';

const StockReporting = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Assessment color="primary" /> KPI Dashboard
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" gutterBottom>Inventory Turnover Rate</Typography>
                            <Typography variant="h3">6.5x</Typography>
                            <Typography variant="caption">Annualized</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" gutterBottom>Fill Rate</Typography>
                            <Typography variant="h3" color="success.main">98.2%</Typography>
                            <Typography variant="caption">Order line fulfillment</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" gutterBottom>Days Sales of Inventory (DSI)</Typography>
                            <Typography variant="h3">45 Days</Typography>
                            <Typography variant="caption">Average shelf time</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StockReporting;
