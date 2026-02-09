import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Grid, Card, CardContent, Button, Stack, TextField, MenuItem } from '@mui/material';
import { FilterList, Download, PlayArrow } from '@mui/icons-material';
import { fieldsConfig, collectionName, entityName } from './Modules/General/PrincipalRepaymentSchedule';

const PrincipalRepaymentSchedule = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5">Principal Repayment Schedule</Typography>
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" startIcon={<Download />}>Export CSV</Button>
                    <Button variant="contained" color="secondary" startIcon={<PlayArrow />}>Simulate Prepayment</Button>
                </Stack>
            </Box>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Total Outstanding</Typography>
                            <Typography variant="h4">$ 4,500,000</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Paid YTD</Typography>
                            <Typography variant="h4" color="success.main">$ 350,000</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Next Payment Due</Typography>
                            <Typography variant="h4" color="warning.main">15 Days</Typography>
                            <Typography variant="caption">Term Loan A - $50k</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ p: 2 }}>
                {/* Advanced Filters */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                    <TextField size="small" label="Fiscal Year" select defaultValue="2023" sx={{ width: 150 }}>
                        <MenuItem value="2023">FY 2023</MenuItem>
                        <MenuItem value="2024">FY 2024</MenuItem>
                    </TextField>
                    <TextField size="small" label="Instrument Type" select defaultValue="All" sx={{ width: 150 }}>
                        <MenuItem value="All">All Types</MenuItem>
                        <MenuItem value="Term">Term Loans</MenuItem>
                        <MenuItem value="Bond">Bonds</MenuItem>
                    </TextField>
                    <TextField size="small" label="Search" placeholder="Search specific instrument..." sx={{ flexGrow: 1 }} />
                    <Button variant="text" startIcon={<FilterList />}>More Filters</Button>
                </Box>

                <TableContainer>
                    <Table>
                        <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Loan Reference</TableCell>
                                <TableCell>Payment Type</TableCell>
                                <TableCell align="right">Principal</TableCell>
                                <TableCell align="right">Interest (Est.)</TableCell>
                                <TableCell align="right">Total Cashflow</TableCell>
                                <TableCell align="right">Remaining Balance</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow hover>
                                <TableCell>2023-11-30</TableCell>
                                <TableCell>Term Loan A</TableCell>
                                <TableCell><Chip label="Amortization" size="small" variant="outlined" /></TableCell>
                                <TableCell align="right">$ 50,000.00</TableCell>
                                <TableCell align="right">$ 4,200.00</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>$ 54,200.00</TableCell>
                                <TableCell align="right">$ 950,000.00</TableCell>
                                <TableCell><Chip label="Scheduled" color="primary" size="small" /></TableCell>
                            </TableRow>
                            <TableRow hover>
                                <TableCell>2023-12-15</TableCell>
                                <TableCell>Revolver B</TableCell>
                                <TableCell><Chip label="Bullet" color="warning" size="small" variant="outlined" /></TableCell>
                                <TableCell align="right">$ 200,000.00</TableCell>
                                <TableCell align="right">$ 12,000.00</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>$ 212,000.00</TableCell>
                                <TableCell align="right">$ 0.00</TableCell>
                                <TableCell><Chip label="Projected" color="default" size="small" /></TableCell>
                            </TableRow>
                            <TableRow hover sx={{ bgcolor: '#fff3e0' }}>
                                <TableCell>2024-01-31</TableCell>
                                <TableCell>Term Loan A</TableCell>
                                <TableCell><Chip label="Amortization" size="small" variant="outlined" /></TableCell>
                                <TableCell align="right">$ 50,000.00</TableCell>
                                <TableCell align="right">$ 4,100.00</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>$ 54,100.00</TableCell>
                                <TableCell align="right">$ 900,000.00</TableCell>
                                <TableCell><Chip label="Overdue Watch" color="error" size="small" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};
export default PrincipalRepaymentSchedule;
