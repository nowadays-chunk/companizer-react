import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    TextField,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import { Assessment, FileDownload, Print, FilterList } from '@mui/icons-material';

const CoAReports = () => {
    const [reportType, setReportType] = useState('listing');

    const [accountData] = useState([
        { code: '1000', name: 'Assets', type: 'Asset', status: 'Active', postings: 0 },
        { code: '1110', name: 'Cash', type: 'Asset', status: 'Active', postings: 1247 },
        { code: '1120', name: 'AR', type: 'Asset', status: 'Active', postings: 856 },
        { code: '2110', name: 'AP', type: 'Liability', status: 'Active', postings: 642 },
        { code: '4100', name: 'Sales', type: 'Revenue', status: 'Active', postings: 423 },
    ]);

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Assessment color="primary" sx={{ fontSize: 40 }} />
                                <Box>
                                    <Typography variant="h5" fontWeight="bold">Reports & Analytics</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Generate reports, analyze account usage, and export data
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Button variant="outlined" startIcon={<Print />}>Print</Button>
                                <Button variant="outlined" startIcon={<FileDownload />}>Export</Button>
                            </Box>
                        </Box>

                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    select
                                    label="Report Type"
                                    fullWidth
                                    value={reportType}
                                    onChange={(e) => setReportType(e.target.value)}
                                >
                                    <MenuItem value="listing">CoA Listing</MenuItem>
                                    <MenuItem value="hierarchy">Account Hierarchy</MenuItem>
                                    <MenuItem value="usage">Account Usage Analysis</MenuItem>
                                    <MenuItem value="inactive">Inactive Accounts</MenuItem>
                                    <MenuItem value="mapping">Mapping Validation</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField select label="Account Type" fullWidth defaultValue="all">
                                    <MenuItem value="all">All Types</MenuItem>
                                    <MenuItem value="asset">Asset</MenuItem>
                                    <MenuItem value="liability">Liability</MenuItem>
                                    <MenuItem value="equity">Equity</MenuItem>
                                    <MenuItem value="revenue">Revenue</MenuItem>
                                    <MenuItem value="expense">Expense</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField select label="Status" fullWidth defaultValue="active">
                                    <MenuItem value="all">All</MenuItem>
                                    <MenuItem value="active">Active</MenuItem>
                                    <MenuItem value="inactive">Inactive</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Button variant="contained" fullWidth sx={{ height: 56 }} startIcon={<FilterList />}>
                                    Apply Filters
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={9}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            {reportType === 'listing' ? 'Chart of Accounts Listing' :
                                reportType === 'hierarchy' ? 'Account Hierarchy Report' :
                                    reportType === 'usage' ? 'Account Usage Analysis' :
                                        reportType === 'inactive' ? 'Inactive Accounts Report' :
                                            'Mapping Validation Report'}
                        </Typography>

                        <TableContainer sx={{ mt: 2 }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Code</TableCell>
                                        <TableCell>Account Name</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Postings (YTD)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {accountData.map((account, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell><Typography fontWeight="bold">{account.code}</Typography></TableCell>
                                            <TableCell>{account.name}</TableCell>
                                            <TableCell><Chip label={account.type} size="small" /></TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={account.status}
                                                    size="small"
                                                    color={account.status === 'Active' ? 'success' : 'default'}
                                                />
                                            </TableCell>
                                            <TableCell>{account.postings.toLocaleString()}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Quick Stats</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Total Accounts</Typography>
                                    <Typography variant="h4">247</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Active</Typography>
                                    <Typography variant="h5">235</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Inactive</Typography>
                                    <Typography variant="h5">12</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Zero Activity</Typography>
                                    <Typography variant="h5">8</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>

                    <Card sx={{ mt: 2 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Export Options</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
                                <Button variant="outlined" size="small">Excel (.xlsx)</Button>
                                <Button variant="outlined" size="small">PDF Report</Button>
                                <Button variant="outlined" size="small">CSV Export</Button>
                                <Button variant="outlined" size="small">JSON Data</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CoAReports;
