import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, LinearProgress } from '@mui/material';
import { TrendingUp, TrendingDown, CheckCircle, Warning } from '@mui/icons-material';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/CovenantComplianceIntegration';

const CovenantComplianceIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Covenant & Compliance Dashboard</Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Card sx={{ bgcolor: '#e8f5e9' }}>
                        <CardContent>
                            <Typography variant="subtitle2" color="textSecondary">Active Covenants</Typography>
                            <Typography variant="h4">8</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ bgcolor: '#fff3e0' }}>
                        <CardContent>
                            <Typography variant="subtitle2" color="textSecondary">At Risk</Typography>
                            <Typography variant="h4" color="warning.main">2</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ bgcolor: '#ffebee' }}>
                        <CardContent>
                            <Typography variant="subtitle2" color="textSecondary">Breached</Typography>
                            <Typography variant="h4" color="error">0</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="textSecondary">Next Testing Date</Typography>
                            <Typography variant="h6">31 Dec 2023</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Detailed Covenant Monitoring</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Covenant Metric</TableCell>
                                <TableCell>Agreement</TableCell>
                                <TableCell>Threshold</TableCell>
                                <TableCell>Current Value</TableCell>
                                <TableCell>Headroom</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Trend</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Net Leverage Ratio</TableCell>
                                <TableCell>Syndicated Facility</TableCell>
                                <TableCell>&lt; 4.00x</TableCell>
                                <TableCell>3.25x</TableCell>
                                <TableCell>18.75%</TableCell>
                                <TableCell><Chip icon={<CheckCircle />} label="Compliant" color="success" size="small" /></TableCell>
                                <TableCell><TrendingDown color="success" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Interest Coverage Ratio</TableCell>
                                <TableCell>Bond 2025</TableCell>
                                <TableCell>&gt; 2.50x</TableCell>
                                <TableCell>2.60x</TableCell>
                                <TableCell>4.00%</TableCell>
                                <TableCell><Chip icon={<Warning />} label="Watchlist" color="warning" size="small" /></TableCell>
                                <TableCell><TrendingDown color="error" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Current Ratio</TableCell>
                                <TableCell>RCF</TableCell>
                                <TableCell>&gt; 1.10x</TableCell>
                                <TableCell>1.45x</TableCell>
                                <TableCell>31.8%</TableCell>
                                <TableCell><Chip icon={<CheckCircle />} label="Compliant" color="success" size="small" /></TableCell>
                                <TableCell><TrendingUp color="success" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" gutterBottom>Breach Simulation</Typography>
                <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography>Simulate a 10% drop in EBITDA:</Typography>
                    <LinearProgress variant="determinate" value={70} sx={{ flexGrow: 1, height: 10, borderRadius: 5 }} color="warning" />
                    <Chip label="Net Leverage would rise to 3.80x (Safe)" />
                </Paper>
            </Box>
        </Box>
    );
};
export default CovenantComplianceIntegration;
