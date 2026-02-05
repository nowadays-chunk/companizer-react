import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, FormControl, InputLabel, Select, MenuItem, InputAdornment } from '@mui/material';
import { Timeline, TrendingUp } from '@mui/icons-material';

const ValuationFairValue = () => {
    const [method, setMethod] = useState('Market');

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Valuation & Fair Value Measurement</Typography>
                <Button variant="contained" startIcon={<Timeline />}>New Valuation</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Valuation Input</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth type="date" label="Valuation Date" InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Methodology</InputLabel>
                                    <Select value={method} label="Methodology" onChange={(e) => setMethod(e.target.value)}>
                                        <MenuItem value="Market">Market Approach (Quoted Price)</MenuItem>
                                        <MenuItem value="Income">Income Approach (DCF)</MenuItem>
                                        <MenuItem value="NAV">Net Asset Value (NAV)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Fair Value per Unit" type="number" InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" color="primary">Calculate Total Value</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Fair Value History</Typography>
                        <TableContainer>
                            <Table size="small">
                                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Method</TableCell>
                                        <TableCell align="right">Unit Price</TableCell>
                                        <TableCell align="right">Total Value</TableCell>
                                        <TableCell align="right">Change %</TableCell>
                                        <TableCell align="center">Hierarchy</TableCell>
                                        <TableCell align="center">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>2025-06-30</TableCell>
                                        <TableCell>Market</TableCell>
                                        <TableCell align="right">$ 16.50</TableCell>
                                        <TableCell align="right">$ 1,650,000</TableCell>
                                        <TableCell align="right" sx={{ color: 'green' }}>+6.45%</TableCell>
                                        <TableCell align="center">Level 1</TableCell>
                                        <TableCell align="center"><Chip label="Approved" color="success" size="small" /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2025-03-31</TableCell>
                                        <TableCell>Market</TableCell>
                                        <TableCell align="right">$ 15.50</TableCell>
                                        <TableCell align="right">$ 1,550,000</TableCell>
                                        <TableCell align="right" sx={{ color: 'text.secondary' }}>0.00%</TableCell>
                                        <TableCell align="center">Level 1</TableCell>
                                        <TableCell align="center"><Chip label="Approved" color="success" size="small" /></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ValuationFairValue;
