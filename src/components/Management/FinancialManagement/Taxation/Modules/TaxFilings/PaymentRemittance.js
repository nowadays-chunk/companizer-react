import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Table, TableHead, TableRow, TableCell, TableBody, Chip, Button, Stack, Divider } from '@mui/material';
import { Payment, AccountBalance, TrendingUp, AttachMoney } from '@mui/icons-material';

const PaymentRemittance = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Payment & Remittance Tracking</Typography>
                <Button variant="contained" startIcon={<Payment />}>Generate Payment Instruction</Button>
            </Box>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <AttachMoney color="error" />
                                <Box>
                                    <Typography variant="h6">$146,780</Typography>
                                    <Typography variant="body2" color="text.secondary">Total Liabilities</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Payment color="warning" />
                                <Box>
                                    <Typography variant="h6">$89,450</Typography>
                                    <Typography variant="body2" color="text.secondary">Payments Made</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <TrendingUp color="success" />
                                <Box>
                                    <Typography variant="h6">$12,300</Typography>
                                    <Typography variant="body2" color="text.secondary">Tax Refunds</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <AccountBalance color="info" />
                                <Box>
                                    <Typography variant="h6">$57,330</Typography>
                                    <Typography variant="body2" color="text.secondary">Outstanding</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ mb: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Tax Type</strong></TableCell>
                            <TableCell><strong>Period</strong></TableCell>
                            <TableCell align="right"><strong>Liability</strong></TableCell>
                            <TableCell align="right"><strong>Paid</strong></TableCell>
                            <TableCell align="right"><strong>Outstanding</strong></TableCell>
                            <TableCell><strong>Due Date</strong></TableCell>
                            <TableCell><strong>Status</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>VAT</TableCell>
                            <TableCell>Q1 2024</TableCell>
                            <TableCell align="right">$32,780</TableCell>
                            <TableCell align="right">$32,780</TableCell>
                            <TableCell align="right">$0</TableCell>
                            <TableCell>2024-04-30</TableCell>
                            <TableCell><Chip label="Paid" color="success" size="small" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>WHT</TableCell>
                            <TableCell>Jan 2024</TableCell>
                            <TableCell align="right">$12,450</TableCell>
                            <TableCell align="right">$12,450</TableCell>
                            <TableCell align="right">$0</TableCell>
                            <TableCell>2024-02-15</TableCell>
                            <TableCell><Chip label="Paid" color="success" size="small" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Income Tax</TableCell>
                            <TableCell>2023</TableCell>
                            <TableCell align="right">$89,100</TableCell>
                            <TableCell align="right">$44,220</TableCell>
                            <TableCell align="right">$44,880</TableCell>
                            <TableCell>2024-06-30</TableCell>
                            <TableCell><Chip label="Partial" color="warning" size="small" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>VAT</TableCell>
                            <TableCell>Feb 2024</TableCell>
                            <TableCell align="right">$12,450</TableCell>
                            <TableCell align="right">$0</TableCell>
                            <TableCell align="right">$12,450</TableCell>
                            <TableCell>2024-03-31</TableCell>
                            <TableCell><Chip label="Overdue" color="error" size="small" /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Payment History</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Stack spacing={2}>
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                    <Typography variant="body2">VAT Q1 2024</Typography>
                                    <Typography variant="body2"><strong>$32,780</strong></Typography>
                                </Box>
                                <Typography variant="caption" color="text.secondary">Paid: 2024-04-15 | Ref: PAY-2024-001</Typography>
                            </Box>
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                    <Typography variant="body2">WHT Jan 2024</Typography>
                                    <Typography variant="body2"><strong>$12,450</strong></Typography>
                                </Box>
                                <Typography variant="caption" color="text.secondary">Paid: 2024-02-10 | Ref: PAY-2024-002</Typography>
                            </Box>
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                    <Typography variant="body2">Income Tax 2023 (Installment 1)</Typography>
                                    <Typography variant="body2"><strong>$44,220</strong></Typography>
                                </Box>
                                <Typography variant="caption" color="text.secondary">Paid: 2024-03-15 | Ref: PAY-2024-003</Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Payment Features</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Stack spacing={1}>
                            <Typography variant="body2">✓ Track tax liabilities per period</Typography>
                            <Typography variant="body2">✓ Generate payment instructions</Typography>
                            <Typography variant="body2">✓ Link to bank confirmations</Typography>
                            <Typography variant="body2">✓ Partial/installment payment support</Typography>
                            <Typography variant="body2">✓ Interest & penalty calculation</Typography>
                            <Typography variant="body2">✓ Track refunds & credits</Typography>
                            <Typography variant="body2">✓ Integration with Treasury module</Typography>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PaymentRemittance;
