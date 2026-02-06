import React from 'react';
import { Box, Typography, Button, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { AccessTime, Refresh } from '@mui/icons-material';

const AgingCalculation = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4">Aging Calculation</Typography>
                <Button variant="contained" startIcon={<Refresh />}>Recalculate Aging</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={2}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>SKU</TableCell>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell align="right">Total Qty</TableCell>
                                        <TableCell align="right">Avg Age (Days)</TableCell>
                                        <TableCell>Dominant Bucket</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>ELEC-001</TableCell>
                                        <TableCell>Capacitor 100uF</TableCell>
                                        <TableCell align="right">5,000</TableCell>
                                        <TableCell align="right">25</TableCell>
                                        <TableCell><Chip label="0-30 Days" color="success" size="small" /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>MECH-202</TableCell>
                                        <TableCell>Steel Casing L</TableCell>
                                        <TableCell align="right">150</TableCell>
                                        <TableCell align="right">120</TableCell>
                                        <TableCell><Chip label="91+ Days" color="error" size="small" /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>CHEM-500</TableCell>
                                        <TableCell>Solvent X-T</TableCell>
                                        <TableCell align="right">40</TableCell>
                                        <TableCell align="right">55</TableCell>
                                        <TableCell><Chip label="31-60 Days" color="warning" size="small" /></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, bgcolor: '#f8f9fa' }}>
                        <Typography variant="h6" gutterBottom>Calculation Rules</Typography>
                        <Box mb={2}>
                            <Typography variant="subtitle2">FIFO Method</Typography>
                            <Typography variant="body2" color="textSecondary">Matches oldest receipts to latest sales.</Typography>
                        </Box>
                        <Box mb={2}>
                            <Typography variant="subtitle2">Aging Buckets</Typography>
                            <Typography variant="body2" color="textSecondary">• 0-30 Days</Typography>
                            <Typography variant="body2" color="textSecondary">• 31-60 Days</Typography>
                            <Typography variant="body2" color="textSecondary">• 61-90 Days</Typography>
                            <Typography variant="body2" color="textSecondary">• 90+ Days</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AgingCalculation;
