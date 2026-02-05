import React from 'react';
import { Box, MenuItem, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Chip, Grid, TextField } from '@mui/material';

const PurchaseSaleTransactions = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Purchase & Sale Transactions</Typography>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Record Transaction</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <TextField fullWidth label="Transaction Date" type="date" InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField select fullWidth label="Type" defaultValue="buy">
                            <MenuItem key="buy" value="buy">Purchase</MenuItem>
                            <MenuItem key="sell" value="sell">Sale / Disposal</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField fullWidth label="Quantity / Nominal" type="number" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField fullWidth label="Price" type="number" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField fullWidth label="Accrued Interest" type="number" helperText="Auto-calculated" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button variant="contained" sx={{ mt: 1 }} fullWidth>Post Transaction</Button>
                    </Grid>
                </Grid>
            </Paper>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Security</TableCell>
                            <TableCell align="right">Nominal</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Total Amt</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>2025-01-15</TableCell>
                            <TableCell><Chip label="Purchase" color="success" size="small" /></TableCell>
                            <TableCell>US Treas 2030</TableCell>
                            <TableCell align="right">1,000,000</TableCell>
                            <TableCell align="right">98.50</TableCell>
                            <TableCell align="right">985,000</TableCell>
                            <TableCell>Settled</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2025-06-20</TableCell>
                            <TableCell><Chip label="Sale" color="warning" size="small" /></TableCell>
                            <TableCell>Corp Bond XYZ</TableCell>
                            <TableCell align="right">500,000</TableCell>
                            <TableCell align="right">101.20</TableCell>
                            <TableCell align="right">506,000</TableCell>
                            <TableCell>Pending</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
// End Mock

export default PurchaseSaleTransactions;
