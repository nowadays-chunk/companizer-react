
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid
} from '@mui/material';
import {
    Insights
} from '@mui/icons-material';

const DiscontinuationAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Insights color="primary" /> Discontinuation Reporting
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" gutterBottom>Obsolescence Cost (YTD)</Typography>
                            <Typography variant="h3" color="error">$125,000</Typography>
                            <Typography variant="caption">Write-offs + Disposal Fees</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" gutterBottom>Liquidation Recovery</Typography>
                            <Typography variant="h3" color="success.main">$12,000</Typography>
                            <Typography variant="caption">Scrap and Clearance Sales</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DiscontinuationAnalytics;
