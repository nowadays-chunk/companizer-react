import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Button
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const placements = [
    { id: 1, type: 'Money Market Fund', institution: 'BlackRock', rate: '5.2%', maturity: 'Overnight', amount: 500000 },
    { id: 2, type: 'Term Deposit', institution: 'JPMorgan', rate: '5.4%', maturity: '30 Days', amount: 250000 },
    { id: 3, type: 'Treasury Bills', institution: 'US Gov', rate: '5.1%', maturity: '3 Months', amount: 100000 },
];

const SurplusManagement = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Typography variant="h5">Surplus Cash Investment</Typography>
                <Button startIcon={<TrendingUpIcon />} variant="contained" color="success">New Placement</Button>
            </Box>

            <Grid container spacing={3}>
                {placements.map((p) => (
                    <Grid item xs={12} md={4} key={p.id}>
                        <Card elevation={2}>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" mb={2}>
                                    <Chip label={p.type} color="primary" variant="outlined" size="small" />
                                    <Chip label={p.rate} color="success" size="small" />
                                </Box>
                                <Typography variant="h5" gutterBottom>${p.amount.toLocaleString()}</Typography>
                                <Typography variant="subtitle2" color="textSecondary">{p.institution}</Typography>
                                <Typography variant="caption" display="block">Maturity: {p.maturity}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box mt={4} p={3} bgcolor="#f0fdf4" borderRadius={2}>
                <Typography variant="subtitle1" color="success.dark" gutterBottom>Optimization Suggestion</Typography>
                <Typography variant="body2">
                    You have <strong>$150,000</strong> sitting in operating accounts earning 0%. Consider moving to a Money Market Fund to earn approx. <strong>$650/month</strong>.
                </Typography>
                <Button size="small" sx={{ mt: 1 }}>Review Suggestion</Button>
            </Box>
        </Box>
    );
};

export default SurplusManagement;
