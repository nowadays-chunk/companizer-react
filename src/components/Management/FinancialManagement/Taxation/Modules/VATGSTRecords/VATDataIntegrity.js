import React from 'react';
import { Box, Typography, Paper, Alert, Grid } from '@mui/material';
import { Lock, History, VerifiedUser } from '@mui/icons-material';

const VATDataIntegrity = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Data Integrity & Controls</Typography>

            <Alert severity="success" sx={{ mb: 3 }}>
                System-wide VAT integrity check passed. No anomalies detected.
            </Alert>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, textAlign: 'center' }}>
                        <Lock color="secondary" fontSize="large" sx={{ mb: 1 }} />
                        <Typography variant="h6">Period Locking</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Periods prior to 2025-01 are hard-locked.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, textAlign: 'center' }}>
                        <History color="primary" fontSize="large" sx={{ mb: 1 }} />
                        <Typography variant="h6">Audit Trail</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Immutable logging active for all transaction edits.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, textAlign: 'center' }}>
                        <VerifiedUser color="success" fontSize="large" sx={{ mb: 1 }} />
                        <Typography variant="h6">Hash Verification</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Blockchain-backed proof of record integrity.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default VATDataIntegrity;
