import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { Category, Warning, CheckCircle, HourglassEmpty } from '@mui/icons-material';

const StockSegmentation = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>Stock Segmentation</Typography>
            <Typography variant="body1" color="textSecondary" mb={4}>
                Categorization of inventory based on turnover velocity and aging.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ borderLeft: '6px solid #4caf50' }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={2}>
                                <CheckCircle color="success" sx={{ mr: 1 }} />
                                <Typography variant="h6">Fast Moving</Typography>
                            </Box>
                            <Typography variant="h3">65%</Typography>
                            <Typography variant="body2" color="textSecondary">of total inventory value</Typography>
                            <Typography variant="caption" display="block" mt={1}>Turnover &lt; 30 days</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ borderLeft: '6px solid #ff9800' }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={2}>
                                <HourglassEmpty color="warning" sx={{ mr: 1 }} />
                                <Typography variant="h6">Slow Moving</Typography>
                            </Box>
                            <Typography variant="h3">25%</Typography>
                            <Typography variant="body2" color="textSecondary">of total inventory value</Typography>
                            <Typography variant="caption" display="block" mt={1}>Turnover 30-90 days</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ borderLeft: '6px solid #f44336' }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={2}>
                                <Warning color="error" sx={{ mr: 1 }} />
                                <Typography variant="h6">Dead / Obsolete</Typography>
                            </Box>
                            <Typography variant="h3">10%</Typography>
                            <Typography variant="body2" color="textSecondary">of total inventory value</Typography>
                            <Typography variant="caption" display="block" mt={1}>No movement &gt; 90 days</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StockSegmentation;
