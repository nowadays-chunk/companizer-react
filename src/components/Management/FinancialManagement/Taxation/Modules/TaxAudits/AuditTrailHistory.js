import React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';

import {
    Box,
    Typography,
    Paper
} from '@mui/material';
import { faker } from '@faker-js/faker';

const generateHistory = (count) => Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    action: faker.helpers.arrayElement(['Status Change', 'Document Upload', 'Approval', 'Comment', 'Adjustment']),
    user: faker.person.fullName(),
    timestamp: faker.date.recent().toLocaleString(),
    details: faker.lorem.sentence()
}));

const AuditTrailHistory = () => {
    const events = generateHistory(8);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Audit Trail & History</Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
                Immutable record of all actions taken within the audit lifecycle.
            </Typography>

            <Paper sx={{ p: 4, maxWidth: 800, margin: '0 auto' }}>
                <Timeline position="alternate">
                    {events.map((event, index) => (
                        <TimelineItem key={event.id}>
                            <TimelineOppositeContent color="text.secondary">
                                {event.timestamp}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={index % 2 === 0 ? "primary" : "secondary"} />
                                {index < events.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span">
                                    {event.action}
                                </Typography>
                                <Typography>{event.details}</Typography>
                                <Typography variant="caption" color="textSecondary">by {event.user}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Paper>
        </Box>
    );
};

export default AuditTrailHistory;
