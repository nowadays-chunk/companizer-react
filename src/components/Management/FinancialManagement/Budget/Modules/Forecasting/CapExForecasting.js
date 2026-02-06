import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';
import { Build } from '@mui/icons-material';

const CapExForecasting = () => {
    const items = [
        { id: 1, project: 'New Manufacturing Line', cost: 1200000, timing: 'Q3 2024', status: 'Proposed' },
        { id: 2, project: 'IT Infrastructure Upgrade', cost: 450000, timing: 'Q4 2024', status: 'Approved' },
        { id: 3, project: 'Fleet Replacement', cost: 150000, timing: 'Q1 2025', status: 'Review' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Build color="primary" /> CapEx Forecasting
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Project Name</TableCell>
                            <TableCell align="right">Estimated Cost</TableCell>
                            <TableCell>Timing</TableCell>
                            <TableCell>Depreciation Start</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.project}</TableCell>
                                <TableCell align="right">${row.cost.toLocaleString()}</TableCell>
                                <TableCell>{row.timing}</TableCell>
                                <TableCell>{row.timing === 'Q3 2024' ? 'Oct 2024' : row.timing === 'Q4 2024' ? 'Jan 2025' : 'Apr 2025'}</TableCell>
                                <TableCell>
                                    <Chip label={row.status} color={row.status === 'Approved' ? 'success' : 'default'} size="small" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default CapExForecasting;
