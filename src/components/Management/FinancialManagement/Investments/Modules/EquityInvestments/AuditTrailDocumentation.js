import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';

const AuditTrailDocumentation = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Audit Trail & Documentation</Typography>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>System Logs</Typography>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Timestamp</TableCell>
                                <TableCell>User</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell>Field</TableCell>
                                <TableCell>Old Value</TableCell>
                                <TableCell>New Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>2025-09-01 10:30:45</TableCell>
                                <TableCell>admin@finance.com</TableCell>
                                <TableCell>Update</TableCell>
                                <TableCell>Fair Value</TableCell>
                                <TableCell>$ 15.50</TableCell>
                                <TableCell>$ 16.20</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2025-08-28 14:12:01</TableCell>
                                <TableCell>system_job</TableCell>
                                <TableCell>Auto-Process</TableCell>
                                <TableCell>FX Translation</TableCell>
                                <TableCell>-</TableCell>
                                <TableCell>$ 1,240.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2025-08-15 09:00:22</TableCell>
                                <TableCell>jdoe</TableCell>
                                <TableCell>Approval</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Draft</TableCell>
                                <TableCell>Active</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default AuditTrailDocumentation;
