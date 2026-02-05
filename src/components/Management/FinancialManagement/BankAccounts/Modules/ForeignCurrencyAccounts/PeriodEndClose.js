import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Checkbox,
    Chip,
    Alert,
    LinearProgress
} from '@mui/material';
import { Lock, CheckCircle, Warning, Description } from '@mui/icons-material';

const PeriodEndClose = () => {
    const [tasks, setTasks] = useState([
        { id: 1, label: 'Verify Daily Exchange Rates', completed: true, status: 'Verified' },
        { id: 2, label: 'Review Unrealized Gains/Losses', completed: false, status: 'Pending' },
        { id: 3, label: 'Post FX Revaluation Journals', completed: false, status: 'Locked' },
        { id: 4, label: 'Reconcile Intercompany FX Balances', completed: false, status: 'Pending' },
        { id: 5, label: 'Generate Month-End Reports', completed: false, status: 'Pending' }
    ]);

    const handleToggle = (id) => () => {
        const newTasks = tasks.map(t =>
            t.id === id ? { ...t, completed: !t.completed, status: !t.completed ? 'Completed' : 'Pending' } : t
        );
        setTasks(newTasks);
    };

    const progress = (tasks.filter(t => t.completed).length / tasks.length) * 100;

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">
                    Period-End Close (FX) - Oct 2025
                </Typography>
                <Button variant="contained" color="error" startIcon={<Lock />}>
                    Close Period
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Closing Checklist
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Box sx={{ width: '100%', mr: 1 }}>
                                <LinearProgress variant="determinate" value={progress} />
                            </Box>
                            <Box sx={{ minWidth: 35 }}>
                                <Typography variant="body2" color="textSecondary">{`${Math.round(progress)}%`}</Typography>
                            </Box>
                        </Box>

                        <List>
                            {tasks.map((task) => (
                                <ListItem key={task.id} button onClick={handleToggle(task.id)} divider>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={task.completed}
                                            tabIndex={-1}
                                            disableRipple
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={task.label} />
                                    <Chip
                                        label={task.status}
                                        color={task.completed ? "success" : "default"}
                                        size="small"
                                        variant="outlined"
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Alert severity="warning" sx={{ mb: 2 }}>
                        <Typography variant="subtitle2">Warning</Typography>
                        Unposted revaluation journals found. Please post before closing.
                    </Alert>

                    <Paper sx={{ p: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Related Documents
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemIcon><Description /></ListItemIcon>
                                <ListItemText primary="Revaluation Report.pdf" secondary="Generated 1 hour ago" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><Description /></ListItemIcon>
                                <ListItemText primary="Unrealized_GL_Detail.xlsx" secondary="Generated 1 hour ago" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PeriodEndClose;
