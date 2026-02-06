import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    LinearProgress,
    Stack,
    Avatar
} from '@mui/material';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    ReferenceLine
} from 'recharts';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SpeedIcon from '@mui/icons-material/Speed';

const liquidityData = [
    { name: 'Current Assets', value: 150000, color: '#4caf50' },
    { name: 'Current Liabilities', value: 90000, color: '#f44336' },
    { name: 'Inventory', value: 40000, color: '#ff9800' },
    { name: 'Receivables', value: 50000, color: '#2196f3' },
];

const calculateRatios = () => {
    const currentAssets = 150000;
    const currentLiabilities = 90000;
    const inventory = 40000;

    const currentRatio = (currentAssets / currentLiabilities).toFixed(2);
    const quickRatio = ((currentAssets - inventory) / currentLiabilities).toFixed(2);
    const workingCapital = currentAssets - currentLiabilities;

    return { currentRatio, quickRatio, workingCapital };
};

const MetricCard = ({ title, value, subtitle, icon, color }) => (
    <Card elevation={3} sx={{ height: '100%' }}>
        <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: `${color}.light`, color: `${color}.main` }}>
                    {icon}
                </Avatar>
                <Typography variant="h4" color="textPrimary">
                    {value}
                </Typography>
            </Box>
            <Typography variant="subtitle2" color="textSecondary">
                {title}
            </Typography>
            <Box mt={1}>
                <Typography variant="caption" color="textSecondary">
                    {subtitle}
                </Typography>
            </Box>
        </CardContent>
    </Card>
);

const LiquidityDashboard = () => {
    const stats = calculateRatios();

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <SpeedIcon color="secondary" /> Liquidity Analysis Dashboard
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <MetricCard
                        title="Current Ratio"
                        value={stats.currentRatio}
                        subtitle="Target: > 1.5"
                        icon={<SpeedIcon />}
                        color="primary"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <MetricCard
                        title="Quick Ratio"
                        value={stats.quickRatio}
                        subtitle="Target: > 1.0"
                        icon={<AttachMoneyIcon />}
                        color="success"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <MetricCard
                        title="Net Working Capital"
                        value={`$${stats.workingCapital.toLocaleString()}`}
                        subtitle="Current Assets - Liabilities"
                        icon={<AccountBalanceWalletIcon />}
                        color="warning"
                    />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Working Capital Breakdown
                            </Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart
                                    layout="vertical"
                                    data={liquidityData}
                                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" />
                                    <YAxis type="category" dataKey="name" width={120} />
                                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                    <ReferenceLine x={0} stroke="#000" />
                                    <Bar dataKey="value" barSize={30}>
                                        {liquidityData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={3} sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Health Indicators
                            </Typography>
                            <Stack spacing={3} mt={2}>
                                <Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography variant="body2">Cash Conversion Cycle</Typography>
                                        <Typography variant="body2" color="primary">45 Days</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={60} color="primary" sx={{ mt: 1 }} />
                                </Box>
                                <Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography variant="body2">Operational Efficiency</Typography>
                                        <Typography variant="body2" color="success.main">High</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={85} color="success" sx={{ mt: 1 }} />
                                </Box>
                                <Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography variant="body2">Debt Coverage</Typography>
                                        <Typography variant="body2" color="warning.main">Medium</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={45} color="warning" sx={{ mt: 1 }} />
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LiquidityDashboard;
