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
    Paper,
    Chip,
    Button
} from '@mui/material';

const exceptions = [
    { id: 'EX-2025-019', type: 'Payment Limit Waiver', req: 'Ops Manager', details: 'Urgent vendor payment $1.2M (Limit $1M)', status: 'Pending Approval', date: 'Oct 26' },
    { id: 'EX-2025-018', type: 'Rating Exception', req: 'Investment Desk', details: 'Temp deposit with SVB (Rating Suspect)', status: 'Rejected', date: 'Oct 24' },
    { id: 'EX-2025-015', type: 'FX Policy Waiver', req: 'CFO', details: 'Delay hedging for Q4 due to volatility', status: 'Approved', date: 'Oct 15' },
];

const ExceptionWorkflows = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Exception & Waiver Requests</Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                            <TableCell>Request ID</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Details</TableCell>
                            <TableCell>Requester</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {exceptions.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>{row.type}</TableCell>
                                <TableCell>{row.details}</TableCell>
                                <TableCell>{row.req}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.status}
                                        color={row.status === 'Approved' ? 'success' : (row.status === 'Rejected' ? 'error' : 'warning')}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    {row.status === 'Pending Approval' && (
                                        <>
                                            <Button size="small" color="success">Approve</Button>
                                            <Button size="small" color="error">Reject</Button>
                                        </>
                                    )}
                                    {row.status !== 'Pending Approval' && <Button size="small" disabled>Closed</Button>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ExceptionWorkflows;
