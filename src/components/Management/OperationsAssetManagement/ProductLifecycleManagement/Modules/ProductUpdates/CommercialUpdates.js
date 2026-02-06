
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    FormControlLabel,
    Checkbox,
    TextField,
    Alert
} from '@mui/material';
import {
    AttachMoney,
    Storefront
} from '@mui/icons-material';

const CommercialUpdates = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <AttachMoney color="primary" /> Commercial & Pricing Updates
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Price List Trigger</Typography>
                            <Alert severity="info" sx={{ mb: 2 }}>Updating base cost will trigger a margin warning on connected price lists.</Alert>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Update Standard Cost in ERP" />
                                <FormControlLabel control={<Checkbox />} label="Recalculate Base Price" />
                                <FormControlLabel control={<Checkbox />} label="Notify Sales of Price Change" />
                            </Box>

                            <Box sx={{ mt: 3 }}>
                                <TextField fullWidth label="New Base Price" defaultValue="135.99" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Attribute Updates</Typography>
                            <Box sx={{ mb: 2 }}>
                                <TextField fullWidth label="Marketing Description" multiline rows={2} defaultValue="Updated 2026 Model - Now with 20% more specific efficiency." />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <TextField fullWidth label="Feature Tags" defaultValue="Solar, Sustainable, Fast-Charge" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CommercialUpdates;
