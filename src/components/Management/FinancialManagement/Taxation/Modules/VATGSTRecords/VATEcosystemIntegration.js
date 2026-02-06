import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Button } from '@mui/material';
import { Receipt, AccountBalance, Cloud, Description } from '@mui/icons-material';

const VATEcosystemIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Tax Ecosystem Integration</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <Receipt color="primary" />
                                <Typography variant="h6">Accounts Receivable</Typography>
                            </Box>
                            <Typography variant="body2" paragraph>
                                850 invoices synced. Latest sync: 2 mins ago.
                            </Typography>
                            <Button size="small">View Source</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <Description color="secondary" />
                                <Typography variant="h6">Accounts Payable</Typography>
                            </Box>
                            <Typography variant="body2" paragraph>
                                420 bills synced. Latest sync: 2 mins ago.
                            </Typography>
                            <Button size="small">View Source</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <Cloud color="info" />
                                <Typography variant="h6">Tax Filing Gateway</Typography>
                            </Box>
                            <Typography variant="body2" paragraph>
                                Connected to HMRC MTD. Token valid.
                            </Typography>
                            <Button size="small">Test Connection</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <AccountBalance color="success" />
                                <Typography variant="h6">General Ledger</Typography>
                            </Box>
                            <Typography variant="body2" paragraph>
                                Real-time posting enabled.
                            </Typography>
                            <Button size="small">View Journals</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default VATEcosystemIntegration;
