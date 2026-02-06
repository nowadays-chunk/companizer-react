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
    TableRow,
} from '@mui/material';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine
} from 'recharts';

const varianceData = [
    { period: 'Jan', forecast: 50000, actual: 48000, diff: -2000 },
    { period: 'Feb', forecast: 52000, actual: 55000, diff: 3000 },
    { period: 'Mar', forecast: 45000, actual: 42000, diff: -3000 },
    { period: 'Apr', forecast: 60000, actual: 61000, diff: 1000 },
];

const VarianceAnalysis = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Forecast vs. Actual Variance</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card elevation={3} sx={{ height: 400 }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Typography variant="subtitle1" gutterBottom>Variance Trend</Typography>
                            <ResponsiveContainer width="100%" height="90%">
                                <BarChart data={varianceData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="period" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <ReferenceLine y={0} stroke="#000" />
                                    <Bar dataKey="diff" fill="#8884d8" name="Variance Amount" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Accuracy KPIs</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="caption">MAPE (Mean Absolute % Error)</Typography>
                                    <Typography variant="h4" color="primary">4.2%</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="caption">Forecast Bias</Typography>
                                    <Typography variant="h4" color="error">-1.5%</Typography>
                                    <Typography variant="caption" color="textSecondary">(Under-forecasting)</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Period</TableCell>
                                <TableCell align="right">Forecast</TableCell>
                                <TableCell align="right">Actual</TableCell>
                                <TableCell align="right">Variance</TableCell>
                                <TableCell align="right">% Diff</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {varianceData.map((row) => (
                                <TableRow key={row.period}>
                                    <TableCell>{row.period}</TableCell>
                                    <TableCell align="right">{row.forecast.toLocaleString()}</TableCell>
                                    <TableCell align="right">{row.actual.toLocaleString()}</TableCell>
                                    <TableCell align="right" sx={{ color: row.diff >= 0 ? 'success.main' : 'error.main' }}>
                                        {row.diff.toLocaleString()}
                                    </TableCell>
                                    <TableCell align="right">{((row.diff / row.forecast) * 100).toFixed(1)}%</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Box>
    );
};

export default VarianceAnalysis;
