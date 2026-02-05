import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    Button
} from '@mui/material';

const GLAccountingIntegration = () => {
    // Mock journal entry preview
    const journalEntries = [
        { id: 1, account: '6000-01 Interest Expense', debit: 15000.00, credit: 0, desc: 'Interest Payment Nov 2023' },
        { id: 2, account: '2100-01 Accrued Interest Payable', debit: 0, credit: 15000.00, desc: 'Reversal of Accual' },
        { id: 3, account: '2100-01 Accrued Interest Payable', debit: 15000.00, credit: 0, desc: 'Payment Clearing' },
        { id: 4, account: '1000-99 Cash at Bank', debit: 0, credit: 13500.00, desc: 'Cash Payment' },
        { id: 5, account: '2200-05 Withholding Tax Payable', debit: 0, credit: 1500.00, desc: 'Tax Deduction' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>GL & Accounting Integration</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Posting Preview</Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                            The following journal entry will be generated upon payment confirmation.
                        </Typography>
                        <TableContainer sx={{ border: '1px solid #eee', borderRadius: 1 }}>
                            <Table size="small">
                                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                                    <TableRow>
                                        <TableCell>Account Code</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell align="right">Debit</TableCell>
                                        <TableCell align="right">Credit</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {journalEntries.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.account}</TableCell>
                                            <TableCell>{row.desc}</TableCell>
                                            <TableCell align="right">{row.debit > 0 ? row.debit.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '-'}</TableCell>
                                            <TableCell align="right">{row.credit > 0 ? row.credit.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '-'}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow sx={{ fontWeight: 'bold', bgcolor: '#fafafa' }}>
                                        <TableCell colSpan={2} align="right">Totals</TableCell>
                                        <TableCell align="right">30,000.00</TableCell>
                                        <TableCell align="right">30,000.00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                            <Button variant="contained">Post to GL</Button>
                            <Button variant="outlined">Edit Mappings</Button>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Account Mapping Status</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3}>
                                <Paper variant="outlined" sx={{ p: 2 }}>
                                    <Typography variant="subtitle2">Expense Engine</Typography>
                                    <Chip label="Mapped" color="success" size="small" />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Paper variant="outlined" sx={{ p: 2 }}>
                                    <Typography variant="subtitle2">Bank Accounts</Typography>
                                    <Chip label="Mapped" color="success" size="small" />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Paper variant="outlined" sx={{ p: 2 }}>
                                    <Typography variant="subtitle2">Tax Liability</Typography>
                                    <Chip label="Review Needed" color="warning" size="small" />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default GLAccountingIntegration;
