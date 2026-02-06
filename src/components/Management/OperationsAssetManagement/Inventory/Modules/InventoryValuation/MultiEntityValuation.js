import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Divider } from '@mui/material';
import { Business, Store } from '@mui/icons-material';

const MultiEntityValuation = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>Multi-Entity Valuation</Typography>
            <Typography variant="body1" color="textSecondary" mb={4}>
                Consolidated and separate inventory valuation reports per Warehouse and Legal Entity.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Business color="primary" sx={{ mr: 1 }} />
                            <Typography variant="h6">Legal Entity: Global Corp Inc.</Typography>
                        </Box>
                        <Typography variant="h3" color="primary.dark">$12,450,000</Typography>
                        <Typography variant="caption" color="textSecondary">Total Conslidated Inventory Value</Typography>

                        <Box mt={3}>
                            <Typography variant="subtitle2">Intercompany Stock in Transit</Typography>
                            <Typography variant="h6">$450,000</Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Box display="flex" alignItems="center" mb={1}>
                                        <Store color="action" sx={{ mr: 1 }} />
                                        <Typography variant="subtitle1">Main Warehouse (WH-01)</Typography>
                                    </Box>
                                    <Typography variant="h5">$8,200,000</Typography>
                                    <Typography variant="body2" color="textSecondary">Raw Materials & Finished Goods</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Box display="flex" alignItems="center" mb={1}>
                                        <Store color="action" sx={{ mr: 1 }} />
                                        <Typography variant="subtitle1">Regional DC (WH-02)</Typography>
                                    </Box>
                                    <Typography variant="h5">$3,800,000</Typography>
                                    <Typography variant="body2" color="textSecondary">Distribution Stock</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MultiEntityValuation;
