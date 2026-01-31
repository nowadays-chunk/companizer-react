import React, { useEffect, useState, useMemo } from 'react';
import { Box, Typography, Paper, CircularProgress, Divider } from '@mui/material';
import {
    CheckCircle,
    ThumbUp,
    Cancel,
    Paid,
    Restore,
    PictureAsPdf,
    Email,
    Delete,
    History,
    Archive,
    Info,
    Edit,
    Add
} from '@mui/icons-material';
import { helpersWrapper } from '../utils/firebaseCrudHelpers';
import { collectionName as logsCollectionName } from './Management/manager_action_logs';

const ICON_MAP = {
    CheckCircle, ThumbUp, Cancel, Paid, Restore, PictureAsPdf, Email, Delete, History, Archive,
    'create': Add,
    'update': Edit,
    'default': Info
};

const ActionTimeline = ({ entityId, entityType }) => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const logsHelpers = useMemo(() => helpersWrapper(logsCollectionName), []);

    useEffect(() => {
        const fetchLogs = async () => {
            if (!entityId || !entityType) return;
            setLoading(true);
            try {
                // Fetch all logs and filter client-side (unless API supports filtering)
                // Assuming client-side filtering for now as per other components
                const allLogs = await logsHelpers.fetchItems();
                const relevantLogs = allLogs
                    .filter(log => log.entity_id === entityId && log.entity_type === entityType)
                    .sort((a, b) => new Date(b.created_at || b.timestamp) - new Date(a.created_at || a.timestamp)); // Newest first

                setLogs(relevantLogs);
            } catch (error) {
                console.error("Error fetching action logs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLogs();
    }, [entityId, entityType, logsHelpers]);

    if (loading) return <Box p={2} display="flex" justifyContent="center"><CircularProgress size={24} /></Box>;
    if (logs.length === 0) return null;

    return (
        <Box mt={4}>
            <Typography variant="h5" gutterBottom>Action History</Typography>
            <Paper sx={{ p: 2 }}>
                <Box sx={{ position: 'relative', pl: 2 }}>
                    {/* Vertical Line */}
                    <Box sx={{
                        position: 'absolute',
                        top: 16,
                        bottom: 16,
                        left: 28, // Center of the circle
                        width: 2,
                        bgcolor: 'grey.300',
                        zIndex: 0
                    }} />

                    {logs.map((log, index) => {
                        // Determine Icon
                        // Logic: verify action_type or status match specific icons
                        // fallback to 'default'
                        // If log.action_type is in dictionary?
                        // Assuming action_type might look like "Approve", "Send Email"
                        let IconComp = ICON_MAP.default;

                        // Heuristic for icons
                        const typeLower = (log.action_type || '').toLowerCase();
                        if (typeLower.includes('approv')) IconComp = ThumbUp;
                        else if (typeLower.includes('reject')) IconComp = Cancel;
                        else if (typeLower.includes('pay')) IconComp = Paid;
                        else if (typeLower.includes('email')) IconComp = Email;
                        else if (typeLower.includes('pdf')) IconComp = PictureAsPdf;
                        else if (typeLower.includes('delet')) IconComp = Delete;
                        else if (typeLower.includes('creat')) IconComp = Add;
                        else if (typeLower.includes('updat')) IconComp = Edit;
                        else if (typeLower.includes('archiv')) IconComp = Archive;
                        else if (typeLower.includes('restor')) IconComp = Restore;

                        return (
                            <Box key={log.id} sx={{ display: 'flex', mb: 3, position: 'relative', zIndex: 1 }}>
                                {/* Circle Node */}
                                <Box sx={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    bgcolor: 'white',
                                    border: '2px solid',
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2,
                                    flexShrink: 0
                                }}>
                                    <IconComp fontSize="small" />
                                </Box>

                                {/* Content */}
                                <Box sx={{ flexGrow: 1, pt: 0.5 }}>
                                    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {log.action_type || 'Unknown Action'}
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            {log.timestamp ? new Date(log.timestamp).toLocaleString() : (log.created_at ? new Date(log.created_at).toLocaleString() : '')}
                                        </Typography>
                                    </Box>

                                    <Typography variant="body2" color="textSecondary">
                                        Performed by: {log.accountable_id || 'System'}
                                    </Typography>

                                    {log.details && (
                                        <Box mt={0.5} p={1} bgcolor="grey.100" borderRadius={1}>
                                            <Typography variant="caption" sx={{ display: 'block', whiteSpace: 'pre-wrap' }}>
                                                {log.details}
                                            </Typography>
                                        </Box>
                                    )}

                                    {log.status === 'failed' && (
                                        <Typography variant="caption" color="error" sx={{ mt: 0.5, display: 'block' }}>
                                            Status: Failed
                                        </Typography>
                                    )}
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Paper>
        </Box>
    );
};

export default ActionTimeline;
