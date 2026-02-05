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
    Switch,
    Alert
} from '@mui/material';
import { Lock, LockOpen, Block, CheckCircle } from '@mui/icons-material';

const PostingControls = () => {
    const [accounts] = useState([
        { code: '1000', name: 'Assets', postingAllowed: false, isSummary: true, manualRestricted: false },
        { code: '1100', name: 'Current Assets', postingAllowed: false, isSummary: true, manualRestricted: false },
        { code: '1110', name: 'Cash', postingAllowed: true, isSummary: false, manualRestricted: false },
        { code: '2110', name: 'Accounts Payable', postingAllowed: true, isSummary: false, manualRestricted: true },
        { code: '9999', name: 'Suspense Account', postingAllowed: true, isSummary: false, manualRestricted: false },
    ]);

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Lock color="primary" sx={{ fontSize: 40 }} />
                                <Box>
                                    <Typography variant="h5" fontWeight="bold">Posting Controls & Rules</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Manage posting permissions, account blocks, and approval requirements
                                    </Typography>
                                </Box>
                            </Box>
                            <Button variant="contained">Configure Rules</Button>
                        </Box>
                        <Alert severity="warning" sx={{ mt: 2 }}>
                            <strong>Period Locks:</strong> Posting to periods prior to Jan 2024 is currently blocked
                        </Alert>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Account Posting Controls</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Account Code</TableCell>
                                        <TableCell>Account Name</TableCell>
                                        <TableCell>Posting Allowed</TableCell>
                                        <TableCell>Summary Account</TableCell>
                                        <TableCell>Manual Restricted</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {accounts.map((account, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell><Typography fontWeight="bold">{account.code}</Typography></TableCell>
                                            <TableCell>{account.name}</TableCell>
                                            <TableCell>
                                                <Switch checked={account.postingAllowed} size="small" />
                                            </TableCell>
                                            <TableCell>
                                                {account.isSummary ? <CheckCircle color="primary" /> : <Block color="disabled" />}
                                            </TableCell>
                                            <TableCell>
                                                {account.manualRestricted ? <Lock color="error" /> : <LockOpen color="success" />}
                                            </TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={account.postingAllowed ? 'Open' : 'Blocked'}
                                                    size="small"
                                                    color={account.postingAllowed ? 'success' : 'error'}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Period Controls</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Button variant="outlined" fullWidth>Open Period</Button>
                                <Button variant="outlined" fullWidth>Close Period</Button>
                                <Button variant="outlined" color="error" fullWidth>Hard Lock Period</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Special Accounts</Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>Suspense: 9999</Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>Clearing: 9998</Typography>
                            <Typography variant="body2" color="text.secondary">Intercompany: 2500-2599</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PostingControls;
