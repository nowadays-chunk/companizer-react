
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
    Chip
} from '@mui/material';
import {
    Factory,
    CancelScheduleSend
} from '@mui/icons-material';

const SupplierClosure = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Factory color="primary" /> Supplier & Procurement Closure
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Impacted Suppliers</Typography>
                            <Box sx={{ p: 2, border: '1px solid #eee', borderRadius: 1 }}>
                                <Typography variant="subtitle1" fontWeight="bold">SolarTech Components Inc.</Typography>
                                <Typography variant="body2" color="text.secondary">Primary Supplier of Raw Material A</Typography>
                                <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                                    <Chip label="Contract Active" color="success" size="small" />
                                    <Chip label="Notification Pending" color="warning" size="small" />
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Button size="small" variant="outlined" startIcon={<CancelScheduleSend />}>Notify Termination</Button>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Open Purchase Orders</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                <Typography>PO-9982 (Material A)</Typography>
                                <Button size="small" color="error">Cancel PO</Button>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography>PO-9990 (Packaging)</Typography>
                                <Button size="small" color="error">Cancel PO</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SupplierClosure;
