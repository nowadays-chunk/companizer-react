
import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip, Button, Stepper, Step, StepLabel } from '@mui/material';
import { Gavel } from '@mui/icons-material';

const steps = ['Proposed', 'Manager Review', 'Director Approval', 'Active'];

const ApprovalWorkflow = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Gavel color="primary" /> Governance & Approval
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Emergency Reorder Request #9921</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Manual override of Safety Stock by User: John Doe. Reason: "Anticipated strike at supplier factory."
                            </Typography>
                            <Stepper activeStep={1} alternativeLabel sx={{ mb: 3 }}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                                <Button variant="outlined" color="error">Reject</Button>
                                <Button variant="contained" color="success">Approve</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Parameter Change Log</Typography>
                            <Typography variant="body2">
                                <strong>Feb 15, 10:30 AM:</strong> ROP for Item X changed from 500 to 600 by System (Auto-Tune). <Chip label="Auto" size="small" />
                            </Typography>
                            <Typography variant="body2">
                                <strong>Feb 14, 09:15 AM:</strong> Lead Time for Vendor Y updated to 21 days by API. <Chip label="API" size="small" />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ApprovalWorkflow;
