import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, MenuItem, Button, Table, TableHead, TableRow, TableCell, TableBody, Chip, Alert, Card, CardContent, Stack, Divider, LinearProgress } from '@mui/material';
import { Calculate, PlayArrow, Stop, Settings, CheckCircle } from '@mui/icons-material';

const TaxCalculationEngine = () => {
    const [isCalculating, setIsCalculating] = useState(false);
    const [progress, setProgress] = useState(0);

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Tax Calculation Engine</Typography>
                <Button
                    variant="contained"
                    startIcon={isCalculating ? <Stop /> : <PlayArrow />}
                    color={isCalculating ? "error" : "primary"}
                    onClick={() => setIsCalculating(!isCalculating)}
                >
                    {isCalculating ? 'Stop Calculation' : 'Run Tax Calculation'}
                </Button>
            </Box>

            {isCalculating && (
                <Alert severity="info" sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography>Calculating taxes for all transactions... {progress}% complete</Typography>
                        <LinearProgress variant="determinate" value={progress} sx={{ flexGrow: 1 }} />
                    </Box>
                </Alert>
            )}

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom variant="body2">VAT/GST Calculated</Typography>
                            <Typography variant="h5">$45,230</Typography>
                            <Chip label="+12% vs last period" size="small" color="success" sx={{ mt: 1 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom variant="body2">WHT Calculated</Typography>
                            <Typography variant="h5">$12,450</Typography>
                            <Chip label="-5% vs last period" size="small" color="error" sx={{ mt: 1 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom variant="body2">Income Tax Provision</Typography>
                            <Typography variant="h5">$89,100</Typography>
                            <Chip label="+8% vs last period" size="small" color="success" sx={{ mt: 1 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom variant="body2">Total Tax Liability</Typography>
                            <Typography variant="h5">$146,780</Typography>
                            <Chip label="Current Period" size="small" sx={{ mt: 1 }} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Calculation Settings</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <TextField select fullWidth label="Calculation Method" defaultValue="accrual">
                            <MenuItem value="accrual">Accrual Basis</MenuItem>
                            <MenuItem value="cash">Cash Basis</MenuItem>
                            <MenuItem value="hybrid">Hybrid</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField select fullWidth label="Tax Period" defaultValue="current">
                            <MenuItem value="current">Current Month</MenuItem>
                            <MenuItem value="quarter">Current Quarter</MenuItem>
                            <MenuItem value="year">Year to Date</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField select fullWidth label="Jurisdiction" defaultValue="all">
                            <MenuItem value="all">All Jurisdictions</MenuItem>
                            <MenuItem value="us">United States</MenuItem>
                            <MenuItem value="uk">United Kingdom</MenuItem>
                            <MenuItem value="eu">European Union</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            type="date"
                            fullWidth
                            label="Period Start"
                            defaultValue={new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0]}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            type="date"
                            fullWidth
                            label="Period End"
                            defaultValue={new Date().toISOString().split('T')[0]}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                </Grid>
            </Paper>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Recent Calculations</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Calculation ID</strong></TableCell>
                            <TableCell><strong>Tax Type</strong></TableCell>
                            <TableCell><strong>Jurisdiction</strong></TableCell>
                            <TableCell align="right"><strong>Taxable Base</strong></TableCell>
                            <TableCell align="right"><strong>Tax Amount</strong></TableCell>
                            <TableCell><strong>Rate Applied</strong></TableCell>
                            <TableCell><strong>Status</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>CALC-2024-001</TableCell>
                            <TableCell>VAT - Standard</TableCell>
                            <TableCell>United Kingdom</TableCell>
                            <TableCell align="right">$226,150</TableCell>
                            <TableCell align="right">$45,230</TableCell>
                            <TableCell><Chip label="20%" size="small" color="primary" /></TableCell>
                            <TableCell><Chip label="Completed" size="small" color="success" icon={<CheckCircle />} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>CALC-2024-002</TableCell>
                            <TableCell>WHT - Services</TableCell>
                            <TableCell>United States</TableCell>
                            <TableCell align="right">$124,500</TableCell>
                            <TableCell align="right">$12,450</TableCell>
                            <TableCell><Chip label="10%" size="small" color="warning" /></TableCell>
                            <TableCell><Chip label="Completed" size="small" color="success" icon={<CheckCircle />} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>CALC-2024-003</TableCell>
                            <TableCell>Corporate Income Tax</TableCell>
                            <TableCell>United States</TableCell>
                            <TableCell align="right">$424,762</TableCell>
                            <TableCell align="right">$89,100</TableCell>
                            <TableCell><Chip label="21%" size="small" color="info" /></TableCell>
                            <TableCell><Chip label="Completed" size="small" color="success" icon={<CheckCircle />} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>CALC-2024-004</TableCell>
                            <TableCell>VAT - Reduced</TableCell>
                            <TableCell>Germany</TableCell>
                            <TableCell align="right">$45,000</TableCell>
                            <TableCell align="right">$3,150</TableCell>
                            <TableCell><Chip label="7%" size="small" color="info" /></TableCell>
                            <TableCell><Chip label="Pending Review" size="small" color="warning" /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>

            <Paper sx={{ p: 3, mt: 3, bgcolor: '#f5f5f5' }}>
                <Typography variant="subtitle2" gutterBottom>Calculation Features</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={1}>
                            <Typography variant="body2">✓ Multi-rate tax calculation</Typography>
                            <Typography variant="body2">✓ Compound tax support (tax-on-tax)</Typography>
                            <Typography variant="body2">✓ Reverse charge handling</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={1}>
                            <Typography variant="body2">✓ Input tax adjustment</Typography>
                            <Typography variant="body2">✓ FX integration for foreign currency</Typography>
                            <Typography variant="body2">✓ Tax credit & refund calculation</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={1}>
                            <Typography variant="body2">✓ Rate override with approval</Typography>
                            <Typography variant="body2">✓ Exemption & threshold handling</Typography>
                            <Typography variant="body2">✓ Automated GL posting</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default TaxCalculationEngine;
