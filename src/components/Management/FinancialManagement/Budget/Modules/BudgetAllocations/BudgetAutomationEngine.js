import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Switch, FormControlLabel, Grid, CircularProgress, Snackbar, Alert } from '@mui/material';
import { AutoMode, PlayArrow } from '@mui/icons-material';

const BudgetAutomationEngine = () => {
    const [running, setRunning] = useState(false);
    const [success, setSuccess] = useState(false);
    const [switches, setSwitches] = useState({
        rollForward: true,
        forecastSnapshot: true,
        notifyApprovers: false,
        blockPOs: true
    });

    const handleRun = () => {
        setRunning(true);
        setTimeout(() => {
            setRunning(false);
            setSuccess(true);
        }, 2000);
    };

    const handleSwitchChange = (name) => {
        setSwitches({ ...switches, [name]: !switches[name] });
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AutoMode color="primary" /> Automation Engine
                </Typography>
                <Button
                    variant="contained"
                    startIcon={running ? <CircularProgress size={20} color="inherit" /> : <PlayArrow />}
                    onClick={handleRun}
                    disabled={running}
                >
                    {running ? 'Running Rules...' : 'Trigger Manual Run'}
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Active Rules</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <FormControlLabel
                                    control={<Switch checked={switches.rollForward} onChange={() => handleSwitchChange('rollForward')} />}
                                    label="Auto-Roll Forward Unused Budget (Year-End)"
                                />
                                <FormControlLabel
                                    control={<Switch checked={switches.forecastSnapshot} onChange={() => handleSwitchChange('forecastSnapshot')} />}
                                    label="Auto-Create Forecast Snapshot (Monthly)"
                                />
                                <FormControlLabel
                                    control={<Switch checked={switches.notifyApprovers} onChange={() => handleSwitchChange('notifyApprovers')} />}
                                    label="Notify Approvers (48h Pending)"
                                />
                                <FormControlLabel
                                    control={<Switch checked={switches.blockPOs} onChange={() => handleSwitchChange('blockPOs')} />}
                                    label="Block POs if Budget < 0"
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Allocation Drivers</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Automatically distribute corporate overhead based on:
                            </Typography>
                            <Box sx={{ pl: 2, borderLeft: '4px solid #1976d2' }}>
                                <Typography>Headcount Ratio (HR Feed)</Typography>
                                <Typography>Revenue Contribution (Sales Feed)</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
                <Alert severity="success">Automation rules executed successfully!</Alert>
            </Snackbar>
        </Box>
    );
};

export default BudgetAutomationEngine;
