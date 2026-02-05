import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    Paper,
    Typography,
    Card,
    CardContent,
    LinearProgress
} from '@mui/material';
import {
    PlayArrow,
    Schedule,
    History
} from '@mui/icons-material';
import Management from '../../../../../../pages/Management';

const RecurringJournals = () => {
    const [processing, setProcessing] = useState(false);

    const handleRunSchedule = () => {
        setProcessing(true);
        // Simulate batch processing
        setTimeout(() => {
            setProcessing(false);
            alert("Successfully generated 3 journals from active templates.");
        }, 2000);
    };

    return (
        <Box height="100%" display="flex" flexDirection="column">
            {/* Header Summary */}
            <Paper square sx={{ p: 2, borderBottom: '1px solid #e0e0e0', bgcolor: 'background.default' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={8}>
                        <Typography variant="h6" color="primary" display="flex" alignItems="center">
                            <Schedule sx={{ mr: 1 }} />
                            Recurring Journal Schedules
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Manage templates for accruals, amortizations, and recurring fees.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="flex-end">
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<PlayArrow />}
                            onClick={handleRunSchedule}
                            disabled={processing}
                        >
                            {processing ? 'Processing...' : 'Run Pending Schedules'}
                        </Button>
                    </Grid>
                </Grid>
                {processing && <LinearProgress sx={{ mt: 2 }} />}
            </Paper>

            {/* List View */}
            <Box flexGrow={1} overflow="hidden">
                <Management
                    module="financial-management"
                    subModule="general-ledger"
                    component="journal-entries"
                    // Filter specifically for items marked as recurring templates
                    initialFilters={[{ column: 'is_recurring', value: 'true', active: true }]}
                />
            </Box>
        </Box>
    );
};

export default RecurringJournals;
