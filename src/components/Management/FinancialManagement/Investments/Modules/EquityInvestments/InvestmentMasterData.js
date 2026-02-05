import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, MenuItem, FormControl, InputLabel, Select, Card, CardContent, Divider, Chip } from '@mui/material';
import { Save, Business, AccountBalance } from '@mui/icons-material';

const InvestmentMasterData = () => {
    const [formData, setFormData] = useState({
        investmentId: '',
        companyName: '',
        ticker: '',
        entityOwner: '',
        country: '',
        type: 'Subsidiary',
        ownershipPct: '',
        votingRightsPct: '',
        currency: 'USD',
        classification: 'FVTPL',
        accountingStandard: 'IFRS'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Investment Master Data</Typography>
                <Button variant="contained" startIcon={<Save />}>Save Investment</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                            <Business sx={{ mr: 1 }} /> Investee Company Details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Investment ID" name="investmentId" value={formData.investmentId} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Investee Company Name" name="companyName" value={formData.companyName} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Ticker / Symbol" name="ticker" value={formData.ticker} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Country / Jurisdiction" name="country" value={formData.country} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Investment Type</InputLabel>
                                    <Select name="type" value={formData.type} label="Investment Type" onChange={handleChange}>
                                        <MenuItem value="Subsidiary">Subsidiary</MenuItem>
                                        <MenuItem value="Associate">Associate</MenuItem>
                                        <MenuItem value="Joint Venture">Joint Venture</MenuItem>
                                        <MenuItem value="Minority">Minority Investment</MenuItem>
                                        <MenuItem value="VC">Venture Capital</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccountBalance sx={{ mr: 1 }} /> Ownership & Classification
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Entity Owner" name="entityOwner" value={formData.entityOwner} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth type="number" label="Ownership %" name="ownershipPct" value={formData.ownershipPct} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth type="number" label="Voting Rights %" name="votingRightsPct" value={formData.votingRightsPct} onChange={handleChange} />
                            </Grid>

                            <Grid item xs={12}>
                                <Divider sx={{ my: 2 }} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Func. Currency</InputLabel>
                                    <Select name="currency" value={formData.currency} label="Func. Currency" onChange={handleChange}>
                                        <MenuItem value="USD">USD</MenuItem>
                                        <MenuItem value="EUR">EUR</MenuItem>
                                        <MenuItem value="GBP">GBP</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Classification</InputLabel>
                                    <Select name="classification" value={formData.classification} label="Classification" onChange={handleChange}>
                                        <MenuItem value="FVTPL">FVTPL</MenuItem>
                                        <MenuItem value="FVOCI">FVOCI</MenuItem>
                                        <MenuItem value="Amortized">Amortized Cost</MenuItem>
                                        <MenuItem value="EquityMethod">Equity Method</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Accounting Standard</InputLabel>
                                    <Select name="accountingStandard" value={formData.accountingStandard} label="Accounting Standard" onChange={handleChange}>
                                        <MenuItem value="IFRS">IFRS</MenuItem>
                                        <MenuItem value="LocalGAAP">Local GAAP</MenuItem>
                                        <MenuItem value="USGAAP">US GAAP</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Validation Status</Typography>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                <Chip label="Draft" color="default" />
                                <Chip label="Ownership Valid" color="success" variant="outlined" />
                                <Chip label="Currency Match" color="success" variant="outlined" />
                            </Box>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Quick Actions</Typography>
                            <Button fullWidth variant="outlined" sx={{ mb: 1 }}>Attach Documents</Button>
                            <Button fullWidth variant="outlined" sx={{ mb: 1 }}>View Relationship Map</Button>
                            <Button fullWidth variant="outlined" color="error">Deactivate Investment</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InvestmentMasterData;
