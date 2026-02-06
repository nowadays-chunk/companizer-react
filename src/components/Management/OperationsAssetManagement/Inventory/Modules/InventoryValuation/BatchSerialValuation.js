import React from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { QrCode, Search } from '@mui/icons-material';

const BatchSerialValuation = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4">Batch & Serial Tracking</Typography>
                <Button variant="outlined" startIcon={<Search />}>Find Batch</Button>
            </Box>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Item Code</TableCell>
                                <TableCell>Batch / Serial</TableCell>
                                <TableCell>Expiry Date</TableCell>
                                <TableCell align="right">Qty</TableCell>
                                <TableCell align="right">Unit Cost</TableCell>
                                <TableCell align="right">Batch Value</TableCell>
                                <TableCell>Valuation Adj.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>MED-SUP-001</TableCell>
                                <TableCell>BATCH-2023-X1</TableCell>
                                <TableCell>2024-12-31</TableCell>
                                <TableCell align="right">500</TableCell>
                                <TableCell align="right">$12.50</TableCell>
                                <TableCell align="right">$6,250.00</TableCell>
                                <TableCell><Chip label="Standard" color="success" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>MED-SUP-001</TableCell>
                                <TableCell>BATCH-2022-X9</TableCell>
                                <TableCell>2023-11-30</TableCell>
                                <TableCell align="right">50</TableCell>
                                <TableCell align="right">$8.50</TableCell>
                                <TableCell align="right">$425.00</TableCell>
                                <TableCell><Chip label="Expiring - Written Down" color="error" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>ELEC-COMP-099</TableCell>
                                <TableCell>SN-999238128</TableCell>
                                <TableCell>N/A</TableCell>
                                <TableCell align="right">1</TableCell>
                                <TableCell align="right">$2,400.00</TableCell>
                                <TableCell align="right">$2,400.00</TableCell>
                                <TableCell><Chip label="Specific ID" color="info" size="small" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default BatchSerialValuation;
