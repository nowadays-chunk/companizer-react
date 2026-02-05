import React from 'react';
import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Divider } from '@mui/material';

const EquityMethodAccounting = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Equity Method Accounting (Associates/JVs)</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Carry Amount Reconciliation</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Description</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="center">Source</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Opening Balance</TableCell>
                                        <TableCell align="right">$ 5,000,000</TableCell>
                                        <TableCell align="center">B/F</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Add: Share of Profit (30%)</TableCell>
                                        <TableCell align="right" sx={{ color: 'green' }}>+ $ 150,000</TableCell>
                                        <TableCell align="center">P&L Pickup</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Less: Dividends Received</TableCell>
                                        <TableCell align="right" sx={{ color: 'red' }}>- $ 50,000</TableCell>
                                        <TableCell align="center">Cash Rec.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Add/Less: Share of OCI</TableCell>
                                        <TableCell align="right" sx={{ color: 'green' }}>+ $ 10,000</TableCell>
                                        <TableCell align="center">OCI Pickup</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Closing Balance</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>$ 5,110,000</TableCell>
                                        <TableCell align="center">C/F</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Actions</Typography>
                        <Button fullWidth variant="contained" sx={{ mb: 2 }}>Post Period Pickup</Button>
                        <Button fullWidth variant="outlined" sx={{ mb: 2 }}>Impairment Test</Button>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="subtitle2" gutterBottom>Implicit Goodwill</Typography>
                        <Typography variant="h5">$ 450,000</Typography>
                        <Typography variant="caption" color="textSecondary">Tracked separately for impairment.</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EquityMethodAccounting;
