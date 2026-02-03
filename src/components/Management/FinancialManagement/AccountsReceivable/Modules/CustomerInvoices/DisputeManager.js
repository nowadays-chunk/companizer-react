
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Avatar,
    IconButton,
    Paper,
    Divider
} from '@mui/material';

const DisputeManager = () => {
    const disputes = [
        { id: 'DSP-001', invoice: 'INV-2024-001', customer: 'Acme Corp', amount: 12000, reason: 'Pricing Error', status: 'New', daysOpen: 2 },
        { id: 'DSP-002', invoice: 'INV-2024-045', customer: 'Stark Ind', amount: 500, reason: 'Damaged Goods', status: 'Under Review', daysOpen: 5 },
        { id: 'DSP-003', invoice: 'INV-2024-089', customer: 'Wayne Ent', amount: 3200, reason: 'Duplicate Billing', status: 'Resolved', daysOpen: 1 },
    ];

    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h5">Dispute Resolution Center</Typography>
            </Box>

            <Grid container spacing={3}>
                {/* Status Columns */}
                {['New', 'Under Review', 'Finance Approval', 'Resolved'].map((status) => (
                    <Grid item xs={12} md={3} key={status}>
                        <Paper sx={{ p: 2, bgcolor: '#f5f5f5', minHeight: 400 }}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                <Typography variant="subtitle1" fontWeight="bold">{status}</Typography>
                                <Chip label={disputes.filter(d => d.status === status).length} size="small" />
                            </Box>

                            {disputes.filter(d => d.status === status).map((dispute) => (
                                <Card key={dispute.id} sx={{ mb: 2 }}>
                                    <CardContent>
                                        <Box display="flex" justifyContent="space-between" mb={1}>
                                            <Typography variant="subtitle2" color="primary">{dispute.id}</Typography>
                                            <Typography variant="caption" color="textSecondary">{dispute.daysOpen} days open</Typography>
                                        </Box>
                                        <Typography variant="body2" gutterBottom>{dispute.customer}</Typography>
                                        <Typography variant="caption" display="block">Inv: {dispute.invoice}</Typography>
                                        <Box mt={1} display="flex" justifyContent="space-between" alignItems="center">
                                            <Chip label={dispute.reason} size="small" variant="outlined" />
                                            <Typography variant="subtitle2">${dispute.amount.toLocaleString()}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default DisputeManager;
