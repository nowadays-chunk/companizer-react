import React from 'react';
import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { Public } from '@mui/icons-material';

const ForeignCurrencyEquity = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Foreign Currency Investments (FX)</Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom display="flex" alignItems="center"><Public sx={{ mr: 1 }} /> Investment Currency Details</Typography>
                        <Typography variant="body1">Investment Currency: <strong>EUR (Euro)</strong></Typography>
                        <Typography variant="body1">Functional Currency: <strong>USD (US Dollar)</strong></Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>Current Spot Rate: <strong>1.10 USD/EUR</strong></Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>FX Exposure & Translation</Typography>
                        <Typography variant="body1">Cost Basis (FX): € 1,000,000</Typography>
                        <Typography variant="body1">Cost Basis (Func): $ 1,050,000 (Hist. Rate 1.05)</Typography>
                        <Typography variant="body1" sx={{ mt: 1, color: 'primary.main' }}>Translation Reserve Impact: $ 50,000</Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                            <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell align="right">Amount (EUR)</TableCell>
                                <TableCell align="right">Exch. Rate</TableCell>
                                <TableCell align="right">Amount (USD)</TableCell>
                                <TableCell align="center">Impact To</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Initial Investment</TableCell>
                                <TableCell align="right">1,000,000</TableCell>
                                <TableCell align="right">1.05</TableCell>
                                <TableCell align="right">1,050,000</TableCell>
                                <TableCell align="center"><Chip label="Capital" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Revaluation (Current)</TableCell>
                                <TableCell align="right">1,000,000</TableCell>
                                <TableCell align="right">1.10</TableCell>
                                <TableCell align="right">1,100,000</TableCell>
                                <TableCell align="center"><Chip label="OCI (CTA)" color="secondary" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Dividend Received</TableCell>
                                <TableCell align="right">50,000</TableCell>
                                <TableCell align="right">1.08</TableCell>
                                <TableCell align="right">54,000</TableCell>
                                <TableCell align="center"><Chip label="P&L (Income)" color="success" size="small" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default ForeignCurrencyEquity;
