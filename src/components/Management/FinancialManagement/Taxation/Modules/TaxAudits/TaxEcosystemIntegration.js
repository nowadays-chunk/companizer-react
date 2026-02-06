import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Button, Divider } from '@mui/material';
import { Description, AccountBalance, Receipt, Link } from '@mui/icons-material';

const TaxEcosystemIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Tax Ecosystem Integration</Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                Seamlessly link audit cases with source data from other tax modules.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <Description color="primary" fontSize="large" />
                                <Typography variant="h6">Tax Filings</Typography>
                            </Box>
                            <Typography variant="body2" paragraph>
                                14 Returns linked to active audits.
                            </Typography>
                            <Button variant="outlined" fullWidth startIcon={<Link />}>View Linked Returns</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <AccountBalance color="secondary" fontSize="large" />
                                <Typography variant="h6">Withholding Tax</Typography>
                            </Box>
                            <Typography variant="body2" paragraph>
                                3 WHT Certificates under review.
                            </Typography>
                            <Button variant="outlined" fullWidth startIcon={<Link />}>View WHT Data</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <Receipt color="success" fontSize="large" />
                                <Typography variant="h6">Tax Credits</Typography>
                            </Box>
                            <Typography variant="body2" paragraph>
                                $450k in R&D credits being audited.
                            </Typography>
                            <Button variant="outlined" fullWidth startIcon={<Link />}>View Credit Applications</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>Cross-Module Data flow</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                        <Typography variant="subtitle2">System Status: Connected</Typography>
                        <Typography variant="caption">Last synchronization: 5 minutes ago</Typography>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default TaxEcosystemIntegration;
