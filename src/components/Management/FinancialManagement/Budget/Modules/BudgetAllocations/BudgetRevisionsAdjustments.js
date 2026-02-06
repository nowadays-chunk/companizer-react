import React, { useState } from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem } from '@mui/material';
import { Transform, Add } from '@mui/icons-material';

const BudgetRevisionsAdjustments = () => {
    const [revisions, setRevisions] = useState([
        { id: 'REV-001', date: '2024-03-15', Type: 'Transfer', from: 'Marketing', to: 'Sales', amount: 5000, status: 'Approved' },
        { id: 'REV-002', date: '2024-04-02', Type: 'Amendment', from: 'Corporate Reserve', to: 'IT Ops', amount: 12000, status: 'Pending' },
    ]);
    const [open, setOpen] = useState(false);
    const [newRev, setNewRev] = useState({ Type: 'Transfer', from: '', to: '', amount: 0 });

    const handleAdd = () => {
        setRevisions([...revisions, {
            id: `REV-${String(revisions.length + 1).padStart(3, '0')}`,
            date: new Date().toISOString().split('T')[0],
            ...newRev,
            status: 'Pending'
        }]);
        setOpen(false);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Transform color="primary" /> Budget Revisions & Adjustments
                </Typography>
                <Button variant="contained" startIcon={<Add />} onClick={() => setOpen(true)}>New Revision</Button>
            </Box>

            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Revision ID</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>From</TableCell>
                                <TableCell>To</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {revisions.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.Type}</TableCell>
                                    <TableCell>{row.from}</TableCell>
                                    <TableCell>{row.to}</TableCell>
                                    <TableCell align="right">${row.amount.toLocaleString()}</TableCell>
                                    <TableCell>
                                        <Chip label={row.status} color={row.status === 'Approved' ? 'success' : 'warning'} size="small" />
                                    </TableCell>
                                    <TableCell>
                                        <Button size="small">Details</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>New Budget Revision</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2, minWidth: 400 }}>
                    <TextField
                        select
                        label="Type"
                        value={newRev.Type}
                        onChange={(e) => setNewRev({ ...newRev, Type: e.target.value })}
                    >
                        <MenuItem value="Transfer">Transfer</MenuItem>
                        <MenuItem value="Amendment">Amendment</MenuItem>
                    </TextField>
                    <TextField label="From Department" onChange={(e) => setNewRev({ ...newRev, from: e.target.value })} />
                    <TextField label="To Department" onChange={(e) => setNewRev({ ...newRev, to: e.target.value })} />
                    <TextField label="Amount" type="number" onChange={(e) => setNewRev({ ...newRev, amount: parseFloat(e.target.value) })} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="contained" onClick={handleAdd}>Submit</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default BudgetRevisionsAdjustments;
