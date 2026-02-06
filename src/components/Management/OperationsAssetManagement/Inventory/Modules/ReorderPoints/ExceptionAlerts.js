
import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Alert, AlertTitle } from '@mui/material';
import { NotificationImportant } from '@mui/icons-material';

const ExceptionAlerts = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <NotificationImportant color="error" /> Exception Management
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Alert severity="error">
                        <AlertTitle>High Stockout Risk</AlertTitle>
                        Product <strong>SKU-992</strong> is projected to stock out in <strong>3 days</strong> (Lead time: 14 days).
                    </Alert>
                </Grid>
                <Grid item xs={12}>
                    <Alert severity="warning">
                        <AlertTitle>Late Supplier Alert</AlertTitle>
                        PO #10234 from <strong>Vendor A</strong> is 2 days overdue. Impacting safety stock buffers.
                    </Alert>
                </Grid>
                <Grid item xs={12}>
                    <Alert severity="info">
                        <AlertTitle>Excess Inventory</AlertTitle>
                        Warehouse B holding <strong>200%</strong> of Max Level for SKU-112. Recommended transfer.
                    </Alert>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ExceptionAlerts;
