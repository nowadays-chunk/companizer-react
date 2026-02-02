import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Autocomplete,
    MenuItem,
    Box,
    FormControlLabel,
    Checkbox,
    Alert
} from '@mui/material';
import { Send } from '@mui/icons-material';
import { helpersWrapper } from '../../utils/firebaseCrudHelpers';
import useNotifications from '../../hooks/useNotifications';
import { useAuthorization } from '../../hooks/useAuthorization';

const TaskAssignmentDialog = ({ open, onClose, entityType, entityId, entityName }) => {
    const { currentUser } = useAuthorization();
    const { createNotification } = useNotifications(currentUser?.id);

    const [users, setUsers] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(true);

    const [formData, setFormData] = useState({
        assignedTo: null,
        title: '',
        description: '',
        priority: 'medium',
        slaDeadline: '',
        sendEmail: true
    });

    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);

    const taskHelper = helpersWrapper('tasks');
    const userHelper = helpersWrapper('users');

    // Load users
    useEffect(() => {
        const loadUsers = async () => {
            try {
                const allUsers = await userHelper.fetchItems();
                setUsers(allUsers);
                setLoadingUsers(false);
            } catch (err) {
                console.error('Failed to load users:', err);
                setLoadingUsers(false);
            }
        };

        if (open) {
            loadUsers();
            // Set default title based on entity
            if (entityType && entityName) {
                setFormData(prev => ({
                    ...prev,
                    title: `Review ${entityType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}: ${entityName}`
                }));
            }
        }
    }, [open, entityType, entityName]);

    const handleSubmit = async () => {
        if (!formData.assignedTo || !formData.title) {
            setError('Please select a user and provide a task title');
            return;
        }

        setSaving(true);
        setError(null);

        try {
            // Create task
            const newTask = {
                title: formData.title,
                description: formData.description,
                assigned_to: formData.assignedTo.id,
                assigned_by_user_id: currentUser.id,
                assigned_via: formData.assignedTo.email ? 'email' : 'user_id',
                related_entity_type: entityType,
                related_entity_id: entityId,
                priority: formData.priority,
                sla_deadline: formData.slaDeadline ? new Date(formData.slaDeadline).toISOString() : null,
                status: 'pending',
                notification_sent: true,
                email_notification_sent: formData.sendEmail,
                created_at: new Date().toISOString()
            };

            const createdTask = await taskHelper.addItem(newTask);

            // Create notification for assigned user
            await createNotification({
                userId: formData.assignedTo.id,
                type: 'task_assigned',
                title: 'New Task Assigned',
                message: `${currentUser.first_name} ${currentUser.last_name} assigned you: ${formData.title}`,
                relatedTaskId: createdTask.id,
                relatedEntityType: entityType,
                relatedEntityId: entityId
            });

            // TODO: Send email if requested (requires backend email service)
            if (formData.sendEmail) {
                console.log('Email notification would be sent to:', formData.assignedTo.email);
                // await emailService.sendTaskAssignment(formData.assignedTo.email, newTask);
            }

            // Reset form and close
            setFormData({
                assignedTo: null,
                title: '',
                description: '',
                priority: 'medium',
                slaDeadline: '',
                sendEmail: true
            });
            onClose();
        } catch (err) {
            console.error('Failed to create task:', err);
            setError('Failed to create task. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Assign Task</DialogTitle>

            <DialogContent>
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                    {/* Assign To User */}
                    <Autocomplete
                        options={users}
                        getOptionLabel={(option) => `${option.first_name} ${option.last_name} (${option.email})`}
                        loading={loadingUsers}
                        value={formData.assignedTo}
                        onChange={(e, value) => setFormData(prev => ({ ...prev, assignedTo: value }))}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Assign To"
                                required
                                helperText="Search by name or email"
                            />
                        )}
                    />

                    {/* Task Title */}
                    <TextField
                        label="Task Title"
                        required
                        fullWidth
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    />

                    {/* Description */}
                    <TextField
                        label="Description"
                        multiline
                        rows={3}
                        fullWidth
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    />

                    {/* Priority */}
                    <TextField
                        select
                        label="Priority"
                        value={formData.priority}
                        onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                        fullWidth
                    >
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                        <MenuItem value="urgent">Urgent</MenuItem>
                    </TextField>

                    {/* SLA Deadline */}
                    <TextField
                        label="SLA Deadline"
                        type="datetime-local"
                        fullWidth
                        value={formData.slaDeadline}
                        onChange={(e) => setFormData(prev => ({ ...prev, slaDeadline: e.target.value }))}
                        InputLabelProps={{ shrink: true }}
                        helperText="Optional deadline for task completion"
                    />

                    {/* Send Email */}
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formData.sendEmail}
                                onChange={(e) => setFormData(prev => ({ ...prev, sendEmail: e.target.checked }))}
                            />
                        }
                        label="Send email notification"
                    />
                </Box>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} disabled={saving}>
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={saving || !formData.assignedTo || !formData.title}
                    startIcon={<Send />}
                >
                    {saving ? 'Assigning...' : 'Assign Task'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TaskAssignmentDialog;
