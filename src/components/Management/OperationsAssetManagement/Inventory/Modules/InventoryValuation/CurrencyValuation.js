import React from 'react';
import { Box, Typography, Button, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ShowChart, CurrencyExchange } from '@mui/icons-material';

const CurrencyValuation = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4">Multi-Currency Valuation</Typography>
                <Button variant="outlined" startIcon={<CurrencyExchange />}>Update Exchange Rates</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, bgcolor: '#e3f2fd' }}>
                        <Typography variant="subtitle2" color="primary">Base Currency</Typography>
                        <Typography variant="h3">USD</Typography>
                        <Typography variant="caption">$1.0000</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Inventory Value by Currency Source</Typography>
                        <TableContainer>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Source Currency</TableCell>
                                        <TableCell align="right">Source Value</TableCell>
                                        <TableCell align="right">Exchange Rate</TableCell>
                                        <TableCell align="right">Converted Value (USD)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>EUR (Euro)</TableCell>
                                        <TableCell align="right">€2,500,000</TableCell>
                                        <TableCell align="right">1.10</TableCell>
                                        <TableCell align="right">$2,750,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>GBP (British Pound)</TableCell>
                                        <TableCell align="right">£1,200,000</TableCell>
                                        <TableCell align="right">1.25</TableCell>
                                        <TableCell align="right">$1,500,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>CNY (Chinese Yuan)</TableCell>
                                        <TableCell align="right">¥10,000,000</TableCell>
                                        <TableCell align="right">0.14</TableCell>
                                        <TableCell align="right">$1,400,000</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CurrencyValuation;
