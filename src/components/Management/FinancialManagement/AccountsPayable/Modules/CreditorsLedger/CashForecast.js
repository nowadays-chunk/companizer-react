import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Chip,
    List,
    ListItem,
    ListItemText,
    Divider
} from '@mui/material';
import {
    Download,
    Visibility,
    TrendingUp,
    Payment,
    CalendarToday,
    Circle
} from '@mui/icons-material';

const CashForecast = ({ items = [] }) => {
    const [forecastPeriod, setForecastPeriod] = useState(30);
    const [currency, setCurrency] = useState('all');

    const generateForecast = () => {
        if (!items || items.length === 0) return [];

        const today = new Date();
        const forecast = [];

        // Filter items
        let filteredItems = items.filter(item =>
            item.open_item_status !== 'cleared' &&
            !item.is_blocked_for_payment
        );

        if (currency !== 'all') {
            filteredItems = filteredItems.filter(item => item.transaction_currency === currency);
        }

        // Group by due date
        const groupedByDate = filteredItems.reduce((acc, item) => {
            const dueDate = new Date(item.due_date || item.cash_requirement_date);
            if (dueDate <= new Date(today.getTime() + forecastPeriod * 24 * 60 * 60 * 1000)) {
                const dateKey = dueDate.toISOString().split('T')[0];
                if (!acc[dateKey]) {
                    acc[dateKey] = {
                        date: dateKey,
                        amount: 0,
                        count: 0,
                        items: []
                    };
                }
                const amount = parseFloat(item.residual_amount || item.original_amount || 0);
                acc[dateKey].amount += amount;
                acc[dateKey].count += 1;
                acc[dateKey].items.push(item);
            }
            return acc;
        }, {});

        // Convert to array and sort
        return Object.values(groupedByDate)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((item, index, arr) => ({
                ...item,
                cumulative: arr.slice(0, index + 1).reduce((sum, i) => sum + i.amount, 0)
            }));
    };

    const forecastData = generateForecast();

    const calculateSummary = () => {
        const total = forecastData.reduce((sum, item) => sum + item.amount, 0);
        const next7Days = forecastData
            .filter(item => {
                const itemDate = new Date(item.date);
                const today = new Date();
                const diff = (itemDate - today) / (1000 * 60 * 60 * 24);
                return diff >= 0 && diff <= 7;
            })
            .reduce((sum, item) => sum + item.amount, 0);

        const next30Days = forecastData
            .filter(item => {
                const itemDate = new Date(item.date);
                const today = new Date();
                const diff = (itemDate - today) / (1000 * 60 * 60 * 24);
                return diff >= 0 && diff <= 30;
            })
            .reduce((sum, item) => sum + item.amount, 0);

        const overdue = items
            .filter(item => {
                const dueDate = new Date(item.due_date);
                return dueDate < new Date() && item.open_item_status !== 'cleared';
            })
            .reduce((sum, item) => sum + parseFloat(item.residual_amount || item.original_amount || 0), 0);

        return { total, next7Days, next30Days, overdue };
    };

    const summary = calculateSummary();

    const handleExport = () => {
        const headers = ['Date', 'Amount', 'Invoice Count', 'Cumulative'];
        const rows = forecastData.map(item => [
            item.date,
            item.amount.toFixed(2),
            item.count,
            item.cumulative.toFixed(2)
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cash_forecast_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Cash Requirement Forecast</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel>Forecast Period</InputLabel>
                        <Select
                            value={forecastPeriod}
                            onChange={(e) => setForecastPeriod(e.target.value)}
                            label="Forecast Period"
                        >
                            <MenuItem value={7}>Next 7 Days</MenuItem>
                            <MenuItem value={30}>Next 30 Days</MenuItem>
                            <MenuItem value={60}>Next 60 Days</MenuItem>
                            <MenuItem value={90}>Next 90 Days</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel>Currency</InputLabel>
                        <Select value={currency} onChange={(e) => setCurrency(e.target.value)} label="Currency">
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="USD">USD</MenuItem>
                            <MenuItem value="EUR">EUR</MenuItem>
                            <MenuItem value="GBP">GBP</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        startIcon={<Download />}
                        onClick={handleExport}
                    >
                        Export
                    </Button>
                </Box>
            </Box>

            {/* Summary Cards */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <Payment color="error" />
                                <Typography color="textSecondary">Overdue</Typography>
                            </Box>
                            <Typography variant="h5" color="error.main">
                                ${summary.overdue.toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <CalendarToday color="warning" />
                                <Typography color="textSecondary">Next 7 Days</Typography>
                            </Box>
                            <Typography variant="h5" color="warning.main">
                                ${summary.next7Days.toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <CalendarToday color="primary" />
                                <Typography color="textSecondary">Next 30 Days</Typography>
                            </Box>
                            <Typography variant="h5" color="primary.main">
                                ${summary.next30Days.toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <TrendingUp color="success" />
                                <Typography color="textSecondary">Total Forecast</Typography>
                            </Box>
                            <Typography variant="h5">
                                ${summary.total.toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Timeline View */}
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, maxHeight: 600, overflow: 'auto' }}>
                        <Typography variant="h6" gutterBottom>Payment Timeline</Typography>
                        <List>
                            {forecastData.slice(0, 10).map((item, index) => (
                                <React.Fragment key={index}>
                                    <ListItem
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            position: 'relative',
                                            pl: 0
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                mr: 2,
                                                minWidth: 40
                                            }}
                                        >
                                            <Circle
                                                sx={{
                                                    fontSize: 16,
                                                    color: index === 0 ? 'error.main' : index < 3 ? 'warning.main' : 'primary.main'
                                                }}
                                            />
                                            {index < forecastData.slice(0, 10).length - 1 && (
                                                <Box
                                                    sx={{
                                                        width: 2,
                                                        flexGrow: 1,
                                                        bgcolor: 'divider',
                                                        minHeight: 40
                                                    }}
                                                />
                                            )}
                                        </Box>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography variant="body2" color="textSecondary">
                                                    {new Date(item.date).toLocaleDateString()}
                                                </Typography>
                                                <Typography variant="h6">
                                                    ${item.amount.toLocaleString()}
                                                </Typography>
                                            </Box>
                                            <Typography variant="body2" color="textSecondary">
                                                {item.count} invoice{item.count > 1 ? 's' : ''}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    {index < forecastData.slice(0, 10).length - 1 && <Divider component="li" />}
                                </React.Fragment>
                            ))}
                            {forecastData.length === 0 && (
                                <ListItem>
                                    <ListItemText
                                        primary="No payments scheduled"
                                        secondary="No items due in the selected period"
                                    />
                                </ListItem>
                            )}
                        </List>
                    </Paper>
                </Grid>

                {/* Detailed Table */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ maxHeight: 600, overflow: 'auto' }}>
                        <TableContainer>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Due Date</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Count</TableCell>
                                        <TableCell align="right">Cumulative</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {forecastData.map((item, index) => (
                                        <TableRow key={index} hover>
                                            <TableCell>
                                                {new Date(item.date).toLocaleDateString()}
                                                {index === 0 && <Chip label="Urgent" color="error" size="small" sx={{ ml: 1 }} />}
                                            </TableCell>
                                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                                                ${item.amount.toLocaleString()}
                                            </TableCell>
                                            <TableCell align="right">{item.count}</TableCell>
                                            <TableCell align="right" sx={{ color: 'text.secondary' }}>
                                                ${item.cumulative.toLocaleString()}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {forecastData.length === 0 && (
                                        <TableRow>
                                            <TableCell colSpan={4} align="center">
                                                No payments due in the selected period
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CashForecast;
