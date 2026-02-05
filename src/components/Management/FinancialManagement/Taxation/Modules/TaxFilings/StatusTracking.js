import React from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Chip } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { CheckCircle, HourglassEmpty, Send, Payment as PaymentIcon } from '@mui/icons-material';

const StatusTracking = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Status Tracking & Lifecycle</Typography>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Filing Lifecycle</Typography>
                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Jan 15, 2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="success"><CheckCircle /></TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="subtitle2">Draft Created</Typography>
                            <Typography variant="body2" color="text.secondary">VAT Return Q1 2024</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Jan 20, 2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="success"><CheckCircle /></TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="subtitle2">Approved Internally</Typography>
                            <Typography variant="body2" color="text.secondary">By: John Smith (CFO)</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Jan 25, 2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="success"><Send /></TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="subtitle2">Filed / E-Filed</Typography>
                            <Typography variant="body2" color="text.secondary">Confirmation: TAX-2024-001</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            Feb 10, 2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="success"><PaymentIcon /></TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="subtitle2">Paid</Typography>
                            <Typography variant="body2" color="text.secondary">Amount: $32,780</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Paper>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Filing ID</strong></TableCell>
                            <TableCell><strong>Tax Type</strong></TableCell>
                            <TableCell><strong>Period</strong></TableCell>
                            <TableCell><strong>Deadline</strong></TableCell>
                            <TableCell><strong>Status</strong></TableCell>
                            <TableCell><strong>Days Remaining</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>FIL-2024-001</TableCell>
                            <TableCell>VAT</TableCell>
                            <TableCell>Q1 2024</TableCell>
                            <TableCell>2024-04-30</TableCell>
                            <TableCell><Chip label="Paid" color="success" size="small" icon={<CheckCircle />} /></TableCell>
                            <TableCell>-</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>FIL-2024-002</TableCell>
                            <TableCell>WHT</TableCell>
                            <TableCell>Feb 2024</TableCell>
                            <TableCell>2024-03-15</TableCell>
                            <TableCell><Chip label="Filed" color="info" size="small" icon={<Send />} /></TableCell>
                            <TableCell>5 days</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>FIL-2024-003</TableCell>
                            <TableCell>Income Tax</TableCell>
                            <TableCell>2023</TableCell>
                            <TableCell>2024-06-30</TableCell>
                            <TableCell><Chip label="Draft" color="warning" size="small" icon={<HourglassEmpty />} /></TableCell>
                            <TableCell>45 days</TableCell>
                        </TableRow>
                        <TableRow sx={{ bgcolor: '#ffebee' }}>
                            <TableCell>FIL-2024-004</TableCell>
                            <TableCell>VAT</TableCell>
                            <TableCell>Feb 2024</TableCell>
                            <TableCell>2024-03-31</TableCell>
                            <TableCell><Chip label="Overdue" color="error" size="small" /></TableCell>
                            <TableCell>-5 days</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default StatusTracking;
