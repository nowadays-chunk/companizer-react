import React from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { AccountBalanceWallet } from '@mui/icons-material';

const TaxDepreciation = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <AccountBalanceWallet color="error" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Tax Depreciation (MACRS/Statutory)</Typography>
            </Box>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Asset Name</TableCell>
                                <TableCell>Book Depreciation (GAAP)</TableCell>
                                <TableCell>Tax Depreciation (MACRS)</TableCell>
                                <TableCell align="right">Difference (Deferred Tax)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Office Building</TableCell>
                                <TableCell>$10,000</TableCell>
                                <TableCell>$15,000 (Accelerated)</TableCell>
                                <TableCell align="right" sx={{ color: 'warning.main' }}>-$5,000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Workstation PC</TableCell>
                                <TableCell>$500</TableCell>
                                <TableCell>$1,000 (Bonus Depr.)</TableCell>
                                <TableCell align="right" sx={{ color: 'warning.main' }}>-$500</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default TaxDepreciation;
