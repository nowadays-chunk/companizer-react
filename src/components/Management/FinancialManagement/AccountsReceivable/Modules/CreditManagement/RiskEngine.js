import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Divider, Button, List, ListItem, ListItemIcon, ListItemText, Alert, LinearProgress } from '@mui/material';
import { CheckCircle, Warning, PlayArrow, TrendingUp } from '@mui/icons-material';

const RiskEngine = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Risk Engine & Automation</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    {/* Scoring Model */}
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Scorecard Factors</Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemText primary="Payment Behavior (DSO Trend)" secondary="Weight: 40%" />
                                    <LinearProgress variant="determinate" value={40} sx={{ width: '100px', ml: 2 }} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Financial Statements (Liquidity)" secondary="Weight: 30%" />
                                    <LinearProgress variant="determinate" value={30} sx={{ width: '100px', ml: 2 }} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="External Bureau Rating" secondary="Weight: 20%" />
                                    <LinearProgress variant="determinate" value={20} sx={{ width: '100px', ml: 2 }} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Years of Relationship" secondary="Weight: 10%" />
                                    <LinearProgress variant="determinate" value={10} sx={{ width: '100px', ml: 2 }} />
                                </ListItem>
                            </List>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="subtitle1">Calculated Score:</Typography>
                                <Typography variant="h5" color="success.main" fontWeight="bold">85/100 (Low Risk)</Typography>
                            </Box>
                            <Button variant="contained" startIcon={<PlayArrow />} sx={{ mt: 2 }} fullWidth>
                                Run Simulation
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    {/* Automated Controls */}
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Real-Time Check Rules</Typography>
                            <List>
                                <ListItem divider>
                                    <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                    <ListItemText primary="Block order if overdue > 30 days" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                    <ListItemText primary="Warning if utilization > 90%" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                    <ListItemText primary="Auto-release if order value < $1,000" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                    <ListItemText primary="Soft block if Credit Insurance expires in < 7 days" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* AI Predictions */}
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <TrendingUp color="primary" sx={{ mr: 1 }} />
                                <Typography variant="h6">AI Behavioral Prediction</Typography>
                            </Box>
                            <Typography variant="body1" paragraph>
                                Based on recent payment patterns, this customer has a <b>12% probability of default (PD)</b> in the next quarter.
                            </Typography>
                            <Alert severity="info" variant="filled">
                                <strong>Recommendation:</strong> Maintain current limit but switch to weekly monitoring.
                            </Alert>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RiskEngine;
