import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import { Description, TrendingUp, PieChart, BarChart } from '@mui/icons-material';

const ReportingAnalytics = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Reporting & Analytics</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Loan Performance Overview</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #eee', borderRadius: 2 }}>
                                    <Typography color="textSecondary">Total Principal</Typography>
                                    <Typography variant="h5">$ 5,000,000</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #eee', borderRadius: 2 }}>
                                    <Typography color="textSecondary">Outstanding</Typography>
                                    <Typography variant="h5">$ 3,250,000</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #eee', borderRadius: 2 }}>
                                    <Typography color="textSecondary">Interest Paid YTD</Typography>
                                    <Typography variant="h5">$ 145,000</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{ height: 200, bgcolor: '#f5f5f5', mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography color="textSecondary">[Amortization Chart Placeholder]</Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>Available Reports</Typography>
                                    <List>
                                        <ListItem button>
                                            <ListItemIcon><Description /></ListItemIcon>
                                            <ListItemText primary="Loan Register" secondary="Detailed list of all facilities" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemIcon><TrendingUp /></ListItemIcon>
                                            <ListItemText primary="Interest Expense Forecast" secondary="Projected interest costs" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemIcon><PieChart /></ListItemIcon>
                                            <ListItemText primary="Debt Aging Analysis" secondary="Maturity profile" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemIcon><BarChart /></ListItemIcon>
                                            <ListItemText primary="Covenant Compliance Report" secondary="Historical test results" />
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>Generate Monthly Pack</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReportingAnalytics;
