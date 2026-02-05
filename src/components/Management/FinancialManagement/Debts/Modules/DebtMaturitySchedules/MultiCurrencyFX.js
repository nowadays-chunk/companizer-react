import React from 'react';
import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MultiCurrencyFX = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Multi-Currency & FX Exposure</Typography>
            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Maturity by Currency</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Currency</TableCell>
                                <TableCell align="right">Original Amount</TableCell>
                                <TableCell align="right">FX Rate</TableCell>
                                <TableCell align="right">Base Equivalent (USD)</TableCell>
                                <TableCell align="right">% of Total Debt</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>USD</TableCell>
                                <TableCell align="right">4,000,000</TableCell>
                                <TableCell align="right">1.00</TableCell>
                                <TableCell align="right">4,000,000</TableCell>
                                <TableCell align="right">66%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>EUR</TableCell>
                                <TableCell align="right">1,800,000</TableCell>
                                <TableCell align="right">1.10</TableCell>
                                <TableCell align="right">1,980,000</TableCell>
                                <TableCell align="right">33%</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};
export default MultiCurrencyFX;
