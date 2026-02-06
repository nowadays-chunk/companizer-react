import React, { useState } from 'react';
import { Box, Typography, Stepper, Step, StepLabel, Card, CardContent, Button, Stack, Snackbar, Alert } from '@mui/material';
import { Approval } from '@mui/icons-material';

const BudgetApprovalWorkflow = () => {
    const [activeStep, setActiveStep] = useState(2);
    const [pending, setPending] = useState([
        { id: 1, title: "Engineering Dept - Hardware Upgrade", requester: "John Doe", amount: 50000 },
        { id: 2, title: "Marketing - Q3 Campaign", requester: "Jane Smith", amount: 15000 }
    ]);
    const [msg, setMsg] = useState('');

    const handleAction = (id, action) => {
        setPending(pending.filter(item => item.id !== id));
        setMsg(`Request ${action === 'approve' ? 'Approved' : 'Rejected'}`);
        if (pending.length === 1 && action === 'approve') setActiveStep(3); // Advance step if all approved
    };

    const steps = ['Submission', 'Manager Review', 'Finance Approval', 'Active'];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Approval color="primary" /> Approval Workflow
            </Typography>

            <Card sx={{ mb: 4 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>FY2025 Budget Approval Cycle</Typography>
                    <Stepper activeStep={activeStep} alternativeLabel sx={{ mt: 3 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </CardContent>
            </Card>

            <Typography variant="h6" gutterBottom>Pending Approvals</Typography>
            <Stack spacing={2}>
                {pending.length === 0 ? (
                    <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>No pending approvals.</Typography>
                ) : (
                    pending.map((item) => (
                        <Card key={item.id} variant="outlined">
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">{item.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">Requested by {item.requester} • ${item.amount.toLocaleString()}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Button variant="contained" color="success" size="small" onClick={() => handleAction(item.id, 'approve')}>Approve</Button>
                                    <Button variant="outlined" color="error" size="small" onClick={() => handleAction(item.id, 'reject')}>Reject</Button>
                                </Box>
                            </CardContent>
                        </Card>
                    ))
                )}
            </Stack>

            <Snackbar open={!!msg} autoHideDuration={3000} onClose={() => setMsg('')}>
                <Alert severity="success" onClose={() => setMsg('')}>{msg}</Alert>
            </Snackbar>
        </Box>
    );
};

export default BudgetApprovalWorkflow;
