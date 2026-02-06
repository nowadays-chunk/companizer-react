
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Button
} from '@mui/material';
import {
    LocalShipping
} from '@mui/icons-material';

const Transfers = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <LocalShipping color="primary" /> Warehouse Transfers
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Optimization Suggestions</Typography>
                            <Box sx={{ p: 2, border: '1px dashed grey', borderRadius: 2 }}>
                                <Typography variant="subtitle1">Rebalance Opportunity</Typography>
                                <Typography variant="body2" paragraph>
                                    Move 50 units from <strong>Main DC</strong> to <strong>East Coast Hub</strong> to prevent stockout based on regional demand.
                                </Typography>
                                <Button variant="contained" size="small">Create Transfer Order</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Transfers;
