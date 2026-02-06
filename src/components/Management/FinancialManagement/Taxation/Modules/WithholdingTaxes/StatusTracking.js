import React from 'react';
import { Box, Typography, Paper, Stepper, Step, StepLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';

const StatusTracking = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight="600" gutterBottom>Status Tracking</Typography>
            <Typography variant="body2" color="textSecondary" mb={3}>
                Track the lifecycle of withholding transactions from calculation to reconciliation.
            </Typography>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold">Lifecycle Overview</Typography>
                <Stepper activeStep={2} alternativeLabel sx={{ pt: 2, pb: 2 }}>
                    {['Calculated', 'Withheld', 'Certificate Issued', 'Remitted', 'Reconciled'].map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Paper>

            <Paper sx={{ width: '100%', p: 2 }}>
                <Typography variant="h6" gutterBottom>Item Status Log</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Transaction ID</TableCell>
                                <TableCell>Counterparty</TableCell>
                                <TableCell>Stage</TableCell>
                                <TableCell>Last Updated</TableCell>
                                <TableCell align="right">Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { id: 'TRX-1001', party: 'Acme Corp', stage: 'Remitted', date: '2024-02-05 10:30 AM', amt: '150.00' },
                                { id: 'TRX-1002', party: 'TechSolutions', stage: 'Certificate Issued', date: '2024-02-04 02:15 PM', amt: '500.00' },
                                { id: 'TRX-1003', party: 'Global Rentals', stage: 'Calculated', date: '2024-02-05 09:00 AM', amt: '250.00' },
                            ].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>{row.id}</TableCell>
                                    <TableCell>{row.party}</TableCell>
                                    <TableCell>
                                        <Chip label={row.stage} size="small" variant="outlined" color="primary" />
                                    </TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell align="right">{row.amt}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default StatusTracking;
