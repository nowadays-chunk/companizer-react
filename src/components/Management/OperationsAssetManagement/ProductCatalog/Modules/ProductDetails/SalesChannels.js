
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    FormControlLabel,
    Switch,
    Chip,
    TextField,
    Button
} from '@mui/material';
import {
    Storefront,
    Language,
    ShoppingCart
} from '@mui/icons-material';

const SalesChannels = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Storefront color="primary" /> Sales Channels & Availability
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Channel Availability</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <Card variant="outlined" sx={{ p: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Language color="primary" /> Website (B2C)
                                            </Box>
                                            <Switch defaultChecked />
                                        </Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                            Visible on main e-commerce site.
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Card variant="outlined" sx={{ p: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Storefront color="secondary" /> B2B Portal
                                            </Box>
                                            <Switch defaultChecked />
                                        </Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                            Available for wholesale partners.
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Card variant="outlined" sx={{ p: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <ShoppingCart color="action" /> POS (Retail)
                                            </Box>
                                            <Switch />
                                        </Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                            Not available in physical stores.
                                        </Typography>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Marketing Info</Typography>
                            <TextField
                                fullWidth
                                label="SEO Title"
                                defaultValue="Enterprise Server X1 - High Performance Rack Mount"
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Meta Description"
                                multiline
                                rows={2}
                                defaultValue="Buy the Enterprise Server X1. Best in class performance for high-load applications."
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="URL Key / Slug"
                                defaultValue="enterprise-server-x1"
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Media & Assets</Typography>
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                                <Box sx={{ width: 100, height: 100, bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 1 }}>
                                    Image 1
                                </Box>
                                <Box sx={{ width: 100, height: 100, bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 1 }}>
                                    Image 2
                                </Box>
                                <Button variant="outlined" sx={{ width: 100, height: 100 }}>+ Add</Button>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                Drag and drop images here. 1200x1200px recommended.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SalesChannels;
