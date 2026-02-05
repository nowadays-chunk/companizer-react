import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Chip
} from '@mui/material';
import { Sync, AccountBalance, Link } from '@mui/icons-material';

const IntegrationArchitecture = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Integration Architecture</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>System Dependencies</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Paper variant="outlined" sx={{ p: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <AccountBalance color="primary" sx={{ mr: 1 }} />
                                        <Typography variant="subtitle1">General Ledger</Typography>
                                    </Box>
                                    <Typography variant="body2" color="textSecondary">Sync Status: <Chip label="Connected" size="small" color="success" /></Typography>
                                    <Typography variant="caption">Last Sync: 5 mins ago</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Paper variant="outlined" sx={{ p: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Sync color="secondary" sx={{ mr: 1 }} />
                                        <Typography variant="subtitle1">Treasury Payments</Typography>
                                    </Box>
                                    <Typography variant="body2" color="textSecondary">Sync Status: <Chip label="Connected" size="small" color="success" /></Typography>
                                    <Typography variant="caption">Push Mode: Real-time</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Paper variant="outlined" sx={{ p: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Link color="action" sx={{ mr: 1 }} />
                                        <Typography variant="subtitle1">FX Feed</Typography>
                                    </Box>
                                    <Typography variant="body2" color="textSecondary">Sync Status: <Chip label="Idle" size="small" /></Typography>
                                    <Typography variant="caption">Source: Bloomberg API</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Integration Logs</Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Journal Entry Posted: LOAN-ACC-2023-001" secondary="Re: Interest Accrual Oct 2023" />
                                <Chip label="Success" size="small" color="success" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Payment Request Sent: PYMT-9928" secondary="Principal Repayment" />
                                <Chip label="Success" size="small" color="success" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IntegrationArchitecture;
