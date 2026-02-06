
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper
} from '@mui/material';
import {
    Science,
    Warning,
    CheckCircle
} from '@mui/icons-material';

const PrototypePilot = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Science color="primary" /> Prototype & Validation
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Prototype Status</Typography>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Proto-1 (Alpha)</TableCell>
                                            <TableCell>Design Verification</TableCell>
                                            <TableCell><Chip label="Passed" color="success" size="small" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Proto-2 (Beta)</TableCell>
                                            <TableCell>User Testing</TableCell>
                                            <TableCell><Chip label="In Progress" color="primary" size="small" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Pilot Run (100 units)</TableCell>
                                            <TableCell>Production Validation</TableCell>
                                            <TableCell><Chip label="Pending" size="small" /></TableCell>
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
                            <Typography variant="h6" gutterBottom>Validation Issues</Typography>
                            <TableContainer>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell><Warning color="error" fontSize="small" /></TableCell>
                                            <TableCell>Strap failure at 20kg load</TableCell>
                                            <TableCell>Critical</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><Warning color="warning" fontSize="small" /></TableCell>
                                            <TableCell>Color mismatch in solar panel frame</TableCell>
                                            <TableCell>Minor</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><CheckCircle color="success" fontSize="small" /></TableCell>
                                            <TableCell>Waterproof rating confirmed IP67</TableCell>
                                            <TableCell>Resolved</TableCell>
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

export default PrototypePilot;
