
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
    Avatar,
    Button,
    Divider
} from '@mui/material';
import {
    Gavel,
    CheckCircle,
    Cancel
} from '@mui/icons-material';

const ApprovalWorkflow = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Gavel color="primary" /> Approval Governance
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Routing Status</Typography>
                            <Stepper activeStep={2} alternativeLabel sx={{ mt: 3 }}>
                                <Step completed>
                                    <StepLabel>
                                        <Typography variant="caption" display="block">Initiator</Typography>
                                        Submitted
                                    </StepLabel>
                                </Step>
                                <Step completed>
                                    <StepLabel>
                                        <Typography variant="caption" display="block">Engineering Lead</Typography>
                                        Approved
                                    </StepLabel>
                                </Step>
                                <Step active>
                                    <StepLabel>
                                        <Typography variant="caption" display="block">Quality Manager</Typography>
                                        Pending
                                    </StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>
                                        <Typography variant="caption" display="block">Product Director</Typography>
                                        Waiting
                                    </StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>
                                        <Typography variant="caption" display="block">Release</Typography>
                                        Implementation
                                    </StepLabel>
                                </Step>
                            </Stepper>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>My Approvals</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar sx={{ bgcolor: 'warning.light' }}>ECO</Avatar>
                                    <Box>
                                        <Typography variant="subtitle2">ECO-2026-05: Solar Panel Supplier</Typography>
                                        <Typography variant="caption">Assigned to: Quality Manager (Group)</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Button variant="contained" color="success" startIcon={<CheckCircle />}>Approve</Button>
                                    <Button variant="outlined" color="error" startIcon={<Cancel />}>Reject</Button>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Approver Comments</Typography>
                            <Box sx={{ mb: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle2">Engineering Lead</Typography>
                                    <Typography variant="caption">Feb 06, 10:30 AM</Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary">Technical validation complete. Specs look good.</Typography>
                            </Box>
                            <Divider sx={{ my: 1 }} />
                            <Box sx={{ mb: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle2">Initiator</Typography>
                                    <Typography variant="caption">Feb 05, 04:15 PM</Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary">Submitting for review. Please prioritize.</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ApprovalWorkflow;
