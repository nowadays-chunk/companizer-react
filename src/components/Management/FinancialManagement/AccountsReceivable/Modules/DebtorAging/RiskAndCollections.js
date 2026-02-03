
import React from 'react';
import { Box, Typography, Grid, Paper, Chip, List, ListItem, ListItemText, ListItemIcon, Button } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const RiskAndCollections = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Risk Indicators & Collection Triggers</Typography>

            <Grid container spacing={3}>
                {/* 4. Overdue & Risk Indicators */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Risk Alerts (AI Detected)</Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon><WarningIcon color="error" /></ListItemIcon>
                                <ListItemText primary="Rapid Deterioration Alert" secondary="Customer 'TechSoft' moved from 30 to 90 days bucket" />
                                <Button size="small" variant="outlined" color="error">Investigate</Button>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><BlockIcon color="warning" /></ListItemIcon>
                                <ListItemText primary="Credit Limit Breached" secondary="3 Customers > 110% Utilization" />
                                <Button size="small" variant="outlined" color="warning">Review</Button>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><WarningIcon color="action" /></ListItemIcon>
                                <ListItemText primary="Broken Promise-to-Pay" secondary="5 active cases today" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                {/* 6. Collections & Dunning Integration */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Automated Collection Actions</Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Level 1 Dunning Sent" secondary="150 emails triggered based on 15+ days overdue" />
                                <Chip label="Auto" color="success" size="small" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Level 2 Dunning Pending" secondary="Requires manager approval (High Value)" />
                                <Chip label="Pending" color="warning" size="small" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Legal Escalation" secondary="Recommended for 'Old Ventures' (>120 days)" />
                                <Button size="small" variant="outlined">Escalate</Button>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                {/* 9. Exceptions, Holds & Disputes */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Exceptions & Disputes</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Box sx={{ border: '1px solid #ccc', p: 2, borderRadius: 1 }}>
                                    <Typography variant="subtitle2">Disputed Aging</Typography>
                                    <Typography variant="h5">$45,200</Typography>
                                    <Typography variant="caption" color="textSecondary">Excluded from standard dunning</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{ border: '1px solid #ccc', p: 2, borderRadius: 1 }}>
                                    <Typography variant="subtitle2">On-Hold Balances</Typography>
                                    <Typography variant="h5">$12,000</Typography>
                                    <Typography variant="caption" color="textSecondary">Manual account holds</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{ border: '1px solid #ccc', p: 2, borderRadius: 1 }}>
                                    <Typography variant="subtitle2">Insured Exposure</Typography>
                                    <Typography variant="h5">$900,000</Typography>
                                    <Typography variant="caption" color="textSecondary">Covered by Trade Insurance</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RiskAndCollections;
