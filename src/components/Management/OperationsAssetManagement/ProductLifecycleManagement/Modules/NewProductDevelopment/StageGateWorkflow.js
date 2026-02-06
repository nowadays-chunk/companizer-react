
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
    StepButton,
    Button,
    Chip,
    Alert
} from '@mui/material';
import {
    AccountTree,
    CheckCircleOutline,
    PlayArrow
} from '@mui/icons-material';

const steps = ['Idea', 'Concept', 'Feasibility', 'Design', 'Prototype', 'Pilot', 'Launch'];

const StageGateWorkflow = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <AccountTree color="primary" /> Stage-Gate Control
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Current Stage: Design</Typography>
                            <Box sx={{ width: '100%', mt: 4, mb: 4 }}>
                                <Stepper activeStep={3} alternativeLabel nonLinear>
                                    {steps.map((label, index) => (
                                        <Step key={label}>
                                            <StepButton color="inherit">{label}</StepButton>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Chip label="Status: On Track" color="success" variant="outlined" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Stage Deliverables (Design)</Typography>
                            <Alert severity="info" sx={{ mb: 2 }}>All mandatory deliverables must be approved before Gate Review.</Alert>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Chip icon={<CheckCircleOutline />} label="Technical Specs Uploaded" color="success" variant="outlined" onClick={() => { }} clickable />
                                <Chip icon={<CheckCircleOutline />} label="CAD Drawings Finalized" color="success" variant="outlined" onClick={() => { }} clickable />
                                <Chip icon={<CheckCircleOutline />} label="Initial BOM Created" color="default" variant="outlined" onClick={() => { }} clickable />
                                <Chip icon={<CheckCircleOutline />} label="Design FMEA Complete" color="default" variant="outlined" onClick={() => { }} clickable />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Gate Decision</Typography>
                            <Typography variant="body2" paragraph>
                                Proceed to <strong>Prototype</strong> phase?
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                                <Button variant="contained" color="success" startIcon={<PlayArrow />}>Go (Approve)</Button>
                                <Button variant="outlined" color="error">No-Go (Kill)</Button>
                                <Button variant="outlined" color="warning">Recycle (Rework)</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StageGateWorkflow;
