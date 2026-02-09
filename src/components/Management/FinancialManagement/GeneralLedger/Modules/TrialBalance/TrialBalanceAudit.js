import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Chip
} from '@mui/material';
import {
    History,
    Download,
    Visibility
} from '@mui/icons-material';

import { fieldsConfig, collectionName, entityName } from './Modules/General/TrialBalanceAuditConfig';

const TrialBalanceAudit = () => {
    const history = [
        { id: 1, date: '2026-01-31 23:59:59', type: 'System Snapshot', user: 'System', status: 'Locked' },
        { id: 2, date: '2026-01-15 14:30:00', type: 'Manual Save', user: 'John Doe', status: 'Draft' },
        { id: 3, date: '2025-12-31 23:59:59', type: 'Year End Close', user: 'Admin', status: 'Final' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>Audit & Snapshots</Typography>

            <Paper elevation={0} variant="outlined">
                <TableContainer>
                    <Table>
                        <TableHead sx={{ bgcolor: '#f3f4f6' }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Timestamp</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>User</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {history.map((row) => (
                                <TableRow key={row.id} hover>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.user}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={row.status}
                                            size="small"
                                            color={row.status === 'Locked' || row.status === 'Final' ? 'success' : 'default'}
                                            variant="outlined"
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button size="small" startIcon={<Visibility />}>View</Button>
                                        <Button size="small" startIcon={<Download />}>Export</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default TrialBalanceAudit;
