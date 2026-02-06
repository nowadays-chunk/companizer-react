
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Avatar
} from '@mui/material';
import {
    SwapHoriz,
    TrendingUp
} from '@mui/icons-material';

const ReplacementMigration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <SwapHoriz color="primary" /> Replacement & Migration
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Successor Mapping</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', p: 3, border: '1px dashed grey', borderRadius: 2 }}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'error.light', mb: 1, mx: 'auto' }}>Old</Avatar>
                                    <Typography variant="subtitle2">Solar Panel v1</Typography>
                                    <Typography variant="caption">Discontinued</Typography>
                                </Box>
                                <ArrowRight />
                                <Box sx={{ textAlign: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'success.light', mb: 1, mx: 'auto' }}>New</Avatar>
                                    <Typography variant="subtitle2">Solar Panel v2 (Pro)</Typography>
                                    <Typography variant="caption">Active Successor</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Migration Performance</Typography>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Customer Conversion Rate</Typography>
                                <Typography variant="h4" color="success.main">85%</Typography>
                                <Typography variant="caption" display="flex" alignItems="center"><TrendingUp fontSize="small" /> 5% above target</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

const ArrowRight = () => (
    <Typography variant="h4" color="text.secondary">→</Typography>
);

export default ReplacementMigration;
