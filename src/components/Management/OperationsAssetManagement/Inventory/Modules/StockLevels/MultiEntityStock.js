
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Tabs,
    Tab
} from '@mui/material';
import {
    Business,
    SwapHoriz
} from '@mui/icons-material';

const MultiEntityStock = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Business color="primary" /> Multi-Entity Stock Ownership
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Inventory by Legal Entity</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <Box sx={{ p: 2, border: '1px solid #1976d2', borderRadius: 2, bgcolor: '#e3f2fd' }}>
                                        <Typography variant="subtitle1" fontWeight="bold">US Entity (Owner)</Typography>
                                        <Typography variant="h4">800 Units</Typography>
                                        <Typography variant="caption">Valuation: $80,000</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box sx={{ p: 2, border: '1px solid #ed6c02', borderRadius: 2, bgcolor: '#fff3e0' }}>
                                        <Typography variant="subtitle1" fontWeight="bold">EU Entity (Consignment)</Typography>
                                        <Typography variant="h4">200 Units</Typography>
                                        <Typography variant="caption">Physically in EU, Owned by US</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Intercompany Visibility</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <SwapHoriz color="action" />
                                <Typography variant="body1">Total Global Stock: <strong>1,250 Units</strong></Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <SwapHoriz color="action" />
                                <Typography variant="body1">stock in Transit (Intercompany): <strong>50 Units</strong></Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MultiEntityStock;
