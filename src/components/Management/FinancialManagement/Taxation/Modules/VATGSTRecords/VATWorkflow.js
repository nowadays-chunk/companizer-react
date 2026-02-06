import React from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Chip } from '@mui/material';
import { Check, Close } from '@mui/icons-material';

const approvals = [
    { id: 1, type: 'Adjustment', desc: 'Bad Debt Relief > $500', user: 'J. Doe', status: 'Pending' },
    { id: 2, type: 'Return', desc: 'Q1 VAT Return Filing', user: 'System', status: 'Pending' },
];

const VATWorkflow = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Workflow & Approvals</Typography>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Initiated By</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {approvals.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell>{row.user}</TableCell>
                                <TableCell><Chip label={row.status} color="warning" size="small" /></TableCell>
                                <TableCell align="right">
                                    <Button size="small" startIcon={<Check />} color="success">Approve</Button>
                                    <Button size="small" startIcon={<Close />} color="error" sx={{ ml: 1 }}>Reject</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default VATWorkflow;
