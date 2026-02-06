import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';
import { Security } from '@mui/icons-material';

const SecurityPermissions = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <Security color="warning" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Role-Based Access Control</Typography>
            </Box>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Role</TableCell>
                                <TableCell align="center">View Assets</TableCell>
                                <TableCell align="center">Run Depreciation</TableCell>
                                <TableCell align="center">Post to GL</TableCell>
                                <TableCell align="center">Edit Master Data</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Asset Accountant</TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Operations Manager</TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                                <TableCell align="center"><Checkbox disabled /></TableCell>
                                <TableCell align="center"><Checkbox disabled /></TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>External Auditor</TableCell>
                                <TableCell align="center"><Checkbox defaultChecked /></TableCell>
                                <TableCell align="center"><Checkbox disabled /></TableCell>
                                <TableCell align="center"><Checkbox disabled /></TableCell>
                                <TableCell align="center"><Checkbox disabled /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default SecurityPermissions;
