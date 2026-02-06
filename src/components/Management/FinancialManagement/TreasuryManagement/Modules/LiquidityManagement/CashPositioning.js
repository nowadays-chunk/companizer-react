import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip
} from '@mui/material';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const banks = [
    { id: 1, name: 'Chase - Operating', currency: 'USD', balance: 1250000, status: 'Active' },
    { id: 2, name: 'BOA - Payroll', currency: 'USD', balance: 450000, status: 'Active' },
    { id: 3, name: 'HSBC - Euro Ops', currency: 'EUR', balance: 850000, status: 'Active' },
    { id: 4, name: 'Barclays - GBP', currency: 'GBP', balance: 320000, status: 'Active' },
];

const currencyData = [
    { name: 'USD', value: 1700000, color: '#0088FE' },
    { name: 'EUR (USD Eq)', value: 918000, color: '#00C49F' }, // Approx rate
    { name: 'GBP (USD Eq)', value: 400000, color: '#FFBB28' }
];

const CashPositioning = () => {
    const totalCash = 3018000; // Mock total

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3} mb={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: 'primary.main', color: 'white', height: '100%' }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <AccountBalanceIcon />
                                <Typography variant="h6">Total Global Cash</Typography>
                            </Box>
                            <Typography variant="h3">${(totalCash / 1000000).toFixed(2)}M</Typography>
                            <Typography variant="caption" sx={{ opacity: 0.8 }}>USD Equivalent • Updated 2 mins ago</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card elevation={2} sx={{ height: 200 }}>
                        <CardContent sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={currencyData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={70}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                        label
                                    >
                                        {currencyData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                    <Legend verticalAlign="middle" align="right" layout="vertical" />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom>Bank Account Balances</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                            <TableCell>Bank Name</TableCell>
                            <TableCell>Currency</TableCell>
                            <TableCell align="right">Ledger Balance</TableCell>
                            <TableCell align="right">Available Balance</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {banks.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                                    {row.name}
                                </TableCell>
                                <TableCell><Chip label={row.currency} size="small" variant="outlined" /></TableCell>
                                <TableCell align="right">{row.currency} {row.balance.toLocaleString()}</TableCell>
                                <TableCell align="right" sx={{ color: 'success.main' }}>
                                    {row.currency} {(row.balance * 0.98).toLocaleString()}
                                </TableCell>
                                <TableCell>
                                    <Chip label={row.status} color="success" size="small" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default CashPositioning;
