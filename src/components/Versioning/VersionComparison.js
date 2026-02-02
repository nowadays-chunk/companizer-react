import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip
} from '@mui/material';
import { Compare, TrendingFlat } from '@mui/icons-material';

const VersionComparison = ({ open, onClose, version1, version2, compareVersions }) => {
    const [changes, setChanges] = useState([]);

    useEffect(() => {
        if (open && version1 && version2) {
            const diff = compareVersions(version1, version2);
            setChanges(diff);
        }
    }, [open, version1, version2, compareVersions]);

    const formatValue = (value) => {
        if (value === null || value === undefined) return 'N/A';
        if (typeof value === 'boolean') return value ? 'Yes' : 'No';
        if (typeof value === 'object') return JSON.stringify(value);
        return String(value);
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
            <DialogTitle>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Compare />
                    <Typography variant="h6">
                        Compare Versions {version1?.version_number} and {version2?.version_number}
                    </Typography>
                </Box>
            </DialogTitle>

            <DialogContent>
                <Box sx={{ mb: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Chip
                        label={`Version ${version1?.version_number}`}
                        color="primary"
                        variant="outlined"
                    />
                    <TrendingFlat />
                    <Chip
                        label={`Version ${version2?.version_number}`}
                        color="secondary"
                        variant="outlined"
                    />
                </Box>

                {changes.length === 0 ? (
                    <Typography color="text.secondary">
                        No changes detected between these versions
                    </Typography>
                ) : (
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 600 }}>Field</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>Version {version1?.version_number}</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>Version {version2?.version_number}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {changes.map((change, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                                                {change.field}
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={{ bgcolor: 'error.light', color: 'error.contrastText' }}>
                                            <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                                                {formatValue(change.oldValue)}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <TrendingFlat color="action" />
                                        </TableCell>
                                        <TableCell sx={{ bgcolor: 'success.light', color: 'success.contrastText' }}>
                                            <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                                                {formatValue(change.newValue)}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default VersionComparison;
