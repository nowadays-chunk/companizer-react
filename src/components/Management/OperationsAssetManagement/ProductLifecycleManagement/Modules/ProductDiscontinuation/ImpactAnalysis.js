
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
    Paper
} from '@mui/material';
import {
    Analytics,
    MonetizationOn
} from '@mui/icons-material';

const ImpactAnalysis = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Analytics color="primary" /> Business Impact Analysis
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Inventory Valuation Exposure</Typography>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Category</TableCell>
                                            <TableCell align="right">Units</TableCell>
                                            <TableCell align="right">Unit Cost</TableCell>
                                            <TableCell align="right">Total Value</TableCell>
                                            <TableCell>Risk</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Finished Goods</TableCell>
                                            <TableCell align="right">500</TableCell>
                                            <TableCell align="right">$120.00</TableCell>
                                            <TableCell align="right">$60,000</TableCell>
                                            <TableCell sx={{ color: 'success.main' }}>Sellable</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Raw Materials (Unique)</TableCell>
                                            <TableCell align="right">2,000</TableCell>
                                            <TableCell align="right">$15.00</TableCell>
                                            <TableCell align="right">$30,000</TableCell>
                                            <TableCell sx={{ color: 'error.main' }}>Write-Off</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ bgcolor: 'action.hover' }}>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Total Exposure</TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>$90,000</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Commercial Impact</Typography>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Open Sales Orders</Typography>
                                <Typography variant="h5">12 Orders</Typography>
                                <Typography variant="caption">Total Value: $45,000</Typography>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Active Contracts</Typography>
                                <Typography variant="h5">2 Contracts</Typography>
                                <Typography variant="caption" color="error">Penalty risk if cancelled</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Profitability Foregone</Typography>
                            <Grid container alignItems="center">
                                <Grid item xs={1}><MonetizationOn fontSize="large" color="disabled" /></Grid>
                                <Grid item xs={11}>
                                    <Typography variant="body1">Estimated Annual Revenue Loss: <strong>$250,000</strong></Typography>
                                    <Typography variant="body2" color="text.secondary">Mitigated by replacement product projected revenue: <strong>$300,000</strong></Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ImpactAnalysis;
