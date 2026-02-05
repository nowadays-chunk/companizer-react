import React from 'react';
import { Box, Typography, Paper, Grid, Stepper, Step, StepLabel, Button, Card, CardHeader, Avatar } from '@mui/material';
import { Check, AssignmentTurnedIn } from '@mui/icons-material';

const WorkflowApprovals = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Workflow & Approvals</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Active Approval Workflows</Typography>

                        <Card variant="outlined" sx={{ mb: 2 }}>
                            <CardHeader
                                avatar={<Avatar sx={{ bgcolor: 'primary.main' }}><AssignmentTurnedIn /></Avatar>}
                                title="Valuation Approval - Q2 2025"
                                subheader="Initiated by: John Doe on 2025-07-05"
                                action={<Button size="small" variant="outlined">View Details</Button>}
                            />
                            <Box sx={{ p: 2 }}>
                                <Stepper activeStep={1} alternativeLabel>
                                    <Step><StepLabel>Prepared</StepLabel></Step>
                                    <Step><StepLabel>Controller Review</StepLabel></Step>
                                    <Step><StepLabel>CFO Approval</StepLabel></Step>
                                </Stepper>
                            </Box>
                        </Card>

                        <Card variant="outlined">
                            <CardHeader
                                avatar={<Avatar sx={{ bgcolor: 'secondary.main' }}><AssignmentTurnedIn /></Avatar>}
                                title="Acquisition Requisition - Startup X"
                                subheader="Initiated by: Strategy Team on 2025-08-10"
                                action={<Button size="small" variant="contained" color="success" startIcon={<Check />}>Approve</Button>}
                            />
                            <Box sx={{ p: 2 }}>
                                <Stepper activeStep={0} alternativeLabel>
                                    <Step><StepLabel>Investment Committee</StepLabel></Step>
                                    <Step><StepLabel>Legal Review</StepLabel></Step>
                                    <Step><StepLabel>Finance Authorization</StepLabel></Step>
                                </Stepper>
                            </Box>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WorkflowApprovals;
