import React from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { Gavel } from '@mui/icons-material';

const AdjustmentGovernance = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <Gavel color="secondary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Adjustment & Recalculation Governance</Typography>
            </Box>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Request ID</TableCell>
                                <TableCell>Asset</TableCell>
                                <TableCell>Change Type</TableCell>
                                <TableCell>Requested By</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>REQ-0922</TableCell>
                                <TableCell>CNC Machine #2</TableCell>
                                <TableCell>Useful Life (10y -{'>'} 12y)</TableCell>
                                <TableCell>Ops Manager</TableCell>
                                <TableCell><Chip label="Pending Approval" color="warning" size="small" /></TableCell>
                                <TableCell><Button variant="outlined" size="small">Review</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>REQ-0899</TableCell>
                                <TableCell>Laptop Fleet</TableCell>
                                <TableCell>Cost Adjustment</TableCell>
                                <TableCell>IT Director</TableCell>
                                <TableCell><Chip label="Approved" color="success" size="small" /></TableCell>
                                <TableCell><Button variant="outlined" size="small" disabled>View</Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default AdjustmentGovernance;
