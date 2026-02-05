import React from 'react';
import { Box, Typography, Paper, Stepper, Step, StepLabel, Button, Grid, Card, CardContent, CardActions } from '@mui/material';

const WorkflowApprovals = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Approvals</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Purchase Approval</Typography>
                            <Typography variant="h6">Buy $2M US Govt Bonds</Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>Requested by: Trader A</Typography>
                            <Stepper activeStep={1}>
                                <Step><StepLabel>Submitted</StepLabel></Step>
                                <Step><StepLabel>Risk Review</StepLabel></Step>
                                <Step><StepLabel>Final Auth</StepLabel></Step>
                            </Stepper>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="contained">Approve</Button>
                            <Button size="small" color="error">Reject</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Valuation Override</Typography>
                            <Typography variant="h6">Manual Price Adjustment - Illiquid Bond</Typography>
                            <Stepper activeStep={0}>
                                <Step><StepLabel>Proposed</StepLabel></Step>
                                <Step><StepLabel>Controller Review</StepLabel></Step>
                            </Stepper>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined">Review Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WorkflowApprovals;
