import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, ListItemIcon, Checkbox, IconButton, TextField, Button } from '@mui/material';
import { CalendarMonth, Event, EventBusy, Add } from '@mui/icons-material';

const BudgetCalendarsDeadlines = () => {
    const [deadlines, setDeadlines] = useState([
        { id: 1, title: "Q3 Reforecast Submission", due: "Due: July 15, 2024", type: "warning", done: false },
        { id: 2, title: "FY2025 Initial Draft", due: "Due: August 30, 2024", type: "error", done: false },
        { id: 3, title: "June Budget Review", due: "Meeting: June 25, 2024", type: "success", done: true },
    ]);

    const handleToggle = (id) => {
        setDeadlines(deadlines.map(d => d.id === id ? { ...d, done: !d.done } : d));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarMonth color="primary" /> Budget Calendars & Deadlines
                </Typography>
                <Button startIcon={<Add />}>Add Event</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Upcoming Deadlines</Typography>
                            <List>
                                {deadlines.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        secondaryAction={
                                            <Checkbox
                                                edge="end"
                                                checked={item.done}
                                                onChange={() => handleToggle(item.id)}
                                            />
                                        }
                                    >
                                        <ListItemIcon>
                                            <Event color={item.type} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.title}
                                            secondary={item.due}
                                            sx={{ textDecoration: item.done ? 'line-through' : 'none' }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Freeze Periods</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><EventBusy color="action" /></ListItemIcon>
                                    <ListItemText primary="Year-End Close Freeze" secondary="Dec 20 - Jan 5" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><EventBusy color="action" /></ListItemIcon>
                                    <ListItemText primary="Audit Quiet Period" secondary="Feb 1 - Feb 15" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BudgetCalendarsDeadlines;
