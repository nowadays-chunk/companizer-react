import React from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardContent, Chip } from '@mui/material';
import { CompareArrows } from '@mui/icons-material';

const ScenarioPlanningManager = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <CompareArrows color="primary" /> Scenario Planning Manager
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ borderLeft: '5px solid #4caf50' }}>
                        <CardActionArea sx={{ p: 2 }}>
                            <CardContent>
                                <Typography variant="h6">Best Case (Bull)</Typography>
                                <Chip label="Optimistic" color="success" size="small" sx={{ mb: 1 }} />
                                <Typography variant="body2" color="text.secondary">
                                    Assumes 20% growth, 0% churn, and cost efficiency improvements.
                                </Typography>
                                <Typography variant="h4" sx={{ mt: 2 }}>$18.5M</Typography>
                                <Typography variant="caption">Projected Net Profit</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ borderLeft: '5px solid #2196f3' }}>
                        <CardActionArea sx={{ p: 2 }}>
                            <CardContent>
                                <Typography variant="h6">Base Case</Typography>
                                <Chip label="Realistic" color="primary" size="small" sx={{ mb: 1 }} />
                                <Typography variant="body2" color="text.secondary">
                                    Based on current pipeline and 3% standard inflation.
                                </Typography>
                                <Typography variant="h4" sx={{ mt: 2 }}>$14.2M</Typography>
                                <Typography variant="caption">Projected Net Profit</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ borderLeft: '5px solid #f44336' }}>
                        <CardActionArea sx={{ p: 2 }}>
                            <CardContent>
                                <Typography variant="h6">Worst Case (Bear)</Typography>
                                <Chip label="Conservative" color="error" size="small" sx={{ mb: 1 }} />
                                <Typography variant="body2" color="text.secondary">
                                    Assumes market recession, 10% churn, and supply chain issues.
                                </Typography>
                                <Typography variant="h4" sx={{ mt: 2 }}>$8.1M</Typography>
                                <Typography variant="caption">Projected Net Profit</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ScenarioPlanningManager;
