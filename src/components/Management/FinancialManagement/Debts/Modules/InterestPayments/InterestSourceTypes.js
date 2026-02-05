import React from 'react';
import { Box, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { AccountBalance, Business, CreditCard, ReceiptLong } from '@mui/icons-material';

const InterestSourceTypes = () => {
    const sources = [
        { name: 'Loan Agreements', icon: <AccountBalance />, desc: 'Term loans, bonds, revolvers', active: true },
        { name: 'Intercompany Loans', icon: <Business />, desc: 'Loans between subsidiaries', active: true },
        { name: 'Bank Overdrafts', icon: <CreditCard />, desc: 'Short-term negative balances', active: true },
        { name: 'Vendor Financing', icon: <ReceiptLong />, desc: 'Interest on late payables', active: false },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Interest Source Types</Typography>
            <Paper sx={{ p: 3 }}>
                <Typography variant="body1" paragraph>
                    Configure which financial instruments generate interest obligations in the system.
                </Typography>
                <Grid container spacing={3}>
                    {sources.map((source, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ mr: 2, color: 'primary.main' }}>{source.icon}</Box>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="subtitle1">{source.name}</Typography>
                                    <Typography variant="caption" color="textSecondary">{source.desc}</Typography>
                                </Box>
                                <Chip label={source.active ? "Active" : "Inactive"} color={source.active ? "success" : "default"} size="small" />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Box>
    );
};

export default InterestSourceTypes;
