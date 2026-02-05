import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AccountBalance, Description, SettingsInputComponent } from '@mui/icons-material';

const DebtSourceIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Debt Source Integration</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <AccountBalance color="primary" sx={{ fontSize: 40, mr: 2 }} />
                                <Box>
                                    <Typography variant="h6">Loan Agreements</Typography>
                                    <Typography variant="caption">Primary Source</Typography>
                                </Box>
                            </Box>
                            <Typography variant="h4">12</Typography>
                            <Typography variant="body2" color="textSecondary">Active Agreements Linked</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Description color="secondary" sx={{ fontSize: 40, mr: 2 }} />
                                <Box>
                                    <Typography variant="h6">Lease Liabilities</Typography>
                                    <Typography variant="caption">IFRS 16 / ASC 842</Typography>
                                </Box>
                            </Box>
                            <Typography variant="h4">45</Typography>
                            <Typography variant="body2" color="textSecondary">Lease Schedules Integrated</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <SettingsInputComponent color="action" sx={{ fontSize: 40, mr: 2 }} />
                                <Box>
                                    <Typography variant="h6">Intercompany</Typography>
                                    <Typography variant="caption">Group Funding</Typography>
                                </Box>
                            </Box>
                            <Typography variant="h4">8</Typography>
                            <Typography variant="body2" color="textSecondary">Internal Loans Mapped</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Integration Status</Typography>
                        <List>
                            <ListItem divider>
                                <ListItemIcon><AccountBalance color="success" /></ListItemIcon>
                                <ListItemText primary="Term Loans (Bonds)" secondary="Last Sync: 2 mins ago" />
                                <Chip label="Healthy" color="success" size="small" />
                            </ListItem>
                            <ListItem divider>
                                <ListItemIcon><Description color="success" /></ListItemIcon>
                                <ListItemText primary="Equipment Leases" secondary="Last Sync: 1 hour ago" />
                                <Chip label="Healthy" color="success" size="small" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><SettingsInputComponent color="warning" /></ListItemIcon>
                                <ListItemText primary="Vendor Financing" secondary="Last Sync: 2 days ago" />
                                <Chip label="Check Connection" color="warning" size="small" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
export default DebtSourceIntegration;
