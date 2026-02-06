import React from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { VerifiedUser, Check, Close } from '@mui/icons-material';

const ValuationApprovals = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>Valuation Change Approvals</Typography>
            <Typography variant="body1" color="textSecondary" mb={4}>
                Pending approvals for manual cost adjustments and inventory write-offs.
            </Typography>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Request ID</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Requested By</TableCell>
                                <TableCell align="right">Impact Amount</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>REQ-991</TableCell>
                                <TableCell>Scrap Damaged Goods (Batch-221)</TableCell>
                                <TableCell>John Doe (Warehouse Mgr)</TableCell>
                                <TableCell align="right" sx={{ color: 'error.main' }}>-$2,500.00</TableCell>
                                <TableCell>
                                    <Button size="small" variant="contained" color="success" startIcon={<Check />} sx={{ mr: 1 }}>Approve</Button>
                                    <Button size="small" variant="outlined" color="error" startIcon={<Close />}>Reject</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>REQ-992</TableCell>
                                <TableCell>Landed Cost Adjustment (Invoice #5512)</TableCell>
                                <TableCell>Jane Smith (Accountant)</TableCell>
                                <TableCell align="right" sx={{ color: 'success.main' }}>+$450.00</TableCell>
                                <TableCell>
                                    <Button size="small" variant="contained" color="success" startIcon={<Check />} sx={{ mr: 1 }}>Approve</Button>
                                    <Button size="small" variant="outlined" color="error" startIcon={<Close />}>Reject</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default ValuationApprovals;
