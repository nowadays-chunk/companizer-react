import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Divider, CircularProgress } from '@mui/material';
import { Public, Sync, CheckCircle } from '@mui/icons-material';

const ExternalDataIntegration = () => {
    const [status, setStatus] = useState({
        bloomberg: { synced: true, time: '2 mins ago' },
        fed: { synced: false, time: '1 day ago' },
        fx: { synced: true, time: '5 mins ago' }
    });
    const [syncing, setSyncing] = useState('');

    const handleSync = (key) => {
        setSyncing(key);
        setTimeout(() => {
            setStatus(prev => ({
                ...prev,
                [key]: { synced: true, time: 'Just now' }
            }));
            setSyncing('');
        }, 2000);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Public color="primary" /> External Data Integration
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography variant="h6">Bloomberg Market Data</Typography>
                                {status.bloomberg.synced ? <CheckCircle color="success" /> : <Public color="action" />}
                            </Box>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Commodities, Benchmarks, Competitor Financials
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="caption">Last Sync: {status.bloomberg.time}</Typography>
                                <Button
                                    size="small"
                                    startIcon={syncing === 'bloomberg' ? <CircularProgress size={16} /> : <Sync />}
                                    onClick={() => handleSync('bloomberg')}
                                    disabled={!!syncing}
                                >
                                    {syncing === 'bloomberg' ? 'Syncing...' : 'Sync Now'}
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography variant="h6">Federal Reserve API</Typography>
                                {status.fed.synced ? <CheckCircle color="success" /> : <Public color="action" />}
                            </Box>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Interest Rates, GDP Growth, Inflation Data
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="caption">Last Sync: {status.fed.time}</Typography>
                                <Button
                                    size="small"
                                    startIcon={syncing === 'fed' ? <CircularProgress size={16} /> : <Sync />}
                                    onClick={() => handleSync('fed')}
                                    disabled={!!syncing}
                                >
                                    {syncing === 'fed' ? 'Syncing...' : 'Sync Now'}
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography variant="h6">FX Rates Provider</Typography>
                                {status.fx.synced ? <CheckCircle color="success" /> : <Public color="action" />}
                            </Box>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Real-time EUR/USD, GBP/USD, JPY/USD Rates
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="caption">Last Sync: {status.fx.time}</Typography>
                                <Button
                                    size="small"
                                    startIcon={syncing === 'fx' ? <CircularProgress size={16} /> : <Sync />}
                                    onClick={() => handleSync('fx')}
                                    disabled={!!syncing}
                                >
                                    {syncing === 'fx' ? 'Syncing...' : 'Sync Now'}
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ExternalDataIntegration;
