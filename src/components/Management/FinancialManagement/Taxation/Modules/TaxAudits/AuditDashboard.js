import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import AuditCaseManagement from './AuditCaseManagement';
import AuditReportingAnalytics from './AuditReportingAnalytics';

const AuditDashboard = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Audit Management Dashboard</Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                Overview of ongoing tax audits, risks, and financial implications.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {/* Reuse components for dashboard view */}
                    <AuditReportingAnalytics />
                </Grid>
                <Grid item xs={12}>
                    <AuditCaseManagement />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AuditDashboard;
