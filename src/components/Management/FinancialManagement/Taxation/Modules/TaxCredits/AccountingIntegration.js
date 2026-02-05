import React from 'react';
import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Autocomplete, TextField, Button } from '@mui/material';
import { AccountBalance, Save } from '@mui/icons-material';

const AccountingIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Accounting & GL Integration</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Configure General Ledger mappings for tax credit postings.
                    </Typography>
                </Box>
                <Button variant="contained" startIcon={<Save />}>Save Mappings</Button>
            </Box>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Box display="flex" alignItems="center" mb={3}>
                    <AccountBalance color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">GL Account Mapping</Typography>
                </Box>

                <TableContainer border={1} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                    <Table>
                        <TableHead sx={{ bgcolor: 'action.hover' }}>
                            <TableRow>
                                <TableCell sx={{ width: '25%' }}>Credit Type</TableCell>
                                <TableCell sx={{ width: '35%' }}>Debit Account (Asset/Expense)</TableCell>
                                <TableCell sx={{ width: '35%' }}>Credit Account (Income/Equity)</TableCell>
                                <TableCell sx={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { type: 'R&D Tax Credit', dr: '1400 - Tax Receivables', cr: '4200 - Other Income' },
                                { type: 'Input VAT Credit', dr: '2300 - VAT Output Liab', cr: '1410 - VAT Input Asset' },
                                { type: 'WHT Foreign Credit', dr: '1450 - Deferred Tax Asset', cr: '8000 - Tax Expense' },
                            ].map((row, idx) => (
                                <TableRow key={idx}>
                                    <TableCell sx={{ fontWeight: 500 }}>{row.type}</TableCell>
                                    <TableCell>
                                        <TextField fullWidth size="small" defaultValue={row.dr} variant="outlined" />
                                    </TableCell>
                                    <TableCell>
                                        <TextField fullWidth size="small" defaultValue={row.cr} variant="outlined" />
                                    </TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Posting Logic</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            select
                            fullWidth
                            label="Recognition Timing"
                            SelectProps={{ native: true }}
                            helperText="When should the accounting entry be booked?"
                        >
                            <option>Upon Final Approval</option>
                            <option>Upon Calculation (Draft)</option>
                            <option>Upon Filing</option>
                        </TextField>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default AccountingIntegration;
