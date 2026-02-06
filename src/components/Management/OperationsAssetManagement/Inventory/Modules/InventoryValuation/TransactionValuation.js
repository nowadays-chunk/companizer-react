import React from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { Receipt, AssignmentReturn } from '@mui/icons-material';

const TransactionValuation = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4">Transaction Valuation</Typography>
                <Box>
                    <Button variant="outlined" startIcon={<AssignmentReturn />} sx={{ mr: 1 }}>Returns</Button>
                    <Button variant="contained" startIcon={<Receipt />}>New Receipt</Button>
                </Box>
            </Box>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Transaction ID</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Unit Cost</TableCell>
                                <TableCell align="right">Total Value</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>TRX-001</TableCell>
                                <TableCell>Goods Receipt</TableCell>
                                <TableCell>Steel Beam I-200</TableCell>
                                <TableCell align="right">50</TableCell>
                                <TableCell align="right">$120.00</TableCell>
                                <TableCell align="right">$6,000.00</TableCell>
                                <TableCell><Chip label="Valued" color="success" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>TRX-002</TableCell>
                                <TableCell>Internal Issue</TableCell>
                                <TableCell>Welding Rods</TableCell>
                                <TableCell align="right">200</TableCell>
                                <TableCell align="right">$0.50</TableCell>
                                <TableCell align="right">$100.00</TableCell>
                                <TableCell><Chip label="Pending" color="warning" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>TRX-003</TableCell>
                                <TableCell>Stock Transfer</TableCell>
                                <TableCell>Paint - Industrial Blue</TableCell>
                                <TableCell align="right">20</TableCell>
                                <TableCell align="right">$45.00</TableCell>
                                <TableCell align="right">$900.00</TableCell>
                                <TableCell><Chip label="Valued" color="success" size="small" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default TransactionValuation;
