import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, LinearProgress, FormControl, InputLabel, Select, MenuItem, CircularProgress, Alert } from '@mui/material';
import { CompareArrows } from '@mui/icons-material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { budgetTrackSpending } from '../../../../../../utils/clientQueries';
import { fieldsConfig, collectionName, entityName } from './Modules/General/ActualVsBudgetTracking';

const COLORS = ['#FF8042', '#00C49F'];

const ActualVsBudgetTracking = () => {
    const [department, setDepartment] = useState('All');
    const [spendingData, setSpendingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSpending = async () => {
            setLoading(true);
            try {
                const data = await budgetTrackSpending({ department: department === 'All' ? null : department });
                setSpendingData(data);
            } catch (err) {
                console.error(err);
                setError("Failed to load spending data");
            } finally {
                setLoading(false);
            }
        };
        fetchSpending();
    }, [department]);

    // Derived stats from data or fallbacks
    const totalBudget = spendingData?.totalBudget || 100000;
    const totalSpent = spendingData?.totalSpent || 0;
    const utilization = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;

    const pieData = [
        { name: 'Spent', value: totalSpent },
        { name: 'Remaining', value: Math.max(0, totalBudget - totalSpent) },
    ];

    if (loading && !spendingData) return <Box p={3}><CircularProgress /></Box>;

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CompareArrows color="primary" /> Actual vs Budget Tracking
                </Typography>
                <FormControl sx={{ minWidth: 200 }} size="small">
                    <InputLabel>Filter by Department</InputLabel>
                    <Select value={department} label="Filter by Department" onChange={(e) => setDepartment(e.target.value)}>
                        <MenuItem value="All">All Departments</MenuItem>
                        <MenuItem value="Sales">Sales</MenuItem>
                        <MenuItem value="Engineering">Engineering</MenuItem>
                        <MenuItem value="Marketing">Marketing</MenuItem>
                        <MenuItem value="HR">HR</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Overall Utilization</Typography>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                                        {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                                    </Pie>
                                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                            <Typography align="center" variant="h4">{utilization.toFixed(1)}%</Typography>
                            <Typography align="center" color="text.secondary">Budget Consumed</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Department Performance Breakdown</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
                                {(spendingData?.departmentBreakdown || []).map((dept) => (
                                    <Box key={dept.name}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography fontWeight="bold">{dept.name}</Typography>
                                            <Typography>
                                                ${dept.spent.toLocaleString()} / ${dept.budget.toLocaleString()} ({dept.utilization.toFixed(1)}%)
                                            </Typography>
                                        </Box>
                                        <LinearProgress
                                            variant="determinate"
                                            value={Math.min(dept.utilization, 100)}
                                            color={dept.utilization > 90 ? 'error' : 'primary'}
                                            sx={{ height: 10, borderRadius: 5 }}
                                        />
                                    </Box>
                                ))}
                                {(!spendingData?.departmentBreakdown || spendingData.departmentBreakdown.length === 0) && (
                                    <Typography color="textSecondary">No breakdown data available.</Typography>
                                )}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ActualVsBudgetTracking;
