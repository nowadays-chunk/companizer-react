import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Card, CardContent } from '@mui/material';
import { Payment, AttachMoney } from '@mui/icons-material';

const RemittancePayment = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Remittance & Payment</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Manage payments of withheld tax to tax authorities.
                    </Typography>
                </Box>
                <Button variant="contained" startIcon={<Payment />}>Run Payment Wizard</Button>
            </Box>

            <Grid container spacing={3} mb={3}>
                <Grid item xs={12} md={4}>
                    <Card elevation={0} variant="outlined" sx={{ borderLeft: '4px solid #1976d2' }}>
                        <CardContent>
                            <Typography variant="subtitle2" color="textSecondary">Total Payable (USD)</Typography>
                            <Typography variant="h4" fontWeight="bold">14,250.00</Typography>
                            <Typography variant="caption">Next Due: Mar 15, 2024</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={0} variant="outlined" sx={{ borderLeft: '4px solid #ed6c02' }}>
                        <CardContent>
                            <Typography variant="subtitle2" color="textSecondary">Total Payable (GBP)</Typography>
                            <Typography variant="h4" fontWeight="bold">850.00</Typography>
                            <Typography variant="caption">Next Due: Apr 14, 2024</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ width: '100%', mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ p: 2 }}>Remittance History</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Remittance Ref</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Authority</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell>Method</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { ref: 'IRS-PAY-2023-12', date: '2024-01-15', auth: 'IRS (USA)', amt: 'USD 12,500.00', method: 'EFTPS', status: 'Confirmed' },
                                { ref: 'HMRC-PAY-Q3', date: '2023-10-14', auth: 'HMRC (UK)', amt: 'GBP 1,200.00', method: 'Direct Debit', status: 'Confirmed' },
                            ].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>{row.ref}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.auth}</TableCell>
                                    <TableCell align="right">{row.amt}</TableCell>
                                    <TableCell>{row.method}</TableCell>
                                    <TableCell>
                                        <Chip label={row.status} size="small" color="success" variant="outlined" />
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

export default RemittancePayment;
