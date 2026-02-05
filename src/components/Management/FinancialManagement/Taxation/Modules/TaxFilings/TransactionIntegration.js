import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Table, TableHead, TableRow, TableCell, TableBody, Chip, TextField, MenuItem, Button, Alert, Stack } from '@mui/material';
import { Receipt, AttachMoney, Calculate, Refresh } from '@mui/icons-material';

const TransactionIntegration = () => {
    const [filterType, setFilterType] = useState('all');

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Transaction & Invoice Integration</Typography>
                <Button variant="outlined" startIcon={<Refresh />}>Sync Transactions</Button>
            </Box>

            <Alert severity="info" sx={{ mb: 3 }}>
                Real-time tax calculation on all AP/AR invoices. Tax is automatically applied based on jurisdiction and product/service classification.
            </Alert>

            <Paper sx={{ p: 2, mb: 3 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={3}>
                        <TextField
                            select
                            fullWidth
                            size="small"
                            label="Transaction Type"
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                        >
                            <MenuItem value="all">All Transactions</MenuItem>
                            <MenuItem value="ar">Accounts Receivable</MenuItem>
                            <MenuItem value="ap">Accounts Payable</MenuItem>
                            <MenuItem value="payroll">Payroll</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField select fullWidth size="small" label="Tax Status" defaultValue="all">
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="taxable">Taxable</MenuItem>
                            <MenuItem value="exempt">Exempt</MenuItem>
                            <MenuItem value="zero">Zero-Rated</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField type="date" fullWidth size="small" label="From Date" InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField type="date" fullWidth size="small" label="To Date" InputLabelProps={{ shrink: true }} />
                    </Grid>
                </Grid>
            </Paper>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Transaction ID</strong></TableCell>
                            <TableCell><strong>Type</strong></TableCell>
                            <TableCell><strong>Date</strong></TableCell>
                            <TableCell align="right"><strong>Base Amount</strong></TableCell>
                            <TableCell align="right"><strong>Tax Amount</strong></TableCell>
                            <TableCell><strong>Tax Rate</strong></TableCell>
                            <TableCell><strong>Tax Code</strong></TableCell>
                            <TableCell><strong>Status</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>INV-2024-001</TableCell>
                            <TableCell><Chip label="AR" size="small" color="success" /></TableCell>
                            <TableCell>2024-01-15</TableCell>
                            <TableCell align="right">$5,000.00</TableCell>
                            <TableCell align="right">$1,000.00</TableCell>
                            <TableCell><Chip label="20%" size="small" /></TableCell>
                            <TableCell>VAT-STD</TableCell>
                            <TableCell><Chip label="Taxable" size="small" color="primary" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>BILL-2024-045</TableCell>
                            <TableCell><Chip label="AP" size="small" color="error" /></TableCell>
                            <TableCell>2024-01-16</TableCell>
                            <TableCell align="right">$3,500.00</TableCell>
                            <TableCell align="right">$350.00</TableCell>
                            <TableCell><Chip label="10%" size="small" /></TableCell>
                            <TableCell>WHT-SVC</TableCell>
                            <TableCell><Chip label="Taxable" size="small" color="primary" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>INV-2024-002</TableCell>
                            <TableCell><Chip label="AR" size="small" color="success" /></TableCell>
                            <TableCell>2024-01-17</TableCell>
                            <TableCell align="right">$12,000.00</TableCell>
                            <TableCell align="right">$0.00</TableCell>
                            <TableCell><Chip label="0%" size="small" /></TableCell>
                            <TableCell>EXP-CHARITY</TableCell>
                            <TableCell><Chip label="Exempt" size="small" color="warning" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>INV-2024-003</TableCell>
                            <TableCell><Chip label="AR" size="small" color="success" /></TableCell>
                            <TableCell>2024-01-18</TableCell>
                            <TableCell align="right">$8,500.00</TableCell>
                            <TableCell align="right">$425.00</TableCell>
                            <TableCell><Chip label="5%" size="small" /></TableCell>
                            <TableCell>VAT-RED</TableCell>
                            <TableCell><Chip label="Taxable" size="small" color="primary" /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>

            <Paper sx={{ p: 3, mt: 3, bgcolor: '#f5f5f5' }}>
                <Typography variant="subtitle2" gutterBottom>Integration Features</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography variant="body2">✓ Auto-apply tax on invoice creation</Typography>
                            <Typography variant="body2">✓ Track taxable and non-taxable transactions</Typography>
                            <Typography variant="body2">✓ Handle exemptions and reduced rates</Typography>
                            <Typography variant="body2">✓ Tax tagging for each line item</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography variant="body2">✓ Multi-currency taxation support</Typography>
                            <Typography variant="body2">✓ Auto-aggregate taxable base per period</Typography>
                            <Typography variant="body2">✓ Tax-inclusive and tax-exclusive reporting</Typography>
                            <Typography variant="body2">✓ Real-time GL integration</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default TransactionIntegration;
