import React from 'react';
import { Box, Typography, Button, Paper, Grid, Card, CardContent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Settings, CheckCircle } from '@mui/icons-material';

const ValuationMethods = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4" gutterBottom>Valuation Methods</Typography>
                <Button variant="contained" color="primary" startIcon={<Settings />}>Configure Methods</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Active Valuation Method</Typography>
                        <Box display="flex" alignItems="center" bgcolor="#e8f5e9" p={2} borderRadius={1} mb={3}>
                            <CheckCircle color="success" sx={{ mr: 2 }} />
                            <Box>
                                <Typography variant="subtitle1" fontWeight="bold">FIFO (First In, First Out)</Typography>
                                <Typography variant="body2" color="textSecondary">Currently applied to 85% of inventory items.</Typography>
                            </Box>
                        </Box>

                        <Typography variant="h6" gutterBottom>Method Allocation</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>FIFO</Typography>
                                        <Typography variant="h4">85%</Typography>
                                        <Typography variant="caption">Standard Goods</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>Specific Identification</Typography>
                                        <Typography variant="h4">15%</Typography>
                                        <Typography variant="caption">Serialized/High Value</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Configuration</Typography>
                        <Typography variant="body2" paragraph>
                            Define the primary valuation methods for different product categories.
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Default Method</InputLabel>
                            <Select defaultValue="fifo" label="Default Method">
                                <MenuItem value="fifo">FIFO</MenuItem>
                                <MenuItem value="lifo">LIFO</MenuItem>
                                <MenuItem value="weighted_avg">Weighted Average</MenuItem>
                                <MenuItem value="standard">Standard Cost</MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ValuationMethods;
