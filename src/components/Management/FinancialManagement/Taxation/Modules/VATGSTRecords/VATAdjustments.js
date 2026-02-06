import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Table, TableHead, TableRow, TableCell, TableBody, Chip, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';

const VATAdjustments = () => {
    const [open, setOpen] = useState(false);
    const [adjustments, setAdjustments] = useState([
        { id: 1, date: '2025-02-01', reason: 'Bad Debt Relief', amount: -250.00, status: 'Approved' },
        { id: 2, date: '2025-01-15', reason: 'Rounding Correction', amount: 5.40, status: 'Pending' },
    ]);

    const handleAdd = () => {
        setAdjustments([...adjustments, { id: Date.now(), date: new Date().toISOString().split('T')[0], reason: 'New Adjustment', amount: 0, status: 'Draft' }]);
        setOpen(false);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5">VAT Adjustments</Typography>
                <Button variant="contained" startIcon={<Add />} onClick={() => setOpen(true)}>New Adjustment</Button>
            </Box>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Reason</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {adjustments.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.reason}</TableCell>
                                <TableCell align="right" sx={{ color: row.amount < 0 ? 'error.main' : 'success.main' }}>
                                    {row.amount > 0 ? '+' : ''}{row.amount.toFixed(2)}
                                </TableCell>
                                <TableCell>
                                    <Chip label={row.status} color={row.status === 'Approved' ? 'success' : 'warning'} size="small" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Record Manual Adjustment</DialogTitle>
                <DialogContent>
                    <TextField fullWidth label="Reason" sx={{ mb: 2, mt: 1 }} />
                    <TextField fullWidth label="Amount" type="number" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="contained" onClick={handleAdd}>Save</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default VATAdjustments;
