
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
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
    LocalShipping,
    Factory,
    Add,
    Verified
} from '@mui/icons-material';

const ProcurementDetails = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Factory color="primary" /> Procurement & Supplier Info
                </Typography>
                <Button variant="contained" startIcon={<Add />}>Add Supplier</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Supplier List</Typography>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Supplier Name</TableCell>
                                            <TableCell>Supplier SKU</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Lead Time</TableCell>
                                            <TableCell>Min Order Qty</TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Verified color="primary" fontSize="small" /> Global Tech Supplies Inc.
                                                </Box>
                                            </TableCell>
                                            <TableCell>GTS-X1-Server</TableCell>
                                            <TableCell>$72.50</TableCell>
                                            <TableCell>14 Days</TableCell>
                                            <TableCell>100</TableCell>
                                            <TableCell><Chip size="small" label="Preferred" color="success" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Component World Ltd.</TableCell>
                                            <TableCell>CW-998877</TableCell>
                                            <TableCell>$75.00</TableCell>
                                            <TableCell>7 Days</TableCell>
                                            <TableCell>50</TableCell>
                                            <TableCell><Chip size="small" label="Approved" color="default" /></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Sourcing Rules</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Buying Strategy" defaultValue="Make or Buy: Buy" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Quality Inspection Required?" defaultValue="Yes - Incoming Inspection Level II" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Contract Info</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Active Agreement" defaultValue="MSA-2024-001" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth type="date" label="Price Valid Until" InputLabelProps={{ shrink: true }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProcurementDetails;
