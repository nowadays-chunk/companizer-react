import { useState, useEffect, useCallback } from 'react';
import { helpersWrapper } from '../utils/clientQueries';

const useNotifications = (userId) => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const notificationHelper = helpersWrapper('notifications');

    // Fetch notifications
    const fetchNotifications = useCallback(async () => {
        if (!userId) return;

        try {
            const allNotifications = await notificationHelper.fetchItems();
            const userNotifications = allNotifications
                .filter(n => n.user_id === userId)
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

            setNotifications(userNotifications);
            setUnreadCount(userNotifications.filter(n => !n.is_read).length);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch notifications:', error);
            setLoading(false);
        }
    }, [userId, notificationHelper]);

    // Initial load
    useEffect(() => {
        // fetchNotifications();
    }, [fetchNotifications]);

    // Poll for new notifications every 30 seconds
    // useEffect(() => {
    //     const interval = setInterval(fetchNotifications, 30000);
    //     return () => clearInterval(interval);
    // }, [fetchNotifications]);

    // Mark notification as read
    const markAsRead = useCallback(async (notificationId) => {
        try {
            await notificationHelper.updateItem(notificationId, {
                is_read: true,
                read_at: new Date().toISOString()
            });

            setNotifications(prev => prev.map(n =>
                n.id === notificationId ? { ...n, is_read: true, read_at: new Date().toISOString() } : n
            ));
            setUnreadCount(prev => Math.max(0, prev - 1));
        } catch (error) {
            console.error('Failed to mark notification as read:', error);
        }
    }, [notificationHelper]);

    // Mark all as read
    const markAllAsRead = useCallback(async () => {
        try {
            const unreadNotifications = notifications.filter(n => !n.is_read);

            await Promise.all(
                unreadNotifications.map(n =>
                    notificationHelper.updateItem(n.id, {
                        is_read: true,
                        read_at: new Date().toISOString()
                    })
                )
            );

            setNotifications(prev => prev.map(n => ({ ...n, is_read: true, read_at: new Date().toISOString() })));
            setUnreadCount(0);
        } catch (error) {
            console.error('Failed to mark all as read:', error);
        }
    }, [notifications, notificationHelper]);

    // Create notification
    const createNotification = useCallback(async (notification) => {
        try {
            const newNotification = {
                user_id: notification.userId,
                type: notification.type,
                title: notification.title,
                message: notification.message,
                related_task_id: notification.relatedTaskId || null,
                related_entity_type: notification.relatedEntityType || null,
                related_entity_id: notification.relatedEntityId || null,
                is_read: false,
                created_at: new Date().toISOString()
            };

            await notificationHelper.addItem(newNotification);

            // Refresh notifications
            // fetchNotifications();
        } catch (error) {
            console.error('Failed to create notification:', error);
            throw error;
        }
    }, [fetchNotifications, notificationHelper]);

    // Delete notification
    const deleteNotification = useCallback(async (notificationId) => {
        try {
            await notificationHelper.deleteItem(notificationId);
            setNotifications(prev => prev.filter(n => n.id !== notificationId));

            const deletedNotification = notifications.find(n => n.id === notificationId);
            if (deletedNotification && !deletedNotification.is_read) {
                setUnreadCount(prev => Math.max(0, prev - 1));
            }
        } catch (error) {
            console.error('Failed to delete notification:', error);
        }
    }, [notifications, notificationHelper]);

    return {
        notifications,
        unreadCount,
        loading,
        markAsRead,
        markAllAsRead,
        createNotification,
        deleteNotification,
        refresh: () => { console.log("Fetching Notifications.") } // fetchNotifications
    };
};

export default useNotifications;
