import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Chip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Alert
} from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';

const StatusLifecycle = () => {
    const [status, setStatus] = useState('active');

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Status Lifecycle</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>Current State</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Typography variant="h3" sx={{ mr: 2 }}>Active</Typography>
                            <Chip label="In Good Standing" color="success" />
                        </Box>

                        <Alert severity="info" sx={{ mb: 3 }}>
                            Loan is currently active and accruing interest. Repayments are due according to schedule.
                        </Alert>

                        <Typography variant="subtitle2" gutterBottom>Change Status</Typography>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel>Target Status</InputLabel>
                            <Select
                                value={status}
                                label="Target Status"
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <MenuItem value="draft">Draft</MenuItem>
                                <MenuItem value="active">Active</MenuItem>
                                <MenuItem value="suspended">Suspended</MenuItem>
                                <MenuItem value="in_default">In Default</MenuItem>
                                <MenuItem value="restructured">Restructured</MenuItem>
                                <MenuItem value="paid_off">Fully Repaid (Closed)</MenuItem>
                                <MenuItem value="written_off">Written Off</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" color="warning" disabled={status === 'active'}>
                            Update Status
                        </Button>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Lifecycle History</Typography>
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    Oct 15, 2023
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="success" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>Active</Typography>
                                    <Typography variant="caption">Disbursement Complete</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    Oct 10, 2023
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>Draft</Typography>
                                    <Typography variant="caption">Created</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StatusLifecycle;
