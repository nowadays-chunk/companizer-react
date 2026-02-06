import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Card, CardContent } from '@mui/material';
import { Refresh, Warning } from '@mui/icons-material';

const ReconciliationControl = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Reconciliation & Control</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Reconcile Withholding GL balances against tax subledger records.
                    </Typography>
                </Box>
                <Button variant="outlined" startIcon={<Refresh />}>Run Reconciliation</Button>
            </Box>

            <Grid container spacing={3} mb={3}>
                {[
                    { title: 'GL Balance (Payable)', value: 'USD 14,500.00', color: 'primary.main' },
                    { title: 'Subledger Balance', value: 'USD 14,500.00', color: 'success.main' },
                    { title: 'Variance', value: 'USD 0.00', color: 'text.secondary' },
                    { title: 'Unreconciled Items', value: '2', color: 'warning.main' },
                ].map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card elevation={0} variant="outlined">
                            <CardContent>
                                <Typography variant="subtitle2" color="textSecondary" gutterBottom>{item.title}</Typography>
                                <Typography variant="h5" fontWeight="bold" sx={{ color: item.color }}>{item.value}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Paper sx={{ width: '100%', p: 3 }}>
                <Typography variant="h6" gutterBottom display="flex" alignItems="center" gap={1}>
                    Reconciliation Exceptions <Chip label="Action Required" color="warning" size="small" />
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Transaction Ref</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell align="right">GL Amount</TableCell>
                                <TableCell align="right">Subledger Amount</TableCell>
                                <TableCell align="right">Variance</TableCell>
                                <TableCell>Reason</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { date: '2024-02-04', ref: 'INV-TEMP-001', type: 'Invoice', gl: '150.00', sub: '145.00', var: '5.00', reason: 'Rounding Difference' },
                                { date: '2024-02-03', ref: 'PAY-ERR-99', type: 'Payment', gl: '0.00', sub: '500.00', var: '-500.00', reason: 'Posting Failure' },
                            ].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>{row.ref}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell align="right">{row.gl}</TableCell>
                                    <TableCell align="right">{row.sub}</TableCell>
                                    <TableCell align="right" sx={{ color: 'error.main', fontWeight: 'bold' }}>{row.var}</TableCell>
                                    <TableCell>{row.reason}</TableCell>
                                    <TableCell align="right">
                                        <Button size="small" color="primary">Investigate</Button>
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

export default ReconciliationControl;
