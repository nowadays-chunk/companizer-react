
import React from 'react';
import { Box, Typography, Card, CardContent, Grid, TextField, LinearProgress } from '@mui/material';
import { LocalShipping } from '@mui/icons-material';

const LeadTimeManagement = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocalShipping color="primary" /> Lead Time Management
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Supplier Lead Time</Typography>
                            <TextField fullWidth label="Standard Lead Time (Days)" type="number" defaultValue={14} sx={{ mb: 2 }} />
                            <TextField fullWidth label="Variability (+/- Days)" type="number" defaultValue={2} sx={{ mb: 2 }} />
                            <Typography variant="body2" color="text.secondary">Reliability Score: 92%</Typography>
                            <LinearProgress variant="determinate" value={92} color="success" sx={{ mt: 1 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Internal Processing</Typography>
                            <TextField fullWidth label="Inspection & Put-away (Days)" type="number" defaultValue={2} sx={{ mb: 2 }} />
                            <TextField fullWidth label="Transit Time (Days)" type="number" defaultValue={5} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LeadTimeManagement;
