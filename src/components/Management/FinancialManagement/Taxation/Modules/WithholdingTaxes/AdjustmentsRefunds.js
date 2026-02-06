import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, TextField, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { Add, History } from '@mui/icons-material';

const AdjustmentsRefunds = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Adjustments & Refunds</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Process manual adjustments, corrections, and refund requests.
                    </Typography>
                </Box>
                <Button variant="contained" startIcon={<Add />}>New Adjustment</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>Quick Adjustment</Typography>
                        <Box display="flex" flexDirection="column" gap={2} mt={2}>
                            <TextField label="Affected Transaction ID" fullWidth />
                            <TextField label="Adjustment Type" select fullWidth defaultValue="">
                                <MenuItem value="over">Over-withheld Refund</MenuItem>
                                <MenuItem value="under">Under-withheld Correction</MenuItem>
                                <MenuItem value="treaty">Retroactive Treaty Claim</MenuItem>
                            </TextField>
                            <TextField label="Adjustment Amount" type="number" fullWidth />
                            <TextField label="Reason Code" select fullWidth defaultValue="">
                                <MenuItem value="error">Calculation Error</MenuItem>
                                <MenuItem value="doc">Late Documentation</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </TextField>
                            <TextField label="Notes" multiline rows={3} fullWidth />
                            <Button variant="contained" fullWidth sx={{ mt: 1 }}>Submit for Approval</Button>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Adjustment History</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Request ID</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell>Requested By</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {[
                                        { id: 'ADJ-2024-001', date: '2024-02-01', type: 'Over-withheld Refund', amt: '150.00', user: 'J. Doe', status: 'Approved' },
                                        { id: 'ADJ-2024-002', date: '2024-02-03', type: 'Retroactive Treaty', amt: '1,200.00', user: 'A. Smith', status: 'Pending Approval' },
                                        { id: 'ADJ-2024-003', date: '2024-01-25', type: 'Calculation Error', amt: '50.00', user: 'SYSTEM', status: 'Approved' },
                                    ].map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell sx={{ fontFamily: 'monospace' }}>{row.id}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.type}</TableCell>
                                            <TableCell align="right">{row.amt}</TableCell>
                                            <TableCell>{row.user}</TableCell>
                                            <TableCell>
                                                <Chip label={row.status} size="small" color={row.status === 'Approved' ? 'success' : 'warning'} variant="outlined" />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AdjustmentsRefunds;
