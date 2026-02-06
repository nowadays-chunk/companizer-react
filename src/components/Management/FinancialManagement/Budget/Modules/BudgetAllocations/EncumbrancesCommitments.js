import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Assignment, Add } from '@mui/icons-material';

const EncumbrancesCommitments = () => {
    const [commitments, setCommitments] = useState([
        { id: 'PO-9921', vendor: 'Dell Technologies', desc: 'Server Hardware', amount: 45000, status: 'Open', date: '2024-05-10' },
        { id: 'CN-1022', vendor: 'WeWork', desc: 'Q3 Office Lease', amount: 12000, status: 'Committed', date: '2024-06-01' },
    ]);
    const [open, setOpen] = useState(false);
    const [newComm, setNewComm] = useState({ vendor: '', desc: '', amount: 0 });

    const handleAdd = () => {
        setCommitments([...commitments, {
            id: `MN-${Math.floor(Math.random() * 1000)}`,
            status: 'Committed',
            date: new Date().toISOString().split('T')[0],
            ...newComm
        }]);
        setOpen(false);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Assignment color="primary" /> Encumbrances & Commitments
                </Typography>
                <Button variant="contained" startIcon={<Add />} onClick={() => setOpen(true)}>Add Commitment</Button>
            </Box>

            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Ref ID</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Vendor/Party</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {commitments.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.vendor}</TableCell>
                                    <TableCell>{row.desc}</TableCell>
                                    <TableCell align="right">${row.amount.toLocaleString()}</TableCell>
                                    <TableCell>
                                        <Chip label={row.status} color="primary" variant="outlined" size="small" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add Manual Commitment</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2, minWidth: 400 }}>
                    <TextField label="Vendor / Party" onChange={(e) => setNewComm({ ...newComm, vendor: e.target.value })} />
                    <TextField label="Description" onChange={(e) => setNewComm({ ...newComm, desc: e.target.value })} />
                    <TextField label="Amount" type="number" onChange={(e) => setNewComm({ ...newComm, amount: parseFloat(e.target.value) })} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="contained" onClick={handleAdd}>Add</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default EncumbrancesCommitments;
