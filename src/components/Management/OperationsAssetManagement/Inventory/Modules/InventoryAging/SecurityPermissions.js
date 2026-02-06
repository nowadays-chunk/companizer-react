import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';
import { Security } from '@mui/icons-material';

const SecurityPermissions = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <Security color="warning" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Data Security & Access</Typography>
            </Box>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Role</TableCell>
                                <TableCell align="center">View Aging Reports</TableCell>
                                <TableCell align="center">Configure Buckets</TableCell>
                                <TableCell align="center">Approve Disposal</TableCell>
                                <TableCell align="center">View High Value Items</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Warehouse Staff</TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                                <TableCell align="center"><Checkbox disabled /></TableCell>
                                <TableCell align="center"><Checkbox disabled /></TableCell>
                                <TableCell align="center"><Checkbox disabled /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Inventory Planner</TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                                <TableCell align="center"><Checkbox disabled /></TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Finance Manager</TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default SecurityPermissions;
