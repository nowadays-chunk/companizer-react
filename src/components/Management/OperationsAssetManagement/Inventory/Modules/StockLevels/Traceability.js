
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip
} from '@mui/material';
import {
    QrCodeScanner,
    CalendarToday
} from '@mui/icons-material';

const Traceability = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <QrCodeScanner color="primary" /> Lot & Serial Traceability
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Batch / Lot Tracking (FEFO logic)</Typography>
                            <TableContainer component={Paper} variant="outlined">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Lot Number</TableCell>
                                            <TableCell>Mfg Date</TableCell>
                                            <TableCell>Expiry Date</TableCell>
                                            <TableCell align="right">Qty</TableCell>
                                            <TableCell>Allocation Priority</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>L-2023-001</TableCell>
                                            <TableCell>2023-01-15</TableCell>
                                            <TableCell sx={{ color: 'error.main', fontWeight: 'bold' }}>2026-01-15</TableCell>
                                            <TableCell align="right">50</TableCell>
                                            <TableCell><Chip label="First Out (Expiring)" color="error" size="small" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>L-2024-055</TableCell>
                                            <TableCell>2024-06-20</TableCell>
                                            <TableCell>2027-06-20</TableCell>
                                            <TableCell align="right">200</TableCell>
                                            <TableCell><Chip label="Normal" size="small" /></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Serial Number Search</Typography>
                            {/* Search Field Simulation */}
                            <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                <Typography variant="body2">Searching for: <strong>SN-99887766</strong></Typography>
                                <Box sx={{ mt: 1 }}>
                                    <Typography variant="caption" display="block">Product: Solar Inverter X</Typography>
                                    <Typography variant="caption" display="block">Status: Sold (Customer A)</Typography>
                                    <Typography variant="caption" display="block">Date Shipped: 2024-10-10</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Traceability;
