import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, CircularProgress, Alert, Snackbar } from '@mui/material';
import { Transform, Update } from '@mui/icons-material';

const ForecastAdjustmentIntegration = () => {
    const [updating, setUpdating] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleUpdate = () => {
        setUpdating(true);
        setTimeout(() => {
            setUpdating(false);
            setSuccess(true);
        }, 1500);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Transform color="primary" /> Forecast Adjustment Integration
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Recommended Adjustments</Typography>
                            <Typography variant="body2" paragraph>
                                Based on YTD variance trends, the following adjustments to the Q4 forecast are recommended:
                            </Typography>
                            <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
                                <Typography variant="subtitle2">Q4 Travel Budget Reduction</Typography>
                                <Typography variant="caption" display="block">Reason: Consistent underspend in Q1-Q3 (-15%)</Typography>
                                <Typography variant="caption" display="block">Proposed Impact: -$25,000</Typography>
                            </Box>
                            <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1 }}>
                                <Typography variant="subtitle2">Q4 Software COGS Increase</Typography>
                                <Typography variant="caption" display="block">Reason: Price hike from key vendor not in original budget (+5%)</Typography>
                                <Typography variant="caption" display="block">Proposed Impact: +$12,000</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={updating ? <CircularProgress size={20} color="inherit" /> : <Update />}
                                onClick={handleUpdate}
                                disabled={updating}
                            >
                                {updating ? 'Applying...' : 'Apply Adjustments'}
                            </Button>
                            <Typography variant="caption">Updates 'Working Forecast v2.4'</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
                <Alert severity="success">Forecast updated successfully!</Alert>
            </Snackbar>
        </Box>
    );
};

export default ForecastAdjustmentIntegration;
