import React from 'react';
import { Box, Typography } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ReceiptIcon from '@mui/icons-material/Receipt';

const activities = [
    { time: '10:00 AM', date: 'Oct 24', type: 'email', title: 'Sent Proposal', desc: 'Q4 Marketing Strategy Proposal' },
    { time: '02:30 PM', date: 'Oct 23', type: 'meeting', title: 'Client Review', desc: 'Zoom call with John Doe' },
    { time: '09:15 AM', date: 'Oct 21', type: 'phone', title: 'Follow-up Call', desc: 'Discussed budget constraints' },
    { time: '04:45 PM', date: 'Oct 18', type: 'invoice', title: 'Invoice Paid', desc: 'INV-2023-001 ($5,000)' },
];

const getIcon = (type) => {
    switch (type) {
        case 'email': return <EmailIcon fontSize="small" />;
        case 'meeting': return <MeetingRoomIcon fontSize="small" />;
        case 'phone': return <PhoneIcon fontSize="small" />;
        case 'invoice': return <ReceiptIcon fontSize="small" />;
        default: return <EmailIcon fontSize="small" />;
    }
}

const getColor = (type) => {
    switch (type) {
        case 'email': return 'primary';
        case 'meeting': return 'warning';
        case 'phone': return 'info';
        case 'invoice': return 'success';
        default: return 'grey';
    }
}

const ActivityTimeline = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Recent Activity</Typography>
            <Timeline position="alternate">
                {activities.map((activity, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent color="text.secondary">
                            <Typography variant="caption" display="block">{activity.date}</Typography>
                            <Typography variant="caption">{activity.time}</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color={getColor(activity.type)}>
                                {getIcon(activity.type)}
                            </TimelineDot>
                            {index < activities.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="subtitle2" component="span">
                                {activity.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {activity.desc}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
};

export default ActivityTimeline;
