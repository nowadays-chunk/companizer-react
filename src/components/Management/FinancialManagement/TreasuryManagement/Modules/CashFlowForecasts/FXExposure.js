import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';

const data = [
    { name: 'USD', value: 65, color: '#0088FE' },
    { name: 'EUR', value: 20, color: '#00C49F' },
    { name: 'GBP', value: 10, color: '#FFBB28' },
    { name: 'JPY', value: 5, color: '#FF8042' },
];

const rates = [
    { pair: 'EUR/USD', rate: 1.08, impact: '+1.2%' },
    { pair: 'GBP/USD', rate: 1.25, impact: '-0.5%' },
    { pair: 'USD/JPY', rate: 148.5, impact: '+0.1%' },
];

const FXExposure = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>FX Exposure & Currency Risk</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card elevation={3} sx={{ height: 350 }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Typography variant="subtitle1">Cash Concentration by Currency</Typography>
                            <ResponsiveContainer width="100%" height="90%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Sensitivity Analysis (10% Movement)</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Pair</TableCell>
                                <TableCell>Current Rate</TableCell>
                                <TableCell>Forecast Impact</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rates.map(r => (
                                <TableRow key={r.pair}>
                                    <TableCell>{r.pair}</TableCell>
                                    <TableCell>{r.rate}</TableCell>
                                    <TableCell sx={{ color: r.impact.includes('+') ? 'success.main' : 'error.main' }}>
                                        {r.impact}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FXExposure;
