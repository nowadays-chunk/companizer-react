import React from 'react';
import { Box, Typography, Stepper, Step, StepLabel, Button, Card, CardContent } from '@mui/material';
import { AssignmentTurnedIn } from '@mui/icons-material';

const ForecastApprovalWorkflow = () => {
    const steps = ['Sales Lead Review', 'Finance BP Validation', 'CFO Approval', 'Final Lock'];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <AssignmentTurnedIn color="primary" /> Forecast Approval Workflow
            </Typography>

            <Card sx={{ mb: 4 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Cycle: FY25 Q2 Forecast</Typography>
                    <Stepper activeStep={2} alternativeLabel sx={{ mt: 3 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
                        <Button variant="outlined" color="error">Reject</Button>
                        <Button variant="contained" color="success">Approve & Advance</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ForecastApprovalWorkflow;
