import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Chip, Typography } from '@mui/material';
import DashboardWidget from '../DashboardWidget';
import { format } from 'date-fns';

const RecentActivityWidget = ({ id, config, onRemove }) => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock recent activity data
        // In production, this would fetch from an audit trail or activity log
        const mockActivities = [
            { id: 1, action: 'Created', entity: 'Vendor Invoice', user: 'John Doe', timestamp: new Date(Date.now() - 300000) },
            { id: 2, action: 'Updated', entity: 'Customer Invoice', user: 'Jane Smith', timestamp: new Date(Date.now() - 600000) },
            { id: 3, action: 'Approved', entity: 'Cash Flow Forecast', user: 'Mike Johnson', timestamp: new Date(Date.now() - 900000) },
            { id: 4, action: 'Deleted', entity: 'Budget Allocation', user: 'Sarah Williams', timestamp: new Date(Date.now() - 1200000) },
            { id: 5, action: 'Created', entity: 'Employee Record', user: 'Tom Brown', timestamp: new Date(Date.now() - 1500000) },
        ];

        setActivities(mockActivities.slice(0, config.limit || 10));
        setLoading(false);
    }, [config.limit]);

    const getActionColor = (action) => {
        switch (action.toLowerCase()) {
            case 'created': return 'success';
            case 'updated': return 'info';
            case 'approved': return 'primary';
            case 'deleted': return 'error';
            default: return 'default';
        }
    };

    return (
        <DashboardWidget
            id={id}
            title={config.title || 'Recent Activity'}
            onRemove={onRemove}
            loading={loading}
        >
            {activities.length === 0 ? (
                <Typography color="text.secondary" align="center">
                    No recent activity
                </Typography>
            ) : (
                <List dense>
                    {activities.map((activity) => (
                        <ListItem key={activity.id} divider>
                            <ListItemText
                                primary={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Chip
                                            label={activity.action}
                                            size="small"
                                            color={getActionColor(activity.action)}
                                        />
                                        <Typography variant="body2">{activity.entity}</Typography>
                                    </Box>
                                }
                                secondary={
                                    <Typography variant="caption" color="text.secondary">
                                        by {activity.user} • {format(activity.timestamp, 'MMM d, h:mm a')}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </DashboardWidget>
    );
};

export default RecentActivityWidget;
