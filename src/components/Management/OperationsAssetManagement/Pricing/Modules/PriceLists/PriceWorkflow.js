
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Stepper,
    Step,
    StepLabel,
    Button
} from '@mui/material';
import {
    Rule,
    CheckCircle
} from '@mui/icons-material';

const steps = ['Draft Created', 'Financial Review', 'Sales Director Approval', 'Published'];

const PriceWorkflow = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Rule color="primary" /> Approval Workflow
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Current Status: In Review</Typography>
                            <Box sx={{ width: '100%', mt: 4, mb: 4 }}>
                                <Stepper activeStep={1} alternativeLabel>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Actions</Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button variant="contained" color="success" startIcon={<CheckCircle />}>Approve</Button>
                                <Button variant="outlined" color="error">Reject</Button>
                                <Button variant="outlined">Request Changes</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PriceWorkflow;
