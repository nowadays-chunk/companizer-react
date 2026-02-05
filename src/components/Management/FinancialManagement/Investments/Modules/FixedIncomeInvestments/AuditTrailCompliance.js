import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const AuditTrailCompliance = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Audit Trail & Compliance</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Timestamp</TableCell>
                            <TableCell>User</TableCell>
                            <TableCell>Action</TableCell>
                            <TableCell>Entity</TableCell>
                            <TableCell>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>2025-06-25 10:30 AM</TableCell>
                            <TableCell>j.doe@example.com</TableCell>
                            <TableCell>Valuation Update</TableCell>
                            <TableCell>Corp Bond XYZ</TableCell>
                            <TableCell>Changed price from 98.00 to 98.50</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2025-06-25 09:15 AM</TableCell>
                            <TableCell>admin</TableCell>
                            <TableCell>Approval</TableCell>
                            <TableCell>Purchase Order #123</TableCell>
                            <TableCell>Approved purchase of $500k T-Bills</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AuditTrailCompliance;
