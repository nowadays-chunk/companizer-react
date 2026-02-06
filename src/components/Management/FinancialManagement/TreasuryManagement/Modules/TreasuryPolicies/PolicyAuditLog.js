import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

const auditLogs = [
    { time: 'Today, 10:42 AM', user: 'System', action: 'Breach Detected', details: 'Counterparty Limit Exceeded (JPM)' },
    { time: 'Today, 09:15 AM', user: 'J. Doe (Treasurer)', action: 'Policy Updated', details: 'Revised Liquidity Buffer Target -> $2M' },
    { time: 'Oct 25, 04:30 PM', user: 'M. Smith (Admin)', action: 'User Access', details: 'Granted Editor Role to Ops Team' },
    { time: 'Oct 25, 02:00 PM', user: 'System', action: 'Auto-Lock', details: 'Payment blocked due to policy violation' },
];

const PolicyAuditLog = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Audit Trail & Event Log</Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
                Immutable record of all policy changes, breaches, and enforcement actions.
            </Typography>

            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#fafafa' }}>
                            <TableCell>Timestamp</TableCell>
                            <TableCell>User / System</TableCell>
                            <TableCell>Action Type</TableCell>
                            <TableCell>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {auditLogs.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.time}</TableCell>
                                <TableCell>{row.user}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>{row.action}</TableCell>
                                <TableCell>{row.details}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PolicyAuditLog;
