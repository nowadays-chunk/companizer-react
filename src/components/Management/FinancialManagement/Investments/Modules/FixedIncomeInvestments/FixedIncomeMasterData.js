import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, MenuItem, Button, Tabs, Tab, Divider, InputAdornment } from '@mui/material';
import { Save, AttachFile, Description, AccountBalance, Gavel } from '@mui/icons-material';

const FixedIncomeMasterData = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Fixed Income Master Data</Typography>
                <Button variant="contained" startIcon={<Save />}>Save Security</Button>
            </Box>

            <Paper sx={{ width: '100%' }}>
                <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary" sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
                    <Tab label="General Terms" icon={<Description />} iconPosition="start" />
                    <Tab label="Interest & Maturity" icon={<Gavel />} iconPosition="start" />
                    <Tab label="Accounting & Class" icon={<AccountBalance />} iconPosition="start" />
                    <Tab label="Documents" icon={<AttachFile />} iconPosition="start" />
                </Tabs>

                {/* Tab 0: General Terms */}
                {tabValue === 0 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom color="textSecondary">Security Idenfitication</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="Investment ID" placeholder="e.g. BOND-2026-001" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="ISIN / CUSIP" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Issuer Name / Counterparty" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField select fullWidth label="Security Type" defaultValue="corpbond">
                                    <MenuItem value="govbond">Government Bond</MenuItem>
                                    <MenuItem value="corpbond">Corporate Bond</MenuItem>
                                    <MenuItem value="tbill">Treasury Bill</MenuItem>
                                    <MenuItem value="cp">Commercial Paper</MenuItem>
                                    <MenuItem value="convertible">Convertible Bond</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="Face Value / Par" type="number"
                                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="Purchase Price" type="number"
                                    InputProps={{ startAdornment: <InputAdornment position="start">Prc</InputAdornment> }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="Currency" defaultValue="USD" />
                            </Grid>
                        </Grid>
                    </Box>
                )}

                {/* Tab 1: Interest & Maturity */}
                {tabValue === 1 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom color="textSecondary">Coupon & Redemption Details</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="Issue Date" type="date" InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="Settlement Date" type="date" InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="Maturity Date" type="date" InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="First Coupon Date" type="date" InputLabelProps={{ shrink: true }} />
                            </Grid>

                            <Grid item xs={12} md={12}><Divider sx={{ my: 1 }} /></Grid>

                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="Coupon Rate" type="number"
                                    InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField select fullWidth label="Frequency" defaultValue="annual">
                                    <MenuItem value="annual">Annual</MenuItem>
                                    <MenuItem value="semiannual">Semi-Annual</MenuItem>
                                    <MenuItem value="quarterly">Quarterly</MenuItem>
                                    <MenuItem value="monthly">Monthly</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField select fullWidth label="Day Count Convention" defaultValue="30/360">
                                    <MenuItem value="30/360">30/360</MenuItem>
                                    <MenuItem value="act/360">ACT/360</MenuItem>
                                    <MenuItem value="act/365">ACT/365</MenuItem>
                                    <MenuItem value="act/act">ACT/ACT</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                    </Box>
                )}

                {/* Tab 2: Accounting */}
                {tabValue === 2 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom color="textSecondary">Financial Classification</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <TextField select fullWidth label="Classification (IFRS 9)" defaultValue="fvtpl">
                                    <MenuItem value="amortized">Amortized Cost (Hold to Collect)</MenuItem>
                                    <MenuItem value="fvoci">FVOCI (Hold to Collect & Sell)</MenuItem>
                                    <MenuItem value="fvtpl">FVTPL (Trading / Other)</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField select fullWidth label="Accounting Std Mapping" defaultValue="ifrs">
                                    <MenuItem value="ifrs">IFRS</MenuItem>
                                    <MenuItem value="usgaap">US GAAP</MenuItem>
                                    <MenuItem value="local">Local GAAP</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                    </Box>
                )}

                {/* Tab 3: Documents */}
                {tabValue === 3 && (
                    <Box sx={{ p: 3, textAlign: 'center' }}>
                        <Description sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                        <Typography gutterBottom>No documents attached</Typography>
                        <Button variant="outlined" component="label">
                            Upload Propectus / Term Sheet
                            <input type="file" hidden />
                        </Button>
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default FixedIncomeMasterData;
