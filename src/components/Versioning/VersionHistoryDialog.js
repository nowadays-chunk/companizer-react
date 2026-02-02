import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Chip,
    IconButton,
    Tooltip,
    Alert,
    CircularProgress,
    List,
    ListItem,
    Divider
} from '@mui/material';
import {
    History,
    Restore,
    Person,
    CheckCircle,
    RadioButtonUnchecked,
    FiberManualRecord
} from '@mui/icons-material';
import { format } from 'date-fns';
import useVersioning from '../../hooks/useVersioning';
import VersionComparison from './VersionComparison';
import { useAuthorization } from '../../hooks/useAuthorization';

const VersionHistoryDialog = ({ open, onClose, entityType, rowId, onRestore }) => {
    const { currentUser } = useAuthorization();
    const { versionHistory, loading, fetchVersionHistory, restoreVersion, compareVersions } = useVersioning(entityType);

    const [selectedVersions, setSelectedVersions] = useState([]);
    const [comparisonOpen, setComparisonOpen] = useState(false);
    const [restoring, setRestoring] = useState(false);

    useEffect(() => {
        if (open && rowId) {
            fetchVersionHistory(rowId);
        }
    }, [open, rowId, fetchVersionHistory]);

    const handleRestore = async (version) => {
        if (!window.confirm(`Restore to version ${version.version_number}? This will create a new version with the old data.`)) {
            return;
        }

        setRestoring(true);
        try {
            await restoreVersion(version, currentUser?.id);

            if (onRestore) {
                onRestore();
            }

            await fetchVersionHistory(rowId);
        } catch (error) {
            alert('Failed to restore version: ' + error.message);
        } finally {
            setRestoring(false);
        }
    };

    const handleCompare = () => {
        if (selectedVersions.length === 2) {
            setComparisonOpen(true);
        }
    };

    const toggleVersionSelection = (version) => {
        setSelectedVersions(prev => {
            const isSelected = prev.find(v => v.id === version.id);
            if (isSelected) {
                return prev.filter(v => v.id !== version.id);
            } else if (prev.length < 2) {
                return [...prev, version];
            }
            return prev;
        });
    };

    return (
        <>
            <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
                <DialogTitle>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <History />
                        <Typography variant="h6">Version History</Typography>
                    </Box>
                </DialogTitle>

                <DialogContent>
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                            <CircularProgress />
                        </Box>
                    ) : versionHistory.length === 0 ? (
                        <Alert severity="info">No version history available</Alert>
                    ) : (
                        <>
                            {selectedVersions.length === 2 && (
                                <Alert
                                    severity="info"
                                    sx={{ mb: 2 }}
                                    action={
                                        <Button size="small" onClick={handleCompare}>
                                            Compare
                                        </Button>
                                    }
                                >
                                    2 versions selected for comparison
                                </Alert>
                            )}

                            <List>
                                {versionHistory.map((version, index) => (
                                    <React.Fragment key={version.id}>
                                        <ListItem
                                            sx={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                py: 2,
                                                bgcolor: version.is_current_version ? 'action.hover' : 'transparent'
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
                                                {/* Version indicator dot */}
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 40 }}>
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => toggleVersionSelection(version)}
                                                        color={version.is_current_version ? 'primary' : 'default'}
                                                    >
                                                        {selectedVersions.find(v => v.id === version.id) ? (
                                                            <CheckCircle />
                                                        ) : (
                                                            <FiberManualRecord fontSize="small" />
                                                        )}
                                                    </IconButton>
                                                    {index < versionHistory.length - 1 && (
                                                        <Box sx={{ width: 2, height: '100%', minHeight: 30, bgcolor: 'divider', mt: 1 }} />
                                                    )}
                                                </Box>

                                                {/* Version info */}
                                                <Box sx={{ flex: 1 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                                            Version {version.version_number}
                                                        </Typography>
                                                        {version.is_current_version && (
                                                            <Chip label="Current" size="small" color="primary" />
                                                        )}
                                                    </Box>

                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                                                        <Person fontSize="small" color="action" />
                                                        <Typography variant="body2" color="text.secondary">
                                                            Modified by User {version.version_author_id || 'Unknown'}
                                                        </Typography>
                                                    </Box>

                                                    <Typography variant="caption" color="text.secondary">
                                                        {format(new Date(version.version_date), 'MMM d, yyyy h:mm a')}
                                                    </Typography>

                                                    {!version.is_current_version && (
                                                        <Box sx={{ mt: 1 }}>
                                                            <Tooltip title="Restore this version">
                                                                <Button
                                                                    size="small"
                                                                    startIcon={<Restore />}
                                                                    onClick={() => handleRestore(version)}
                                                                    disabled={restoring}
                                                                    variant="outlined"
                                                                >
                                                                    Restore
                                                                </Button>
                                                            </Tooltip>
                                                        </Box>
                                                    )}
                                                </Box>
                                            </Box>
                                        </ListItem>
                                        {index < versionHistory.length - 1 && <Divider />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </>
                    )}
                </DialogContent>

                <DialogActions>
                    <Button onClick={onClose}>Close</Button>
                </DialogActions>
            </Dialog>

            {/* Version Comparison Dialog */}
            {selectedVersions.length === 2 && (
                <VersionComparison
                    open={comparisonOpen}
                    onClose={() => setComparisonOpen(false)}
                    version1={selectedVersions[0]}
                    version2={selectedVersions[1]}
                    compareVersions={compareVersions}
                />
            )}
        </>
    );
};

export default VersionHistoryDialog;
