import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Chip
} from '@mui/material';
import { CheckCircle, Warning } from '@mui/icons-material';

const ReconciliationIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Bank Reconciliation Matching</Typography>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Unreconciled Interest Payments</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                                <TableCell>Date</TableCell>
                                <TableCell>Reference</TableCell>
                                <TableCell>System Amount</TableCell>
                                <TableCell>Bank Statement Line</TableCell>
                                <TableCell>Match Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>2023-10-15</TableCell>
                                <TableCell>IP-10023</TableCell>
                                <TableCell>$ 12,500.00</TableCell>
                                <TableCell>
                                    <Box sx={{ p: 1, bgcolor: '#e8f5e9', borderRadius: 1 }}>
                                        Chase OD... INT CHARGE ... 12,500.00
                                    </Box>
                                </TableCell>
                                <TableCell><Chip icon={<CheckCircle />} label="Auto-Match" color="success" size="small" /></TableCell>
                                <TableCell><Button size="small">Confirm</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2023-10-18</TableCell>
                                <TableCell>IP-10024</TableCell>
                                <TableCell>$ 5,000.00</TableCell>
                                <TableCell>
                                    <Typography variant="caption" color="textSecondary">No exact match found.</Typography>
                                </TableCell>
                                <TableCell><Chip icon={<Warning />} label="Unmatched" color="error" size="small" /></TableCell>
                                <TableCell><Button size="small" variant="contained">Manual Match</Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default ReconciliationIntegration;
