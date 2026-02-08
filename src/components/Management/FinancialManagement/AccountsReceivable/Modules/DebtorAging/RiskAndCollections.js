
import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Chip, List, ListItem, ListItemText, ListItemIcon, Button, TextField, Alert } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { arFlagBadDebt } from '../../../../../../utils/clientQueries';

const RiskAndCollections = () => {
    const [invoiceId, setInvoiceId] = useState('');
    const [reason, setReason] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleFlagBadDebt = async () => {
        if (!invoiceId || !reason) {
            setMessage({ type: 'error', text: 'Please enter Invoice ID and Reason' });
            return;
        }
        setLoading(true);
        try {
            await arFlagBadDebt({ invoiceId, reason });
            setMessage({ type: 'success', text: 'Invoice flagged as Bad Debt successfully' });
            setInvoiceId('');
            setReason('');
        } catch (error) {
            console.error(error);
            setMessage({ type: 'error', text: 'Failed to flag bad debt' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Risk Indicators & Collection Triggers</Typography>

            {message && <Alert severity={message.type} sx={{ mb: 3 }} onClose={() => setMessage(null)}>{message.text}</Alert>}

            {/* Manual Bad Debt Flagging */}
            <Paper sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Manual Risk Actions</Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <TextField
                            label="Invoice ID to Flag"
                            fullWidth
                            size="small"
                            value={invoiceId}
                            onChange={(e) => setInvoiceId(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TextField
                            label="Reason for Bad Debt"
                            fullWidth
                            size="small"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button
                            variant="contained"
                            color="error"
                            fullWidth
                            onClick={handleFlagBadDebt}
                            disabled={loading}
                        >
                            {loading ? 'Flagging...' : 'Flag as Bad Debt'}
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

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
