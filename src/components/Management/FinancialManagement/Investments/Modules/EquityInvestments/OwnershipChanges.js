import React from 'react';
import { Box, Typography, Paper, Stepper, Step, StepLabel, Button, Divider, Alert, Grid } from '@mui/material';

const OwnershipChanges = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Ownership Changes & Control Events</Typography>

            <Alert severity="info" sx={{ mb: 3 }}>
                Use this module to record significant changes in ownership percentage that may trigger reclassification (e.g. Loss of Control, Step Acquisition).
            </Alert>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Event Simulation</Typography>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle2">Current Ownership</Typography>
                        <Typography variant="h4">45%</Typography>
                        <Typography variant="caption">Associate (Equity Method)</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" color="primary">Purchase + 15%</Typography>
                        <Divider sx={{ my: 1 }}>Simulated Event</Divider>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
                        <Typography variant="subtitle2">New Ownership</Typography>
                        <Typography variant="h4" color="success.main">60%</Typography>
                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>Subsidiary (Consolidated)</Typography>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="subtitle2" gutterBottom>Required Accounting Treatments:</Typography>
                    <Stepper activeStep={1} alternativeLabel>
                        <Step><StepLabel>Revalue Existing Stake</StepLabel></Step>
                        <Step><StepLabel>Recognize Gain/Loss</StepLabel></Step>
                        <Step><StepLabel>Consolidate Assets/Liabilities</StepLabel></Step>
                        <Step><StepLabel>Calculate Goodwill</StepLabel></Step>
                    </Stepper>
                </Box>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" color="primary">Execute Change of Control Wizard</Button>
                </Box>
            </Paper>

            <Typography variant="h6" gutterBottom>Control Change Audit Trail</Typography>
            <Paper sx={{ p: 2 }}>
                <Typography variant="body2" color="textSecondary">No historical control changes recorded for this investment.</Typography>
            </Paper>
        </Box>
    );
};

export default OwnershipChanges;
