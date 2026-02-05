import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, MenuItem, Button, Table, TableHead, TableRow, TableCell, TableBody, Chip, IconButton, Tabs, Tab, Card, CardContent, Stack, Divider } from '@mui/material';
import { Add, Edit, Delete, Business, Public, Percent, CalendarToday } from '@mui/icons-material';

const TaxMasterData = () => {
    const [tabValue, setTabValue] = useState(0);

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Tax Master Data</Typography>
                <Button variant="contained" startIcon={<Add />}>Add Tax Configuration</Button>
            </Box>

            <Paper sx={{ width: '100%', mb: 3 }}>
                <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} indicatorColor="primary" textColor="primary" sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
                    <Tab label="Tax Types" icon={<Percent />} iconPosition="start" />
                    <Tab label="Jurisdictions" icon={<Public />} iconPosition="start" />
                    <Tab label="Tax Rates" icon={<CalendarToday />} iconPosition="start" />
                    <Tab label="Exemptions" icon={<Business />} iconPosition="start" />
                </Tabs>

                {tabValue === 0 && (
                    <Box sx={{ p: 3 }}>
                        <Grid container spacing={3} sx={{ mb: 3 }}>
                            <Grid item xs={12} md={4}>
                                <TextField select fullWidth label="Tax Category" defaultValue="income">
                                    <MenuItem value="income">Corporate Income Tax</MenuItem>
                                    <MenuItem value="wht">Withholding Tax (WHT)</MenuItem>
                                    <MenuItem value="vat">Value Added Tax (VAT)</MenuItem>
                                    <MenuItem value="gst">Goods & Services Tax (GST)</MenuItem>
                                    <MenuItem value="payroll">Payroll Taxes</MenuItem>
                                    <MenuItem value="capital">Capital Gains Tax</MenuItem>
                                    <MenuItem value="excise">Excise Tax</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Tax Code" placeholder="e.g. VAT-STD" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="GL Account Mapping" placeholder="e.g. 2100-TAX-PAYABLE" />
                            </Grid>
                        </Grid>

                        <Paper variant="outlined">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Tax Type</strong></TableCell>
                                        <TableCell><strong>Tax Code</strong></TableCell>
                                        <TableCell><strong>GL Account</strong></TableCell>
                                        <TableCell><strong>Frequency</strong></TableCell>
                                        <TableCell><strong>Status</strong></TableCell>
                                        <TableCell align="right"><strong>Actions</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>VAT - Standard Rate</TableCell>
                                        <TableCell>VAT-STD</TableCell>
                                        <TableCell>2100-VAT-PAYABLE</TableCell>
                                        <TableCell>Monthly</TableCell>
                                        <TableCell><Chip label="Active" color="success" size="small" /></TableCell>
                                        <TableCell align="right">
                                            <IconButton size="small"><Edit fontSize="small" /></IconButton>
                                            <IconButton size="small"><Delete fontSize="small" /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Withholding Tax - Services</TableCell>
                                        <TableCell>WHT-SVC</TableCell>
                                        <TableCell>2110-WHT-PAYABLE</TableCell>
                                        <TableCell>Monthly</TableCell>
                                        <TableCell><Chip label="Active" color="success" size="small" /></TableCell>
                                        <TableCell align="right">
                                            <IconButton size="small"><Edit fontSize="small" /></IconButton>
                                            <IconButton size="small"><Delete fontSize="small" /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Corporate Income Tax</TableCell>
                                        <TableCell>CIT-MAIN</TableCell>
                                        <TableCell>2120-CIT-PAYABLE</TableCell>
                                        <TableCell>Annually</TableCell>
                                        <TableCell><Chip label="Active" color="success" size="small" /></TableCell>
                                        <TableCell align="right">
                                            <IconButton size="small"><Edit fontSize="small" /></IconButton>
                                            <IconButton size="small"><Delete fontSize="small" /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    </Box>
                )}

                {tabValue === 1 && (
                    <Box sx={{ p: 3 }}>
                        <Grid container spacing={3} sx={{ mb: 3 }}>
                            <Grid item xs={12} md={4}>
                                <TextField select fullWidth label="Country" defaultValue="us">
                                    <MenuItem value="us">United States</MenuItem>
                                    <MenuItem value="uk">United Kingdom</MenuItem>
                                    <MenuItem value="de">Germany</MenuItem>
                                    <MenuItem value="fr">France</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="State/Province" placeholder="e.g. California" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Tax ID / Registration Number" placeholder="e.g. EIN, VAT Number" />
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="subtitle2" gutterBottom>United States</Typography>
                                        <Divider sx={{ my: 1 }} />
                                        <Stack spacing={1}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="body2">Federal EIN:</Typography>
                                                <Typography variant="body2"><strong>12-3456789</strong></Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="body2">State Tax ID (CA):</Typography>
                                                <Typography variant="body2"><strong>CA-987654321</strong></Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="body2">Filing Frequency:</Typography>
                                                <Chip label="Quarterly" size="small" />
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="subtitle2" gutterBottom>United Kingdom</Typography>
                                        <Divider sx={{ my: 1 }} />
                                        <Stack spacing={1}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="body2">VAT Number:</Typography>
                                                <Typography variant="body2"><strong>GB123456789</strong></Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="body2">Corporation Tax UTR:</Typography>
                                                <Typography variant="body2"><strong>1234567890</strong></Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="body2">Filing Frequency:</Typography>
                                                <Chip label="Quarterly" size="small" />
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                )}

                {tabValue === 2 && (
                    <Box sx={{ p: 3 }}>
                        <Grid container spacing={3} sx={{ mb: 3 }}>
                            <Grid item xs={12} md={3}>
                                <TextField select fullWidth label="Tax Type" defaultValue="vat">
                                    <MenuItem value="vat">VAT</MenuItem>
                                    <MenuItem value="wht">WHT</MenuItem>
                                    <MenuItem value="income">Income Tax</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField fullWidth label="Rate (%)" type="number" defaultValue="20" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField type="date" fullWidth label="Effective From" InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField type="date" fullWidth label="Effective To" InputLabelProps={{ shrink: true }} />
                            </Grid>
                        </Grid>

                        <Paper variant="outlined">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Tax Type</strong></TableCell>
                                        <TableCell><strong>Rate</strong></TableCell>
                                        <TableCell><strong>Effective From</strong></TableCell>
                                        <TableCell><strong>Effective To</strong></TableCell>
                                        <TableCell><strong>Jurisdiction</strong></TableCell>
                                        <TableCell align="right"><strong>Actions</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>VAT - Standard</TableCell>
                                        <TableCell><Chip label="20%" color="primary" size="small" /></TableCell>
                                        <TableCell>2020-01-01</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>United Kingdom</TableCell>
                                        <TableCell align="right">
                                            <IconButton size="small"><Edit fontSize="small" /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>VAT - Reduced</TableCell>
                                        <TableCell><Chip label="5%" color="info" size="small" /></TableCell>
                                        <TableCell>2020-01-01</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>United Kingdom</TableCell>
                                        <TableCell align="right">
                                            <IconButton size="small"><Edit fontSize="small" /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>WHT - Services</TableCell>
                                        <TableCell><Chip label="10%" color="warning" size="small" /></TableCell>
                                        <TableCell>2020-01-01</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>United States</TableCell>
                                        <TableCell align="right">
                                            <IconButton size="small"><Edit fontSize="small" /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    </Box>
                )}

                {tabValue === 3 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Configure tax exemptions and thresholds for specific entities, products, or transaction types.
                        </Typography>

                        <Grid container spacing={3} sx={{ mb: 3 }}>
                            <Grid item xs={12} md={4}>
                                <TextField select fullWidth label="Exemption Type" defaultValue="entity">
                                    <MenuItem value="entity">Entity-Based</MenuItem>
                                    <MenuItem value="product">Product-Based</MenuItem>
                                    <MenuItem value="threshold">Threshold-Based</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Exemption Code" placeholder="e.g. EXP-CHARITY" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField fullWidth label="Threshold Amount" type="number" placeholder="e.g. 10000" />
                            </Grid>
                        </Grid>

                        <Paper variant="outlined">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Exemption Code</strong></TableCell>
                                        <TableCell><strong>Type</strong></TableCell>
                                        <TableCell><strong>Description</strong></TableCell>
                                        <TableCell><strong>Threshold</strong></TableCell>
                                        <TableCell><strong>Status</strong></TableCell>
                                        <TableCell align="right"><strong>Actions</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>EXP-CHARITY</TableCell>
                                        <TableCell>Entity</TableCell>
                                        <TableCell>Charitable Organizations</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell><Chip label="Active" color="success" size="small" /></TableCell>
                                        <TableCell align="right">
                                            <IconButton size="small"><Edit fontSize="small" /></IconButton>
                                            <IconButton size="small"><Delete fontSize="small" /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>THR-SMALL</TableCell>
                                        <TableCell>Threshold</TableCell>
                                        <TableCell>Small Business Threshold</TableCell>
                                        <TableCell>$50,000</TableCell>
                                        <TableCell><Chip label="Active" color="success" size="small" /></TableCell>
                                        <TableCell align="right">
                                            <IconButton size="small"><Edit fontSize="small" /></IconButton>
                                            <IconButton size="small"><Delete fontSize="small" /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default TaxMasterData;
