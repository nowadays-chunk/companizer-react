import React from 'react';
import { Paper, Box, IconButton, Typography } from '@mui/material';
import { Close, Settings } from '@mui/icons-material';

const DashboardWidget = ({
    id,
    title,
    children,
    onRemove,
    onSettings,
    loading = false,
    error = null
}) => {
    return (
        <Paper
            elevation={2}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
            }}
        >
            {/* Widget Header */}
            <Box
                sx={{
                    p: 1.5,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    bgcolor: 'action.hover'
                }}
            >
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600 }}>
                    {title}
                </Typography>
                <Box>
                    {onSettings && (
                        <IconButton size="small" onClick={onSettings}>
                            <Settings fontSize="small" />
                        </IconButton>
                    )}
                    {onRemove && (
                        <IconButton size="small" onClick={() => onRemove(id)}>
                            <Close fontSize="small" />
                        </IconButton>
                    )}
                </Box>
            </Box>

            {/* Widget Content */}
            <Box sx={{ p: 2, flexGrow: 1, overflow: 'auto' }}>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Typography color="text.secondary">Loading...</Typography>
                    </Box>
                ) : error ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Typography color="error">{error}</Typography>
                    </Box>
                ) : (
                    children
                )}
            </Box>
        </Paper>
    );
};

export default DashboardWidget;
