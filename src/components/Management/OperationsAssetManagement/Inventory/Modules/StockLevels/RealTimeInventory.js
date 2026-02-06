
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Chip,
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
    Inventory,
    LocalShipping,
    VerifiedUser,
    HourglassEmpty
} from '@mui/icons-material';

const RealTimeInventory = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Inventory color="primary" /> Real-Time Stock Visibility
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Quantity On-Hand</Typography>
                            <Typography variant="h4" sx={{ mt: 1 }}>1,250</Typography>
                            <Typography variant="caption" color="success.main">Physical Count</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Available to Promise (ATP)</Typography>
                            <Typography variant="h4" sx={{ mt: 1 }}>850</Typography>
                            <Typography variant="caption" color="primary.main">Sellable Stock</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">Reserved / Committed</Typography>
                            <Typography variant="h4" sx={{ mt: 1 }}>400</Typography>
                            <Typography variant="caption" color="warning.main">Allocated to Orders</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">In-Transit</Typography>
                            <Typography variant="h4" sx={{ mt: 1 }}>200</Typography>
                            <Typography variant="caption" color="info.main">Arriving Incoming POs</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Detailed Breakdown</Typography>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>SKU</TableCell>
                                            <TableCell>Product Name</TableCell>
                                            <TableCell align="right">On Hand</TableCell>
                                            <TableCell align="right">Allocated</TableCell>
                                            <TableCell align="right">ATP</TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Solar-X100</TableCell>
                                            <TableCell>Solar Panel Basic</TableCell>
                                            <TableCell align="right">500</TableCell>
                                            <TableCell align="right">100</TableCell>
                                            <TableCell align="right">400</TableCell>
                                            <TableCell><Chip label="In Stock" color="success" size="small" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Inv-2000</TableCell>
                                            <TableCell>Inverter Pro</TableCell>
                                            <TableCell align="right">50</TableCell>
                                            <TableCell align="right">45</TableCell>
                                            <TableCell align="right">5</TableCell>
                                            <TableCell><Chip label="Low Stock" color="warning" size="small" /></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RealTimeInventory;
