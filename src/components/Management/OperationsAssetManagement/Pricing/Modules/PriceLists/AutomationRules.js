
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    FormControlLabel,
    Switch,
    Alert
} from '@mui/material';
import {
    AutoMode,
    TrendingUp
} from '@mui/icons-material';

const AutomationRules = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <AutoMode color="primary" /> Automation Engine
            </Typography>

            <Alert severity="warning" sx={{ mb: 3 }}>
                Automated changes will trigger a notification for approval unless 'Auto-Approve' is enabled.
            </Alert>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Cost-Based Updates</Typography>
                            <FormControlLabel control={<Switch checked />} label="Auto-update price when Standard Cost changes" />
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                                Maintains fixed margin %
                            </Typography>

                            <FormControlLabel control={<Switch />} label="Protect Minimum Margin" />
                            <Typography variant="caption" display="block" color="text.secondary">
                                Do not lower price below min margin threshold logic.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>FX Rate Updates</Typography>
                            <FormControlLabel control={<Switch checked />} label="Sync with Daily FX Rates" />
                            <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <TrendingUp fontSize="small" /> Threshold Buffer: 5%
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Only update price if FX movement exceeds 5%.
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AutomationRules;
