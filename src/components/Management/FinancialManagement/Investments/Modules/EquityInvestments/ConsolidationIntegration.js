import React from 'react';
import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Chip } from '@mui/material';
import { MergeType } from '@mui/icons-material';

const ConsolidationIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Consolidation Integration</Typography>
                <Button variant="outlined" startIcon={<MergeType />}>View Consolidation Rules</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Consolidation Status</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ mr: 2 }}>Investment Type:</Typography>
                            <Chip label="Subsidiary" color="primary" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ mr: 2 }}>Method:</Typography>
                            <Typography>Full Consolidation</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ mr: 2 }}>NCI Basis:</Typography>
                            <Typography>Fair Value (Partial Goodwill)</Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Elimination Journal Entries</Typography>
                        <TableContainer>
                            <Table size="small">
                                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                                    <TableRow>
                                        <TableCell>Entry ID</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell align="right">Debit</TableCell>
                                        <TableCell align="right">Credit</TableCell>
                                        <TableCell align="center">Ref</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>ELIM-001</TableCell>
                                        <TableCell>Investment in Sub Elimination</TableCell>
                                        <TableCell align="right">$ 5,000,000</TableCell>
                                        <TableCell align="right">-</TableCell>
                                        <TableCell align="center">Conso-A</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>ELIM-001</TableCell>
                                        <TableCell>Share Capital (Sub)</TableCell>
                                        <TableCell align="right">-</TableCell>
                                        <TableCell align="right">$ 1,000,000</TableCell>
                                        <TableCell align="center">Conso-A</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>ELIM-001</TableCell>
                                        <TableCell>Retained Earnings (Sub)</TableCell>
                                        <TableCell align="right">-</TableCell>
                                        <TableCell align="right">$ 4,000,000</TableCell>
                                        <TableCell align="center">Conso-A</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Minority Interest (NCI) Calculation</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={3}>
                                <Typography variant="caption">Subsidiary Net Assets</Typography>
                                <Typography variant="h6">$ 6,200,000</Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography variant="caption">NCI %</Typography>
                                <Typography variant="h6">20%</Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography variant="caption">NCI Allocation</Typography>
                                <Typography variant="h6" color="secondary">$ 1,240,000</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Button size="small" variant="outlined">Post NCI Allocation</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ConsolidationIntegration;
