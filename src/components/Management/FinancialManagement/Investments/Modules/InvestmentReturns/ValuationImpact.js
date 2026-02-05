import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Table, TableHead, TableRow, TableCell, TableBody, Chip, ToggleButton, ToggleButtonGroup, Card, CardContent, Stack } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';

const data = [
    { name: 'Jan', pl: 4000, oci: 2400 },
    { name: 'Feb', pl: 3000, oci: 1398 },
    { name: 'Mar', pl: 2000, oci: 9800 },
    { name: 'Apr', pl: 2780, oci: 3908 },
    { name: 'May', pl: 1890, oci: 4800 },
    { name: 'Jun', pl: 2390, oci: 3800 },
];

const ValuationImpact = () => {
    const [chartView, setChartView] = useState('stacked');
    const [timeRange, setTimeRange] = useState('6m');

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Valuation & Fair Value Impact</Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3, height: 350 }}>
                        <Typography variant="h6" gutterBottom>Unrealized Gains/Losses (P&L vs OCI)</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <AreaChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                <Legend />
                                <ReferenceLine y={0} stroke="#666" strokeDasharray="3 3" />
                                <Area
                                    type="monotone"
                                    dataKey="pl"
                                    stackId={chartView === 'stacked' ? '1' : undefined}
                                    stroke="#8884d8"
                                    fill="#8884d8"
                                    name="FVTPL (P&L)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="oci"
                                    stackId={chartView === 'stacked' ? '1' : undefined}
                                    stroke="#82ca9d"
                                    fill="#82ca9d"
                                    name="FVOCI (Equity)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Recent Valuation Updates</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Security</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Classification</TableCell>
                            <TableCell align="right">Old FV</TableCell>
                            <TableCell align="right">New FV</TableCell>
                            <TableCell align="right">Change</TableCell>
                            <TableCell>Impact</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Corp Bond A</TableCell>
                            <TableCell>2025-06-30</TableCell>
                            <TableCell>FVOCI</TableCell>
                            <TableCell align="right">98.50</TableCell>
                            <TableCell align="right">99.20</TableCell>
                            <TableCell align="right" sx={{ color: 'success.main' }}>+ 0.70</TableCell>
                            <TableCell><Chip label="Equity / OCI" size="small" variant="outlined" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Growth ETF</TableCell>
                            <TableCell>2025-06-30</TableCell>
                            <TableCell>FVTPL</TableCell>
                            <TableCell align="right">150.00</TableCell>
                            <TableCell align="right">145.00</TableCell>
                            <TableCell align="right" sx={{ color: 'error.main' }}>- 5.00</TableCell>
                            <TableCell><Chip label="P&L" size="small" color="warning" /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default ValuationImpact;
