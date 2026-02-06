
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    FormControlLabel,
    Checkbox,
    Button
} from '@mui/material';
import {
    RocketLaunch,
    Storefront
} from '@mui/icons-material';

const GoToMarket = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <RocketLaunch color="primary" /> Launch & Go-To-Market
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Launch Checklist</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <FormControlLabel control={<Checkbox checked />} label="Product Positioning Statement Finalized" />
                                <FormControlLabel control={<Checkbox />} label="Packaging Design Approved" />
                                <FormControlLabel control={<Checkbox />} label="Marketing Assets Created (Photo/Video)" />
                                <FormControlLabel control={<Checkbox />} label="Sales Training Completed" />
                                <FormControlLabel control={<Checkbox />} label="E-commerce PDP Page Drafted" />
                                <FormControlLabel control={<Checkbox />} label="Price List Active" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Channels</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Button variant="outlined" startIcon={<Storefront />} fullWidth sx={{ justifyContent: 'flex-start' }}>
                                        DTC / E-Commerce (Primary)
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" startIcon={<Storefront />} fullWidth sx={{ justifyContent: 'flex-start' }}>
                                        Retail Partner - REI
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" startIcon={<Storefront />} fullWidth sx={{ justifyContent: 'flex-start' }}>
                                        Retail Partner - Amazon
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default GoToMarket;
