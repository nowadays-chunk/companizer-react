import React, { useState } from 'react';
import { Box, Typography, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton } from '@mui/material';
import { Add, Edit, Delete, AutoFixHigh } from '@mui/icons-material';

const RulesEngine = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Automation Rules Engine</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Define logic to automatically apply rates, flags, and exemptions.
                    </Typography>
                </Box>
                <Button variant="contained" startIcon={<Add />}>Create Rule</Button>
            </Box>

            <Paper sx={{ width: '100%', p: 2 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Rule Name</TableCell>
                                <TableCell>Trigger Condition</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell>Priority</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { name: 'IT Services - India Treaty', cond: 'Vendor.Country == "India" AND Service.Type == "Tech"', action: 'Apply Rate: 10% (Treaty)', prio: 'High', status: 'Active' },
                                { name: 'Low Value Exemption', cond: 'Transaction.Amount < 600 USD', action: 'Set WHT Rate: 0%', prio: 'Medium', status: 'Active' },
                                { name: 'Missing TIN Flag', cond: 'Vendor.TIN == Empty', action: 'Flag for Review', prio: 'Critical', status: 'Active' },
                                { name: 'Rent - CA Residents', cond: 'Vendor.Region == "California" AND Type == "Rent"', action: 'Apply Rate: 7%', prio: 'Low', status: 'Inactive' },
                            ].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell fontWeight="500">{row.name}</TableCell>
                                    <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>{row.cond}</TableCell>
                                    <TableCell>{row.action}</TableCell>
                                    <TableCell>
                                        <Chip label={row.prio} size="small" color={row.prio === 'Critical' ? 'error' : row.prio === 'High' ? 'warning' : 'default'} variant="outlined" />
                                    </TableCell>
                                    <TableCell>
                                        <Chip label={row.status} size="small" color={row.status === 'Active' ? 'success' : 'default'} />
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton size="small"><Edit fontSize="small" /></IconButton>
                                        <IconButton size="small"><Delete fontSize="small" /></IconButton>
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

export default RulesEngine;
