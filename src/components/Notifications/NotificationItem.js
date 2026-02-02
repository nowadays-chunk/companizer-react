import React from 'react';
import { ListItem, ListItemText, ListItemIcon, Box, Typography, IconButton, Chip } from '@mui/material';
import {
    Assignment,
    CheckCircle,
    Verified,
    Close,
    Circle
} from '@mui/icons-material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const NotificationItem = ({ notification, onMarkAsRead, onDelete }) => {
    const navigate = useNavigate();

    const getIcon = () => {
        switch (notification.type) {
            case 'task_assigned':
                return <Assignment color="primary" />;
            case 'task_completed':
                return <CheckCircle color="success" />;
            case 'entity_validated':
                return <Verified color="info" />;
            default:
                return <Circle color="action" />;
        }
    };

    const getPriorityColor = () => {
        // You can extract priority from notification message or add it as a field
        return 'default';
    };

    const handleClick = () => {
        // Mark as read
        if (!notification.is_read) {
            onMarkAsRead(notification.id);
        }

        // Navigate to related entity or task
        if (notification.related_task_id) {
            navigate(`/project-task-management/tasks/tasks?view=${notification.related_task_id}`);
        } else if (notification.related_entity_type && notification.related_entity_id) {
            // Navigate to entity view
            // This will depend on your routing structure
            navigate(`/management/${notification.related_entity_type}?view=${notification.related_entity_id}`);
        }
    };

    return (
        <ListItem
            sx={{
                bgcolor: notification.is_read ? 'transparent' : 'action.hover',
                borderLeft: notification.is_read ? 'none' : '3px solid',
                borderColor: 'primary.main',
                cursor: 'pointer',
                '&:hover': {
                    bgcolor: 'action.selected'
                }
            }}
            secondaryAction={
                <IconButton edge="end" size="small" onClick={(e) => {
                    e.stopPropagation();
                    onDelete(notification.id);
                }}>
                    <Close fontSize="small" />
                </IconButton>
            }
            onClick={handleClick}
        >
            <ListItemIcon>
                {getIcon()}
            </ListItemIcon>
            <ListItemText
                primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: notification.is_read ? 400 : 600 }}>
                            {notification.title}
                        </Typography>
                        {!notification.is_read && (
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    bgcolor: 'primary.main'
                                }}
                            />
                        )}
                    </Box>
                }
                secondary={
                    <Box sx={{ mt: 0.5 }}>
                        <Typography variant="body2" color="text.secondary">
                            {notification.message}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                            {format(new Date(notification.created_at), 'MMM d, yyyy h:mm a')}
                        </Typography>
                    </Box>
                }
            />
        </ListItem>
    );
};

export default NotificationItem;
