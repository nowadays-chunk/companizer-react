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
    Button,
    Chip,
    IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import AddIcon from '@mui/icons-material/Add';

const adjustments = [
    { id: 1, desc: 'One-off Equipment Sale', amount: 5000, date: '2025-05-15', status: 'Approved', user: 'J. Doe' },
    { id: 2, desc: 'Legal Settlement Payout', amount: -12000, date: '2025-06-01', status: 'Pending', user: 'M. Smith' },
    { id: 3, desc: 'Tax Refund Adjustment', amount: 2500, date: '2025-04-20', status: 'Draft', user: 'A. Johnson' },
];

const AdjustmentsEntry = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h5">Manual Forecast Adjustments</Typography>
                <Button variant="contained" startIcon={<AddIcon />}>New Adjustment</Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                            <TableCell>Description</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>User</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {adjustments.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell sx={{ color: row.amount > 0 ? 'success.main' : 'error.main', fontWeight: 'bold' }}>
                                    ${Math.abs(row.amount).toLocaleString()} {row.amount > 0 ? '(In)' : '(Out)'}
                                </TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.user}</TableCell>
                                <TableCell>
                                    <Chip
                                        icon={row.status === 'Approved' ? <CheckCircleIcon /> : (row.status === 'Pending' ? <PauseCircleIcon /> : <EditIcon />)}
                                        label={row.status}
                                        color={row.status === 'Approved' ? 'success' : (row.status === 'Pending' ? 'warning' : 'default')}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <IconButton size="small"><EditIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AdjustmentsEntry;
