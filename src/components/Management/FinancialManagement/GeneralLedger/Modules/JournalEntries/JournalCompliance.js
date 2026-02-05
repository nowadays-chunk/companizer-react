import React from 'react';
import {
    Box,
    Button,
    Grid,
    Paper,
    Typography,
    Alert,
    AlertTitle,
    LinearProgress
} from '@mui/material';
import {
    VerifiedUser,
    Lock,
    HistoryEdu
} from '@mui/icons-material';
import Management from '../../../../../../pages/Management';

const JournalCompliance = () => {

    return (
        <Box height="100%" display="flex" flexDirection="column">
            <Paper square sx={{ p: 2, borderBottom: '1px solid #e0e0e0', bgcolor: 'background.default' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" color="primary" display="flex" alignItems="center">
                            <VerifiedUser sx={{ mr: 1 }} />
                            Compliance & Audit Center
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            SOX Controls, Audit Trails, and Closed Period Management.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Alert severity="success" icon={<Lock fontSize="inherit" />}>
                            <AlertTitle>Period Locked</AlertTitle>
                            Prior Fiscal Year (2025) is hard-closed. No changes allowed.
                        </Alert>
                    </Grid>
                </Grid>
            </Paper>

            {/* Usage usage of Management to show Locked/Posted Journals or Audit Logs */}
            <Box flexGrow={1} overflow="hidden">
                <Management
                    module="financial-management"
                    subModule="general-ledger"
                    component="journal-entries"
                    // Filter for locked or significant journals
                    initialFilters={[{ column: 'locked', value: 'true', active: true }]}
                />
            </Box>
        </Box>
    );
};

export default JournalCompliance;
