
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Stepper,
    Step,
    StepLabel,
    Chip,
    Switch,
    FormControlLabel
} from '@mui/material';
import {
    Autorenew,
    Block,
    Lock
} from '@mui/icons-material';

const LifecycleStatus = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Autorenew color="primary" /> Lifecycle Status Management
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Current Status: <Chip label="Phase-Out" color="warning" /></Typography>
                            <Stepper activeStep={2} alternativeLabel sx={{ mt: 3, mb: 2 }}>
                                <Step completed>
                                    <StepLabel>Active</StepLabel>
                                </Step>
                                <Step completed>
                                    <StepLabel>Maturity</StepLabel>
                                </Step>
                                <Step active>
                                    <StepLabel>Phase-Out (Ordering Stop)</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>End of Life (Shipping Stop)</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>Discontinued (Obsolete)</StepLabel>
                                </Step>
                            </Stepper>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Operational Controls</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <FormControlLabel control={<Switch defaultChecked />} label={<Typography color="error"><Block fontSize="small" /> Block New Purchase Orders</Typography>} />
                                <FormControlLabel control={<Switch defaultChecked />} label={<Typography color="error"><Block fontSize="small" /> Block New Manufacturing Orders</Typography>} />
                                <FormControlLabel control={<Switch />} label={<Typography color="warning.main"><Lock fontSize="small" /> Limit Sales to Existing Stock</Typography>} />
                                <FormControlLabel control={<Switch />} label="Exclude from Price Lists" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Effective Dates</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2">Last Buy Date</Typography>
                                    <Typography variant="body1">2026-06-30</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2">Last Ship Date</Typography>
                                    <Typography variant="body1">2026-12-31</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2">Service End Date</Typography>
                                    <Typography variant="body1">2028-12-31</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LifecycleStatus;
