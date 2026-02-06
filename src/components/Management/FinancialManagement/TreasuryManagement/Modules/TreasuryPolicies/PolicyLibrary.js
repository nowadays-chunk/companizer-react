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
    Button,
    IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AddIcon from '@mui/icons-material/Add';
import HistoryIcon from '@mui/icons-material/History';

const policies = [
    { id: 'POL-001', name: 'Global Liquidity Policy', category: 'Liquidity', version: '2.1', status: 'Active', owner: 'Treasurer', upd: '2025-01-10' },
    { id: 'POL-002', name: 'Investment Mandate', category: 'Investment', version: '1.4', status: 'Active', owner: 'Risk Mgr', upd: '2024-11-05' },
    { id: 'POL-003', name: 'FX Hedging Framework', category: 'FX Risk', version: '3.0', status: 'Draft', owner: 'FX Desk', upd: '2025-02-15' },
    { id: 'POL-004', name: 'Payment Authorization Matrix', category: 'Controls', version: '1.0', status: 'Archived', owner: 'Controller', upd: '2023-05-20' },
];

const PolicyLibrary = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h5">Policy Document Library</Typography>
                <Button variant="contained" startIcon={<AddIcon />}>Create New Policy</Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                            <TableCell>ID</TableCell>
                            <TableCell>Policy Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Version</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Last Updated</TableCell>
                            <TableCell>Owner</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {policies.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>{row.name}</TableCell>
                                <TableCell><Chip label={row.category} size="small" variant="outlined" /></TableCell>
                                <TableCell>{row.version}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.status}
                                        color={row.status === 'Active' ? 'success' : (row.status === 'Draft' ? 'warning' : 'default')}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>{row.upd}</TableCell>
                                <TableCell>{row.owner}</TableCell>
                                <TableCell align="right">
                                    <IconButton size="small"><PictureAsPdfIcon /></IconButton>
                                    <IconButton size="small"><EditIcon /></IconButton>
                                    <IconButton size="small"><HistoryIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PolicyLibrary;
