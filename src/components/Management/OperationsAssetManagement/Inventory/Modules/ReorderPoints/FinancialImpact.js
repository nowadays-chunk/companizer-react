
import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { AttachMoney } from '@mui/icons-material';

const FinancialImpact = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AttachMoney color="primary" /> Financial Impact Analysis
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Est. Replenishment Cost</Typography>
                            <Typography variant="h4">$1.2M</Typography>
                            <Typography variant="caption">Next 30 Days</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Inventory Carrying Cost</Typography>
                            <Typography variant="h4">$45,000 / mo</Typography>
                            <Typography variant="caption">Storage + Capital</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Obsolescence Risk</Typography>
                            <Typography variant="h4" color="error">High</Typography>
                            <Typography variant="caption">For $120k of stock</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FinancialImpact;
