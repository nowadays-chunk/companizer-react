import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Chip, Divider } from '@mui/material';
import { Warning, Info, TrendingUp, Speed, Block } from '@mui/icons-material';

const CreditDashboard = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Credit Management Dashboard
            </Typography>

            <Grid container spacing={3}>
                {/* 1. Key Metrics Widgets */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <TrendingUp color="primary" sx={{ mr: 1 }} />
                                <Typography variant="h6" color="textSecondary"> Total Exposure</Typography>
                            </Box>
                            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                                $12.45M
                            </Typography>
                            <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                                +2.4% vs last month
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Speed color="warning" sx={{ mr: 1 }} />
                                <Typography variant="h6" color="textSecondary"> Utilization</Typography>
                            </Box>
                            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                                78%
                            </Typography>
                            <Typography variant="body2" color="warning.main" sx={{ mt: 1 }}>
                                High Utilization Warning
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Block color="error" sx={{ mr: 1 }} />
                                <Typography variant="h6" color="textSecondary"> Blocked Orders</Typography>
                            </Box>
                            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                                14
                            </Typography>
                            <Typography variant="body2" color="error.main" sx={{ mt: 1 }}>
                                Action Required
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* 2. Monitoring & Alerts */}
                <Grid item xs={12} md={8}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Live Alerts (Real-Time)</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><Warning color="error" /></ListItemIcon>
                                    <ListItemText
                                        primary="Customer A exceeded credit limit by $5k"
                                        secondary="Just now"
                                    />
                                    <Chip label="Critical" color="error" size="small" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemIcon><Warning color="warning" /></ListItemIcon>
                                    <ListItemText
                                        primary="Customer B insurance policy expires in 3 days"
                                        secondary="2 hours ago"
                                    />
                                    <Chip label="Warning" color="warning" size="small" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemIcon><Info color="info" /></ListItemIcon>
                                    <ListItemText
                                        primary="Customer C upgrade request pending approval"
                                        secondary="Yesterday"
                                    />
                                    <Chip label="Info" color="info" size="small" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* 3. Risk Heatmap Placeholder */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Portfolio Risk</Typography>
                            <Box sx={{
                                height: 200,
                                bgcolor: 'grey.100',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 1
                            }}>
                                <Typography variant="body2" color="textSecondary">
                                    [Pie Chart: 60% Low Risk, 30% Medium, 10% High]
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CreditDashboard;
