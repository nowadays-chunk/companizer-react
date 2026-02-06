
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
    Chip,
    Button
} from '@mui/material';
import {
    Rule
} from '@mui/icons-material';

const NPDWorkflow = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Rule color="primary" /> Governance & Decisions
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Decision Log</Typography>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Stage Gate</TableCell>
                                            <TableCell>Decision</TableCell>
                                            <TableCell>Approver</TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Comments</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Concept Approval</TableCell>
                                            <TableCell><Chip label="Approved" color="success" size="small" /></TableCell>
                                            <TableCell>Executive Board</TableCell>
                                            <TableCell>2025-12-15</TableCell>
                                            <TableCell>Proceed to Design phase.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Idea Screening</TableCell>
                                            <TableCell><Chip label="Approved" color="success" size="small" /></TableCell>
                                            <TableCell>Product Director</TableCell>
                                            <TableCell>2025-11-20</TableCell>
                                            <TableCell>High potential score.</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Pending Approvals</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#e3f2fd', p: 2, borderRadius: 1 }}>
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">Design Freeze Authorization</Typography>
                                    <Typography variant="body2">Required to start tooling procurement.</Typography>
                                </Box>
                                <Button variant="contained">Review</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NPDWorkflow;
