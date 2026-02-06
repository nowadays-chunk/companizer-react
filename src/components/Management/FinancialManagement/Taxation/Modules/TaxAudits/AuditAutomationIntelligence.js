import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { AutoAwesome, Lightbulb } from '@mui/icons-material';

const AuditAutomationIntelligence = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Automation & Intelligence</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3, bgcolor: '#f3e5f5' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <AutoAwesome color="secondary" />
                            <Typography variant="h6">AI Insights</Typography>
                        </Box>
                        <ListInsights />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

const ListInsights = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Card>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" fontWeight="bold">Anomaly Detected in VAT Return</Typography>
                    <Chip label="High Confidence" color="secondary" size="small" />
                </Box>
                <Typography variant="body2" color="textSecondary">
                    Q3 Input VAT is 40% higher than historical average. Recommendation: Review top 10 invoices.
                </Typography>
                <Button size="small" sx={{ mt: 1 }}>Run Diagnostic</Button>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" fontWeight="bold">Similar Case Precedent</Typography>
                    <Chip label="Medium Confidence" color="primary" size="small" />
                </Box>
                <Typography variant="body2" color="textSecondary">
                    Current dispute matches a 2023 closed case. Suggested Strategy: Reference Case #AUD-2023-099.
                </Typography>
                <Button size="small" sx={{ mt: 1 }}>View Precedent</Button>
            </CardContent>
        </Card>
    </Box>
);

export default AuditAutomationIntelligence;
