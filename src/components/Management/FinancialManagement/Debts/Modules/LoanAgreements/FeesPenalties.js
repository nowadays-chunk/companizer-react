import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    MenuItem,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    FormControl,
    InputLabel,
    Select,
    Chip
} from '@mui/material';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/FeesPenalties';

const FeesPenalties = () => {
    const [fees, setFees] = useState([
        { id: 1, type: 'Origination Fee', amount: 5000, currency: 'USD', status: 'Paid', date: '2023-01-15' },
        { id: 2, type: 'Commitment Fee', amount: 1200, currency: 'USD', status: 'Accrued', date: '2023-02-01' }
    ]);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Fees, Penalties & Charges</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>Add New Charge</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Charge Type</InputLabel>
                                    <Select label="Charge Type" defaultValue="origination">
                                        <MenuItem value="origination">Origination Fee</MenuItem>
                                        <MenuItem value="commitment">Commitment Fee</MenuItem>
                                        <MenuItem value="processing">Processing Fee</MenuItem>
                                        <MenuItem value="prepayment_penalty">Prepayment Penalty</MenuItem>
                                        <MenuItem value="late_payment">Late Payment Penalty</MenuItem>
                                        <MenuItem value="default_interest">Default Interest</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Frequency</InputLabel>
                                    <Select label="Frequency" defaultValue="onetime">
                                        <MenuItem value="onetime">One-time</MenuItem>
                                        <MenuItem value="recurring">Recurring (Monthly)</MenuItem>
                                        <MenuItem value="recurring_q">Recurring (Quarterly)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Amount" type="number" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>GL Mapping</InputLabel>
                                    <Select label="GL Mapping" defaultValue="expense">
                                        <MenuItem value="expense">Interest Expense</MenuItem>
                                        <MenuItem value="bank_fees">Bank Fees</MenuItem>
                                        <MenuItem value="capitalized">Capitalized Asset</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Amortization</InputLabel>
                                    <Select label="Amortization" defaultValue="expense_now">
                                        <MenuItem value="expense_now">Expense Immediately</MenuItem>
                                        <MenuItem value="amortize">Amortize over Loan Life</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth>Record Charge</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>Fee Schedule & History</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {fees.map((fee) => (
                                        <TableRow key={fee.id}>
                                            <TableCell>{fee.date}</TableCell>
                                            <TableCell>{fee.type}</TableCell>
                                            <TableCell>{fee.currency} {fee.amount.toLocaleString()}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={fee.status}
                                                    color={fee.status === 'Paid' ? 'success' : 'warning'}
                                                    size="small"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Button size="small">View</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeesPenalties;
