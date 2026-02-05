import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Button } from '@mui/material';
import { Assessment, Download } from '@mui/icons-material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', Value: 4000 },
    { name: 'Feb', Value: 3000 },
    { name: 'Mar', Value: 2000 },
    { name: 'Apr', Value: 2780 },
    { name: 'May', Value: 1890 },
    { name: 'Jun', Value: 2390 },
];

const ReportingAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Reporting & Analytics</Typography>
                <Button variant="outlined" startIcon={<Download />}>Export All</Button>
            </Box>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Portfolio</Typography>
                            <Typography variant="h4">$ 25.4M</Typography>
                            <Typography variant="caption" color="success.main">+12% YTD</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Unrealized Gain</Typography>
                            <Typography variant="h4">$ 4.2M</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Div. Income</Typography>
                            <Typography variant="h4">$ 850K</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Impairments</Typography>
                            <Typography variant="h4" color="error">$ 120K</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom>Portfolio Value Trend</Typography>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="Value" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Available Reports</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Button startIcon={<Assessment />} fullWidth variant="text" sx={{ justifyContent: 'flex-start' }}>Equity Investment Register</Button>
                            <Button startIcon={<Assessment />} fullWidth variant="text" sx={{ justifyContent: 'flex-start' }}>Carrying Value Reconciliation</Button>
                            <Button startIcon={<Assessment />} fullWidth variant="text" sx={{ justifyContent: 'flex-start' }}>Fair Value Movement</Button>
                            <Button startIcon={<Assessment />} fullWidth variant="text" sx={{ justifyContent: 'flex-start' }}>Dividend Income Analysis</Button>
                            <Button startIcon={<Assessment />} fullWidth variant="text" sx={{ justifyContent: 'flex-start' }}>OCI Movement Breakdown</Button>
                            <Button startIcon={<Assessment />} fullWidth variant="text" sx={{ justifyContent: 'flex-start' }}>Impairment Summary</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReportingAnalytics;
