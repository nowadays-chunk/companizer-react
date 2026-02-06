import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton } from '@mui/material';
import { Public, Search } from '@mui/icons-material';

const MultiJurisdictionTreaty = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Multi-Jurisdiction & Treaty Management</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Manage Double Taxation Avoidance Agreements (DTAA) and treaty rates.
                    </Typography>
                </Box>
                <Button variant="outlined" startIcon={<Search />}>Search Treaty Database</Button>
            </Box>

            <Paper sx={{ width: '100%', mb: 3 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Paying Country</TableCell>
                                <TableCell>Beneficiary Country</TableCell>
                                <TableCell>Deal Type</TableCell>
                                <TableCell>Standard Rate</TableCell>
                                <TableCell>Treaty Rate</TableCell>
                                <TableCell>Article Ref</TableCell>
                                <TableCell>Directives</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { from: 'United States', to: 'United Kingdom', type: 'Dividends', std: '30%', treaty: '15% / 0%', ref: 'Art. 10', dir: '-' },
                                { from: 'United States', to: 'India', type: 'Tech Services', std: '30%', treaty: '15%', ref: 'Art. 12', dir: '-' },
                                { from: 'Germany', to: 'United Kingdom', type: 'Royalties', std: '15%', treaty: '0%', ref: 'Art. 12', dir: 'EU Directive' },
                            ].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell fontWeight="500">{row.from}</TableCell>
                                    <TableCell fontWeight="500">{row.to}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.std}</TableCell>
                                    <TableCell sx={{ color: 'success.main', fontWeight: 'bold' }}>{row.treaty}</TableCell>
                                    <TableCell>{row.ref}</TableCell>
                                    <TableCell>{row.dir}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default MultiJurisdictionTreaty;
