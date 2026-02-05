import React from 'react';
import { Box, Button, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Checkbox, LinearProgress, Alert } from '@mui/material';
import { LockClock } from '@mui/icons-material';

const PeriodCloseIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Period & Close Integration</Typography>
                <Typography variant="h6" color="error">Period Status: OPEN (Days Remaining: 3)</Typography>
            </Box>

            <Alert severity="warning" sx={{ mb: 3 }}>
                Close cannot be finalized. Pending Valuation approvals.
            </Alert>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Close Checklist</Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon><Checkbox checked /></ListItemIcon>
                                <ListItemText primary="Record Acquisitions/Disposals" secondary="All transactions posted." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><Checkbox checked /></ListItemIcon>
                                <ListItemText primary="Process Dividends" secondary="Receivables confirmed." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><Checkbox /></ListItemIcon>
                                <ListItemText primary="Update Validations" secondary="Mark-to-Market pending approval." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><Checkbox /></ListItemIcon>
                                <ListItemText primary="Impairment Review" secondary="Sign-off required." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><Checkbox /></ListItemIcon>
                                <ListItemText primary="FX Revaluation" secondary="Pending final rates." />
                            </ListItem>
                        </List>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="caption">Progress: 40%</Typography>
                            <LinearProgress variant="determinate" value={40} />
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, bgcolor: '#fafafa', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <LockClock sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                        <Typography variant="h6" gutterBottom>Snapshot Values</Typography>
                        <Typography variant="body2" paragraph>
                            Once the period is closed, all investment carrying values and fair value measurements will be locked and snapshot for historical reporting.
                        </Typography>
                        <Button variant="contained" disabled>Execute Soft Close</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PeriodCloseIntegration;
