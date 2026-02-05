import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Tabs, Tab } from '@mui/material';
import { Add, Remove, ReceiptLong } from '@mui/icons-material';

const AcquisitionDisposal = () => {
    const [tabValue, setTabValue] = useState(0);

    const transactions = [
        { date: '2025-01-15', type: 'Initial Acquisition', units: 100000, price: 15.50, total: 1550000, fee: 5000, status: 'Posted' },
        { date: '2025-06-20', type: 'Additional Purchase', units: 25000, price: 16.20, total: 405000, fee: 1200, status: 'Posted' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Acquisition & Disposal Transactions</Typography>
                <Box>
                    <Button variant="contained" startIcon={<Add />} sx={{ mr: 1 }}>New Acquisition</Button>
                    <Button variant="outlined" color="warning" startIcon={<Remove />}>New Disposal</Button>
                </Box>
            </Box>

            <Paper sx={{ mb: 3 }}>
                <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} indicatorColor="primary" textColor="primary">
                    <Tab label="Transaction History" icon={<ReceiptLong />} iconPosition="start" />
                    <Tab label="Pending Approvals" />
                    <Tab label="Disposal Simulator" />
                </Tabs>
            </Paper>

            {tabValue === 0 && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Transaction Type</TableCell>
                                <TableCell align="right">Units (+/-)</TableCell>
                                <TableCell align="right">Price / Unit</TableCell>
                                <TableCell align="right">Total Value</TableCell>
                                <TableCell align="right">Transaction Costs</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Posting Ref</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map((row, idx) => (
                                <TableRow key={idx}>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell align="right" sx={{ color: 'green', fontWeight: 'bold' }}>+{row.units.toLocaleString()}</TableCell>
                                    <TableCell align="right">${row.price.toFixed(2)}</TableCell>
                                    <TableCell align="right">${row.total.toLocaleString()}</TableCell>
                                    <TableCell align="right">${row.fee.toLocaleString()}</TableCell>
                                    <TableCell align="center"><Chip label={row.status} color="success" size="small" /></TableCell>
                                    <TableCell align="center"><Button size="small">JE-2025-{100 + idx}</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {tabValue === 2 && (
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>Disposal Gain/Loss Calculator</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <TextField fullWidth label="Units to Sell" type="number" />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField fullWidth label="Proposed Price" type="number" />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField fullWidth label="Computed Cost Basis" disabled value="$ 1,250,000" />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField fullWidth label="Est. Gain/Loss" disabled value="$ 450,000" sx={{ backgroundColor: '#e8f5e9' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary">Calculate Impact</Button>
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </Box>
    );
};

export default AcquisitionDisposal;
