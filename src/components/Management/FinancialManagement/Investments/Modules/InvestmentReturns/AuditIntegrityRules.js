import React, { useState } from 'react';
import { Box, Grid, Typography, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, Switch, Divider, Alert, Stack, Chip, Button } from '@mui/material';
import { CheckCircle, Add } from '@mui/icons-material';

const AuditIntegrityRules = () => {
    const [rules, setRules] = useState({
        lockPeriod: true,
        approvalThreshold: true,
        autoPost: false,
        excludeTest: true
    });

    const activeRules = Object.values(rules).filter(Boolean).length;

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Data Integrity & Automation Rules</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip
                        label={`${activeRules} Active Rules`}
                        color="success"
                        icon={<CheckCircle />}
                        size="small"
                    />
                    <Button variant="outlined" startIcon={<Add />} size="small">Add Rule</Button>
                </Stack>
            </Box>

            <Alert severity="success" sx={{ mb: 3 }}>
                All integrity rules are functioning correctly. Last validation: {new Date().toLocaleString()}
            </Alert>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper>
                        <List>
                            <ListItem>
                                <ListItemText primary="Prevent Recalculation after Period Lock" secondary="Ensures numbers don't change after reporting." />
                                <ListItemSecondaryAction><Switch defaultChecked /></ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText primary="Threshold for Manual Approval (Valuation > 5%)" secondary="Require 4-eyes check for large moves." />
                                <ListItemSecondaryAction><Switch defaultChecked /></ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText primary="Auto-Post Realized Gains to GL" secondary="Straight-through processing for disposals." />
                                <ListItemSecondaryAction><Switch defaultChecked /></ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText primary="Exclude 'Testing' Portfolios from Consolidation" secondary="Tags: #Testing, #Paper" />
                                <ListItemSecondaryAction><Switch /></ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Alert severity="info" variant="outlined">
                        <strong>Rule Engine Active</strong><br />
                        Last rule check ran: 10 mins ago. No exceptions found.
                    </Alert>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AuditIntegrityRules;
