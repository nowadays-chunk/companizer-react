import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Table, TableHead, TableRow, TableCell, TableBody, Chip, Divider, Stack } from '@mui/material';
import { Public, Business, AccountBalance } from '@mui/icons-material';

const MultiJurisdictionManager = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Multi-Jurisdiction & Multi-Entity Support</Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Public color="primary" />
                                <Box>
                                    <Typography variant="h6">12</Typography>
                                    <Typography variant="body2" color="text.secondary">Active Jurisdictions</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Business color="success" />
                                <Box>
                                    <Typography variant="h6">8</Typography>
                                    <Typography variant="body2" color="text.secondary">Legal Entities</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <AccountBalance color="info" />
                                <Box>
                                    <Typography variant="h6">25</Typography>
                                    <Typography variant="body2" color="text.secondary">Tax Registrations</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Entity Tax Registrations</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Entity</strong></TableCell>
                            <TableCell><strong>Jurisdiction</strong></TableCell>
                            <TableCell><strong>Tax ID</strong></TableCell>
                            <TableCell><strong>Tax Types</strong></TableCell>
                            <TableCell><strong>Filing Frequency</strong></TableCell>
                            <TableCell><strong>Status</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Acme Corp USA</TableCell>
                            <TableCell>United States</TableCell>
                            <TableCell>12-3456789</TableCell>
                            <TableCell>
                                <Stack direction="row" spacing={0.5}>
                                    <Chip label="Income" size="small" />
                                    <Chip label="Payroll" size="small" />
                                </Stack>
                            </TableCell>
                            <TableCell>Quarterly</TableCell>
                            <TableCell><Chip label="Active" color="success" size="small" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Acme Ltd UK</TableCell>
                            <TableCell>United Kingdom</TableCell>
                            <TableCell>GB123456789</TableCell>
                            <TableCell>
                                <Stack direction="row" spacing={0.5}>
                                    <Chip label="VAT" size="small" />
                                    <Chip label="Corp Tax" size="small" />
                                </Stack>
                            </TableCell>
                            <TableCell>Quarterly</TableCell>
                            <TableCell><Chip label="Active" color="success" size="small" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Acme GmbH</TableCell>
                            <TableCell>Germany</TableCell>
                            <TableCell>DE987654321</TableCell>
                            <TableCell>
                                <Stack direction="row" spacing={0.5}>
                                    <Chip label="VAT" size="small" />
                                    <Chip label="Corp Tax" size="small" />
                                </Stack>
                            </TableCell>
                            <TableCell>Monthly</TableCell>
                            <TableCell><Chip label="Active" color="success" size="small" /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Consolidated Reporting</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Stack spacing={2}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2">Total Group Tax Liability:</Typography>
                                <Typography variant="body2"><strong>$245,680</strong></Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2">Intercompany Adjustments:</Typography>
                                <Typography variant="body2"><strong>($12,450)</strong></Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2">Cross-Border WHT:</Typography>
                                <Typography variant="body2"><strong>$8,900</strong></Typography>
                            </Box>
                            <Divider />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2"><strong>Net Group Liability:</strong></Typography>
                                <Typography variant="body2"><strong>$242,130</strong></Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Cross-Border Features</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Stack spacing={1}>
                            <Typography variant="body2">✓ Multiple entities with separate tax IDs</Typography>
                            <Typography variant="body2">✓ Country/state-specific tax rules</Typography>
                            <Typography variant="body2">✓ Consolidated reporting for parent entity</Typography>
                            <Typography variant="body2">✓ Intercompany tax adjustments</Typography>
                            <Typography variant="body2">✓ Cross-border withholding tracking</Typography>
                            <Typography variant="body2">✓ Transfer pricing documentation</Typography>
                            <Typography variant="body2">✓ Multi-currency tax calculation</Typography>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MultiJurisdictionManager;
