import React from 'react';
import { Box, Typography, Grid, Card, CardContent, LinearProgress } from '@mui/material';

const jurisdictions = [
    { country: 'United Kingdom', vatId: 'GB 123 456 789', threshold: 85, currency: 'GBP' },
    { country: 'Germany', vatId: 'DE 987 654 321', threshold: 40, currency: 'EUR' },
    { country: 'France', vatId: 'FR 11 22 33 44', threshold: 25, currency: 'EUR' },
];

const MultiJurisdictionVAT = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Multi-Jurisdiction Registration</Typography>

            <Grid container spacing={3}>
                {jurisdictions.map((j) => (
                    <Grid item xs={12} md={4} key={j.country}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{j.country}</Typography>
                                <Typography color="textSecondary" gutterBottom>{j.vatId}</Typography>

                                <Box sx={{ mt: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant="body2">Threshold Usage</Typography>
                                        <Typography variant="body2">{j.threshold}%</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={j.threshold} color={j.threshold > 80 ? 'warning' : 'primary'} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MultiJurisdictionVAT;
