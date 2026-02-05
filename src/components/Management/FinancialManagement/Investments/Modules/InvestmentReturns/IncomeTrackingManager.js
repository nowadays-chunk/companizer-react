import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Table, TableHead, TableRow, TableCell, TableBody, Stack, Chip, Button, TextField, InputAdornment, MenuItem, Divider, IconButton, Tooltip } from '@mui/material';
import { Paid, CallSplit, TrendingUp, Search, FilterList, Download, Refresh } from '@mui/icons-material';

const IncomeTrackingManager = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Income Tracking Manager</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="Refresh Data">
                        <IconButton><Refresh /></IconButton>
                    </Tooltip>
                    <Button variant="outlined" startIcon={<Download />}>Export CSV</Button>
                </Box>
            </Box>

            <Paper sx={{ p: 2, mb: 3 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Search by security name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            select
                            fullWidth
                            size="small"
                            label="Income Type"
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                        >
                            <MenuItem value="all">All Types</MenuItem>
                            <MenuItem value="dividend">Dividends Only</MenuItem>
                            <MenuItem value="coupon">Coupons Only</MenuItem>
                            <MenuItem value="interest">Interest Only</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <TextField type="date" fullWidth size="small" label="From" InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <TextField type="date" fullWidth size="small" label="To" InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <Button fullWidth variant="contained" startIcon={<FilterList />}>Apply</Button>
                    </Grid>
                </Grid>
            </Paper>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: 'secondary.light', color: 'secondary.contrastText' }}>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between">
                                <Box>
                                    <Typography variant="overline">Total Income (YTD)</Typography>
                                    <Typography variant="h4">$ 1.25M</Typography>
                                </Box>
                                <Paid fontSize="large" sx={{ opacity: 0.7 }} />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between">
                                <Box>
                                    <Typography variant="overline" color="textSecondary">Dividends Received</Typography>
                                    <Typography variant="h4">$ 450k</Typography>
                                </Box>
                                <CallSplit fontSize="large" color="primary" sx={{ opacity: 0.7 }} />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between">
                                <Box>
                                    <Typography variant="overline" color="textSecondary">Interest Accrued</Typography>
                                    <Typography variant="h4">$ 800k</Typography>
                                </Box>
                                <TrendingUp fontSize="large" color="success" sx={{ opacity: 0.7 }} />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Income Stream Analysis</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Source Security</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Period</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Withholding Tax</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>US Govt Bond 4.5%</TableCell>
                            <TableCell>Coupon</TableCell>
                            <TableCell>2025-Q2</TableCell>
                            <TableCell align="right">12,500.00</TableCell>
                            <TableCell align="right">0.00</TableCell>
                            <TableCell><Chip label="Received" color="success" size="small" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tech Growth Fund</TableCell>
                            <TableCell>Dividend</TableCell>
                            <TableCell>2025-Q2</TableCell>
                            <TableCell align="right">5,400.00</TableCell>
                            <TableCell align="right">810.00</TableCell>
                            <TableCell><Chip label="Accrued" color="warning" size="small" /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default IncomeTrackingManager;
