
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
    History,
    Restore,
    CompareArrows
} from '@mui/icons-material';

const VersionControl = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <History color="primary" /> Version History & Revisions
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Revision Log</Typography>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Version</TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Change Type</TableCell>
                                            <TableCell>Description</TableCell>
                                            <TableCell>Author</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow sx={{ bgcolor: 'action.hover' }}>
                                            <TableCell sx={{ fontWeight: 'bold' }}>2.1 (Draft)</TableCell>
                                            <TableCell>2026-02-06</TableCell>
                                            <TableCell>ECO</TableCell>
                                            <TableCell>Supplier Change - Solar Output Upgrade</TableCell>
                                            <TableCell>J. Smith</TableCell>
                                            <TableCell><Chip label="In Progress" color="primary" size="small" /></TableCell>
                                            <TableCell align="right">
                                                <Button size="small" startIcon={<CompareArrows />}>Diff</Button>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2.0</TableCell>
                                            <TableCell>2025-09-15</TableCell>
                                            <TableCell>Major Launch</TableCell>
                                            <TableCell>Initial Production Release</TableCell>
                                            <TableCell>A. Doe</TableCell>
                                            <TableCell><Chip label="Active" color="success" size="small" /></TableCell>
                                            <TableCell align="right">
                                                <Button size="small" color="inherit">View</Button>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>1.5 (Proto)</TableCell>
                                            <TableCell>2025-06-01</TableCell>
                                            <TableCell>Design</TableCell>
                                            <TableCell>Beta Prototype Config</TableCell>
                                            <TableCell>A. Doe</TableCell>
                                            <TableCell><Chip label="Obsolete" size="small" /></TableCell>
                                            <TableCell align="right">
                                                <Button size="small" startIcon={<Restore />}>Revert</Button>
                                            </TableCell>
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

export default VersionControl;
