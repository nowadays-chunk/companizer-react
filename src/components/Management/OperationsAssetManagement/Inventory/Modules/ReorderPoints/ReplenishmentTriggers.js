
import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip } from '@mui/material';
import { Rule } from '@mui/icons-material';

const ReplenishmentTriggers = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Rule color="primary" /> Replenishment Triggers Logic
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Primary Trigger</Typography>
                            <Typography variant="body1">
                                Available Stock ("On Hand" + "In Transit" - "Reserved") ≤ <strong>Reorder Point</strong>
                            </Typography>
                            <Chip label="Active Rule" color="primary" size="small" sx={{ mt: 1 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Negative Stock Protection</Typography>
                            <Typography variant="body1">
                                If Stock &lt; 0, trigger <strong>Emergency Reorder</strong> immediately.
                            </Typography>
                            <Chip label="Safety Guard" color="error" size="small" sx={{ mt: 1 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>In-Transit Handling</Typography>
                            <Typography variant="body1">
                                Include inbound POs arriving within <strong>3 days</strong> in available stock.
                            </Typography>
                            <Chip label="Optimization" color="info" size="small" sx={{ mt: 1 }} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReplenishmentTriggers;
