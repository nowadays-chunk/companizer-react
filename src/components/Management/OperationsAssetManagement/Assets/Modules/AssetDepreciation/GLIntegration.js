import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { AccountBalance } from '@mui/icons-material';

const GLIntegration = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <AccountBalance color="success" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">GL Integration</Typography>
            </Box>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Posting ID</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Account (Debit)</TableCell>
                                <TableCell>Account (Credit)</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>DEP-2024-01</TableCell>
                                <TableCell>2024-01-31</TableCell>
                                <TableCell>6000 - Depr. Expense</TableCell>
                                <TableCell>1800 - Accum. Depr.</TableCell>
                                <TableCell align="right">$12,500.00</TableCell>
                                <TableCell><Chip label="Posted" color="success" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>REV-2024-05</TableCell>
                                <TableCell>2024-02-15</TableCell>
                                <TableCell>1700 - Buildings</TableCell>
                                <TableCell>3000 - Revaluation Surplus</TableCell>
                                <TableCell align="right">$50,000.00</TableCell>
                                <TableCell><Chip label="Pending" color="warning" size="small" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default GLIntegration;
