import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Slider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Tune } from '@mui/icons-material';

const SensitivityAnalysis = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Tune color="primary" /> Sensitivity Analysis
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Variable: FX Rate (USD/EUR)</Typography>
                            <Typography variant="h4">1.08</Typography>
                            <Slider defaultValue={1.08} step={0.01} min={1.0} max={1.2} valueLabelDisplay="auto" />
                            <Box sx={{ mt: 2, p: 2, bgcolor: '#e8f5e9', borderRadius: 1 }}>
                                <Typography variant="caption">Net Income Impact</Typography>
                                <Typography variant="body1" color="success.main">+$240,000 / 0.01 rise</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Variable: Material Costs</Typography>
                            <Typography variant="h4">+5%</Typography>
                            <Slider defaultValue={5} step={1} min={0} max={20} valueLabelDisplay="auto" />
                            <Box sx={{ mt: 2, p: 2, bgcolor: '#ffebee', borderRadius: 1 }}>
                                <Typography variant="caption">Gross Margin Impact</Typography>
                                <Typography variant="body1" color="error.main">-1.2% / 5% rise</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SensitivityAnalysis;
