import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton, Avatar } from '@mui/material';
import { Add, Edit, Description, VerifiedUser, Flag } from '@mui/icons-material';

const CounterpartyTaxProfiles = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Counterparty Tax Profiles</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Manage vendor/customer tax residency, TINs, and treaty eligibility.
                    </Typography>
                </Box>
                <Button variant="contained" startIcon={<Add />}>New Profile</Button>
            </Box>

            <Paper sx={{ width: '100%', mb: 2 }}>
                <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
                    <Tab label="Tax Profiles" />
                    <Tab label="Exemption Certificates" />
                    <Tab label="Pending Review" />
                </Tabs>

                <Box sx={{ p: 3 }}>
                    {/* Tax Profiles Tab */}
                    {tabValue === 0 && (
                        <TableContainer component={Paper} elevation={0} variant="outlined">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Counterparty Name</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Tax Residency</TableCell>
                                        <TableCell>Tax ID (TIN)</TableCell>
                                        <TableCell>Treaty Applied</TableCell>
                                        <TableCell>WHT Status</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {[
                                        { name: 'Acme Corp International', type: 'Vendor', country: 'United Kingdom', tin: 'GB987654321', treaty: 'Yes (US-UK)', status: 'Verified' },
                                        { name: 'TechSolutions Pvt Ltd', type: 'Vendor', country: 'India', tin: 'PANABC1234D', treaty: 'Yes (US-India)', status: 'Verified' },
                                        { name: 'Global Rentals LLC', type: 'Vendor', country: 'United States', tin: 'EIN-12-3456789', treaty: 'N/A (Domestic)', status: 'Verified' },
                                        { name: 'Freelance Design Co', type: 'Vendor', country: 'Canada', tin: 'Pending', treaty: 'Pending', status: 'Incomplete' },
                                    ].map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell fontWeight="500">
                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>{row.name[0]}</Avatar>
                                                    {row.name}
                                                </Box>
                                            </TableCell>
                                            <TableCell>{row.type}</TableCell>
                                            <TableCell>{row.country}</TableCell>
                                            <TableCell>{row.tin}</TableCell>
                                            <TableCell>{row.treaty}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={row.status}
                                                    color={row.status === 'Verified' ? 'success' : 'warning'}
                                                    size="small"
                                                    variant="outlined"
                                                    icon={row.status === 'Verified' ? <VerifiedUser /> : undefined}
                                                />
                                            </TableCell>
                                            <TableCell align="right">
                                                <IconButton size="small"><Edit fontSize="small" /></IconButton>
                                                <IconButton size="small"><Description fontSize="small" /></IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}

                    {/* Exemption Certificates Tab */}
                    {tabValue === 1 && (
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Active Exemption Certificates</Typography>
                                <TableContainer component={Paper} elevation={0} variant="outlined">
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Counterparty</TableCell>
                                                <TableCell>Certificate Type</TableCell>
                                                <TableCell>Reference No</TableCell>
                                                <TableCell>Valid From</TableCell>
                                                <TableCell>Valid To</TableCell>
                                                <TableCell align="right">Document</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[
                                                { name: 'Acme Corp International', type: 'W-8BEN-E', ref: 'CERT-2024-001', from: '2024-01-01', to: '2026-12-31' },
                                                { name: 'TechSolutions Pvt Ltd', type: 'Form 10F', ref: 'CERT-IN-998', from: '2024-04-01', to: '2025-03-31' },
                                            ].map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell fontWeight="500">{row.name}</TableCell>
                                                    <TableCell>{row.type}</TableCell>
                                                    <TableCell>{row.ref}</TableCell>
                                                    <TableCell>{row.from}</TableCell>
                                                    <TableCell>{row.to}</TableCell>
                                                    <TableCell align="right">
                                                        <Button size="small" startIcon={<Description />}>View</Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Paper>
        </Box>
    );
};

export default CounterpartyTaxProfiles;
