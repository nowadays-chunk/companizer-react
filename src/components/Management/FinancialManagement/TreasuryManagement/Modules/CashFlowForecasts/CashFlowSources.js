import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Avatar,
    LinearProgress,
    Divider
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentIcon from '@mui/icons-material/Payment';
import PeopleIcon from '@mui/icons-material/People';

const sources = [
    { id: 1, name: 'Accounts Receivable', type: 'Inflow', amount: 120000, icon: <ReceiptIcon />, color: '#4caf50' },
    { id: 2, name: 'Investments', type: 'Inflow', amount: 35000, icon: <TrendingUpIcon />, color: '#81c784' },
    { id: 3, name: 'Accounts Payable', type: 'Outflow', amount: 65000, icon: <PaymentIcon />, color: '#f44336' },
    { id: 4, name: 'Payroll', type: 'Outflow', amount: 45000, icon: <PeopleIcon />, color: '#e57373' },
    { id: 5, name: 'Loans & Debt Service', type: 'Outflow', amount: 15000, icon: <AccountBalanceIcon />, color: '#ef5350' },
    { id: 6, name: 'Tax Obligations', type: 'Outflow', amount: 8000, icon: <TrendingDownIcon />, color: '#e53935' },
];

const SourceCard = ({ source }) => (
    <Card elevation={2} sx={{ mb: 2 }}>
        <CardContent>
            <Grid container alignItems="center" spacing={2}>
                <Grid item>
                    <Avatar sx={{ bgcolor: source.type === 'Inflow' ? 'success.light' : 'error.light', color: source.type === 'Inflow' ? 'success.main' : 'error.main' }}>
                        {source.icon}
                    </Avatar>
                </Grid>
                <Grid item xs>
                    <Typography variant="subtitle1">{source.name}</Typography>
                    <Typography variant="caption" color="textSecondary">{source.type}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6" color={source.type === 'Inflow' ? 'success.main' : 'error.main'}>
                        ${source.amount.toLocaleString()}
                    </Typography>
                </Grid>
            </Grid>
            <Box mt={2}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="caption">Integration Status</Typography>
                    <Typography variant="caption" color="success.main">Synced 10m ago</Typography>
                </Box>
                <LinearProgress variant="determinate" value={100} color={source.type === 'Inflow' ? 'success' : 'error'} sx={{ mt: 0.5 }} />
            </Box>
        </CardContent>
    </Card>
);

const CashFlowSources = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Cash Flow Sources & Integrations</Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
                Real-time integration with AP, AR, Payroll, and Banking modules.
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom color="success.main">Projected Inflows</Typography>
                    <Divider sx={{ mb: 2 }} />
                    {sources.filter(s => s.type === 'Inflow').map(source => (
                        <SourceCard key={source.id} source={source} />
                    ))}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom color="error.main">Projected Outflows</Typography>
                    <Divider sx={{ mb: 2 }} />
                    {sources.filter(s => s.type === 'Outflow').map(source => (
                        <SourceCard key={source.id} source={source} />
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default CashFlowSources;
