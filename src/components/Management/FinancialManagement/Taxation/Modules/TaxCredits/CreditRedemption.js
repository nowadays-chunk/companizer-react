import React from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Alert } from '@mui/material';
import { Redeem } from '@mui/icons-material';

const CreditRedemption = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">Credit Redemption / Refund</Typography>
            <Alert severity="info" sx={{ mb: 3 }}>
                Refund requests are subject to authority approval and may take 30-90 days.
            </Alert>
            <Paper sx={{ p: 3 }}>
                <Box display="flex" alignItems="center" mb={2}>
                    <Redeem color="secondary" sx={{ mr: 1 }} />
                    <Typography variant="h6">Request Refund</Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="Refund Amount" type="number" defaultValue="5000" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth select label="Bank Account" SelectProps={{ native: true }}>
                            <option>Citibank - Operating (**** 1234)</option>
                            <option>Chase - Main (**** 9876)</option>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth multiline rows={3} label="Reason for Refund Request" placeholder="e.g. Excess input tax credit..." />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary" size="large">Submit Request</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default CreditRedemption;
