import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton } from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';

const WithholdingTaxMasterData = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Withholding Tax Master Data</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Configure withholding tax types, rates, jurisdictions, and codes.
                    </Typography>
                </Box>
                <Button variant="contained" startIcon={<Add />}>New Configuration</Button>
            </Box>

            <Paper sx={{ width: '100%', mb: 2 }}>
                <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
                    <Tab label="Tax Types" />
                    <Tab label="Jurisdictions" />
                    <Tab label="Rates & Codes" />
                    <Tab label="Thresholds" />
                </Tabs>

                <Box sx={{ p: 3 }}>
                    {/* Tax Types Tab */}
                    {tabValue === 0 && (
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Withholding Tax Types</Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    Define categories of payments subject to withholding tax.
                                </Typography>
                                <TableContainer component={Paper} elevation={0} variant="outlined">
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Type Name</TableCell>
                                                <TableCell>Category</TableCell>
                                                <TableCell>Description</TableCell>
                                                <TableCell>Status</TableCell>
                                                <TableCell align="right">Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[
                                                { name: 'Professional Services', category: 'Services', desc: 'Consulting, Legal, Technical fees', status: 'Active' },
                                                { name: 'Dividends', category: 'Income', desc: 'Profit distribution to shareholders', status: 'Active' },
                                                { name: 'Royalties', category: 'IP', desc: 'Usage of intellectual property', status: 'Active' },
                                                { name: 'Rent', category: 'Property', desc: 'Real estate and equipment leasing', status: 'Active' },
                                                { name: 'Interest', category: 'Finance', desc: 'Loan interest payments', status: 'Active' },
                                            ].map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell fontWeight="500">{row.name}</TableCell>
                                                    <TableCell>{row.category}</TableCell>
                                                    <TableCell>{row.desc}</TableCell>
                                                    <TableCell><Chip label={row.status} color="success" size="small" variant="outlined" /></TableCell>
                                                    <TableCell align="right">
                                                        <IconButton size="small"><Edit fontSize="small" /></IconButton>
                                                        <IconButton size="small"><Delete fontSize="small" /></IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    )}

                    {/* Jurisdictions Tab */}
                    {tabValue === 1 && (
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Jurisdiction Configuration</Typography>
                                <TableContainer component={Paper} elevation={0} variant="outlined">
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Jurisdiction</TableCell>
                                                <TableCell>Country</TableCell>
                                                <TableCell>Tax Authority</TableCell>
                                                <TableCell>Currency</TableCell>
                                                <TableCell align="right">Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[
                                                { name: 'US Federal', country: 'United States', auth: 'IRS', curr: 'USD' },
                                                { name: 'UK HMRC', country: 'United Kingdom', auth: 'HMRC', curr: 'GBP' },
                                                { name: 'India TDS', country: 'India', auth: 'Income Tax Dept', curr: 'INR' },
                                                { name: 'Germany', country: 'Germany', auth: 'BZSt', curr: 'EUR' },
                                            ].map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell fontWeight="500">{row.name}</TableCell>
                                                    <TableCell>{row.country}</TableCell>
                                                    <TableCell>{row.auth}</TableCell>
                                                    <TableCell>{row.curr}</TableCell>
                                                    <TableCell align="right">
                                                        <Button size="small">Edit</Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    )}

                    {/* Rates & Codes Tab */}
                    {tabValue === 2 && (
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Withholding Rates & Tax Codes</Typography>
                                <TableContainer component={Paper} elevation={0} variant="outlined">
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Tax Code</TableCell>
                                                <TableCell>Description</TableCell>
                                                <TableCell>Rate (%)</TableCell>
                                                <TableCell>Type</TableCell>
                                                <TableCell>Effective Date</TableCell>
                                                <TableCell align="right">Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[
                                                { code: 'WHT-US-DIV-30', desc: 'US Dividends - Default', rate: '30.0%', type: 'Fixed', date: '2024-01-01', status: 'Active' },
                                                { code: 'WHT-US-DIV-15', desc: 'US Dividends - Treaty', rate: '15.0%', type: 'Treaty', date: '2024-01-01', status: 'Active' },
                                                { code: 'WHT-IN-DOM-10', desc: 'India Tech Services', rate: '10.0%', type: 'Fixed', date: '2024-04-01', status: 'Active' },
                                                { code: 'WHT-UK-ROY-20', desc: 'UK Royalties', rate: '20.0%', type: 'Fixed', date: '2024-04-06', status: 'Active' },
                                            ].map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell fontWeight="500">{row.code}</TableCell>
                                                    <TableCell>{row.desc}</TableCell>
                                                    <TableCell>{row.rate}</TableCell>
                                                    <TableCell>{row.type}</TableCell>
                                                    <TableCell>{row.date}</TableCell>
                                                    <TableCell align="right">
                                                        <Chip label={row.status} color="success" size="small" variant="outlined" />
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    )}

                    {/* Thresholds Tab */}
                    {tabValue === 3 && (
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Threshold Amounts</Typography>
                                <TableContainer component={Paper} elevation={0} variant="outlined">
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Rule Name</TableCell>
                                                <TableCell>Applies To</TableCell>
                                                <TableCell>Threshold Amount</TableCell>
                                                <TableCell>Reset Period</TableCell>
                                                <TableCell align="right">Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[
                                                { name: 'Small Payments Exemption', app: 'Services', amt: 'USD 600.00', period: 'Annual', status: 'Active' },
                                                { name: 'Rent Threshold', app: 'Rent', amt: 'INR 240,000.00', period: 'Annual', status: 'Active' },
                                            ].map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell fontWeight="500">{row.name}</TableCell>
                                                    <TableCell>{row.app}</TableCell>
                                                    <TableCell>{row.amt}</TableCell>
                                                    <TableCell>{row.period}</TableCell>
                                                    <TableCell align="right">
                                                        <Chip label={row.status} color="success" size="small" variant="outlined" />
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

export default WithholdingTaxMasterData;
