import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    LinearProgress,
    Stack,
    Button
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

const fundingData = [
    { week: 'W1', cashNeed: 50000, availableFacility: 200000 },
    { week: 'W2', cashNeed: -20000, availableFacility: 200000 }, // Negative need = surplus
    { week: 'W3', cashNeed: 150000, availableFacility: 200000 },
    { week: 'W4', cashNeed: 250000, availableFacility: 200000 }, // Gap!
];

const facilities = [
    { name: 'Revolver A (JPM)', limit: 2000000, utilized: 500000, color: 'primary' },
    { name: 'Overdraft B (Citi)', limit: 500000, utilized: 450000, color: 'warning' },
    { name: 'Trade Finance (HSBC)', limit: 1000000, utilized: 100000, color: 'success' },
];

const FundingGapAnalysis = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Funding Gap & Credit Facilities</Typography>

            <Grid container spacing={3} mb={3}>
                <Grid item xs={12} md={4}>
                    {facilities.map((f) => (
                        <Card key={f.name} sx={{ mb: 2 }}>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" mb={1}>
                                    <Typography variant="subtitle2">{f.name}</Typography>
                                    <Typography variant="caption">
                                        ${(f.utilized / 1000).toFixed(0)}k / ${(f.limit / 1000).toFixed(0)}k
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={(f.utilized / f.limit) * 100}
                                    color={f.color}
                                    sx={{ height: 8, borderRadius: 1 }}
                                />
                                <Typography variant="caption" sx={{ mt: 1, display: 'block', textAlign: 'right' }}>
                                    {((f.utilized / f.limit) * 100).toFixed(0)}% Utilized
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                    <Button variant="outlined" fullWidth>Request Drawdown</Button>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card elevation={3} sx={{ height: 400 }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Typography variant="h6" gutterBottom>Short-Term Funding Needs (4 Weeks)</Typography>
                            <ResponsiveContainer width="100%" height="90%">
                                <BarChart data={fundingData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="week" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <ReferenceLine y={200000} label="Credit Limit" stroke="red" strokeDasharray="3 3" />
                                    <Bar dataKey="cashNeed" fill="#8884d8" name="Net Cash Requirement" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FundingGapAnalysis;
