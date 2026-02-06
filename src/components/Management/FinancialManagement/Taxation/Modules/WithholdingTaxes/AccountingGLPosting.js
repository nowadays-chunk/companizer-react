import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton } from '@mui/material';
import { Add, Edit, Delete, AccountBalance } from '@mui/icons-material';

const AccountingGLPosting = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Accounting & GL Posting</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Configure GL accounts and view posting logs for withholding tax.
                    </Typography>
                </Box>
                <Button variant="outlined" startIcon={<AccountBalance />}>View GL Balances</Button>
            </Box>

            <Paper sx={{ width: '100%', mb: 2 }}>
                <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
                    <Tab label="GL Mapping" />
                    <Tab label="Posting Templates" />
                    <Tab label="Posting Log" />
                </Tabs>

                <Box sx={{ p: 3 }}>
                    {tabValue === 0 && (
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>GL Account Mapping</Typography>
                                <TableContainer component={Paper} elevation={0} variant="outlined">
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Tax Type</TableCell>
                                                <TableCell>Jurisdiction</TableCell>
                                                <TableCell>Payable Account</TableCell>
                                                <TableCell>Expense Account</TableCell>
                                                <TableCell>Clearing Account</TableCell>
                                                <TableCell align="right">Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[
                                                { type: 'US Federal WHT', jur: 'US - IRS', pay: '2100 - WHT Payable (US)', exp: '6100 - WHT Expense', clr: '2105 - WHT Clearing' },
                                                { type: 'UK WHT', jur: 'UK - HMRC', pay: '2110 - WHT Payable (UK)', exp: '6110 - WHT Expense (UK)', clr: '2115 - WHT Clearing UK' },
                                                { type: 'India TDS', jur: 'India - IT', pay: '2120 - TDS Payable', exp: '6120 - TDS Expense', clr: '2125 - TDS Clearing' },
                                                { type: 'Rent WHT', jur: 'All', pay: '2130 - Rent WHT Payable', exp: '6130 - Rent Expense', clr: '2135 - Rent WHT Clearing' },
                                            ].map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell fontWeight="500">{row.type}</TableCell>
                                                    <TableCell>{row.jur}</TableCell>
                                                    <TableCell>{row.pay}</TableCell>
                                                    <TableCell>{row.exp}</TableCell>
                                                    <TableCell>{row.clr}</TableCell>
                                                    <TableCell align="right">
                                                        <IconButton size="small"><Edit fontSize="small" /></IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    )}

                    {tabValue === 2 && (
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Recent GL Postings</Typography>
                                <TableContainer component={Paper} elevation={0} variant="outlined">
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Posting Date</TableCell>
                                                <TableCell>Document Ref</TableCell>
                                                <TableCell>Description</TableCell>
                                                <TableCell>Debit Account</TableCell>
                                                <TableCell>Credit Account</TableCell>
                                                <TableCell align="right">Amount</TableCell>
                                                <TableCell align="right">Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[
                                                { date: '2024-02-05', ref: 'JE-2024-88', desc: 'WHT Accrual - Inv #102', dr: '6100 - WHT Expense', cr: '2100 - WHT Payable', amt: '150.00', status: 'Posted' },
                                                { date: '2024-02-05', ref: 'JE-2024-89', desc: 'WHT Accrual - Inv #103', dr: '6100 - WHT Expense', cr: '2100 - WHT Payable', amt: '45.00', status: 'Posted' },
                                                { date: '2024-02-04', ref: 'JE-2024-85', desc: 'Payment Clearing', dr: '2100 - WHT Payable', cr: '1100 - Bank', amt: '2,500.00', status: 'Posted' },
                                            ].map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{row.date}</TableCell>
                                                    <TableCell sx={{ fontFamily: 'monospace' }}>{row.ref}</TableCell>
                                                    <TableCell>{row.desc}</TableCell>
                                                    <TableCell>{row.dr}</TableCell>
                                                    <TableCell>{row.cr}</TableCell>
                                                    <TableCell align="right">{row.amt}</TableCell>
                                                    <TableCell align="right">
                                                        <Chip label={row.status} size="small" color="success" variant="outlined" />
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Paper>
        </Box>
    );
};

export default AccountingGLPosting;
