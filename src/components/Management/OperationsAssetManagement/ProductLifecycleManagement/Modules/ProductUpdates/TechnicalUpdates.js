
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
    IconButton
} from '@mui/material';
import {
    PrecisionManufacturing,
    Edit,
    AddCircle
} from '@mui/icons-material';

const TechnicalUpdates = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <PrecisionManufacturing color="primary" /> Technical & BOM Updates
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Bill of Materials Changes</Typography>
                            <TableContainer component={Paper} variant="outlined">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Action</TableCell>
                                            <TableCell>Component</TableCell>
                                            <TableCell>Old Value</TableCell>
                                            <TableCell>New Value</TableCell>
                                            <TableCell>Comments</TableCell>
                                            <TableCell align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow sx={{ bgcolor: 'error.lighter' }}>
                                            <TableCell><Chip label="Remove" color="error" size="small" /></TableCell>
                                            <TableCell>Solar Module 10W (PN-10023)</TableCell>
                                            <TableCell>Qty: 1</TableCell>
                                            <TableCell>-</TableCell>
                                            <TableCell>Obsolete part</TableCell>
                                            <TableCell align="right"><IconButton size="small"><Edit /></IconButton></TableCell>
                                        </TableRow>
                                        <TableRow sx={{ bgcolor: 'success.lighter' }}>
                                            <TableCell><Chip label="Add" color="success" size="small" /></TableCell>
                                            <TableCell>Solar Module 12W (PN-10025)</TableCell>
                                            <TableCell>-</TableCell>
                                            <TableCell>Qty: 1</TableCell>
                                            <TableCell>New high-efficiency part</TableCell>
                                            <TableCell align="right"><IconButton size="small"><Edit /></IconButton></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><Chip label="Modify" color="primary" size="small" /></TableCell>
                                            <TableCell>Mounting Kit (PN-5501)</TableCell>
                                            <TableCell>Rev A</TableCell>
                                            <TableCell>Rev B</TableCell>
                                            <TableCell>Drawing update for hole alignment</TableCell>
                                            <TableCell align="right"><IconButton size="small"><Edit /></IconButton></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Specification & Drawing Updates</Typography>
                            <Box sx={{ p: 2, border: '1px dashed grey', borderRadius: 1, textAlign: 'center', cursor: 'pointer' }}>
                                <AddCircle color="action" />
                                <Typography>Drag & drop or click to upload revised specs</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TechnicalUpdates;
