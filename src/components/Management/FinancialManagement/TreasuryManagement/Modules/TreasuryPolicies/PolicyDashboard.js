import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    LinearProgress,
    Stack,
    Chip
} from '@mui/material';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
import GppGoodIcon from '@mui/icons-material/GppGood';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const complianceData = [
    { name: 'Compliant', value: 85, color: '#4caf50' },
    { name: 'Minor Breach', value: 10, color: '#ff9800' },
    { name: 'Critical Breach', value: 5, color: '#f44336' },
];

const breachTrend = [
    { month: 'Jan', breaches: 2 },
    { month: 'Feb', breaches: 5 },
    { month: 'Mar', breaches: 1 },
    { month: 'Apr', breaches: 3 },
    { month: 'May', breaches: 0 },
];

const PolicyDashboard = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Governance & Compliance Dashboard</Typography>

            <Grid container spacing={3} mb={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: 'success.main', color: 'white', mb: 2 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <GppGoodIcon />
                                <Typography variant="h6">Overall Compliance Score</Typography>
                            </Box>
                            <Typography variant="h3">92%</Typography>
                            <Typography variant="caption" sx={{ opacity: 0.8 }}>Across 45 Active Policies</Typography>
                        </CardContent>
                    </Card>
                    <Stack spacing={2}>
                        <Card>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box>
                                    <Typography variant="subtitle2" color="textSecondary">Pending Exceptions</Typography>
                                    <Typography variant="h5">3 Requests</Typography>
                                </Box>
                                <PendingActionsIcon color="warning" />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box>
                                    <Typography variant="subtitle2" color="textSecondary">Critical Breaches</Typography>
                                    <Typography variant="h5" color="error">1 Active</Typography>
                                </Box>
                                <WarningAmberIcon color="error" />
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card elevation={3} sx={{ height: '100%' }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Typography variant="h6" gutterBottom>Compliance Status Split</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={complianceData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                        label
                                    >
                                        {complianceData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card elevation={3} sx={{ height: '100%' }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Typography variant="h6" gutterBottom>Breach Trend (YTD)</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={breachTrend}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis allowDecimals={false} />
                                    <Tooltip />
                                    <Bar dataKey="breaches" fill="#f44336" name="Policy Breaches" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PolicyDashboard;
