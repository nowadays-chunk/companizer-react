import React, { useState } from 'react';
import { Box, Typography, Chip, Button, Stepper, Step, StepLabel, Card, CardContent, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { AssignmentTurnedIn, Add } from '@mui/icons-material';

const CorrectiveActionWorkflow = () => {
    const steps = ['Issue Identified', 'Action Plan Proposed', 'Manager Approval', 'Implementation', 'Verification'];
    const [activeStep, setActiveStep] = useState(2);
    const [status, setStatus] = useState('Pending Approval');
    const [open, setOpen] = useState(false);

    const handleAction = (type) => {
        if (type === 'approve') {
            setStatus('Approved');
            setActiveStep(3);
        } else {
            setStatus('Rejected');
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AssignmentTurnedIn color="primary" /> Corrective Action Workflow
                </Typography>
                <Button variant="outlined" startIcon={<Add />} onClick={() => setOpen(true)}>New Action Plan</Button>
            </Box>

            <Box sx={{ width: '100%', mb: 4 }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            <Card sx={{ maxWidth: 600, mx: 'auto' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Action #AC-2024-009</Typography>
                    <Typography color="text.secondary" gutterBottom>Variance: Marketing Overspend ($50k)</Typography>
                    <Typography variant="body2" paragraph>
                        <strong>Proposed Plan:</strong> Defer Q4 ad campaign to Q1 2025 and renegotiate vendor rates for existing commitments.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
                        <Chip label={status} color={status === 'Approved' ? 'success' : status === 'Rejected' ? 'error' : 'warning'} />
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => handleAction('reject')}
                                disabled={status !== 'Pending Approval'}
                            >
                                Reject
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleAction('approve')}
                                disabled={status !== 'Pending Approval'}
                            >
                                Approve
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Initiate Corrective Action</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2, minWidth: 400 }}>
                    <TextField label="Related Variance ID" />
                    <TextField label="Action Plan Description" multiline rows={3} />
                    <TextField label="Responsible Party" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="contained" onClick={() => setOpen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CorrectiveActionWorkflow;
