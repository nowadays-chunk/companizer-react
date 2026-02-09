import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
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
import {
    Refresh,
    TrendingUp,
    TrendingDown,
    CompareArrows
} from '@mui/icons-material';

import { fieldsConfig, collectionName, entityName } from './Modules/General/TrialBalanceComparativeConfig';

const TrialBalanceComparative = () => {
    const [comparisonType, setComparisonType] = useState('prior_period');

    // Mock data
    const accounts = [
        { id: 1, name: '1000 - Assets', current: 500000, previous: 450000 },
        { id: 2, name: '2000 - Liabilities', current: 300000, previous: 310000 },
        { id: 3, name: '3000 - Equity', current: 200000, previous: 140000 },
        { id: 4, name: '4000 - Revenue', current: 150000, previous: 120000 },
        { id: 5, name: '5000 - Expense', current: 80000, previous: 75000 },
    ];

    const calculateVariance = (current, previous) => current - previous;
    const calculatePercent = (current, previous) => {
        if (previous === 0) return 100;
        return ((current - previous) / previous) * 100;
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>Comparative Analysis</Typography>
                <Button startIcon={<CompareArrows />} variant="contained">Run Analysis</Button>
            </Box>

            <Paper elevation={0} variant="outlined" sx={{ p: 2, mb: 3, backgroundColor: '#f9fafb' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <TextField
                            select
                            label="Comparison Type"
                            fullWidth
                            size="small"
                            value={comparisonType}
                            onChange={(e) => setComparisonType(e.target.value)}
                        >
                            <MenuItem value="prior_period">Current vs Prior Period</MenuItem>
                            <MenuItem value="prior_year">Current vs Prior Year</MenuItem>
                            <MenuItem value="budget">Actual vs Budget</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            select
                            label="Base Currency"
                            fullWidth
                            size="small"
                            defaultValue="USD"
                        >
                            <MenuItem value="USD">USD</MenuItem>
                            <MenuItem value="EUR">EUR</MenuItem>
                            <MenuItem value="GBP">GBP</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
            </Paper>

            <TableContainer component={Paper} variant="outlined">
                <Table>
                    <TableHead sx={{ bgcolor: '#f3f4f6' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Account</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Current Period</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Prior Period</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Variance ($)</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Variance (%)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {accounts.map((row) => {
                            const variance = calculateVariance(row.current, row.previous);
                            const percent = calculatePercent(row.current, row.previous);
                            const isPositive = variance >= 0;

                            return (
                                <TableRow key={row.id} hover>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align="right">{row.current.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</TableCell>
                                    <TableCell align="right">{row.previous.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</TableCell>
                                    <TableCell align="right" sx={{ color: isPositive ? 'success.main' : 'error.main' }}>
                                        {variance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Chip
                                            icon={isPositive ? <TrendingUp /> : <TrendingDown />}
                                            label={`${percent.toFixed(2)}%`}
                                            color={isPositive ? 'success' : 'error'}
                                            variant="outlined"
                                            size="small"
                                        />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default TrialBalanceComparative;
