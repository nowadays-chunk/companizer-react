import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Switch, Chip, Snackbar, Alert } from '@mui/material';
import { ExpandMore, AutoFixHigh, Add } from '@mui/icons-material';

const AutomationRules = () => {
    const [rules, setRules] = useState([
        { id: 1, title: 'Auto-Identify R&D Expenses', desc: 'Scan AP invoices for "Research" keywords and flag for R&D credit.', active: true },
        { id: 2, title: 'VAT Input Tax Calculation', desc: 'Automatically calculate 20% on all Domestic Supplier invoices.', active: true },
        { id: 3, title: 'Carryforward Expiry Alert', desc: 'Notify Finance Controller 90 days before credit expiration.', active: false },
    ]);
    const [toast, setToast] = useState({ open: false, message: '' });

    const handleToggle = (id) => {
        const newRules = rules.map(rule => {
            if (rule.id === id) {
                const newStatus = !rule.active;
                setToast({ open: true, message: `Rule "${rule.title}" is now ${newStatus ? 'Active' : 'Inactive'}` });
                return { ...rule, active: newStatus };
            }
            return rule;
        });
        setRules(newRules);
    };

    const handleCloseToast = () => {
        setToast({ ...toast, open: false });
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Automation Rules</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Configure logic for automatic credit identification and calculation.
                    </Typography>
                </Box>
                <Button variant="contained" startIcon={<Add />}>Create Rule</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {rules.map((rule, index) => (
                        <Accordion key={rule.id} defaultExpanded={index === 0} sx={{ mb: 2, '&:before': { display: 'none' } }} elevation={2}>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Box display="flex" alignItems="center" width="100%">
                                    <AutoFixHigh color={rule.active ? "primary" : "disabled"} sx={{ mr: 2 }} />
                                    <Box flexGrow={1}>
                                        <Typography variant="subtitle1" fontWeight="600" color={rule.active ? "text.primary" : "text.secondary"}>
                                            {rule.title}
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">{rule.desc}</Typography>
                                    </Box>
                                    <Box mr={2}>
                                        {rule.active ? <Chip label="Active" color="success" size="small" /> : <Chip label="Inactive" size="small" />}
                                    </Box>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Paper variant="outlined" sx={{ p: 2, bgcolor: 'background.default' }}>
                                    <Typography variant="subtitle2" gutterBottom>Rule Logic:</Typography>
                                    <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                                        IF Source = 'AP Invoice' AND Description CONTAINS 'Research'<br />
                                        THEN Status = 'Potential Credit' AND Type = 'R&D'
                                    </Typography>
                                    <Box mt={2} display="flex" justifyContent="flex-end">
                                        <FormControlLabel
                                            control={<Switch checked={rule.active} onChange={() => handleToggle(rule.id)} />}
                                            label={rule.active ? "Disable Automation" : "Enable Automation"}
                                        />
                                        <Button size="small">Edit Logic</Button>
                                    </Box>
                                </Paper>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Grid>
            </Grid>

            <Snackbar open={toast.open} autoHideDuration={3000} onClose={handleCloseToast}>
                <Alert onClose={handleCloseToast} severity="info" sx={{ width: '100%' }}>
                    {toast.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default AutomationRules;
