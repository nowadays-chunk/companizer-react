import React from 'react';
import { Box, Typography, Paper, Button, Alert } from '@mui/material';

const PeriodCloseIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Period & Close Integration</Typography>
            <Paper sx={{ p: 3 }}>
                <Typography variant="h6">Month-End Snapshot</Typography>
                <Alert severity="success" sx={{ my: 2 }}>Oct 2023 Snapshot taken on 2023-10-31 23:59:59</Alert>
                <Typography variant="body2" paragraph>
                    This snapshot locks the maturity profile for historical reporting. Any subsequent changes to repayment schedules will apply to current open periods only.
                </Typography>
                <Button variant="outlined">View Historical Snapshots</Button>
            </Paper>
        </Box>
    );
};
export default PeriodCloseIntegration;
