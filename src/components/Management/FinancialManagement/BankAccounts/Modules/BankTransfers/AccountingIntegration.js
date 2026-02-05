import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
    TableBody,
    Paper,
    Typography,
    Chip,
    useTheme
} from '@mui/material';

const AccountingIntegration = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader title="GL Posting Preview" />
                <CardContent>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>Transaction Ref: TR-2026-881</Typography>
                        <Chip label="Period Open" color="success" size="small" />
                    </Box>
                    <TableContainer component={Paper} variant="outlined">
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ bgcolor: theme.palette.action.hover }}>
                                    <TableCell>Account</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell align="right">Debit</TableCell>
                                    <TableCell align="right">Credit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>2000 - Clearing Account</TableCell>
                                    <TableCell>Pending Transfer to UK</TableCell>
                                    <TableCell align="right">100,000.00</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1001 - Operating US</TableCell>
                                    <TableCell>Transfer Out</TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right">100,000.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AccountingIntegration;
