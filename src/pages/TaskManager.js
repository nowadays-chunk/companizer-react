import React, { useState, useEffect } from 'react';
import {
    Container,
    Box,
    Typography,
    Tabs,
    Tab,
    Card,
    CardContent,
    CardActions,
    Button,
    Chip,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    Alert
} from '@mui/material';
import { MoreVert, CheckCircle, PlayArrow, OpenInNew } from '@mui/icons-material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { helpersWrapper } from '../utils/firebaseCrudHelpers';
import { useAuthorization } from '../hooks/useAuthorization';
import useNotifications from '../hooks/useNotifications';

const TaskManager = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuthorization();
    const { createNotification } = useNotifications(currentUser?.id);

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentTab, setCurrentTab] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);

    const taskHelper = helpersWrapper('tasks');

    useEffect(() => {
        loadTasks();
    }, [currentUser]);

    const loadTasks = async () => {
        if (!currentUser) return;

        try {
            const allTasks = await taskHelper.fetchItems();
            const userTasks = allTasks.filter(t => t.assigned_to === currentUser.id);
            setTasks(userTasks);
            setLoading(false);
        } catch (error) {
            console.error('Failed to load tasks:', error);
            setLoading(false);
        }
    };

    const handleMenuClick = (event, task) => {
        setAnchorEl(event.currentTarget);
        setSelectedTask(task);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedTask(null);
    };

    const updateTaskStatus = async (taskId, newStatus) => {
        try {
            await taskHelper.updateItem(taskId, { status: newStatus });

            // Create notification for task assigner
            const task = tasks.find(t => t.id === taskId);
            if (task && task.assigned_by_user_id) {
                await createNotification({
                    userId: task.assigned_by_user_id,
                    type: 'task_completed',
                    title: 'Task Updated',
                    message: `${currentUser.first_name} ${currentUser.last_name} marked task "${task.title}" as ${newStatus}`,
                    relatedTaskId: taskId,
                    relatedEntityType: task.related_entity_type,
                    relatedEntityId: task.related_entity_id
                });
            }

            loadTasks();
            handleMenuClose();
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    const navigateToEntity = (task) => {
        if (task.related_entity_type && task.related_entity_id) {
            // Navigate to the related entity
            navigate(`/management/${task.related_entity_type}?view=${task.related_entity_id}`);
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'urgent': return 'error';
            case 'high': return 'warning';
            case 'medium': return 'info';
            case 'low': return 'default';
            default: return 'default';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'success';
            case 'in_progress': return 'primary';
            case 'overdue': return 'error';
            case 'pending': return 'warning';
            default: return 'default';
        }
    };

    const filterTasks = () => {
        switch (currentTab) {
            case 0: // All
                return tasks;
            case 1: // Pending
                return tasks.filter(t => t.status === 'pending');
            case 2: // In Progress
                return tasks.filter(t => t.status === 'in_progress');
            case 3: // Completed
                return tasks.filter(t => t.status === 'completed');
            default:
                return tasks;
        }
    };

    const filteredTasks = filterTasks();

    if (loading) {
        return (
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Typography>Loading tasks...</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    My Tasks
                </Typography>
                <Typography color="text.secondary">
                    Manage your assigned tasks and track progress
                </Typography>
            </Box>

            {/* Tabs */}
            <Tabs value={currentTab} onChange={(e, v) => setCurrentTab(v)} sx={{ mb: 3 }}>
                <Tab label={`All (${tasks.length})`} />
                <Tab label={`Pending (${tasks.filter(t => t.status === 'pending').length})`} />
                <Tab label={`In Progress (${tasks.filter(t => t.status === 'in_progress').length})`} />
                <Tab label={`Completed (${tasks.filter(t => t.status === 'completed').length})`} />
            </Tabs>

            {/* Task Cards */}
            {filteredTasks.length === 0 ? (
                <Alert severity="info">No tasks in this category</Alert>
            ) : (
                <Grid container spacing={2}>
                    {filteredTasks.map((task) => (
                        <Grid item xs={12} md={6} lg={4} key={task.id}>
                            <Card elevation={2}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Chip
                                            label={task.status.replace('_', ' ').toUpperCase()}
                                            size="small"
                                            color={getStatusColor(task.status)}
                                        />
                                        <IconButton size="small" onClick={(e) => handleMenuClick(e, task)}>
                                            <MoreVert />
                                        </IconButton>
                                    </Box>

                                    <Typography variant="h6" sx={{ mb: 1 }}>
                                        {task.title}
                                    </Typography>

                                    {task.description && (
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            {task.description}
                                        </Typography>
                                    )}

                                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                        <Chip
                                            label={task.priority.toUpperCase()}
                                            size="small"
                                            color={getPriorityColor(task.priority)}
                                            variant="outlined"
                                        />
                                        {task.sla_deadline && (
                                            <Chip
                                                label={`Due: ${format(new Date(task.sla_deadline), 'MMM d')}`}
                                                size="small"
                                                variant="outlined"
                                            />
                                        )}
                                    </Box>

                                    {task.related_entity_type && (
                                        <Typography variant="caption" color="text.secondary">
                                            Related to: {task.related_entity_type.replace(/_/g, ' ')}
                                        </Typography>
                                    )}
                                </CardContent>

                                <CardActions>
                                    {task.status !== 'in_progress' && task.status !== 'completed' && (
                                        <Button
                                            size="small"
                                            startIcon={<PlayArrow />}
                                            onClick={() => updateTaskStatus(task.id, 'in_progress')}
                                        >
                                            Start
                                        </Button>
                                    )}
                                    {task.status === 'in_progress' && (
                                        <Button
                                            size="small"
                                            startIcon={<CheckCircle />}
                                            onClick={() => updateTaskStatus(task.id, 'completed')}
                                        >
                                            Complete
                                        </Button>
                                    )}
                                    {task.related_entity_type && (
                                        <Button
                                            size="small"
                                            startIcon={<OpenInNew />}
                                            onClick={() => navigateToEntity(task)}
                                        >
                                            View Entity
                                        </Button>
                                    )}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* Task Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {selectedTask?.status !== 'in_progress' && (
                    <MenuItem onClick={() => updateTaskStatus(selectedTask.id, 'in_progress')}>
                        Start Task
                    </MenuItem>
                )}
                {selectedTask?.status === 'in_progress' && (
                    <MenuItem onClick={() => updateTaskStatus(selectedTask.id, 'completed')}>
                        Mark Complete
                    </MenuItem>
                )}
                {selectedTask?.status === 'completed' && (
                    <MenuItem onClick={() => updateTaskStatus(selectedTask.id, 'in_progress')}>
                        Reopen Task
                    </MenuItem>
                )}
            </Menu>
        </Container>
    );
};

export default TaskManager;
