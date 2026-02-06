
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Alert,
    Button
} from '@mui/material';
import {
    VerifiedUser,
    ReportProblem
} from '@mui/icons-material';

const QualityCompliance = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <VerifiedUser color="primary" /> Quality & Compliance Guardrails
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Inspection Queue</Typography>
                            <Typography variant="h3" color="warning.main">50</Typography>
                            <Typography variant="caption">Units awaiting QC check.</Typography>
                            <Box sx={{ mt: 2 }}>
                                <Button size="small" variant="outlined">Inspect Batch</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Compliance Holds</Typography>
                            <Alert severity="error" icon={<ReportProblem />} sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Regulatory Quarantine (Batch L-999)</Typography>
                                <Typography variant="body2">20 Units blocked due to missing export certification.</Typography>
                            </Alert>
                            <Alert severity="warning" icon={<ReportProblem />}>
                                <Typography variant="subtitle2">Packaging Defect</Typography>
                                <Typography variant="body2">15 Units blocked for repackaging.</Typography>
                            </Alert>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default QualityCompliance;
