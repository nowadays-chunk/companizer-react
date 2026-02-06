import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const ProcurementIntegration = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <ShoppingCart color="primary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Procurement & Replenishment</Typography>
            </Box>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>SKU</TableCell>
                                <TableCell>Current Stock</TableCell>
                                <TableCell>Aging Status</TableCell>
                                <TableCell>Reorder Point</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>ITEM-X1</TableCell>
                                <TableCell>1,200</TableCell>
                                <TableCell><Chip label="Slow Moving" color="warning" size="small" /></TableCell>
                                <TableCell>500 -> 200</TableCell>
                                <TableCell>Reduced ROP</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>ITEM-Y2</TableCell>
                                <TableCell>50</TableCell>
                                <TableCell><Chip label="Normal" color="success" size="small" /></TableCell>
                                <TableCell>100</TableCell>
                                <TableCell>Create PO</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>ITEM-Z9</TableCell>
                                <TableCell>800</TableCell>
                                <TableCell><Chip label="Obsolete" color="error" size="small" /></TableCell>
                                <TableCell>Blocked</TableCell>
                                <TableCell>Do Not Order</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default ProcurementIntegration;
