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
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Tabs,
    Tab
} from '@mui/material';
import { Add, Refresh, TrendingUp, Edit, History, Lock } from '@mui/icons-material';
import { fieldsConfig, collectionName, entityName } from './Modules/General/ExchangeRateManager';

const ExchangeRateManager = () => {
    const [tabValue, setTabValue] = useState(0);

    const rates = [
        { id: 1, currency: 'EUR', rate: 0.92, type: 'Spot', date: '2025-10-27', source: 'ECB' },
        { id: 2, currency: 'GBP', rate: 0.81, type: 'Spot', date: '2025-10-27', source: 'ECB' },
        { id: 3, currency: 'JPY', rate: 149.50, type: 'Spot', date: '2025-10-27', source: 'Reuters' },
        { id: 4, currency: 'EUR', rate: 0.915, type: 'Average', date: '2025-09-30', source: 'Calculated' },
    ];

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" component="h1">
                    Exchange Rate Management
                </Typography>
                <Box>
                    <Button startIcon={<Refresh />} sx={{ mr: 1 }}>
                        Sync Rates
                    </Button>
                    <Button variant="contained" startIcon={<Add />}>
                        New Rate
                    </Button>
                </Box>
            </Box>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <Typography color="textSecondary" gutterBottom>
                                        EUR/USD Spot
                                    </Typography>
                                    <Typography variant="h4">
                                        1.0865
                                    </Typography>
                                    <Typography variant="caption" color="success.main" sx={{ display: 'flex', alignItems: 'center' }}>
                                        <TrendingUp fontSize="small" sx={{ mr: 0.5 }} />
                                        +0.05% today
                                    </Typography>
                                </div>
                                <Chip label="Live" color="success" size="small" variant="outlined" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <Typography color="textSecondary" gutterBottom>
                                        GBP/USD Spot
                                    </Typography>
                                    <Typography variant="h4">
                                        1.2240
                                    </Typography>
                                    <Typography variant="caption" color="error.main" sx={{ display: 'flex', alignItems: 'center' }}>
                                        <TrendingUp fontSize="small" sx={{ mr: 0.5, transform: 'rotate(180deg)' }} />
                                        -0.12% today
                                    </Typography>
                                </div>
                                <Chip label="Live" color="success" size="small" variant="outlined" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <Typography color="textSecondary" gutterBottom>
                                        JPY/USD Spot
                                    </Typography>
                                    <Typography variant="h4">
                                        0.0067
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        Last updated: 5 mins ago
                                    </Typography>
                                </div>
                                <Chip label="Live" color="success" size="small" variant="outlined" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabValue} onChange={handleTabChange}>
                        <Tab label="Active Rates" />
                        <Tab label="Historical Data" />
                        <Tab label="Rate Sources" />
                    </Tabs>
                </Box>

                <Box sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <TextField size="small" label="Search Currency" />
                        <TextField size="small" select label="Rate Type" sx={{ width: 150 }}>
                            <MenuItem value="All">All Types</MenuItem>
                            <MenuItem value="Spot">Spot</MenuItem>
                            <MenuItem value="Average">Average</MenuItem>
                            <MenuItem value="MonthEnd">Month End</MenuItem>
                        </TextField>
                        <TextField size="small" type="date" label="Effective Date" InputLabelProps={{ shrink: true }} />
                    </Box>

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Currency Pair</TableCell>
                                    <TableCell>Rate Type</TableCell>
                                    <TableCell align="right">Rate</TableCell>
                                    <TableCell>Effective Date</TableCell>
                                    <TableCell>Source</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rates.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell sx={{ fontWeight: 'medium' }}>{row.currency}/USD</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={row.type}
                                                size="small"
                                                color={row.type === 'Spot' ? 'primary' : 'default'}
                                                variant="outlined"
                                            />
                                        </TableCell>
                                        <TableCell align="right">{row.rate.toFixed(4)}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.source}</TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <Lock fontSize="small" color="disabled" />
                                                <Typography variant="body2" color="textSecondary">Locked</Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton size="small"><History /></IconButton>
                                            {/* <IconButton size="small"><Edit /></IconButton> */}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Paper>
        </Box>
    );
};

export default ExchangeRateManager;
