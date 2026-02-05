import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    TextField,
    Button,
    Divider,
    Paper,
    useTheme
} from '@mui/material';

const FXManager = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader title="FX & Multi-Currency Manager" />
                <Divider />
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>Live Rates (Source: Bloomberg)</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                                        <Typography variant="caption">USD/GBP</Typography>
                                        <Typography variant="h5">0.7845</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6}>
                                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                                        <Typography variant="caption">USD/EUR</Typography>
                                        <Typography variant="h5">0.9120</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>Transfer FX Override</Typography>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <TextField label="Manual Rate" size="small" />
                                <Button variant="contained">Apply</Button>
                            </Box>
                            <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mt: 1 }}>
                                * Requires 'Treasury Trader' role
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default FXManager;
