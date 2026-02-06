
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    Button,
    LinearProgress
} from '@mui/material';
import {
    Campaign,
    Timer,
    RocketLaunch
} from '@mui/icons-material';

const PromotionCampaigns = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Campaign color="primary" /> Promotions & Campaigns
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Active Campaign Configuration</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Campaign Name" defaultValue="Summer Clearance 2026" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth type="datetime-local" label="Start Date" InputLabelProps={{ shrink: true }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth type="datetime-local" label="End Date" InputLabelProps={{ shrink: true }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Promotion Logic"
                                        defaultValue="Flat 20% Off Selected Categories"
                                        multiline
                                        rows={2}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Bulk Operations</Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button variant="outlined" startIcon={<RocketLaunch />}>Apply to Category</Button>
                                <Button variant="outlined" startIcon={<RocketLaunch />}>Apply by Tag</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: 'secondary.light', color: 'secondary.contrastText' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Timer /> Time Remaining
                            </Typography>
                            <Typography variant="h3">4d 12h</Typography>
                            <LinearProgress variant="determinate" value={60} color="inherit" sx={{ mt: 2, opacity: 0.5 }} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PromotionCampaigns;
