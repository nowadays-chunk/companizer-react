import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Tabs, Tab, TextField, MenuItem, Table, TableHead, TableRow, TableCell, TableBody, Chip, InputAdornment, LinearProgress, Card, CardContent, Divider, IconButton, Tooltip, Alert } from '@mui/material';
import { Calculate, Settings, History, Download, Refresh, PlayArrow, Stop } from '@mui/icons-material';

const ReturnCalculationEngine = () => {
    const [tabValue, setTabValue] = useState(0);
    const [isCalculating, setIsCalculating] = useState(false);
    const [progress, setProgress] = useState(0);
    const [selectedPortfolios, setSelectedPortfolios] = useState(['all']);

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Return Calculation Engine</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="outlined" startIcon={<Download />}>Export Results</Button>
                    <Button
                        variant="contained"
                        startIcon={isCalculating ? <Stop /> : <PlayArrow />}
                        color={isCalculating ? "error" : "primary"}
                        onClick={() => setIsCalculating(!isCalculating)}
                    >
                        {isCalculating ? 'Stop Calculation' : 'Run Calculation Batch'}
                    </Button>
                </Box>
            </Box>

            {isCalculating && (
                <Alert severity="info" sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography>Processing portfolios... {progress}% complete</Typography>
                        <LinearProgress variant="determinate" value={progress} sx={{ flexGrow: 1 }} />
                    </Box>
                </Alert>
            )}

            <Paper sx={{ width: '100%', mb: 3 }}>
                <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} indicatorColor="primary" textColor="primary" sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
                    <Tab label="Calculation Settings" icon={<Settings />} iconPosition="start" />
                    <Tab label="Calculation History" icon={<History />} iconPosition="start" />
                </Tabs>

                {tabValue === 0 && (
                    <Box sx={{ p: 3 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <TextField select fullWidth label="Return Methodology" defaultValue="twr">
                                    <MenuItem value="twr">Time-Weighted Return (TWR) - Standard</MenuItem>
                                    <MenuItem value="mwr">Money-Weighted Return (IRR)</MenuItem>
                                    <MenuItem value="simple">Simple Return (ROI)</MenuItem>
                                    <MenuItem value="dietz">Modified Dietz Method</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField select fullWidth label="Aggregation Level" defaultValue="portfolio">
                                    <MenuItem value="security">Per Security</MenuItem>
                                    <MenuItem value="portfolio">Portfolio Level</MenuItem>
                                    <MenuItem value="entity">Entity Level</MenuItem>
                                    <MenuItem value="asset_class">Asset Class</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField select fullWidth label="Currency Basis" defaultValue="functional">
                                    <MenuItem value="functional">Functional Currency (USD)</MenuItem>
                                    <MenuItem value="local">Local/Asset Currency</MenuItem>
                                    <MenuItem value="both">Both (Dual Reporting)</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    select
                                    fullWidth
                                    label="Portfolio Selection"
                                    value={selectedPortfolios[0]}
                                    onChange={(e) => setSelectedPortfolios([e.target.value])}
                                >
                                    <MenuItem value="all">All Portfolios</MenuItem>
                                    <MenuItem value="equity">Equity Portfolio</MenuItem>
                                    <MenuItem value="fixed_income">Fixed Income Portfolio</MenuItem>
                                    <MenuItem value="alternatives">Alternatives Portfolio</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="date"
                                    fullWidth
                                    label="Calculation Date"
                                    defaultValue={new Date().toISOString().split('T')[0]}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth multiline rows={2} label="Exclusion Rules" placeholder="e.g. Exclude 'Suspense' accounts from TWR calc" />
                            </Grid>
                            <Grid item xs={12}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="subtitle2" gutterBottom>Quick Actions</Typography>
                                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                            <Chip label="Use Last Month Settings" clickable />
                                            <Chip label="Reset to Defaults" clickable variant="outlined" />
                                            <Chip label="Save as Template" clickable color="primary" />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                )}

                {tabValue === 1 && (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Run Date</TableCell>
                                <TableCell>Period</TableCell>
                                <TableCell>Method</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">Result (Port. A)</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>2025-07-02 10:00</TableCell>
                                <TableCell>June 2025</TableCell>
                                <TableCell>TWR</TableCell>
                                <TableCell><Chip label="Success" color="success" size="small" /></TableCell>
                                <TableCell align="right">1.25%</TableCell>
                                <TableCell><Button size="small">View Logs</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2025-06-02 09:45</TableCell>
                                <TableCell>May 2025</TableCell>
                                <TableCell>TWR</TableCell>
                                <TableCell><Chip label="Success" color="success" size="small" /></TableCell>
                                <TableCell align="right">0.85%</TableCell>
                                <TableCell><Button size="small">View Logs</Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                )}
            </Paper>
        </Box>
    );
};

export default ReturnCalculationEngine;
