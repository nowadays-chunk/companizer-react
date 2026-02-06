import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, TextField, Switch, FormControlLabel, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { NotificationsActive, Add } from '@mui/icons-material';

const VarianceThresholdAlerts = () => {
    const [open, setOpen] = useState(false);
    const [rules, setRules] = useState([
        { id: 1, title: 'Global Revenue Alert', condition: 'Revenue < Budget by 5%', role: 'CFO, Sales Director', active: true },
        { id: 2, title: 'OpEx Overspend Warning', condition: 'Cost > Budget by $10,000', role: 'Budget Manager, Dept Head', active: false }
    ]);

    const handleToggle = (id) => {
        setRules(rules.map(r => r.id === id ? { ...r, active: !r.active } : r));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <NotificationsActive color="primary" /> Threshold & Alerts Configuration
                </Typography>
                <Button variant="contained" startIcon={<Add />} onClick={() => setOpen(true)}>New Alert Rule</Button>
            </Box>

            <Grid container spacing={3}>
                {rules.map((rule) => (
                    <Grid item xs={12} md={6} key={rule.id}>
                        <Card>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                    <Typography variant="h6">{rule.title}</Typography>
                                    <Switch checked={rule.active} onChange={() => handleToggle(rule.id)} />
                                </Box>
                                <Box sx={{ display: 'grid', gap: 2 }}>
                                    <TextField label="Trigger Condition" value={rule.condition} fullWidth size="small" InputProps={{ readOnly: true }} />
                                    <TextField label="Notify Roles" value={rule.role} fullWidth size="small" InputProps={{ readOnly: true }} />
                                    <FormControlLabel control={<Switch defaultChecked={rule.id === 1} disabled />} label="High Priority Email" />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Create New Alert Rule</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2, minWidth: 400 }}>
                    <TextField label="Rule Title" placeholder="e.g. Travel Spend Alert" />
                    <TextField label="Condition" placeholder="e.g. > 10% Variance" />
                    <TextField label="Notify Roles" placeholder="e.g. Manager" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="contained" onClick={() => setOpen(false)}>Save Rule</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default VarianceThresholdAlerts;
