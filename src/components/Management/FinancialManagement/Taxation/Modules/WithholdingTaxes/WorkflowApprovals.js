import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton } from '@mui/material';
import { Check, Close, Visibility } from '@mui/icons-material';

const WorkflowApprovals = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Workflow & Approvals</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Review and approve overrides, treaty claims, and manual adjustments.
                    </Typography>
                </Box>
            </Box>

            <Paper sx={{ width: '100%', mb: 3, p: 2 }}>
                <Typography variant="h6" gutterBottom>Pending Approvals</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Request Type</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Requested By</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Priority</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { type: 'Rate Override', desc: 'Change WHT rate for Inv #4005 to 5%', user: 'User A', date: '2024-02-05', prio: 'High' },
                                { type: 'Refund Request', desc: 'Refund over-deduction for Acme Corp', user: 'User B', date: '2024-02-04', prio: 'Medium' },
                                { type: 'New Treaty Claim', desc: 'Approve Treaty Status for Vendor X', user: 'User A', date: '2024-02-05', prio: 'Low' },
                            ].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell fontWeight="500">{row.type}</TableCell>
                                    <TableCell>{row.desc}</TableCell>
                                    <TableCell>{row.user}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>
                                        <Chip label={row.prio} size="small" color={row.prio === 'High' ? 'error' : 'default'} variant="outlined" />
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton size="small" color="success"><Check /></IconButton>
                                        <IconButton size="small" color="error"><Close /></IconButton>
                                        <IconButton size="small"><Visibility /></IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default WorkflowApprovals;
