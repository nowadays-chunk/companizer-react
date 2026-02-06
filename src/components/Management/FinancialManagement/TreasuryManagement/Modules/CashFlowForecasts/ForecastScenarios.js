import React, { useState } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Slider,
    Grid,
    TextField,
    Button,
    FormControlLabel,
    Switch,
    Alert
} from '@mui/material';

const ForecastScenarios = () => {
    const [dso, setDso] = useState(45);
    const [dpo, setDpo] = useState(30);
    const [growth, setGrowth] = useState(5);
    const [stressTest, setStressTest] = useState(false);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Forecast Drivers & Scenarios</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card elevation={3} sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Behavioral Assumptions</Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <Typography gutterBottom>Days Sales Outstanding (DSO)</Typography>
                                    <Slider
                                        value={dso}
                                        onChange={(e, v) => setDso(v)}
                                        valueLabelDisplay="auto"
                                        min={15}
                                        max={90}
                                    />
                                    <Typography variant="caption" color="textSecondary">Current assumption: {dso} days</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography gutterBottom>Days Payable Outstanding (DPO)</Typography>
                                    <Slider
                                        value={dpo}
                                        onChange={(e, v) => setDpo(v)}
                                        valueLabelDisplay="auto"
                                        min={15}
                                        max={90}
                                    />
                                    <Typography variant="caption" color="textSecondary">Current assumption: {dpo} days</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography gutterBottom>Revenue Growth Rate (%)</Typography>
                                    <Slider
                                        value={growth}
                                        onChange={(e, v) => setGrowth(v)}
                                        valueLabelDisplay="auto"
                                        min={-20}
                                        max={50}
                                    />
                                    <Typography variant="caption" color="textSecondary">Current assumption: {growth}%</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card elevation={3} sx={{ border: stressTest ? '1px solid red' : 'none' }}>
                        <CardContent>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                <Typography variant="h6" color={stressTest ? "error" : "textPrimary"}>Stress Testing Sandbox</Typography>
                                <FormControlLabel
                                    control={<Switch checked={stressTest} onChange={(e) => setStressTest(e.target.checked)} color="error" />}
                                    label="Activate Stress Mode"
                                />
                            </Box>
                            {stressTest && (
                                <Alert severity="warning" sx={{ mb: 2 }}>
                                    Simulating 20% Revenue Drop and 10% FX Shock.
                                </Alert>
                            )}
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField label="Simulate Revenue Drop (%)" fullWidth type="number" disabled={!stressTest} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label="Simulate Supply Chain Cost Increase (%)" fullWidth type="number" disabled={!stressTest} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: 'secondary.main', color: 'white', mb: 2 }}>
                        <CardContent>
                            <Typography variant="h6">Projected Impact</Typography>
                            <Box mt={2}>
                                <Typography variant="subtitle2">Net Cash Change</Typography>
                                <Typography variant="h4">- $15,400</Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography variant="subtitle2">Liquidity Buffer Status</Typography>
                                <Typography variant="h5" color="lightgreen">Safe</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Button variant="contained" fullWidth size="large">Run Simulation</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ForecastScenarios;
