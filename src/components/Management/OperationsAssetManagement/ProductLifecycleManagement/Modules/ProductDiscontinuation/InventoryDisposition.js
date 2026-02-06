
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Button
} from '@mui/material';
import {
    DeleteSweep,
    LocalShipping,
    Recycling
} from '@mui/icons-material';

const InventoryDisposition = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <DeleteSweep color="primary" /> Inventory Disposition
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Disposition Plan</Typography>
                            <TableContainer component={Paper} variant="outlined">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Item</TableCell>
                                            <TableCell>Location</TableCell>
                                            <TableCell align="right">Qty</TableCell>
                                            <TableCell>Disposal Method</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell align="right">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Raw Material A</TableCell>
                                            <TableCell>Warehouse 1</TableCell>
                                            <TableCell align="right">500</TableCell>
                                            <TableCell><Chip icon={<Recycling />} label="Sell to Recycler" size="small" /></TableCell>
                                            <TableCell>Pending Quote</TableCell>
                                            <TableCell align="right"><Button size="small">Manage</Button></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Finished Goods</TableCell>
                                            <TableCell>Warehouse 1</TableCell>
                                            <TableCell align="right">150</TableCell>
                                            <TableCell><Chip icon={<LocalShipping />} label="Transfer to APAC" color="primary" size="small" /></TableCell>
                                            <TableCell>Ready to Ship</TableCell>
                                            <TableCell align="right"><Button size="small">Create TO</Button></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Obsolete Packaging</TableCell>
                                            <TableCell>Factory</TableCell>
                                            <TableCell align="right">2,000</TableCell>
                                            <TableCell><Chip icon={<DeleteSweep />} label="Scrap / Destroy" color="error" size="small" /></TableCell>
                                            <TableCell>Approved</TableCell>
                                            <TableCell align="right"><Button size="small" color="error">Certify Destruction</Button></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InventoryDisposition;
