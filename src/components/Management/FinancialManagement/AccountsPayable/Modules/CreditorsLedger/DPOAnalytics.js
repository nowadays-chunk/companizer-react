import React, { useState, useEffect } from 'react';
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
    Chip,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { TrendingUp, TrendingDown, Assessment } from '@mui/icons-material';
import { fieldsConfig, collectionName } from './Modules/General/DPOAnalytics';

const DPOAnalytics = ({ items = [], purchases = [] }) => {
    const [period, setPeriod] = useState('monthly');
    const [dpoData, setDpoData] = useState({});
    const [trendData, setTrendData] = useState([]);

    useEffect(() => {
        calculateDPO();
    }, [items, purchases, period]);

    const calculateDPO = () => {
        if (!items || items.length === 0) {
            setDpoData({});
            setTrendData([]);
            return;
        }

        // Calculate current DPO
        const totalPayables = items.reduce((sum, item) =>
            sum + parseFloat(item.balance || item.original_amount || 0), 0
        );

        // Mock COGS (Cost of Goods Sold) - in real implementation, this would come from GL
        const dailyCOGS = totalPayables / 365 * 12; // Approximate
        const currentDPO = totalPayables / dailyCOGS;

        // Calculate weighted average payment days
        const weightedDays = items.reduce((sum, item) => {
            const amount = parseFloat(item.balance || item.original_amount || 0);
            const days = item.days_overdue || 0;
            return sum + (amount * days);
        }, 0) / totalPayables;

        // Calculate AP turnover
        const annualPurchases = totalPayables * 4; // Mock annual purchases
        const apTurnover = annualPurchases / totalPayables;

        // Generate trend data (mock historical data)
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        const trend = months.map((month, index) => ({
            month,
            dpo: currentDPO + (Math.random() - 0.5) * 10,
            apTurnover: apTurnover + (Math.random() - 0.5) * 2,
            payables: totalPayables * (0.9 + Math.random() * 0.2)
        }));

        // Calculate vendor-wise DPO
        const vendorDPO = items.reduce((acc, item) => {
            const vendor = item.creditor_name || 'Unknown';
            const amount = parseFloat(item.balance || item.original_amount || 0);
            const days = item.days_overdue || 0;

            if (!acc[vendor]) {
                acc[vendor] = { vendor, totalAmount: 0, totalDays: 0, count: 0 };
            }

            acc[vendor].totalAmount += amount;
            acc[vendor].totalDays += days;
            acc[vendor].count += 1;

            return acc;
        }, {});

        const vendorDPOArray = Object.values(vendorDPO)
            .map(v => ({
                ...v,
                avgDPO: v.totalDays / v.count
            }))
            .sort((a, b) => b.totalAmount - a.totalAmount)
            .slice(0, 10);

        setDpoData({
            currentDPO: currentDPO.toFixed(1),
            weightedAvgDays: weightedDays.toFixed(1),
            apTurnover: apTurnover.toFixed(2),
            totalPayables,
            industryBenchmark: 45, // Mock benchmark
            vendorDPO: vendorDPOArray
        });

        setTrendData(trend);
    };

    const getDPOStatus = () => {
        const dpo = parseFloat(dpoData.currentDPO);
        const benchmark = dpoData.industryBenchmark;

        if (dpo > benchmark + 10) return { color: 'success', icon: <TrendingUp />, text: 'Above Benchmark' };
        if (dpo < benchmark - 10) return { color: 'error', icon: <TrendingDown />, text: 'Below Benchmark' };
        return { color: 'warning', icon: <Assessment />, text: 'At Benchmark' };
    };

    const status = getDPOStatus();

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">DPO Analytics</Typography>
                <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel>Period</InputLabel>
                    <Select value={period} onChange={(e) => setPeriod(e.target.value)} label="Period">
                        <MenuItem value="weekly">Weekly</MenuItem>
                        <MenuItem value="monthly">Monthly</MenuItem>
                        <MenuItem value="quarterly">Quarterly</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* KPI Cards */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Days Payable Outstanding</Typography>
                            <Typography variant="h4">{dpoData.currentDPO || 0}</Typography>
                            <Chip
                                icon={status.icon}
                                label={status.text}
                                color={status.color}
                                size="small"
                                sx={{ mt: 1 }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Industry Benchmark</Typography>
                            <Typography variant="h4">{dpoData.industryBenchmark || 0}</Typography>
                            <Typography variant="caption" color="textSecondary">
                                Days (Industry Avg)
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>AP Turnover Ratio</Typography>
                            <Typography variant="h4">{dpoData.apTurnover || 0}</Typography>
                            <Typography variant="caption" color="textSecondary">
                                Times per year
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Total Payables</Typography>
                            <Typography variant="h4">
                                ${((dpoData.totalPayables || 0) / 1000).toFixed(0)}K
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                Outstanding balance
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Trend Charts */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>DPO Trend</Typography>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={trendData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="dpo" stroke="#8884d8" name="DPO (Days)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>AP Turnover Trend</Typography>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={trendData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="apTurnover" stroke="#82ca9d" name="AP Turnover" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>

            {/* Vendor-wise DPO */}
            <Paper>
                <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                    <Typography variant="h6">Vendor-wise DPO Analysis</Typography>
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Vendor</TableCell>
                                <TableCell align="right">Total Payables</TableCell>
                                <TableCell align="right">Avg DPO (Days)</TableCell>
                                <TableCell align="right">Invoice Count</TableCell>
                                <TableCell>Performance</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(dpoData.vendorDPO || []).map((vendor, index) => (
                                <TableRow key={index} hover>
                                    <TableCell>{vendor.vendor}</TableCell>
                                    <TableCell align="right">${vendor.totalAmount.toLocaleString()}</TableCell>
                                    <TableCell align="right">{vendor.avgDPO.toFixed(1)}</TableCell>
                                    <TableCell align="right">{vendor.count}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={vendor.avgDPO > 60 ? 'Extended' : vendor.avgDPO > 30 ? 'Normal' : 'Fast'}
                                            color={vendor.avgDPO > 60 ? 'success' : vendor.avgDPO > 30 ? 'primary' : 'warning'}
                                            size="small"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box >
    );
};

export default DPOAnalytics;
