import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Table, TableBody, TableCell, TableRow, Chip, Divider } from '@mui/material';
import { Security, AccountBalance } from '@mui/icons-material';

const ExposureManager = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Exposure & Collateral Manager</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    {/* Real-time Exposure Breakdown */}
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Real-Time Exposure Breakdown</Typography>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Open Invoices</TableCell>
                                        <TableCell align="right">$450,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Unbilled Deliveries</TableCell>
                                        <TableCell align="right">$50,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Open Sales Orders</TableCell>
                                        <TableCell align="right">$75,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ color: 'text.secondary' }}>Disputed (Excluded)</TableCell>
                                        <TableCell align="right" sx={{ color: 'text.secondary' }}>( $10,000 )</TableCell>
                                    </TableRow>
                                    <TableRow sx={{ '& td': { fontWeight: 'bold', fontSize: '1.1rem', borderTop: '2px solid #e0e0e0' } }}>
                                        <TableCell>Total Calculated Exposure</TableCell>
                                        <TableCell align="right">$565,000</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    {/* Collateral & Security */}
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Active Collateral</Typography>

                            <Box sx={{ mb: 2, p: 2, bgcolor: 'primary.light', borderRadius: 1, color: 'primary.contrastText' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <Security sx={{ mr: 1 }} />
                                    <Typography variant="subtitle1" fontWeight="bold">Bank Guarantee</Typography>
                                </Box>
                                <Typography variant="h5">$100,000</Typography>
                                <Typography variant="caption">Exp: 2026-05-01</Typography>
                            </Box>

                            <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <AccountBalance sx={{ mr: 1, color: 'text.secondary' }} />
                                    <Typography variant="subtitle1" fontWeight="bold">Cash Deposit</Typography>
                                </Box>
                                <Typography variant="h5">$25,000</Typography>
                                <Typography variant="caption">Held in Escrow</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    {/* Insurance Integration */}
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Credit Insurance Policies</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                                <Box>
                                    <Typography variant="overline" color="textSecondary">Provider</Typography>
                                    <Typography variant="subtitle1" fontWeight="bold">Euler Hermes</Typography>
                                </Box>
                                <Divider orientation="vertical" flexItem />
                                <Box>
                                    <Typography variant="overline" color="textSecondary">Policy #</Typography>
                                    <Typography variant="subtitle1" fontWeight="bold">99887766</Typography>
                                </Box>
                                <Divider orientation="vertical" flexItem />
                                <Box>
                                    <Typography variant="overline" color="textSecondary">Coverage</Typography>
                                    <Typography variant="subtitle1" fontWeight="bold">90%</Typography>
                                </Box>
                                <Chip label="Active" color="success" size="small" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ExposureManager;
