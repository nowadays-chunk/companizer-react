import React, { useState } from 'react';
import {
    Box,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Chip
} from '@mui/material';
import { PostAdd } from '@mui/icons-material';
import { faker } from '@faker-js/faker';

const generateJournalEntries = (count) => Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    reference: `JE-${faker.string.numeric(6)}`,
    date: faker.date.recent().toLocaleDateString(),
    description: faker.finance.transactionDescription(),
    account: faker.finance.accountName(),
    debit: faker.number.int({ min: 1000, max: 10000 }),
    credit: 0,
    status: faker.helpers.arrayElement(['Posted', 'Draft', 'Pending Approval'])
}));

const AccountingGLIntegration = () => {
    const [entries] = useState(generateJournalEntries(8));

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Accounting & GL Integration</Typography>
                <Button variant="contained" startIcon={<PostAdd color="inherit" />}>
                    Post Adjustment
                </Button>
            </Box>

            <Paper sx={{ mb: 3, p: 2, bgcolor: '#e0f7fa' }}>
                <Typography variant="subtitle1" gutterBottom>GL Impact Summary (Current Audit Cycle)</Typography>
                <Box sx={{ display: 'flex', gap: 4 }}>
                    <Box>
                        <Typography variant="caption" color="textSecondary">Total Provisions</Typography>
                        <Typography variant="h6">$124,500.00</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="textSecondary">Penalty Expenses</Typography>
                        <Typography variant="h6">$12,400.00</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="textSecondary">Interest Analysis</Typography>
                        <Typography variant="h6">$4,250.00</Typography>
                    </Box>
                </Box>
            </Paper>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Journal Ref</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Account</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell align="right">Debit</TableCell>
                            <TableCell align="right">Credit</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.reference}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.account}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell align="right">{row.debit > 0 ? `$${row.debit.toLocaleString()}` : '-'}</TableCell>
                                <TableCell align="right">{row.credit > 0 ? `$${row.credit.toLocaleString()}` : '-'}</TableCell>
                                <TableCell align="center">
                                    <Chip
                                        label={row.status}
                                        size="small"
                                        color={row.status === 'Posted' ? 'success' : 'default'}
                                        variant={row.status === 'Draft' ? 'outlined' : 'filled'}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AccountingGLIntegration;
