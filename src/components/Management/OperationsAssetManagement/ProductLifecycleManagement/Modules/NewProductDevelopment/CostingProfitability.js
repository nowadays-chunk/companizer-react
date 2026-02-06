
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
    LinearProgress
} from '@mui/material';
import {
    Calculate
} from '@mui/icons-material';

const CostingProfitability = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Calculate color="primary" /> Feasibility & Costing
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Unit Cost Breakdown</Typography>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Cost Component</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="right">%</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Materials (BOM)</TableCell>
                                            <TableCell align="right">$25.50</TableCell>
                                            <TableCell align="right">56%</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Labor</TableCell>
                                            <TableCell align="right">$12.00</TableCell>
                                            <TableCell align="right">26%</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Overhead / Tooling</TableCell>
                                            <TableCell align="right">$8.00</TableCell>
                                            <TableCell align="right">18%</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ bgcolor: 'action.hover' }}>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Total Unit Cost</TableCell>
                                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>$45.50</TableCell>
                                            <TableCell align="right">100%</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Profitability Analysis</Typography>
                            <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2">Current Margin Projected</Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>65%</Typography>
                                </Box>
                                <LinearProgress variant="determinate" value={65} color="success" sx={{ height: 10, borderRadius: 5 }} />
                            </Box>

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" color="text.secondary">Target Price</Typography>
                                    <Typography variant="h5">$129.99</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" color="text.secondary">Est. ROI (Year 1)</Typography>
                                    <Typography variant="h5" color="secondary.main">210%</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" color="text.secondary">Break-Even Vol.</Typography>
                                    <Typography variant="h5">1,200 Units</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" color="text.secondary">NPV</Typography>
                                    <Typography variant="h5">$1.2M</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CostingProfitability;
