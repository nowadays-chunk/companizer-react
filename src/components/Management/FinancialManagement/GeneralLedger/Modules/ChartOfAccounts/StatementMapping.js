import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    Tabs,
    Tab,
    TextField,
    MenuItem
} from '@mui/material';
import { AccountBalance, Map, TrendingUp } from '@mui/icons-material';

import { fieldsConfig, collectionName, entityName } from './Modules/General/StatementMappingConfig';

const StatementMapping = () => {
    const [tabValue, setTabValue] = useState(0);

    const [bsMapping] = useState([
        { account: '1110', name: 'Cash', bsLine: 'Current Assets - Cash', order: 1 },
        { account: '1120', name: 'AR', bsLine: 'Current Assets - Receivables', order: 2 },
        { account: '2110', name: 'AP', bsLine: 'Current Liabilities - Payables', order: 10 },
    ]);

    const [plMapping] = useState([
        { account: '4100', name: 'Sales Revenue', plLine: 'Revenue - Operating', order: 1 },
        { account: '5100', name: 'COGS', plLine: 'Cost of Sales', order: 5 },
        { account: '5200', name: 'OpEx', plLine: 'Operating Expenses', order: 10 },
    ]);

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Map color="primary" sx={{ fontSize: 40 }} />
                                <Box>
                                    <Typography variant="h5" fontWeight="bold">Financial Statement Mapping</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Map accounts to Balance Sheet, P&L, and Cash Flow statements
                                    </Typography>
                                </Box>
                            </Box>
                            <Button variant="contained">Validate Mapping</Button>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper>
                        <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
                            <Tab label="Balance Sheet" />
                            <Tab label="P&L Statement" />
                            <Tab label="Cash Flow" />
                            <Tab label="Management Reports" />
                        </Tabs>

                        {tabValue === 0 && (
                            <Box sx={{ p: 3 }}>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Account</TableCell>
                                                <TableCell>Account Name</TableCell>
                                                <TableCell>BS Line Item</TableCell>
                                                <TableCell>Order</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {bsMapping.map((row, idx) => (
                                                <TableRow key={idx}>
                                                    <TableCell><Chip label={row.account} size="small" /></TableCell>
                                                    <TableCell>{row.name}</TableCell>
                                                    <TableCell><Typography fontWeight="bold">{row.bsLine}</Typography></TableCell>
                                                    <TableCell>{row.order}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        )}

                        {tabValue === 1 && (
                            <Box sx={{ p: 3 }}>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Account</TableCell>
                                                <TableCell>Account Name</TableCell>
                                                <TableCell>P&L Line Item</TableCell>
                                                <TableCell>Order</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {plMapping.map((row, idx) => (
                                                <TableRow key={idx}>
                                                    <TableCell><Chip label={row.account} size="small" /></TableCell>
                                                    <TableCell>{row.name}</TableCell>
                                                    <TableCell><Typography fontWeight="bold">{row.plLine}</Typography></TableCell>
                                                    <TableCell>{row.order}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        )}

                        {tabValue === 2 && (
                            <Box sx={{ p: 3 }}>
                                <Typography variant="body1" color="text.secondary">
                                    Cash Flow Statement mapping configuration
                                </Typography>
                                <Grid container spacing={2} sx={{ mt: 2 }}>
                                    <Grid item xs={12} md={4}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography variant="h6">Operating Activities</Typography>
                                                <Typography variant="body2" color="text.secondary">45 accounts mapped</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography variant="h6">Investing Activities</Typography>
                                                <Typography variant="body2" color="text.secondary">12 accounts mapped</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography variant="h6">Financing Activities</Typography>
                                                <Typography variant="body2" color="text.secondary">8 accounts mapped</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Box>
                        )}

                        {tabValue === 3 && (
                            <Box sx={{ p: 3 }}>
                                <Typography variant="body1" color="text.secondary" gutterBottom>
                                    Configure management and statutory reporting hierarchies
                                </Typography>
                                <TextField select label="Reporting Hierarchy" fullWidth sx={{ mt: 2 }}>
                                    <MenuItem value="mgmt1">Management Rollup 1</MenuItem>
                                    <MenuItem value="mgmt2">Management Rollup 2</MenuItem>
                                    <MenuItem value="statutory">Statutory Rollup</MenuItem>
                                </TextField>
                            </Box>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StatementMapping;
