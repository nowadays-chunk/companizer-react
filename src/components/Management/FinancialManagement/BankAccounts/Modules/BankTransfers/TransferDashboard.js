import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    LinearProgress,
    Button,
    useTheme,
    Chip
} from '@mui/material';
import {
    TrendingUp,
    Warning,
    CheckCircle,
    Schedule,
    Add
} from '@mui/icons-material';

const TransferDashboard = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h4" fontWeight="bold">Transfer Dashboard</Typography>
                <Button variant="contained" startIcon={<Add />} size="large">New Transfer</Button>
            </Box>

            <Grid container spacing={3}>
                {/* Pending Approvals */}
                <Grid item xs={12} md={3}>
                    <Card sx={{ height: '100%', bgcolor: theme.palette.warning.light, color: theme.palette.warning.contrastText }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Schedule color="inherit" sx={{ mr: 1 }} />
                                <Typography variant="h6">Pending Approval</Typography>
                            </Box>
                            <Typography variant="h3" fontWeight="bold">5</Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>Total Value: <strong>$125,000</strong></Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* In-Transit */}
                <Grid item xs={12} md={3}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <TrendingUp color="primary" sx={{ mr: 1 }} />
                                <Typography variant="h6" color="textSecondary">In-Transit</Typography>
                            </Box>
                            <Typography variant="h3" fontWeight="bold">3</Typography>
                            <Box sx={{ mt: 2 }}>
                                <LinearProgress variant="determinate" value={60} sx={{ height: 6, borderRadius: 3 }} />
                                <Typography variant="caption" color="textSecondary">Est. Settlement: 24h</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Failed / Returned */}
                <Grid item xs={12} md={3}>
                    <Card sx={{ height: '100%', bgcolor: theme.palette.error.light, color: theme.palette.error.contrastText }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Warning color="inherit" sx={{ mr: 1 }} />
                                <Typography variant="h6">Failed / Returned</Typography>
                            </Box>
                            <Typography variant="h3" fontWeight="bold">1</Typography>
                            <Button variant="outlined" color="inherit" size="small" sx={{ mt: 1 }}>Review & Fix</Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Completed Today */}
                <Grid item xs={12} md={3}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <CheckCircle color="success" sx={{ mr: 1 }} />
                                <Typography variant="h6" color="textSecondary">Completed Today</Typography>
                            </Box>
                            <Typography variant="h3" fontWeight="bold">12</Typography>
                            <Chip label="+4 vs Avg" color="success" size="small" sx={{ mt: 1 }} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TransferDashboard;
