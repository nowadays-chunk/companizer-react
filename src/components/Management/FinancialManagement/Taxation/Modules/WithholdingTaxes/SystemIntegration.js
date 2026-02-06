import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Chip } from '@mui/material';
import { SettingsInputComponent, CheckCircle, Warning } from '@mui/icons-material';

const SystemIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight="600" gutterBottom>System Integration</Typography>
            <Typography variant="body2" color="textSecondary" mb={3}>
                Monitor connections with other ERP modules and external services.
            </Typography>

            <Grid container spacing={3}>
                {[
                    { mod: 'Purchase Management', status: 'Connected', ping: '12ms', last: 'Just now' },
                    { mod: 'Accounts Payable', status: 'Connected', ping: '8ms', last: 'Just now' },
                    { mod: 'General Ledger', status: 'Connected', ping: '15ms', last: '1 min ago' },
                    { mod: 'Payroll System', status: 'Sync Pending', ping: '45ms', last: '2 hours ago', warn: true },
                    { mod: 'Bank Gateway', status: 'Connected', ping: '120ms', last: '5 mins ago' },
                    { mod: 'Tax Authority API (IRS)', status: 'Connected', ping: '300ms', last: '1 hour ago' },
                ].map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card variant="outlined">
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <SettingsInputComponent fontSize="small" color="primary" />
                                    <Typography variant="h6" fontSize="1rem">{item.mod}</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Chip
                                        icon={item.warn ? <Warning /> : <CheckCircle />}
                                        label={item.status}
                                        color={item.warn ? 'warning' : 'success'}
                                        size="small"
                                        variant="outlined"
                                    />
                                    <Typography variant="caption" color="textSecondary">Ping: {item.ping}</Typography>
                                </Box>
                                <Typography variant="caption" display="block" mt={1}>Last Sync: {item.last}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SystemIntegration;
