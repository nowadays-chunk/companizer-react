import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Security } from '@mui/icons-material';

const DataIntegrity = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">Audit Logs & Integrity</Typography>
            <Paper sx={{ p: 0, overflow: 'hidden' }}>
                <Box p={3} borderBottom="1px solid" borderColor="divider" display="flex" alignItems="center">
                    <Security color="info" sx={{ mr: 1 }} />
                    <Typography variant="h6">System Audit Trail</Typography>
                </Box>
                <TableContainer>
                    <Table size="small">
                        <TableHead sx={{ bgcolor: 'action.hover' }}>
                            <TableRow>
                                <TableCell>Timestamp</TableCell>
                                <TableCell>User</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell>Details</TableCell>
                                <TableCell>IP Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { time: '2025-04-12 14:30:22', user: 'admin@company.com', action: 'APPROVE', details: 'Approved Credit Application ID #9921', ip: '192.168.1.45' },
                                { time: '2025-04-10 09:15:00', user: 'system_bot', action: 'CALC_RUN', details: 'Auto-calculation engine triggered', ip: '10.0.0.12' },
                                { time: '2025-04-01 11:20:10', user: 'jdoe@company.com', action: 'CREATE', details: 'Created Draft ID #9921', ip: '192.168.1.102' },
                            ].map((row, idx) => (
                                <TableRow key={idx} hover>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>{row.time}</TableCell>
                                    <TableCell>{row.user}</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>{row.action}</TableCell>
                                    <TableCell>{row.details}</TableCell>
                                    <TableCell sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>{row.ip}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default DataIntegrity;
