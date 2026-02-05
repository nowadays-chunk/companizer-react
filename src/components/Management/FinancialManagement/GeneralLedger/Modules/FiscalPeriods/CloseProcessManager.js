import React, { useState } from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Typography,
    LinearProgress,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Checkbox,
    Button,
    useTheme,
    Paper
} from '@mui/material';

export const fieldsConfig = {
    task_name: { label: 'Task Name', type: 'text' },
    is_completed: { label: 'Completed', type: 'checkbox' },
    completed_by: { label: 'Completed By', type: 'text' },
    completion_date: { label: 'Date', type: 'date' }
};

export const entityName = 'Close Process';

const CloseProcessManager = () => {
    const theme = useTheme();
    const [checklist, setChecklist] = useState([
        { id: 1, task: 'Sub-ledger Reconciliation (AR/AP)', completed: true },
        { id: 2, task: 'Inventory Valuation', completed: true },
        { id: 3, task: 'Fixed Assets Depreciation Run', completed: false },
        { id: 4, task: 'Bank Reconciliation', completed: false },
        { id: 5, task: 'Accruals Posted', completed: false },
    ]);

    const toggleTask = (id) => {
        setChecklist(checklist.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
    };

    const progress = (checklist.filter(c => c.completed).length / checklist.length) * 100;

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Close Process Manager"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <CardContent>
                    <Box sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body1" color="primary" fontWeight="medium">Close Readiness</Typography>
                            <Typography variant="body2" color="primary">{Math.round(progress)}%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 5 }} />
                    </Box>

                    <Paper variant="outlined" sx={{ p: 2, bgcolor: theme.palette.background.default }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>Close Checklist</Typography>
                        <List>
                            {checklist.map((item) => (
                                <ListItem key={item.id} dense button onClick={() => toggleTask(item.id)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={item.completed}
                                            tabIndex={-1}
                                            disableRipple
                                            color="primary"
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.task}
                                        primaryTypographyProps={{
                                            style: { textDecoration: item.completed ? 'line-through' : 'none', color: item.completed ? theme.palette.text.disabled : theme.palette.text.primary }
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>

                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="contained"
                            color="success"
                            size="large"
                            disabled={progress < 100}
                        >
                            Finalize Close
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CloseProcessManager;
