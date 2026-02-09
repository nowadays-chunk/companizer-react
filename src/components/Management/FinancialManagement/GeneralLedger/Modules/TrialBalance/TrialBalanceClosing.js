import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Alert,
    Tabs,
    Tab,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Chip
} from '@mui/material';
import {
    Lock,
    LockOpen,
    CheckCircle,
    Warning,
    Edit,
    HistoryEdu
} from '@mui/icons-material';

import { fieldsConfig, collectionName, entityName } from './Modules/General/TrialBalanceClosingConfig';

const TrialBalanceClosing = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>Closing & Adjustments</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={0} variant="outlined" sx={{ mb: 3 }}>
                        <Tabs value={tabValue} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#f9fafb' }}>
                            <Tab label="Period Management" />
                            <Tab label="Adjusting Entries" />
                            <Tab label="Reconciliations" />
                        </Tabs>

                        <Box sx={{ p: 3 }}>
                            {tabValue === 0 && (
                                <Box>
                                    <Alert severity="warning" sx={{ mb: 3 }}>
                                        Current Period: <strong>January 2026</strong> is currently <strong>Scanning/Soft Close</strong>.
                                    </Alert>

                                    <Typography variant="h6" gutterBottom>Close Checklist</Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                            <ListItemText primary="Review Unposted Journals" secondary="All regular journals posted" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                            <ListItemText primary="Reconcile Bank Accounts" secondary="All accounts balanced" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon><Warning color="warning" /></ListItemIcon>
                                            <ListItemText primary="Review Suspense Accounts" secondary="2 items pending review" />
                                        </ListItem>
                                    </List>

                                    <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                                        <Button variant="contained" color="primary" startIcon={<Lock />}>
                                            Perform Hard Close
                                        </Button>
                                        <Button variant="outlined" color="secondary" startIcon={<LockOpen />}>
                                            Re-open Period
                                        </Button>
                                    </Box>
                                </Box>
                            )}

                            {tabValue === 1 && (
                                <Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                        <Typography variant="h6">Adjustments Queue</Typography>
                                        <Button startIcon={<Edit />} variant="contained" size="small">New Adjustment</Button>
                                    </Box>
                                    <Alert severity="info" sx={{ mb: 2 }}>Showing unposted adjustments for Jan 2026.</Alert>
                                    {/* Placeholder for list of adjustments */}
                                    <Typography variant="body2" color="textSecondary">No pending adjustments found.</Typography>
                                </Box>
                            )}

                            {tabValue === 2 && (
                                <Box>
                                    <Typography variant="h6" gutterBottom>Account Reconciliations</Typography>
                                    <Typography variant="body2" color="textSecondary">Reconciliation dashboard coming soon.</Typography>
                                </Box>
                            )}
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper elevation={0} variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Closing Status</Typography>
                        <Divider sx={{ mb: 2 }} />

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" color="textSecondary">Last Closed Period</Typography>
                            <Typography variant="body1" fontWeight="medium">December 2025</Typography>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" color="textSecondary">Retained Earnings Rollover</Typography>
                            <Typography variant="body1" color="success.main">Verified</Typography>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" color="textSecondary">Open Issues</Typography>
                            <Chip label="2 Low Priority" size="small" variant="outlined" />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TrialBalanceClosing;
