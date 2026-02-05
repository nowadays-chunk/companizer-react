import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import { GetApp, Refresh } from '@mui/icons-material';

const RepaymentSchedule = () => {
    // Mock data for amortization schedule
    const schedule = [
        { period: 1, date: '2023-11-15', opening: 5000000, payment: 62500, principal: 50000, interest: 12500, closing: 4950000, status: 'Scheduled' },
        { period: 2, date: '2023-12-15', opening: 4950000, payment: 62375, principal: 50000, interest: 12375, closing: 4900000, status: 'Scheduled' },
        { period: 3, date: '2024-01-15', opening: 4900000, payment: 62250, principal: 50000, interest: 12250, closing: 4850000, status: 'Scheduled' },
        { period: 4, date: '2024-02-15', opening: 4850000, payment: 62125, principal: 50000, interest: 12125, closing: 4800000, status: 'Scheduled' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5">Repayment Schedule (Amortization)</Typography>
                <Box>
                    <Button startIcon={<Refresh />} sx={{ mr: 1 }}>Recalculate</Button>
                    <Button variant="contained" startIcon={<GetApp />}>Export CSV</Button>
                </Box>
            </Box>

            <Paper sx={{ p: 3, mb: 3 }}>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                                <TableCell>#</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell align="right">Opening Balance</TableCell>
                                <TableCell align="right">Total Payment</TableCell>
                                <TableCell align="right">Principal</TableCell>
                                <TableCell align="right">Interest</TableCell>
                                <TableCell align="right">Closing Balance</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {schedule.map((row) => (
                                <TableRow key={row.period}>
                                    <TableCell>{row.period}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell align="right">{row.opening.toLocaleString()}</TableCell>
                                    <TableCell align="right" fontWeight="bold">{row.payment.toLocaleString()}</TableCell>
                                    <TableCell align="right">{row.principal.toLocaleString()}</TableCell>
                                    <TableCell align="right">{row.interest.toLocaleString()}</TableCell>
                                    <TableCell align="right">{row.closing.toLocaleString()}</TableCell>
                                    <TableCell>
                                        <Chip label={row.status} size="small" variant="outlined" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default RepaymentSchedule;
