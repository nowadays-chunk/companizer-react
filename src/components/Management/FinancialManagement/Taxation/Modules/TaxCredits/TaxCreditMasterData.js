import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton } from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';

const TaxCreditMasterData = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Tax Credit Master Data</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Configure credit types, jurisdictions, and eligibility criteria.
                    </Typography>
                </Box>
                <Button variant="contained" startIcon={<Add />}>New Configuration</Button>
            </Box>

            <Paper sx={{ width: '100%', mb: 2 }}>
                <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
                    <Tab label="Credit Types" />
                    <Tab label="Jurisdictions" />
                    <Tab label="Eligibility Rules" />
                </Tabs>

                <Box sx={{ p: 3 }}>
                    {tabValue === 0 && (
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Credit Types Definition</Typography>
                                <TableContainer component={Paper} elevation={0} variant="outlined">
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Type Name</TableCell>
                                                <TableCell>Category</TableCell>
                                                <TableCell>Validity Period</TableCell>
                                                <TableCell>Status</TableCell>
                                                <TableCell align="right">Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[
                                                { name: 'R&D Tax Credit', category: 'Investment', validity: '5 Years', status: 'Active' },
                                                { name: 'Input VAT Credit', category: 'VAT/GST', validity: 'Indefinite', status: 'Active' },
                                                { name: 'Foreign Tax Credit', category: 'Withholding', validity: '3 Years', status: 'Active' },
                                            ].map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell fontWeight="500">{row.name}</TableCell>
                                                    <TableCell>{row.category}</TableCell>
                                                    <TableCell>{row.validity}</TableCell>
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

                    {tabValue === 1 && (
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Jurisdictions Configuration</Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    Manage tax authorities and regional settings for credit applicability.
                                </Typography>
                                <TableContainer component={Paper} elevation={0} variant="outlined">
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Jurisdiction Name</TableCell>
                                                <TableCell>Type</TableCell>
                                                <TableCell>Tax Authority</TableCell>
                                                <TableCell>Currency</TableCell>
                                                <TableCell align="right">Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[
                                                { name: 'United States', type: 'Federal', auth: 'IRS', curr: 'USD' },
                                                { name: 'California', type: 'State', auth: 'FTB', curr: 'USD' },
                                                { name: 'United Kingdom', type: 'National', auth: 'HMRC', curr: 'GBP' },
                                                { name: 'Canada', type: 'Federal', auth: 'CRA', curr: 'CAD' },
                                            ].map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell fontWeight="500">{row.name}</TableCell>
                                                    <TableCell>{row.type}</TableCell>
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

                    {tabValue === 2 && (
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Eligibility Rules Engine</Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    Define criteria for automatic credit qualification and calculation logic.
                                </Typography>
                                <TableContainer component={Paper} elevation={0} variant="outlined">
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Rule Name</TableCell>
                                                <TableCell>Condition</TableCell>
                                                <TableCell>Credit Type</TableCell>
                                                <TableCell>Calculation</TableCell>
                                                <TableCell align="right">Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[
                                                { name: 'R&D Staff Costs', cond: 'Expense Type = "R&D Salary"', type: 'R&D Tax Credit', calc: '15% of Amount', active: true },
                                                { name: 'Software Acquisition', cond: 'Asset Class = "Software" AND Purpose = "Innovation"', type: 'R&D Tax Credit', calc: '10% of Cost', active: true },
                                                { name: 'Export Sales VAT', cond: 'Customer Location != "Domestic"', type: 'Input VAT Credit', calc: '100% Reclaim', active: false },
                                            ].map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell fontWeight="500">{row.name}</TableCell>
                                                    <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>{row.cond}</TableCell>
                                                    <TableCell>{row.type}</TableCell>
                                                    <TableCell>{row.calc}</TableCell>
                                                    <TableCell align="right">
                                                        <Chip label={row.active ? "Active" : "Inactive"} color={row.active ? "success" : "default"} size="small" variant="outlined" />
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

export default TaxCreditMasterData;
