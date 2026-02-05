import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, LinearProgress, Card, CardContent, Tabs, Tab, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { Settings, BarChart } from '@mui/icons-material';

const MaturityStructureBucketing = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Maturity Structure & Bucketing</Typography>
                <Typography variant="h6" color="primary">Weighted Avg. Maturity: 3.2 Years</Typography>
            </Box>

            <Paper sx={{ mb: 3 }}>
                <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
                    <Tab label="Analysis & Overview" icon={<BarChart />} iconPosition="start" />
                    <Tab label="Bucket Configuration" icon={<Settings />} iconPosition="start" />
                </Tabs>
            </Paper>

            {tabValue === 0 && (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>Maturity Profile Distribution</Typography>
                            {/* Visual Bars with more detail */}
                            {[
                                { label: 'Current (< 1 Year)', val: 20, amt: '$1.2M', color: 'error', desc: 'Critical Liquidity Impact' },
                                { label: 'Short Term (1 - 2 Years)', val: 30, amt: '$1.8M', color: 'warning', desc: 'Refinancing Window Open' },
                                { label: 'Medium Term (2 - 5 Years)', val: 40, amt: '$2.4M', color: 'info', desc: 'Stable Funding' },
                                { label: 'Long Term (> 5 Years)', val: 10, amt: '$0.6M', color: 'success', desc: 'Strategic Debt' }
                            ].map((bucket, idx) => (
                                <Box key={idx} sx={{ mb: 3 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="subtitle2">{bucket.label}</Typography>
                                        <Typography variant="subtitle2" fontWeight="bold">{bucket.amt}</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={bucket.val} color={bucket.color} sx={{ height: 12, borderRadius: 6 }} />
                                    <Typography variant="caption" color="textSecondary">{bucket.desc}</Typography>
                                </Box>
                            ))}
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                                    <TableRow>
                                        <TableCell>Instrument</TableCell>
                                        <TableCell>Maturity Date</TableCell>
                                        <TableCell>Bucket</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Term Loan A</TableCell>
                                        <TableCell>2024-03-15</TableCell>
                                        <TableCell><Chip label="Current" color="error" size="small" /></TableCell>
                                        <TableCell align="right">$ 200,000</TableCell>
                                        <TableCell align="center"><Button size="small">Reclass</Button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Bond Series 2028</TableCell>
                                        <TableCell>2028-06-30</TableCell>
                                        <TableCell><Chip label="Medium Term" color="info" size="small" /></TableCell>
                                        <TableCell align="right">$ 1,000,000</TableCell>
                                        <TableCell align="center"><Button size="small">Details</Button></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            )}

            {tabValue === 1 && (
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>Define Custom Buckets</Typography>
                    <Typography variant="body2" paragraph color="textSecondary">
                        Configure how debt maturities are grouped for reporting. Changes will trigger an auto-recalculation of the profile.
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth label="Bucket 1 Name" defaultValue="Current" />
                            <TextField fullWidth label="Range (Months)" defaultValue="0 - 12" sx={{ mt: 2 }} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth label="Bucket 2 Name" defaultValue="Short Term" />
                            <TextField fullWidth label="Range (Months)" defaultValue="13 - 36" sx={{ mt: 2 }} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth label="Bucket 3 Name" defaultValue="Long Term" />
                            <TextField fullWidth label="Range (Months)" defaultValue="37+" sx={{ mt: 2 }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary">Save Configuration & Recalculate</Button>
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </Box>
    );
};
export default MaturityStructureBucketing;
