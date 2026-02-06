import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const mappings = [
    { account: '2200', name: 'Sales Tax Payable', type: 'Liability', balance: 340000 },
    { account: '2210', name: 'Purchase Tax Recoverable', type: 'Asset', balance: 160000 },
    { account: '2220', name: 'VAT Suspense', type: 'Clearing', balance: 0 },
];

const VATGLIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>GL Account Mapping</Typography>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Account Code</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell align="right">Current Balance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mappings.map((row) => (
                            <TableRow key={row.account}>
                                <TableCell sx={{ fontFamily: 'monospace' }}>{row.account}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell align="right">${row.balance.toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default VATGLIntegration;
