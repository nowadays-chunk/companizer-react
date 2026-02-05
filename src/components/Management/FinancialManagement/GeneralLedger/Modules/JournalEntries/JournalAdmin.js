import React, { useState } from 'react';
import {
    Box,
    Grid,
    Paper,
    Typography,
    Card,
    CardContent,
    Switch,
    FormControlLabel,
    Button,
    Divider,
    IconButton,
    Alert
} from '@mui/material';
import {
    Settings,
    VerifiedUser,
    DateRange,
    Save,
    Rule
} from '@mui/icons-material';

const JournalAdmin = () => {
    const [settings, setSettings] = useState({
        allowManualIntercompany: true,
        requireApprovalAbove: 5000,
        enforceBalancedJournals: true,
        allowFuturePosting: false,
        lockClosedPeriods: true,
        autoReverseAccruals: true,
        defaultCurrency: 'USD'
    });

    const [saved, setSaved] = useState(false);

    const handleToggle = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
        setSaved(false);
    };

    const handleSave = () => {
        // Mock save API
        setTimeout(() => {
            setSaved(true);
        }, 500);
    };

    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4" fontWeight="bold" display="flex" alignItems="center">
                    <Settings sx={{ mr: 2, fontSize: 32 }} />
                    Journal Administration
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<Save />}
                    onClick={handleSave}
                    color="primary"
                >
                    Save Configuration
                </Button>
            </Box>

            {saved && (
                <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSaved(false)}>
                    Configuration saved successfully.
                </Alert>
            )}

            <Grid container spacing={3}>
                {/* General Policies */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom display="flex" alignItems="center">
                                <VerifiedUser sx={{ mr: 1, color: 'text.secondary' }} />
                                Posting & Compliance Policies
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box display="flex" flexDirection="column" gap={1}>
                                <FormControlLabel
                                    control={<Switch checked={settings.enforceBalancedJournals} onChange={() => handleToggle('enforceBalancedJournals')} />}
                                    label="Enforce Balanced Journals (Credits = Debits)"
                                />
                                <FormControlLabel
                                    control={<Switch checked={settings.autoReverseAccruals} onChange={() => handleToggle('autoReverseAccruals')} />}
                                    label="Auto-Reverse Accruals in Next Period"
                                />
                                <FormControlLabel
                                    control={<Switch checked={settings.allowManualIntercompany} onChange={() => handleToggle('allowManualIntercompany')} />}
                                    label="Allow Manual Intercompany Entries"
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Period Controls */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom display="flex" alignItems="center">
                                <DateRange sx={{ mr: 1, color: 'text.secondary' }} />
                                Fiscal Period Controls
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box display="flex" flexDirection="column" gap={1}>
                                <FormControlLabel
                                    control={<Switch checked={settings.lockClosedPeriods} onChange={() => handleToggle('lockClosedPeriods')} />}
                                    label="Prevent Posting to Closed Periods"
                                />
                                <FormControlLabel
                                    control={<Switch checked={settings.allowFuturePosting} onChange={() => handleToggle('allowFuturePosting')} />}
                                    label="Allow Posting to Future Periods"
                                />
                            </Box>
                            <Box mt={2} p={2} bgcolor="background.default" borderRadius={1}>
                                <Typography variant="subtitle2" color="textSecondary">Current Open Period</Typography>
                                <Typography variant="h5">February 2026</Typography>
                                <Button size="small" sx={{ mt: 1 }}>Manage Periods</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Workflow Rules */}
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom display="flex" alignItems="center">
                                <Rule sx={{ mr: 1, color: 'text.secondary' }} />
                                Approval Workflow Rules
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <Paper variant="outlined" sx={{ p: 2 }}>
                                        <Typography variant="subtitle1">Manual Journals</Typography>
                                        <Typography variant="body2" color="textSecondary">Require approval &gt; $5,000</Typography>
                                        <Button size="small">Edit Rule</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Paper variant="outlined" sx={{ p: 2 }}>
                                        <Typography variant="subtitle1">Intercompany</Typography>
                                        <Typography variant="body2" color="textSecondary">Always require partner approval</Typography>
                                        <Button size="small">Edit Rule</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Paper variant="outlined" sx={{ p: 2 }}>
                                        <Typography variant="subtitle1">System Generated</Typography>
                                        <Typography variant="body2" color="textSecondary">Auto-approve (Whitelisted Sources)</Typography>
                                        <Button size="small">Edit Rule</Button>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default JournalAdmin;
