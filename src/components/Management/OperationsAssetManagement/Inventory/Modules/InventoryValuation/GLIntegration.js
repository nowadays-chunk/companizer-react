import React from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { AccountBalance, Check } from '@mui/icons-material';

const GLIntegration = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4">General Ledger Integration</Typography>
                <Button variant="outlined" startIcon={<AccountBalance />}>View GL Accounts</Button>
            </Box>

            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>GL Posting Status</Typography>
                <Box display="flex" alignItems="center">
                    <Check color="success" sx={{ mr: 1 }} />
                    <Typography variant="body1">All automated journal entries for today are posted.</Typography>
                </Box>
            </Paper>

            <Paper elevation={2}>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Posting ID</TableCell>
                                <TableCell>Event</TableCell>
                                <TableCell>Debit Account</TableCell>
                                <TableCell>Credit Account</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>JE-2023-9001</TableCell>
                                <TableCell>Sales Issue</TableCell>
                                <TableCell>5000 - COGS</TableCell>
                                <TableCell>1200 - Inventory Asset</TableCell>
                                <TableCell align="right">$450.00</TableCell>
                                <TableCell><Chip label="Posted" color="success" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>JE-2023-9002</TableCell>
                                <TableCell>Goods Receipt</TableCell>
                                <TableCell>1200 - Inventory Asset</TableCell>
                                <TableCell>2000 - GR/IR Clearing</TableCell>
                                <TableCell align="right">$1,200.00</TableCell>
                                <TableCell><Chip label="Posted" color="success" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>JE-2023-9003</TableCell>
                                <TableCell>Inventory Scrap</TableCell>
                                <TableCell>5150 - Scrap Expense</TableCell>
                                <TableCell>1200 - Inventory Asset</TableCell>
                                <TableCell align="right">$125.00</TableCell>
                                <TableCell><Chip label="In Review" color="warning" size="small" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default GLIntegration;
