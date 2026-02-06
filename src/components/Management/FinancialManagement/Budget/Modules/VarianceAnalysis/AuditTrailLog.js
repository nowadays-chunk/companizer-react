import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, TextField, InputAdornment } from '@mui/material';
import { History, Search } from '@mui/icons-material';

const AuditTrailLog = () => {
    const changes = [
        { id: 'LOG-3341', user: 'controller@company.com', action: 'Approved Variance', target: 'MKT-Q3', time: '2024-07-02 10:15 AM' },
        { id: 'LOG-3342', user: 'admin@company.com', action: 'Changed Threshold', target: 'Global-Rev', time: '2024-06-28 04:30 PM' },
    ];
    const [search, setSearch] = useState('');

    const filtered = changes.filter(r =>
        r.user.toLowerCase().includes(search.toLowerCase()) ||
        r.action.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <History color="primary" /> Audit Trail Log
                </Typography>
                <TextField
                    size="small"
                    placeholder="Search logs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }}
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
                            {filtered.map((row) => (
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
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default AuditTrailLog;
