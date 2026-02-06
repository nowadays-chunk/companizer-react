import React from 'react';
import { Box, Typography, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';

const steps = [
    {
        label: 'Order Placed',
        date: 'Oct 25, 09:30 AM',
        description: `Order #12345 received from Customer A. Items reserved.`,
    },
    {
        label: 'Processing',
        date: 'Oct 25, 11:00 AM',
        description: 'Payment authorized. Picking list generated for warehouse.',
    },
    {
        label: 'Shipped',
        date: 'Oct 26, 02:00 PM',
        description: `Package picked up by carrier (FedEx). Tracking ID: 78901234.`,
    },
    {
        label: 'Out for Delivery',
        date: 'Pending',
        description: `Estimated delivery: Oct 28 by 6:00 PM.`,
    },
];

const OrderFlow = () => {
    const activeStep = 2; // Simulation

    return (
        <Box sx={{ maxWidth: 600, p: 2 }}>
            <Typography variant="h6" gutterBottom>Order #12345 Tracking</Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label} expanded={true}>
                        <StepLabel
                            optional={
                                index === steps.length - 1 ? (
                                    <Typography variant="caption">Last Step</Typography>
                                ) : (
                                    <Typography variant="caption">{step.date}</Typography>
                                )
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - Order delivered</Typography>
                </Paper>
            )}
        </Box>
    );
};

export default OrderFlow;
