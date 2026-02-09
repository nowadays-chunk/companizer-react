
import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent } from '@mui/material';
import { fieldsConfig, collectionName, entityName } from './Modules/General/AgingDashboard';

// Placeholder for charts - in a real app, use recharts, chart.js, etc.
const MockChart = ({ title, color }) => (
    <Box sx={{ height: 200, bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc' }}>
        <Typography color="textSecondary">{title}</Typography>
    </Box>
);

const KPICard = ({ title, value, subtext, color = 'primary.main' }) => (
    <Card>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>{title}</Typography>
            <Typography variant="h4" sx={{ color: color, fontWeight: 'bold' }}>{value}</Typography>
            <Typography variant="caption">{subtext}</Typography>
        </CardContent>
    </Card>
);

const AgingDashboard = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Debtor Aging Dashboard</Typography>

            {/* 10. KPIs & Performance Metrics */}
            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <KPICard title="Total Due" value="$1,245,000" subtext="+5% month-over-month" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <KPICard title="Overdue > 90 Days" value="$125,000" subtext="High Risk Concentration" color="error.main" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <KPICard title="DSO (Sales Outstanding)" value="42 Days" subtext="Target: 35 Days" color="warning.main" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <KPICard title="Collection Effectiveness" value="82%" subtext="Weighted Average" color="success.main" />
                </Grid>
            </Grid>

            {/* 2. Balance & Amount Calculations / 12. Reporting & Dashboards */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Aging Trend (Last 12 Months)</Typography>
                        <MockChart title="Line Chart: Total AR vs Overdue" />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Bucket Concentration</Typography>
                        <MockChart title="Pie Chart: 0-30, 31-60, 61-90, 90+" />
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Top 5 Highest Debtors</Typography>
                        {/* Simple Table Mockup */}
                        <Box sx={{ mt: 2 }}>
                            <Grid container sx={{ p: 1, borderBottom: '1px solid #eee', fontWeight: 'bold' }}>
                                <Grid item xs={4}>Customer</Grid>
                                <Grid item xs={3}>Total Due</Grid>
                                <Grid item xs={3}>Overdue Amount</Grid>
                                <Grid item xs={2}>Risk Class</Grid>
                            </Grid>
                            {[
                                { name: "Acme Corp", total: "$500,000", overdue: "$50,000", risk: "A" },
                                { name: "Globex Inc", total: "$320,000", overdue: "$120,000", risk: "C" },
                                { name: "Soylent Corp", total: "$150,000", overdue: "$0", risk: "B" },
                            ].map((row, i) => (
                                <Grid container key={i} sx={{ p: 1, borderBottom: '1px solid #eee' }}>
                                    <Grid item xs={4}>{row.name}</Grid>
                                    <Grid item xs={3}>{row.total}</Grid>
                                    <Grid item xs={3} sx={{ color: row.overdue !== "$0" ? 'error.main' : 'inherit' }}>{row.overdue}</Grid>
                                    <Grid item xs={2}>{row.risk}</Grid>
                                </Grid>
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AgingDashboard;
