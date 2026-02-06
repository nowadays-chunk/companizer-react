import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, TextField, InputAdornment } from '@mui/material';
import { History, Search } from '@mui/icons-material';

const BudgetAuditControls = () => {
    const [search, setSearch] = useState('');
    const logs = [
        { id: 'LOG-8821', user: 'admin@company.com', action: 'Modified Budget Limit', target: 'MKT-001', time: '2024-03-12 10:30 AM' },
        { id: 'LOG-8822', user: 'manager@sales.com', action: 'Approved Revision', target: 'REV-001', time: '2024-03-15 02:15 PM' },
        { id: 'LOG-8823', user: 'director@it.com', action: 'Rejected Forecast', target: 'REV-005', time: '2024-03-16 09:00 AM' },
    ];

    const filteredLogs = logs.filter(row =>
        row.user.toLowerCase().includes(search.toLowerCase()) ||
        row.action.toLowerCase().includes(search.toLowerCase()) ||
        row.target.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <History color="primary" /> Controls & Audit Trail
                </Typography>
                <TextField
                    size="small"
                    placeholder="Search logs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                    }}
                />
            </Box>

            <Paper>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Log ID</TableCell>
                                <TableCell>Timestamp</TableCell>
                                <TableCell>User</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell>Target Ref</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredLogs.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.time}</TableCell>
                                    <TableCell>{row.user}</TableCell>
                                    <TableCell>
                                        <Chip label={row.action} size="small" variant="outlined" />
                                    </TableCell>
                                    <TableCell>{row.target}</TableCell>
                                </TableRow>
                            ))}
                            {filteredLogs.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} align="center">No logs found matching "{search}"</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default BudgetAuditControls;
