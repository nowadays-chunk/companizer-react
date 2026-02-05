import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Stepper,
    Step,
    StepLabel,
    Typography,
    Button,
    Divider
} from '@mui/material';

const ReconciliationWorkflow = () => {
    const steps = ['Prepare', 'Review', 'Approve', 'Close Period'];

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Workflow & Approvals"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <Divider />
                <CardContent>
                    <Box sx={{ width: '100%', mb: 4 }}>
                        <Typography variant="h6" gutterBottom>Current Cycle Status</Typography>
                        <Stepper activeStep={1} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                        <Typography variant="subtitle1" fontWeight="bold">Action Required</Typography>
                        <Typography variant="body2" paragraph>
                            You have 3 reconciliations waiting for your review.
                        </Typography>
                        <Button variant="contained" color="primary">Go to Review Queue</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ReconciliationWorkflow;
