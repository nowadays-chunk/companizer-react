
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Switch,
    FormControlLabel,
    Avatar,
    Button
} from '@mui/material';
import {
    Storefront,
    Language,
    PhoneIphone,
    Public
} from '@mui/icons-material';

const CategoryChannels = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Storefront color="primary" /> Sales Channels & Regional Availability
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Channel Visibility</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <Card variant="outlined" sx={{ p: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Public color="primary" /> Main Website
                                            </Box>
                                            <Switch defaultChecked />
                                        </Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                            Visible on public e-commerce store.
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
                                            Available for wholesale (login required).
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Card variant="outlined" sx={{ p: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <PhoneIphone color="action" /> Mobile App
                                            </Box>
                                            <Switch />
                                        </Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                            Hidden on mobile app.
                                        </Typography>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Regional Restrictions</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch checked />} label="Available Globally" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle2" gutterBottom>Excluded Regions</Typography>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        <Button variant="outlined" size="small" color="error" startIcon={<Public />}>Add Region Exclusion</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Entity Assignment</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch checked />} label="US Entity" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch checked />} label="EU Entity (Ireland)" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch />} label="APAC Entity (Singapore)" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryChannels;
