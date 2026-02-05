import React from 'react';
import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { AccountBalance } from '@mui/icons-material';

const TreasuryCashIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Treasury & Cash Integration</Typography>

            <Typography variant="body2" paragraph color="textSecondary">
                Automatically links investment transactions to bank payments and receipts, ensuring cash flow classification accuracy.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <AccountBalance sx={{ mr: 2, color: 'primary.main', fontSize: 40 }} />
                            <Box>
                                <Typography variant="subtitle2">Linked Cash Account</Typography>
                                <Typography variant="h6">US Bank - Main Ops</Typography>
                                <Typography variant="caption">**** 8829</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Recent Cash Impacts</Typography>
                        <TableContainer>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Transaction</TableCell>
                                        <TableCell>Cash Flow Type</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="center">Reconciled</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>2025-06-25</TableCell>
                                        <TableCell>Dividend Receipt</TableCell>
                                        <TableCell>Operating/Investing</TableCell>
                                        <TableCell align="right" sx={{ color: 'green' }}>+ $ 50,000</TableCell>
                                        <TableCell align="center"><Chip label="Yes" color="success" size="small" /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2025-01-15</TableCell>
                                        <TableCell>Acquisition Payment</TableCell>
                                        <TableCell>Investing</TableCell>
                                        <TableCell align="right" sx={{ color: 'red' }}>- $ 1,550,000</TableCell>
                                        <TableCell align="center"><Chip label="Yes" color="success" size="small" /></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TreasuryCashIntegration;
