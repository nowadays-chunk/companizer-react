import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Dialog, DialogTitle, DialogContent, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { MoneyOff, Visibility } from '@mui/icons-material';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
    { name: 'Fixed Costs Variance', value: 400 },
    { name: 'Variable Costs Variance', value: 300 },
    { name: 'One-off Expenses', value: 300 },
    { name: 'Cost Savings', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CostVariance = () => {
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <MoneyOff color="primary" /> Cost Variance Analysis
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: 400, p: 2 }}>
                        <Typography variant="h6" gutterBottom>Variance Distribution</Typography>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h6" gutterBottom>Key Insights</Typography>
                                <Button startIcon={<Visibility />} size="small" onClick={() => setOpen(true)}>View Details</Button>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="subtitle1" fontWeight="bold">Fixed Costs Impact</Typography>
                                <Typography variant="body2" paragraph>
                                    Rent increase in Q3 resulted in a $15k negative variance against budget.
                                </Typography>

                                <Typography variant="subtitle1" fontWeight="bold">Variable Costs Efficiency</Typography>
                                <Typography variant="body2" paragraph>
                                    Production efficiency improvements saved $8k in material costs (Favorable).
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
                <DialogTitle>Detailed Cost Variance Breakdown</DialogTitle>
                <DialogContent>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Cost Category</TableCell>
                                <TableCell align="right">Budgeted</TableCell>
                                <TableCell align="right">Actual</TableCell>
                                <TableCell align="right">Variance</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Rent & Utilities</TableCell>
                                <TableCell align="right">$45,000</TableCell>
                                <TableCell align="right">$60,000</TableCell>
                                <TableCell align="right" sx={{ color: 'error.main' }}>-$15,000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Raw Materials</TableCell>
                                <TableCell align="right">$120,000</TableCell>
                                <TableCell align="right">$112,000</TableCell>
                                <TableCell align="right" sx={{ color: 'success.main' }}>+$8,000</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default CostVariance;
