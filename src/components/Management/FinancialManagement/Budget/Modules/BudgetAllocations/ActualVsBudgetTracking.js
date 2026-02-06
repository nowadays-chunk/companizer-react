import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, LinearProgress, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { CompareArrows } from '@mui/icons-material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#FF8042', '#00C49F'];

const ActualVsBudgetTracking = () => {
    const [department, setDepartment] = useState('All');

    const getUtilization = (dept) => {
        switch (dept) {
            case 'Sales': return 85;
            case 'Engineering': return 75;
            case 'Marketing': return 65;
            case 'HR': return 55;
            default: return 75; // All
        }
    };

    const percentage = getUtilization(department);
    const data = [
        { name: 'Spent', value: percentage * 1000 },
        { name: 'Remaining', value: (100 - percentage) * 1000 },
    ];

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

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Overall Utilization</Typography>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                                        {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                            <Typography align="center" variant="h4">{percentage}%</Typography>
                            <Typography align="center" color="text.secondary">Budget Consumed</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Department Performance Breakdown</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
                                {['Sales', 'Engineering', 'Marketing', 'HR'].map((dept, idx) => (
                                    <Box key={dept} sx={{ opacity: department === 'All' || department === dept ? 1 : 0.3 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography fontWeight={department === dept ? 'bold' : 'normal'}>{dept}</Typography>
                                            <Typography>{getUtilization(dept)}% Used</Typography>
                                        </Box>
                                        <LinearProgress
                                            variant="determinate"
                                            value={getUtilization(dept)}
                                            color={getUtilization(dept) > 80 ? 'error' : 'primary'}
                                            sx={{ height: 10, borderRadius: 5 }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ActualVsBudgetTracking;
