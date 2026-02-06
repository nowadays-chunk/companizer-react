
import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { Hub } from '@mui/icons-material';

const MultiWarehousePlanning = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Hub color="primary" /> Network Planning (Multi-Warehouse)
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Central Replenishment</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Master ROP calculated at Global Hub level. Distributed to regional warehouses based on pull demand.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Inter-Warehouse Transfer Rules</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                If Regional Stock &lt; Safety Stock AND Central Hub Stock &gt; 200%, auto-trigger Transfer Order.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MultiWarehousePlanning;
