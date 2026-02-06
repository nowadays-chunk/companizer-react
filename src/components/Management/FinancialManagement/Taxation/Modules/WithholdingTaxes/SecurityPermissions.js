import React from 'react';
import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, FormControlLabel, Switch } from '@mui/material';

const SecurityPermissions = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight="600" gutterBottom>Security & Permissions</Typography>
            <Typography variant="body2" color="textSecondary" mb={3}>
                Manage role-based access control for sensitive tax data.
            </Typography>

            <Paper sx={{ width: '100%', mb: 3, p: 2 }}>
                <Typography variant="h6" gutterBottom>Role Configurations</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Role</TableCell>
                                <TableCell>Setup & Config</TableCell>
                                <TableCell>Calculations</TableCell>
                                <TableCell>Approvals</TableCell>
                                <TableCell>Payment Execution</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { role: 'Tax Administrator', setup: true, calc: true, app: true, pay: true, status: 'Active' },
                                { role: 'AP Specialist', setup: false, calc: true, app: false, pay: false, status: 'Active' },
                                { role: 'Controller', setup: false, calc: true, app: true, pay: true, status: 'Active' },
                                { role: 'Auditor', setup: 'Read-Only', calc: 'Read-Only', app: 'Read-Only', pay: 'Read-Only', status: 'Active' },
                            ].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell fontWeight="500">{row.role}</TableCell>
                                    <TableCell>{row.setup === true ? 'Yes' : row.setup === false ? 'No' : row.setup}</TableCell>
                                    <TableCell>{row.calc === true ? 'Yes' : row.calc === false ? 'No' : row.calc}</TableCell>
                                    <TableCell>{row.app === true ? 'Yes' : row.app === false ? 'No' : row.app}</TableCell>
                                    <TableCell>{row.pay === true ? 'Yes' : row.pay === false ? 'No' : row.pay}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Data Protection</Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                    <FormControlLabel control={<Switch defaultChecked />} label="Mask TIN/Sensitive ID numbers in lists" />
                    <FormControlLabel control={<Switch defaultChecked />} label="Require MFA for Remittance Actions" />
                    <FormControlLabel control={<Switch defaultChecked />} label="Log all View Access to Tax Profiles" />
                </Box>
            </Paper>
        </Box>
    );
};

export default SecurityPermissions;
