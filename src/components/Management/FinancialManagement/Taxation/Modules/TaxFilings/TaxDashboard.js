import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Alert, Stack, Chip, LinearProgress } from '@mui/material';
import { Warning, CheckCircle, Schedule, AttachMoney } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const taxData = [
    { name: 'VAT', amount: 45230 },
    { name: 'WHT', amount: 12450 },
    { name: 'Income Tax', amount: 89100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const TaxDashboard = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Tax Dashboard</Typography>

            <Alert severity="warning" sx={{ mb: 3 }}>
                <strong>3 filings due within 15 days.</strong> VAT Q1 (Apr 30), WHT Feb (Mar 15), Income Tax 2023 (Jun 30)
            </Alert>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Schedule color="warning" />
                                <Box>
                                    <Typography variant="h6">5</Typography>
                                    <Typography variant="body2" color="text.secondary">Upcoming Filings</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <AttachMoney color="error" />
                                <Box>
                                    <Typography variant="h6">$146,780</Typography>
                                    <Typography variant="body2" color="text.secondary">Total Liabilities</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <CheckCircle color="success" />
                                <Box>
                                    <Typography variant="h6">18</Typography>
                                    <Typography variant="body2" color="text.secondary">Completed Filings</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Warning color="warning" />
                                <Box>
                                    <Typography variant="h6">1</Typography>
                                    <Typography variant="body2" color="text.secondary">Overdue</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Tax Liability by Type</Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={taxData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={(entry) => `${entry.name}: $${entry.amount.toLocaleString()}`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="amount"
                                >
                                    {taxData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Monthly Tax Trend</Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={[
                                { month: 'Jan', amount: 42000 },
                                { month: 'Feb', amount: 38000 },
                                { month: 'Mar', amount: 45000 },
                                { month: 'Apr', amount: 52000 },
                            ]}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                <Bar dataKey="amount" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Filing Progress</Typography>
                <Stack spacing={2}>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2">VAT Q1 2024</Typography>
                            <Chip label="Due: Apr 30" size="small" color="warning" />
                        </Box>
                        <LinearProgress variant="determinate" value={75} />
                        <Typography variant="caption" color="text.secondary">75% Complete - Awaiting approval</Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2">WHT Feb 2024</Typography>
                            <Chip label="Due: Mar 15" size="small" color="error" />
                        </Box>
                        <LinearProgress variant="determinate" value={30} color="error" />
                        <Typography variant="caption" color="text.secondary">30% Complete - Draft stage</Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2">Income Tax 2023</Typography>
                            <Chip label="Due: Jun 30" size="small" />
                        </Box>
                        <LinearProgress variant="determinate" value={100} color="success" />
                        <Typography variant="caption" color="text.secondary">100% Complete - Filed</Typography>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
};

export default TaxDashboard;
