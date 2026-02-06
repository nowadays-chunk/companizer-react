import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'VAT', cases: 4, exposure: 2400 },
    { name: 'Corp Tax', cases: 2, exposure: 1398 },
    { name: 'Payroll', cases: 3, exposure: 9800 },
    { name: 'Withholding', cases: 5, exposure: 3908 },
];

const pieData = [
    { name: 'Low Risk', value: 400 },
    { name: 'Medium Risk', value: 300 },
    { name: 'High Risk', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const AuditReportingAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Reporting & Analytics</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom>Exposure by Tax Type</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="exposure" fill="#8884d8" name="Financial Exposure ($)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom>Audit Risk Distribution</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AuditReportingAnalytics;
