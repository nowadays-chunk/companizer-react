import React from 'react';
import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const AmortizationPremiumDiscount = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Amortization of Premium/Discount</Typography>
            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="body1" paragraph>
                    Effective Interest Method schedule for amortized cost securities.
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle2">Security</Typography>
                        <Typography variant="h6">Corp Bond Premium</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle2">Purchase Price</Typography>
                        <Typography variant="h6">105.00</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle2">Effective Rate (EIR)</Typography>
                        <Typography variant="h6">4.2%</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button variant="outlined">Recalculate</Button>
                    </Grid>
                </Grid>
            </Paper>

            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Period</TableCell>
                            <TableCell align="right">Opening Bal</TableCell>
                            <TableCell align="right">Interest Income (EIR)</TableCell>
                            <TableCell align="right">Cash Received (Coupon)</TableCell>
                            <TableCell align="right">Amortization</TableCell>
                            <TableCell align="right">Closing Bal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>2025-Q1</TableCell>
                            <TableCell align="right">1,050,000</TableCell>
                            <TableCell align="right">11,025</TableCell>
                            <TableCell align="right">15,000</TableCell>
                            <TableCell align="right">(3,975)</TableCell>
                            <TableCell align="right">1,046,025</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2025-Q2</TableCell>
                            <TableCell align="right">1,046,025</TableCell>
                            <TableCell align="right">10,983</TableCell>
                            <TableCell align="right">15,000</TableCell>
                            <TableCell align="right">(4,017)</TableCell>
                            <TableCell align="right">1,042,008</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AmortizationPremiumDiscount;
