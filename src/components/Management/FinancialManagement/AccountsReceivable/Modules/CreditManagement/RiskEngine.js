import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Divider, Button, List, ListItem, ListItemIcon, ListItemText, Alert, LinearProgress, TextField, CircularProgress } from '@mui/material';
import { CheckCircle, Warning, PlayArrow, TrendingUp } from '@mui/icons-material';
import { arCalculateCreditRisk } from '../../../../../../utils/clientQueries';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/RiskEngine';

const RiskEngine = () => {
    const [customerId, setCustomerId] = useState('');
    const [riskData, setRiskData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRunSimulation = async () => {
        if (!customerId) {
            setError("Please enter a Customer ID");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const result = await arCalculateCreditRisk({ customerId });
            setRiskData(result);
        } catch (err) {
            console.error(err);
            setError("Failed to calculate risk.");
            setRiskData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Risk Engine & Automation</Typography>

            <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
                <TextField
                    label="Customer ID"
                    variant="outlined"
                    size="small"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                />
                <Button
                    variant="contained"
                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <PlayArrow />}
                    onClick={handleRunSimulation}
                    disabled={loading}
                >
                    {loading ? 'Simulating...' : 'Run Simulation'}
                </Button>
            </Box>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

            {riskData ? (
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        {/* Scoring Model */}
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Scorecard Factors</Typography>
                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Payment Behavior (DSO Trend)" secondary="Weight: 40%" />
                                        <LinearProgress variant="determinate" value={riskData.payment_behavior_score || 40} sx={{ width: '100px', ml: 2 }} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Financial Statements (Liquidity)" secondary="Weight: 30%" />
                                        <LinearProgress variant="determinate" value={riskData.financial_score || 30} sx={{ width: '100px', ml: 2 }} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="External Bureau Rating" secondary="Weight: 20%" />
                                        <LinearProgress variant="determinate" value={riskData.bureau_score || 20} sx={{ width: '100px', ml: 2 }} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Years of Relationship" secondary="Weight: 10%" />
                                        <LinearProgress variant="determinate" value={riskData.relationship_score || 10} sx={{ width: '100px', ml: 2 }} />
                                    </ListItem>
                                </List>
                                <Divider sx={{ my: 2 }} />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="subtitle1">Calculated Score:</Typography>
                                    <Typography variant="h5" color={riskData.riskScore > 70 ? "success.main" : "warning.main"} fontWeight="bold">
                                        {riskData.riskScore}/100 ({riskData.riskCategory || 'Assessing'})
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {/* Automated Controls */}
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Credit Limit Recommendation</Typography>
                                <Typography variant="h4" color="primary">${(riskData.recommendedLimit || 0).toLocaleString()}</Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    Based on the calculated risk score and payment history.
                                </Typography>
                                <Divider sx={{ my: 2 }} />
                                <Typography variant="subtitle2">Automated Actions:</Typography>
                                <List dense>
                                    {riskData.automatedActions?.map((action, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                                            <ListItemText primary={action} />
                                        </ListItem>
                                    ))}
                                    {!riskData.automatedActions && (
                                        <ListItem>
                                            <ListItemText primary="No automated actions triggered." />
                                        </ListItem>
                                    )}
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
                                    <Typography variant="h6">AI Prediction</Typography>
                                </Box>
                                <Typography variant="body1" paragraph>
                                    {riskData.aiPrediction || "AI analysis not available."}
                                </Typography>
                                <Alert severity="info" variant="filled">
                                    <strong>Recommendation:</strong> {riskData.recommendation || "Review manually."}
                                </Alert>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Alert severity="info">Enter a Customer ID and run simulation to see risk analysis.</Alert>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default RiskEngine;
