import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton } from '@mui/material';
import { Description, Send, Download } from '@mui/icons-material';

const CertificatesReporting = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Certificates & Reporting</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Generate and distribute withholding tax certificates to counterparties.
                    </Typography>
                </Box>
                <Button variant="contained" startIcon={<Description />}>Generate Form 16/16A</Button>
            </Box>

            <Paper sx={{ width: '100%', mb: 3, p: 2 }}>
                <Typography variant="h6" gutterBottom>Issued Certificates Log</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Certificate ID</TableCell>
                                <TableCell>Counterparty</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Tax Period</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { id: 'CERT-US-2023-001', party: 'Acme Corp', type: 'Form 1042-S', period: 'FY 2023', amt: '1,500.00', status: 'Issued' },
                                { id: 'CERT-IN-2023-992', party: 'TechSolutions', type: 'Form 16A', period: 'FY 2023-Q4', amt: 'INR 45,000', status: 'Sent to Vendor' },
                                { id: 'CERT-UK-2023-101', party: 'Global Rentals', type: 'WHT Certificate', period: '2023', amt: 'GBP 500.00', status: 'Draft' },
                            ].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>{row.id}</TableCell>
                                    <TableCell>{row.party}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.period}</TableCell>
                                    <TableCell align="right">{row.amt}</TableCell>
                                    <TableCell>
                                        <Chip label={row.status} size="small" color={row.status === 'Issued' ? 'success' : row.status === 'Draft' ? 'default' : 'info'} variant="outlined" />
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton size="small"><Download fontSize="small" /></IconButton>
                                        <IconButton size="small"><Send fontSize="small" /></IconButton>
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

export default CertificatesReporting;
