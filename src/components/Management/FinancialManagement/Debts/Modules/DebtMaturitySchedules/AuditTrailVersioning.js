import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const AuditTrailVersioning = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Schedule Versioning</Typography>
            <Paper sx={{ p: 3 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Version</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Changed By</TableCell>
                                <TableCell>Reason</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>v3.0</TableCell>
                                <TableCell>2023-11-01</TableCell>
                                <TableCell>System</TableCell>
                                <TableCell>Auto-reclass for Period Close</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>v2.0</TableCell>
                                <TableCell>2023-10-15</TableCell>
                                <TableCell>User A</TableCell>
                                <TableCell>Updated repayment dates</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};
export default AuditTrailVersioning;
