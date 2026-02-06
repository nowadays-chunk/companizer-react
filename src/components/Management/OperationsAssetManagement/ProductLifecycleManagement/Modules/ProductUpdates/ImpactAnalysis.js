
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
    Analytics
} from '@mui/icons-material';

const ImpactAnalysis = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Analytics color="primary" /> Impact Analysis
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Inventory Exposure</Typography>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Location</TableCell>
                                            <TableCell>Item</TableCell>
                                            <TableCell align="right">Qty on Hand</TableCell>
                                            <TableCell align="right">Value</TableCell>
                                            <TableCell>Disposition</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Warehouse A</TableCell>
                                            <TableCell>Old Panel (PN-10023)</TableCell>
                                            <TableCell align="right">1,200</TableCell>
                                            <TableCell align="right">$12,000</TableCell>
                                            <TableCell>Scrap</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Factory B</TableCell>
                                            <TableCell>Work in Progress</TableCell>
                                            <TableCell align="right">450</TableCell>
                                            <TableCell align="right">$9,500</TableCell>
                                            <TableCell>Rework</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography variant="subtitle2" align="right" sx={{ mt: 1 }}>Total Exposure: $21,500</Typography>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Financial Impact</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body2" color="text.secondary">Current Unit Cost</Typography>
                                    <Typography variant="h6">$45.50</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" color="text.secondary">New Unit Cost</Typography>
                                    <Typography variant="h6">$48.20</Typography>
                                </Grid>
                            </Grid>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="caption">Margin Erosion: -2.3%</Typography>
                                <LinearProgress variant="determinate" value={100} color="error" sx={{ height: 6, borderRadius: 3 }} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Customer Impact</Typography>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Form/Fit/Function?</Typography>
                                <Typography variant="body1">Yes - Dimension Change</Typography>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Backward Compatible?</Typography>
                                <Typography variant="body1" color="error.main">No</Typography>
                            </Box>

                            <Box sx={{ p: 1.5, bgcolor: '#e3f2fd', borderRadius: 1 }}>
                                <Typography variant="subtitle2" color="primary">Recommendation</Typography>
                                <Typography variant="body2">Notify distributors 60 days in advance. Update user manual.</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ImpactAnalysis;
