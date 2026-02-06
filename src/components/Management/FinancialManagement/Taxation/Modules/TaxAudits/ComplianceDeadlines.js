import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Chip, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Event, Warning, CheckCircle } from '@mui/icons-material';

const deadlines = [
    { id: 1, title: 'VAT Appeal Submission', date: '2025-11-15', status: 'Urgent', type: 'Legal' },
    { id: 2, title: 'Corporate Tax Inquiry Response', date: '2025-11-20', status: 'Pending', type: 'Inquiry' },
    { id: 3, title: 'Penalty Payment (Q3)', date: '2025-11-30', status: 'Upcoming', type: 'Payment' },
];

const ComplianceDeadlines = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Compliance & Deadlines</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 0 }}>
                        <List>
                            {deadlines.map((item) => (
                                <ListItem key={item.id} divider>
                                    <ListItemIcon>
                                        <Event color={item.status === 'Urgent' ? 'error' : 'primary'} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.title}
                                        secondary={`Due: ${item.date}`}
                                    />
                                    <Chip
                                        label={item.status}
                                        color={item.status === 'Urgent' ? 'error' : item.status === 'Pending' ? 'warning' : 'default'}
                                        size="small"
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, bgcolor: '#fff3e0', mb: 2 }}>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Warning color="warning" />
                            <Typography variant="h6">Urgent Actions</Typography>
                        </Box>
                        <Typography variant="h3" sx={{ mt: 2 }}>1</Typography>
                        <Typography variant="body2">Deadline within 3 days</Typography>
                    </Paper>
                    <Paper sx={{ p: 3, bgcolor: '#e8f5e9' }}>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <CheckCircle color="success" />
                            <Typography variant="h6">Completed</Typography>
                        </Box>
                        <Typography variant="h3" sx={{ mt: 2 }}>12</Typography>
                        <Typography variant="body2">This month</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ComplianceDeadlines;
