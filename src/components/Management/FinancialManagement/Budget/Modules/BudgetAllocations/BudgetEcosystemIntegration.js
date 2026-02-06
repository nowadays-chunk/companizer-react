import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip, Button, CircularProgress } from '@mui/material';
import { Hub, Sync } from '@mui/icons-material';

const BudgetEcosystemIntegration = () => {
    const [syncing, setSyncing] = useState(false);

    const handleSync = () => {
        setSyncing(true);
        setTimeout(() => setSyncing(false), 2000);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Hub color="primary" /> Ecosystem Integration
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={syncing ? <CircularProgress size={20} /> : <Sync />}
                    onClick={handleSync}
                    disabled={syncing}
                >
                    {syncing ? 'Syncing Data...' : 'Sync All Feeds'}
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>General Ledger</Typography>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                <Chip label="GL Accounts Mapped: 100%" color="success" size="small" />
                                <Chip label="Real-Time Sync: Active" color="primary" size="small" />
                            </Box>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                Automatic actuals update from GL every 15 mins.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Procurement</Typography>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                <Chip label="PO Validation: Active" color="success" size="small" />
                                <Chip label="Encumbrance Logic: On" color="primary" size="small" />
                            </Box>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                Blocks PR/PO creation if budget is insufficient.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>HR & Payroll</Typography>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                <Chip label="Headcount Sync: Daily" color="success" size="small" />
                                <Chip label="Salary Forecast: Encrypted" color="warning" size="small" />
                            </Box>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                Forecasts personnel costs based on open requisitions.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BudgetEcosystemIntegration;
