import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { History } from '@mui/icons-material';

const CarryforwardManagement = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">Carryforward History</Typography>
            <Paper sx={{ p: 3 }}>
                <Box display="flex" alignItems="center" mb={2}>
                    <History color="action" sx={{ mr: 1 }} />
                    <Typography variant="h6">Historical Carryforwards</Typography>
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Fiscal Year</TableCell>
                                <TableCell>Original Amount</TableCell>
                                <TableCell>Utilized</TableCell>
                                <TableCell>Remaining</TableCell>
                                <TableCell>Expiry Date</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { year: '2023', orig: '$10,000', used: '$5,000', rem: '$5,000', expiry: '2028-12-31', status: 'Active' },
                                { year: '2022', orig: '$8,000', used: '$8,000', rem: '$0', expiry: '2027-12-31', status: 'Fully Utilized' },
                            ].map((row, idx) => (
                                <TableRow key={idx}>
                                    <TableCell>{row.year}</TableCell>
                                    <TableCell>{row.orig}</TableCell>
                                    <TableCell>{row.used}</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>{row.rem}</TableCell>
                                    <TableCell>{row.expiry}</TableCell>
                                    <TableCell>
                                        <Chip label={row.status} color={row.status === 'Active' ? 'success' : 'default'} size="small" />
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

export default CarryforwardManagement;
