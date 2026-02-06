import React, { useState } from 'react';
import {
    Box,
    Typography,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Button,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Chip
} from '@mui/material';
import { faker } from '@faker-js/faker';

const AppealsDisputeManagement = () => {
    // Mock single active appeal for detailed view approach
    const [activeStep, setActiveStep] = useState(1);
    const steps = ['Prepared', 'Submitted', 'Under Review', 'Hearing Scheduled', 'Decision'];

    const appealData = {
        id: 'APL-2025-004',
        caseRef: 'AUD-8832 (Corporate Tax 2024)',
        amountDisputed: 154000,
        filingDate: '2025-10-15',
        legalCounsel: 'Baker McKenzie',
        nextAction: 'Submit supporting evidence bundle',
        deadline: '2025-11-01'
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Appeals & Dispute Management</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                            <Box>
                                <Typography variant="h6">Appeal Reference: {appealData.id}</Typography>
                                <Typography variant="body2" color="textSecondary">{appealData.caseRef}</Typography>
                            </Box>
                            <Chip label="Active" color="primary" />
                        </Box>

                        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 1, mb: 3 }}>
                            <Typography variant="subtitle2" gutterBottom>Next Required Action</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{appealData.nextAction}</Typography>
                            <Typography variant="caption" color="error">Deadline: {appealData.deadline}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                            <Button variant="outlined">Log Correspondence</Button>
                            <Button variant="contained">Update Status</Button>
                        </Box>
                    </Paper>

                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Recent History</Typography>
                        {/* Placeholder list */}
                        <Box sx={{ pl: 2, borderLeft: '2px solid #ddd' }}>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="textSecondary">2025-10-20</Typography>
                                <Typography>Acknowledgment received from Tax Tribunal.</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" color="textSecondary">2025-10-15</Typography>
                                <Typography>Appeal formally submitted via portal.</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ mb: 3 }}>
                        <CardHeader title="Financial Impact" />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">Amount in Dispute</Typography>
                            <Typography variant="h4" sx={{ mb: 2 }}>${appealData.amountDisputed.toLocaleString()}</Typography>
                            <Typography variant="body2" color="textSecondary" gutterBottom>Legal Costs (Est.)</Typography>
                            <Typography variant="h6">$25,000</Typography>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader title="Legal Details" />
                        <CardContent>
                            <Typography variant="subtitle2">External Counsel</Typography>
                            <Typography paragraph>{appealData.legalCounsel}</Typography>
                            <Button size="small" fullWidth variant="outlined">Contact Counsel</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppealsDisputeManagement;
