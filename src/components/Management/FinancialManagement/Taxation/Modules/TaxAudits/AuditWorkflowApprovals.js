import React, { useState } from 'react';
import { Box, Typography, Paper, Button, Chip, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Check, Close } from '@mui/icons-material';

const initialApprovals = [
    { id: 1, type: 'Response Draft', details: 'Initial VAT Inquiry Response', requester: 'John Doe', status: 'Pending' },
    { id: 2, type: 'Payment', details: 'Penalty Settlement ($5,000)', requester: 'Jane Smith', status: 'Pending' },
    { id: 3, type: 'Adjustment', details: 'Q3 Inventory Write-off', requester: 'Mike Ross', status: 'Approved' },
];

const AuditWorkflowApprovals = () => {
    const [approvals, setApprovals] = useState(initialApprovals);

    const handleAction = (id, action) => {
        setApprovals(approvals.map(a => a.id === id ? { ...a, status: action } : a));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Workflow & Approvals</Typography>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Details</TableCell>
                            <TableCell>Requester</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {approvals.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.details}</TableCell>
                                <TableCell>{row.requester}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.status}
                                        color={row.status === 'Approved' ? 'success' : row.status === 'Rejected' ? 'error' : 'warning'}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    {row.status === 'Pending' && (
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <Button size="small" variant="contained" color="success" onClick={() => handleAction(row.id, 'Approved')}><Check fontSize="small" /></Button>
                                            <Button size="small" variant="outlined" color="error" onClick={() => handleAction(row.id, 'Rejected')}><Close fontSize="small" /></Button>
                                        </Box>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default AuditWorkflowApprovals;
