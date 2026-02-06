import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, TextField, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Card, CardContent } from '@mui/material';
import { Calculate, PlayArrow, Refresh } from '@mui/icons-material';

const WithholdingCalculationEngine = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Withholding Calculation Engine</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Simulate and review withholding tax calculations.
                    </Typography>
                </Box>
                <Button variant="outlined" startIcon={<Refresh />}>Refresh Rules</Button>
            </Box>

            <Grid container spacing={3}>
                {/* Simulation Panel */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom display="flex" alignItems="center" gap={1}>
                            <Calculate fontSize="small" /> Simulator
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={2} mt={2}>
                            <TextField label="Counterparty" select fullWidth defaultValue="">
                                <MenuItem value="acme">Acme Corp International</MenuItem>
                                <MenuItem value="tech">TechSolutions Pvt Ltd</MenuItem>
                            </TextField>
                            <TextField label="Transaction Type" select fullWidth defaultValue="">
                                <MenuItem value="service">Professional Services</MenuItem>
                                <MenuItem value="dividend">Dividends</MenuItem>
                                <MenuItem value="rent">Rent</MenuItem>
                            </TextField>
                            <TextField label="Jurisdiction" select fullWidth defaultValue="">
                                <MenuItem value="us">US Federal</MenuItem>
                                <MenuItem value="uk">UK HMRC</MenuItem>
                            </TextField>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <TextField label="Gross Amount" type="number" fullWidth />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField label="Currency" select fullWidth defaultValue="USD">
                                        <MenuItem value="USD">USD</MenuItem>
                                        <MenuItem value="GBP">GBP</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Button variant="contained" size="large" startIcon={<PlayArrow />} sx={{ mt: 1 }}>
                                Calculate
                            </Button>
                        </Box>

                        <Box mt={3} p={2} bgcolor="#f5f5f5" borderRadius={1}>
                            <Typography variant="subtitle2" color="textSecondary">Projected Withholding</Typography>
                            <Typography variant="h4" color="primary" fontWeight="bold">0.00</Typography>
                            <Typography variant="caption" display="block">Rate Applied: 0%</Typography>
                        </Box>
                    </Paper>
                </Grid>

                {/* Recent Calculations Log */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Recent Calculations Log</Typography>
                        <TableContainer component={Box}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Reference</TableCell>
                                        <TableCell>Counterparty</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell align="right">Gross</TableCell>
                                        <TableCell align="right">WHT Amount</TableCell>
                                        <TableCell align="right">Rate</TableCell>
                                        <TableCell align="right">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {[
                                        { ref: 'TRX-9001', party: 'Acme Corp', type: 'Service', gross: '10,000.00', wht: '0.00', rate: '0% (Treaty)', status: 'Success' },
                                        { ref: 'TRX-9002', party: 'TechSolutions', type: 'Royalty', gross: '5,000.00', wht: '500.00', rate: '10%', status: 'Success' },
                                        { ref: 'TRX-9003', party: 'Global Rentals', type: 'Rent', gross: '2,500.00', wht: '250.00', rate: '10%', status: 'Pending Review' },
                                    ].map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell sx={{ fontFamily: 'monospace' }}>{row.ref}</TableCell>
                                            <TableCell>{row.party}</TableCell>
                                            <TableCell>{row.type}</TableCell>
                                            <TableCell align="right">{row.gross}</TableCell>
                                            <TableCell align="right" sx={{ color: 'error.main', fontWeight: '500' }}>{row.wht}</TableCell>
                                            <TableCell align="right">{row.rate}</TableCell>
                                            <TableCell align="right">
                                                <Chip label={row.status} size="small" color={row.status === 'Success' ? 'success' : 'warning'} variant="outlined" />
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

export default WithholdingCalculationEngine;
