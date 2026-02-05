import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Divider, Chip } from '@mui/material';
import { Receipt, Payments, Groups, AccountBalanceWallet, Link, CheckCircle, Sync } from '@mui/icons-material';

const ModuleIntegration = () => {
    const modules = [
        { name: 'Accounts Payable', icon: Receipt, status: 'Connected', lastSync: '10 mins ago', desc: 'Source of expense-based credits' },
        { name: 'Accounts Receivable', icon: Payments, status: 'Connected', lastSync: '1 hr ago', desc: 'Source of revenue-based liabilities' },
        { name: 'Human Resources', icon: Groups, status: 'Syncing...', lastSync: 'Just now', desc: 'Payroll tax data' },
        { name: 'General Ledger', icon: AccountBalanceWallet, status: 'Connected', lastSync: '5 mins ago', desc: 'Posting journal entries' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">Module Integration Status</Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
                Monitor data flow between Tax Credits and other ERP modules.
            </Typography>

            <Grid container spacing={3}>
                {modules.map((mod, idx) => (
                    <Grid item xs={12} md={6} lg={3} key={idx}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                                    <mod.icon fontSize="large" color="primary" />
                                    {mod.status === 'Connected' ? (
                                        <Chip icon={<CheckCircle />} label="Active" color="success" size="small" variant="outlined" />
                                    ) : (
                                        <Chip icon={<Sync sx={{ animation: 'spin 2s linear infinite' }} />} label="Syncing" color="primary" size="small" variant="outlined" />
                                    )}
                                </Box>
                                <Typography variant="h6" gutterBottom>{mod.name}</Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    {mod.desc}
                                </Typography>
                                <Divider sx={{ my: 2 }} />
                                <Box display="flex" alignItems="center">
                                    <Link fontSize="small" color="action" sx={{ mr: 1 }} />
                                    <Typography variant="caption" color="textSecondary">
                                        Last sync: {mod.lastSync}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ModuleIntegration;
