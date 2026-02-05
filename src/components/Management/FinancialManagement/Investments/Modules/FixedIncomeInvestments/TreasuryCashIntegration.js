import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';

const TreasuryCashIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Treasury & Cash Integration</Typography>
            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Projected Cash Inflows (Next 30 Days)</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Security</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>2025-07-01</TableCell>
                                <TableCell>Coupon</TableCell>
                                <TableCell>US Govt Bond</TableCell>
                                <TableCell align="right">$ 12,500</TableCell>
                                <TableCell><Chip label="Projected" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2025-07-15</TableCell>
                                <TableCell>Maturity</TableCell>
                                <TableCell>T-Bill 3mo</TableCell>
                                <TableCell align="right">$ 250,000</TableCell>
                                <TableCell><Chip label="Auto-Invest" color="info" size="small" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default TreasuryCashIntegration;
