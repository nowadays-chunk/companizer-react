import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Switch, FormControlLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Alert } from '@mui/material';

const InvoicePaymentIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight="600" gutterBottom>Invoice & Payment Integration</Typography>
            <Typography variant="body2" color="textSecondary" mb={3}>
                Configure how withholding tax interacts with Accounts Payable (AP) and Accounts Receivable (AR).
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Integration Triggers</Typography>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <FormControlLabel control={<Switch defaultChecked />} label="Auto-calculate on AP Invoice Create" />
                            <FormControlLabel control={<Switch defaultChecked />} label="Re-calculate on Payment Processing" />
                            <FormControlLabel control={<Switch />} label="Block Payment if WHT Missing" />
                            <FormControlLabel control={<Switch defaultChecked />} label="Apply to Credit Notes & Refunds" />
                        </Box>
                    </Paper>

                    <Alert severity="info">
                        Withholding is currently configured to post liability at the time of <strong>Payment</strong> (Cash Basis).
                    </Alert>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Module Status</Typography>
                        <TableContainer>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Module</TableCell>
                                        <TableCell>Connection</TableCell>
                                        <TableCell>Last Sync</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {[
                                        { mod: 'Accounts Payable', status: 'Active', time: 'Just now' },
                                        { mod: 'Accounts Receivable', status: 'Inactive', time: '-' },
                                        { mod: 'General Ledger', status: 'Active', time: '2 mins ago' },
                                        { mod: 'Bank Transfers', status: 'Active', time: '1 hour ago' },
                                    ].map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{row.mod}</TableCell>
                                            <TableCell>
                                                <Chip label={row.status} size="small" color={row.status === 'Active' ? 'success' : 'default'} />
                                            </TableCell>
                                            <TableCell>{row.time}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InvoicePaymentIntegration;
