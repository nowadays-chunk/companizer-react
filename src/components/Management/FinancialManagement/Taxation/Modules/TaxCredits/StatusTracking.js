import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { TrackChanges, Drafts, Gavel, CheckCircle } from '@mui/icons-material';

const StatusTracking = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">Lifecycle Timeline</Typography>
            <Paper sx={{ p: 3, bgcolor: 'transparent', boxShadow: 'none' }}>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">2025-04-01</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary"><Drafts /></TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography fontWeight="600">Draft Created</Typography>
                            <Typography variant="body2">Initial calculation run</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">2025-04-05</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="warning"><Gavel /></TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography fontWeight="600">Under Review</Typography>
                            <Typography variant="body2">Manager checking eligibility</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">2025-04-12</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="success"><CheckCircle /></TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography fontWeight="600">Approved</Typography>
                            <Typography variant="body2">Ready for application</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Paper>
        </Box>
    );
};

export default StatusTracking;
