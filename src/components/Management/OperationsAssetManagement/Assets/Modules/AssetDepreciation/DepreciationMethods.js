import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Button } from '@mui/material';
import { Functions } from '@mui/icons-material';

const DepreciationMethods = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <Functions color="secondary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Depreciation Methods</Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Straight-Line (SL)</Typography>
                            <Typography variant="body2" color="textSecondary" paragraph>
                                (Cost - Residual Value) / Useful Life
                            </Typography>
                            <Button variant="outlined" fullWidth>Configure</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Double Declining (DDB)</Typography>
                            <Typography variant="body2" color="textSecondary" paragraph>
                                2 * Straight-line Rate * Book Value
                            </Typography>
                            <Button variant="outlined" fullWidth>Configure</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Production Units</Typography>
                            <Typography variant="body2" color="textSecondary" paragraph>
                                (Cost - Residual) * (Units Produced / Life Units)
                            </Typography>
                            <Button variant="outlined" fullWidth>Configure</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DepreciationMethods;
