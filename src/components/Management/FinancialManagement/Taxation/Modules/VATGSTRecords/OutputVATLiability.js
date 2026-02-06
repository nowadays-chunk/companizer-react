import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, Chip } from '@mui/material';

const liabilities = [
    { period: '2025-Q1', sales: 1500000, vat: 300000, status: 'Open' },
    { period: '2024-Q4', sales: 1200000, vat: 240000, status: 'Declared' },
    { period: '2024-Q3', sales: 1100000, vat: 220000, status: 'Paid' },
];

const OutputVATLiability = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Output VAT Liability</Typography>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Period</TableCell>
                            <TableCell>Total Sales</TableCell>
                            <TableCell>Output VAT</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {liabilities.map((row) => (
                            <TableRow key={row.period}>
                                <TableCell>{row.period}</TableCell>
                                <TableCell>${row.sales.toLocaleString()}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>${row.vat.toLocaleString()}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.status}
                                        color={row.status === 'Paid' ? 'success' : row.status === 'Declared' ? 'info' : 'warning'}
                                        size="small"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default OutputVATLiability;
