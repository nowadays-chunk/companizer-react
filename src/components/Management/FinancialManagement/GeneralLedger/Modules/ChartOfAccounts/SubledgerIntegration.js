import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    Switch
} from '@mui/material';
import { Link, AccountBalance, Assessment } from '@mui/icons-material';

const SubledgerIntegration = () => {
    const [mappings] = useState([
        { subledger: 'Accounts Receivable', defaultAccount: '1120', entityName: 'AR Revenue', active: true },
        { subledger: 'Accounts Payable', defaultAccount: '2110', entityName: 'AP Liability', active: true },
        { subledger: 'Accounts Payable', defaultAccount: '5200', entityName: 'AP Expense', active: true },
        { subledger: 'Fixed Assets', defaultAccount: '1210', entityName: 'Asset Capitalization', active: true },
        { subledger: 'Inventory', defaultAccount: '1130', entityName: 'Inventory Account', active: true },
        { subledger: 'Payroll', defaultAccount: '5300', entityName: 'Payroll Expense', active: true },
    ]);

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Link color="primary" sx={{ fontSize: 40 }} />
                                <Box>
                                    <Typography variant="h5" fontWeight="bold">Subledger Integration & Rules</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Configure default account assignments and rule-based derivation
                                    </Typography>
                                </Box>
                            </Box>
                            <Button variant="contained">Add Mapping Rule</Button>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Default Account Mappings</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Subledger</TableCell>
                                        <TableCell>Default Account</TableCell>
                                        <TableCell>Entity Name</TableCell>
                                        <TableCell>Active</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {mappings.map((mapping, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell>
                                                <Chip label={mapping.subledger} color="primary" />
                                            </TableCell>
                                            <TableCell><Typography fontWeight="bold">{mapping.defaultAccount}</Typography></TableCell>
                                            <TableCell>{mapping.entityName}</TableCell>
                                            <TableCell><Switch checked={mapping.active} size="small" /></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <AccountBalance color="primary" sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h6" gutterBottom>AR Integration</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Revenue accounts: 4000-4999
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Assessment color="secondary" sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h6" gutterBottom>AP Integration</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Expense accounts: 5000-5999
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Link color="info" sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h6" gutterBottom>Active Rules</Typography>
                            <Typography variant="h4" color="primary">12</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SubledgerIntegration;
