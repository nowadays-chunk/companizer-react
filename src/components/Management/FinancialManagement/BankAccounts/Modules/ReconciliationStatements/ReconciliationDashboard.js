import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    LinearProgress,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    useTheme,
    Chip
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    Warning as WarningIcon,
    CheckCircle as CheckCircleIcon,
    Timeline as TimelineIcon,
    ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

const ReconciliationDashboard = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                {/* KPI Cards */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <TimelineIcon color="primary" sx={{ mr: 1 }} />
                                <Typography variant="h6" color="textSecondary">Reconciled YTD</Typography>
                            </Box>
                            <Typography variant="h3" fontWeight="bold">87%</Typography>
                            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={87} sx={{ flexGrow: 1, mr: 1, height: 8, borderRadius: 4 }} />
                                <Typography variant="body2" color="textSecondary">Target: 95%</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', bgcolor: theme.palette.error.light, color: theme.palette.error.contrastText }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <WarningIcon color="inherit" sx={{ mr: 1 }} />
                                <Typography variant="h6" color="inherit">Unreconciled Items</Typography>
                            </Box>
                            <Typography variant="h3" fontWeight="bold" color="inherit">23</Typography>
                            <Typography variant="body1" color="inherit" sx={{ mt: 1 }}>
                                &gt; 30 Days Aged: <strong>5 Items</strong>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                                <Typography variant="h6" color="textSecondary">Period Status</Typography>
                            </Box>
                            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>Jan 2026</Typography>
                            <Chip label="Open" color="success" variant="outlined" />
                            <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                                Close Deadline: <strong>3 Days Remaining</strong>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Priority Tasks */}
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            title="Priority Tasks"
                            titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                            action={<Button endIcon={<ArrowForwardIcon />}>View All</Button>}
                        />
                        <CardContent>
                            <List>
                                <ListItem divider>
                                    <ListItemIcon><WarningIcon color="error" /></ListItemIcon>
                                    <ListItemText
                                        primary="Unexplained variance in 'Operating Account - US'"
                                        secondary="Difference: $1,250.00 | Date: Jan 28, 2026"
                                    />
                                    <Button variant="outlined" size="small" color="primary">Review</Button>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon><TimelineIcon color="warning" /></ListItemIcon>
                                    <ListItemText
                                        primary="Pending Approval: 'Payroll Clearing' Reconciliation"
                                        secondary="Submitted by: Jane Doe | Date: Feb 01, 2026"
                                    />
                                    <Button variant="outlined" size="small" color="primary">Approve</Button>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><DashboardIcon color="info" /></ListItemIcon>
                                    <ListItemText
                                        primary="New Bank Feed Data Available"
                                        secondary="Standard Chartered - UK (56 Transactions)"
                                    />
                                    <Button variant="outlined" size="small" color="primary">Import</Button>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReconciliationDashboard;
