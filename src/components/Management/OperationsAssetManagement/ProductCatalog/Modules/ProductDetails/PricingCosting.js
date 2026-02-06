
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    InputAdornment,
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
    AttachMoney,
    PriceCheck,
    TrendingUp,
    MoneyOff
} from '@mui/icons-material';

const PricingCosting = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <AttachMoney color="primary" /> Pricing & Costing
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Base Financials</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Base Selling Price"
                                        defaultValue="199.99"
                                        InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Standard Cost"
                                        defaultValue="85.00"
                                        InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Margin (%)"
                                        value="57.5%"
                                        InputProps={{ readOnly: true }}
                                        variant="filled"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Profit per Unit"
                                        value="$114.99"
                                        InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>, readOnly: true }}
                                        variant="filled"
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Cost Breakdown</Typography>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Component</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Factory Cost / Purchase Price</TableCell>
                                            <TableCell align="right">$75.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Freight & Duties</TableCell>
                                            <TableCell align="right">$5.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Overhead Allocation</TableCell>
                                            <TableCell align="right">$5.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Total Landed Cost</TableCell>
                                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>$85.00</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Multi-Price Lists</Typography>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Price List</TableCell>
                                            <TableCell>Currency</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Discount Rule</TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Standard Retail (USD)</TableCell>
                                            <TableCell>USD</TableCell>
                                            <TableCell>$199.99</TableCell>
                                            <TableCell>-</TableCell>
                                            <TableCell><Chip size="small" label="Active" color="success" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Wholesale (Tier 1)</TableCell>
                                            <TableCell>USD</TableCell>
                                            <TableCell>$149.99</TableCell>
                                            <TableCell>Min Qty: 50</TableCell>
                                            <TableCell><Chip size="small" label="Active" color="success" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>European Retail (EUR)</TableCell>
                                            <TableCell>EUR</TableCell>
                                            <TableCell>€185.00</TableCell>
                                            <TableCell>Region: EU</TableCell>
                                            <TableCell><Chip size="small" label="Active" color="success" /></TableCell>
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

export default PricingCosting;
