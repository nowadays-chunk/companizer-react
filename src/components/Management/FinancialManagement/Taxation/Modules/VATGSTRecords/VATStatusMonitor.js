import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Step, Stepper, StepLabel } from '@mui/material';

const VATStatusMonitor = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Transaction Lifecycle & Status</Typography>

            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Standard Lifecycle</Typography>
                    <Stepper activeStep={2} alternativeLabel>
                        <Step><StepLabel>Draft</StepLabel></Step>
                        <Step><StepLabel>Posted</StepLabel></Step>
                        <Step><StepLabel>Reconciled</StepLabel></Step>
                        <Step><StepLabel>Included in Return</StepLabel></Step>
                        <Step><StepLabel>Filed</StepLabel></Step>
                    </Stepper>
                </CardContent>
            </Card>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#fff3e0' }}>
                        <CardContent>
                            <Typography variant="subtitle1">Pending Posting</Typography>
                            <Typography variant="h4">142</Typography>
                            <Typography variant="body2">Transactions</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#e3f2fd' }}>
                        <CardContent>
                            <Typography variant="subtitle1">Ready for Filing</Typography>
                            <Typography variant="h4">1,204</Typography>
                            <Typography variant="body2">Transactions</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#e8f5e9' }}>
                        <CardContent>
                            <Typography variant="subtitle1">Audited & Closed</Typography>
                            <Typography variant="h4">15,093</Typography>
                            <Typography variant="body2">Transactions</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default VATStatusMonitor;
