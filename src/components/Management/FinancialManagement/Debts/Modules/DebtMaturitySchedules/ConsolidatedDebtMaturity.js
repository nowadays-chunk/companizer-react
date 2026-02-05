import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const ConsolidatedDebtMaturity = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Consolidated Debt Maturity</Typography>
            <Paper sx={{ p: 3 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Entity</TableCell>
                                <TableCell align="right">External Debt</TableCell>
                                <TableCell align="right">Intercompany Debt</TableCell>
                                <TableCell align="right">Eliminations</TableCell>
                                <TableCell align="right">Consolidated Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Parent Corp</TableCell>
                                <TableCell align="right">1,000,000</TableCell>
                                <TableCell align="right">0</TableCell>
                                <TableCell align="right">0</TableCell>
                                <TableCell align="right">1,000,000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sub A</TableCell>
                                <TableCell align="right">500,000</TableCell>
                                <TableCell align="right">200,000</TableCell>
                                <TableCell align="right">(200,000)</TableCell>
                                <TableCell align="right">500,000</TableCell>
                            </TableRow>
                            <TableRow sx={{ fontWeight: 'bold' }}>
                                <TableCell>Group Total</TableCell>
                                <TableCell align="right">1,500,000</TableCell>
                                <TableCell align="right">200,000</TableCell>
                                <TableCell align="right">(200,000)</TableCell>
                                <TableCell align="right">1,500,000</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};
export default ConsolidatedDebtMaturity;
