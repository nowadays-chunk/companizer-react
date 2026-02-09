import React, { useState, useEffect } from 'react';
import {
    Box,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Grid,
    Card,
    CardContent,
    Chip
} from '@mui/material';
import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { Download, Refresh } from '@mui/icons-material';
import { fieldsConfig, collectionName } from './Modules/General/AgingAnalysis';

const AGING_BUCKETS = [
    { id: 'current', label: 'Current', color: '#4caf50' },
    { id: '1_30', label: '1-30 Days', color: '#2196f3' },
    { id: '31_60', label: '31-60 Days', color: '#ff9800' },
    { id: '61_90', label: '61-90 Days', color: '#ff5722' },
    { id: '90_plus', label: '90+ Days', color: '#f44336' }
];

const AgingAnalysis = ({ items = [], onRefresh }) => {
    const [groupBy, setGroupBy] = useState('vendor');
    const [currency, setCurrency] = useState('all');
    const [entity, setEntity] = useState('all');
    const [agingData, setAgingData] = useState([]);
    const [summary, setSummary] = useState({});

    useEffect(() => {
        calculateAgingData();
    }, [items, groupBy, currency, entity]);

    const calculateAgingData = () => {
        if (!items || items.length === 0) {
            setAgingData([]);
            setSummary({});
            return;
        }

        // Filter items
        let filteredItems = items;
        if (currency !== 'all') {
            filteredItems = filteredItems.filter(item => item.transaction_currency === currency);
        }
        if (entity !== 'all') {
            filteredItems = filteredItems.filter(item => item.entity_code === entity);
        }

        // Calculate aging buckets
        const today = new Date();
        const agingMap = {};
        let totalAmount = 0;
        let overdueAmount = 0;

        filteredItems.forEach(item => {
            const dueDate = new Date(item.due_date);
            const daysOverdue = Math.floor((today - dueDate) / (1000 * 60 * 60 * 24));
            const amount = parseFloat(item.residual_amount || item.original_amount || 0);

            let bucket = 'current';
            if (daysOverdue > 90) bucket = '90_plus';
            else if (daysOverdue > 60) bucket = '61_90';
            else if (daysOverdue > 30) bucket = '31_60';
            else if (daysOverdue > 0) bucket = '1_30';

            const groupKey = item[groupBy === 'vendor' ? 'creditor_name' : groupBy] || 'Unknown';

            if (!agingMap[groupKey]) {
                agingMap[groupKey] = {
                    name: groupKey,
                    current: 0,
                    '1_30': 0,
                    '31_60': 0,
                    '61_90': 0,
                    '90_plus': 0,
                    total: 0
                };
            }

            agingMap[groupKey][bucket] += amount;
            agingMap[groupKey].total += amount;
            totalAmount += amount;

            if (daysOverdue > 0) {
                overdueAmount += amount;
            }
        });

        const agingArray = Object.values(agingMap).sort((a, b) => b.total - a.total);
        setAgingData(agingArray);

        // Calculate summary
        const bucketSummary = AGING_BUCKETS.reduce((acc, bucket) => {
            acc[bucket.id] = agingArray.reduce((sum, item) => sum + (item[bucket.id] || 0), 0);
            return acc;
        }, {});

        setSummary({
            total: totalAmount,
            overdue: overdueAmount,
            current: bucketSummary.current,
            buckets: bucketSummary
        });
    };

    const handleExport = () => {
        // Export to CSV
        const headers = ['Name', 'Current', '1-30 Days', '31-60 Days', '61-90 Days', '90+ Days', 'Total'];
        const rows = agingData.map(item => [
            item.name,
            item.current.toFixed(2),
            item['1_30'].toFixed(2),
            item['31_60'].toFixed(2),
            item['61_90'].toFixed(2),
            item['90_plus'].toFixed(2),
            item.total.toFixed(2)
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `aging_analysis_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    const pieChartData = AGING_BUCKETS.map(bucket => ({
        name: bucket.label,
        value: summary.buckets?.[bucket.id] || 0,
        color: bucket.color
    })).filter(item => item.value > 0);

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Aging Analysis</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        variant="outlined"
                        startIcon={<Refresh />}
                        onClick={onRefresh}
                    >
                        Refresh
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<Download />}
                        onClick={handleExport}
                    >
                        Export
                    </Button>
                </Box>
            </Box>

            {/* Filters */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <InputLabel>Group By</InputLabel>
                        <Select value={groupBy} onChange={(e) => setGroupBy(e.target.value)} label="Group By">
                            <MenuItem value="vendor">Vendor</MenuItem>
                            <MenuItem value="entity_code">Entity</MenuItem>
                            <MenuItem value="transaction_currency">Currency</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <InputLabel>Currency</InputLabel>
                        <Select value={currency} onChange={(e) => setCurrency(e.target.value)} label="Currency">
                            <MenuItem value="all">All Currencies</MenuItem>
                            <MenuItem value="USD">USD</MenuItem>
                            <MenuItem value="EUR">EUR</MenuItem>
                            <MenuItem value="GBP">GBP</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <InputLabel>Entity</InputLabel>
                        <Select value={entity} onChange={(e) => setEntity(e.target.value)} label="Entity">
                            <MenuItem value="all">All Entities</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            {/* Summary Cards */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Total Payables</Typography>
                            <Typography variant="h5">${(summary.total || 0).toLocaleString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Overdue</Typography>
                            <Typography variant="h5" color="error">
                                ${(summary.overdue || 0).toLocaleString()}
                            </Typography>
                            <Chip
                                label={`${summary.total ? ((summary.overdue / summary.total) * 100).toFixed(1) : 0}%`}
                                size="small"
                                color="error"
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Current</Typography>
                            <Typography variant="h5" color="success">
                                ${(summary.current || 0).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>90+ Days</Typography>
                            <Typography variant="h5" color="error">
                                ${(summary.buckets?.['90_plus'] || 0).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Charts */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Aging by {groupBy === 'vendor' ? 'Vendor' : groupBy}</Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={agingData.slice(0, 10)}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                                <YAxis />
                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                <Legend />
                                {AGING_BUCKETS.map(bucket => (
                                    <Bar key={bucket.id} dataKey={bucket.id} stackId="a" fill={bucket.color} name={bucket.label} />
                                ))}
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Distribution</Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieChartData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={(entry) => `${entry.name}: $${entry.value.toLocaleString()}`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                            </PieChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>

            {/* Detailed Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Current</TableCell>
                            <TableCell align="right">1-30 Days</TableCell>
                            <TableCell align="right">31-60 Days</TableCell>
                            <TableCell align="right">61-90 Days</TableCell>
                            <TableCell align="right">90+ Days</TableCell>
                            <TableCell align="right">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {agingData.map((row, index) => (
                            <TableRow key={index} hover>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">${row.current.toLocaleString()}</TableCell>
                                <TableCell align="right">${row['1_30'].toLocaleString()}</TableCell>
                                <TableCell align="right">${row['31_60'].toLocaleString()}</TableCell>
                                <TableCell align="right">${row['61_90'].toLocaleString()}</TableCell>
                                <TableCell align="right" sx={{ color: row['90_plus'] > 0 ? 'error.main' : 'inherit' }}>
                                    ${row['90_plus'].toLocaleString()}
                                </TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                                    ${row.total.toLocaleString()}
                                </TableCell>
                            </TableRow>
                        ))}
                        {agingData.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={7} align="center">
                                    No data available
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    );
};

export default AgingAnalysis;
