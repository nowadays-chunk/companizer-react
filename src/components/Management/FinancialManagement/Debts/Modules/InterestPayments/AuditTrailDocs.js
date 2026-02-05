import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';

const AuditTrailDocs = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Audit Trail</Typography>
            <Paper sx={{ p: 3 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ bgcolor: '#eee' }}>
                                <TableCell>Timestamp</TableCell>
                                <TableCell>User</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell>Details</TableCell>
                                <TableCell>Impact</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>2023-11-10 14:30:22</TableCell>
                                <TableCell>System</TableCell>
                                <TableCell>Auto-Calculation</TableCell>
                                <TableCell>Run monthly interest job</TableCell>
                                <TableCell><Chip label="Data Update" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2023-11-11 09:15:00</TableCell>
                                <TableCell>John.Doe</TableCell>
                                <TableCell>Manual Override</TableCell>
                                <TableCell>Changed day count to ACT/365 for Loan #55</TableCell>
                                <TableCell><Chip label="Critical" color="warning" size="small" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default AuditTrailDocs;
