
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
    TextField,
    InputAdornment
} from '@mui/material';
import {
    Public,
    CurrencyExchange
} from '@mui/icons-material';

const ChannelPricing = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Public color="primary" /> Multi-Channel & Currency
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Currency Conversion Table</Typography>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Currency</TableCell>
                                            <TableCell>Exchange Rate (Buffer)</TableCell>
                                            <TableCell>Display Format</TableCell>
                                            <TableCell>Rounding</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold' }}>USD (Base)</TableCell>
                                            <TableCell>1.00</TableCell>
                                            <TableCell>$1,000.00</TableCell>
                                            <TableCell>0.99</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>EUR</TableCell>
                                            <TableCell>
                                                <TextField
                                                    size="small"
                                                    defaultValue="0.92"
                                                    InputProps={{ endAdornment: <InputAdornment position="end"><CurrencyExchange fontSize="small" /></InputAdornment> }}
                                                />
                                            </TableCell>
                                            <TableCell>€1.000,00</TableCell>
                                            <TableCell>0.95</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>GBP</TableCell>
                                            <TableCell>
                                                <TextField
                                                    size="small"
                                                    defaultValue="0.78"
                                                    InputProps={{ endAdornment: <InputAdornment position="end"><CurrencyExchange fontSize="small" /></InputAdornment> }}
                                                />
                                            </TableCell>
                                            <TableCell>£1,000.00</TableCell>
                                            <TableCell>0.99</TableCell>
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

export default ChannelPricing;
