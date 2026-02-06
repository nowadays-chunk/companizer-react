
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid
} from '@mui/material';
import {
    AttachMoney,
    TrendingDown
} from '@mui/icons-material';

const InventoryValuation = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <AttachMoney color="success" /> Finance Integration & Valuation
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Total Asset Value</Typography>
                            <Typography variant="h4" color="success.main">$152,400.00</Typography>
                            <Typography variant="caption">Method: Weighted Average Cost</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Slow Moving Reserve</Typography>
                            <Typography variant="h4" color="warning.main">$5,200.00</Typography>
                            <Typography variant="caption">Provision for obsolescence</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Write-Downs (YTD)</Typography>
                            <Typography variant="h4" color="error.main">$1,100.00</Typography>
                            <Typography variant="caption" display="flex" alignItems="center" gap={0.5}><TrendingDown fontSize="small" /> Damaged goods</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InventoryValuation;
