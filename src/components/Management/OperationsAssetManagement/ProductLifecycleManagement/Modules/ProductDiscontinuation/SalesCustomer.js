
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Alert,
    Button
} from '@mui/material';
import {
    Storefront,
    Mail
} from '@mui/icons-material';

const SalesCustomer = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Storefront color="primary" /> Sales & Customer Handling
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Customer Communications</Typography>
                            <Alert severity="info" sx={{ mb: 2 }}>2 Key Accounts purchase this product regularly.</Alert>
                            <Button variant="contained" fullWidth startIcon={<Mail />}>Send EOL Notification</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Sales Controls</Typography>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Sales Block</Typography>
                                <Typography variant="body2" color="success.main">Active - Enforced in Order Entry</Typography>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Warranty Support</Typography>
                                <Typography variant="body2">Obligation continues until 2028.</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SalesCustomer;
