import React from 'react';
import { Box, Typography, Paper, Grid, Button, Alert } from '@mui/material';
import { Lock, LockOpen } from '@mui/icons-material';

const DataIntegrityPeriodControls = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Data Integrity & Period Controls</Typography>

            <Alert severity="info" sx={{ mb: 3 }}>
                Periods prior to 2024 are strictly locked for audit compliance.
            </Alert>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, textAlign: 'center', borderTop: '4px solid #4caf50' }}>
                        <LockOpen fontSize="large" color="success" sx={{ mb: 2 }} />
                        <Typography variant="h6">Current Period: 2025</Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            Open for adjustments and filings.
                        </Typography>
                        <Button variant="outlined" color="error">Lock Period</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, textAlign: 'center', borderTop: '4px solid #f44336', bgcolor: '#fafafa' }}>
                        <Lock fontSize="large" color="disabled" sx={{ mb: 2 }} />
                        <Typography variant="h6" color="textSecondary">Closed Period: 2024</Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            Read-only mode enabled. Admin approval required for changes.
                        </Typography>
                        <Button variant="outlined" disabled>Unlock Period</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DataIntegrityPeriodControls;
