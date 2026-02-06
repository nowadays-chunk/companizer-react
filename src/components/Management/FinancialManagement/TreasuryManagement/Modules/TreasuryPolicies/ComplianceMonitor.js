import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Chip,
    Alert,
    Divider,
    Grid
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const checks = [
    { rule: 'Minimum Cash Balance ($500k)', status: 'Pass', value: '$1.2M', info: 'Global Operating Accounts' },
    { rule: 'Counterparty Exposure < $2M', status: 'Fail', value: '$2.5M', info: 'JPMorgan Chase Limit Exceeded' },
    { rule: 'Inv. Grade Rating (BBB+)', status: 'Pass', value: 'AA-', info: 'Portfolio Weighted Avg' },
    { rule: 'FX Hedge Ratio (50-70%)', status: 'Warning', value: '48%', info: 'Slightly Under-hedged EUR exposure' },
];

const ComplianceMonitor = () => {
    const hasBreach = checks.some(c => c.status === 'Fail');

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Real-Time Compliance Monitor</Typography>

            {hasBreach && (
                <Alert severity="error" sx={{ mb: 3 }} variant="filled">
                    <strong>CRITICAL BREACH DETECTED:</strong> Immediate action required for Counterparty Limit violations.
                </Alert>
            )}

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <List>
                                {checks.map((check, index) => (
                                    <React.Fragment key={index}>
                                        <ListItem>
                                            <ListItemIcon>
                                                {check.status === 'Pass' && <CheckCircleOutlineIcon color="success" />}
                                                {check.status === 'Fail' && <ErrorOutlineIcon color="error" />}
                                                {check.status === 'Warning' && <WarningAmberIcon color="warning" />}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
                                                        {check.rule}
                                                    </Typography>
                                                }
                                                secondary={check.info}
                                            />
                                            <Box textAlign="right">
                                                <Typography variant="h6" color={check.status === 'Fail' ? 'error' : 'textPrimary'}>
                                                    {check.value}
                                                </Typography>
                                                <Chip
                                                    label={check.status.toUpperCase()}
                                                    color={check.status === 'Pass' ? 'success' : (check.status === 'Fail' ? 'error' : 'warning')}
                                                    size="small"
                                                />
                                            </Box>
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </React.Fragment>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#fff3e0' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom color="warning.dark">Alert Feed</Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemText primary="JPM Limit Breached" secondary="Today, 10:42 AM" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="EUR Hedge Ratio Low" secondary="Yesterday, 04:15 PM" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ComplianceMonitor;
