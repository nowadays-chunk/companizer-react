import React, { useState } from 'react';
import {
    IconButton,
    Badge,
    Popover,
    Box,
    Typography,
    List,
    Button,
    Divider,
    CircularProgress
} from '@mui/material';
import { Notifications, DoneAll } from '@mui/icons-material';
import NotificationItem from './NotificationItem';
import useNotifications from '../../hooks/useNotifications';
import { useAuthorization } from '../../hooks/useAuthorization';

const NotificationBar = () => {
    const { currentUser } = useAuthorization();
    const {
        notifications,
        unreadCount,
        loading,
        markAsRead,
        markAllAsRead,
        deleteNotification
    } = useNotifications(currentUser?.id);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <IconButton
                color="inherit"
                onClick={handleClick}
                sx={{ ml: 1 }}
            >
                <Badge badgeContent={unreadCount} color="error">
                    <Notifications />
                </Badge>
            </IconButton>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    sx: { width: 400, maxHeight: 600 }
                }}
            >
                {/* Header */}
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">
                        Notifications
                        {unreadCount > 0 && (
                            <Typography component="span" variant="caption" color="primary" sx={{ ml: 1 }}>
                                ({unreadCount} unread)
                            </Typography>
                        )}
                    </Typography>
                    {unreadCount > 0 && (
                        <Button
                            size="small"
                            startIcon={<DoneAll />}
                            onClick={markAllAsRead}
                        >
                            Mark all read
                        </Button>
                    )}
                </Box>

                <Divider />

                {/* Notifications List */}
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                        <CircularProgress />
                    </Box>
                ) : notifications.length === 0 ? (
                    <Box sx={{ p: 4, textAlign: 'center' }}>
                        <Typography color="text.secondary">
                            No notifications
                        </Typography>
                    </Box>
                ) : (
                    <List sx={{ p: 0, maxHeight: 450, overflow: 'auto' }}>
                        {notifications.map((notification) => (
                            <NotificationItem
                                key={notification.id}
                                notification={notification}
                                onMarkAsRead={markAsRead}
                                onDelete={deleteNotification}
                            />
                        ))}
                    </List>
                )}
            </Popover>
        </>
    );
};

export default NotificationBar;
