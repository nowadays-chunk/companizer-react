import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';
import { History } from '@mui/icons-material';

const ForecastVersionControl = () => {
    const versions = [
        { ver: 'v2.1', date: 'Oct 15, 2024', author: 'CFO Office', tag: 'Board Approved', active: true },
        { ver: 'v2.0', date: 'Oct 12, 2024', author: 'FP&A Manager', tag: 'Final Review', active: false },
        { ver: 'v1.5', date: 'Oct 01, 2024', author: 'Dept Heads', tag: 'Draft', active: false },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <History color="primary" /> Forecast Version Control
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Version</TableCell>
                            <TableCell>Date Created</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Status Tag</TableCell>
                            <TableCell>State</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {versions.map((row) => (
                            <TableRow key={row.ver}>
                                <TableCell>{row.ver}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.author}</TableCell>
                                <TableCell>
                                    <Chip label={row.tag} color="primary" variant="outlined" size="small" />
                                </TableCell>
                                <TableCell>
                                    {row.active && <Chip label="ACTIVE" color="success" size="small" />}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ForecastVersionControl;
