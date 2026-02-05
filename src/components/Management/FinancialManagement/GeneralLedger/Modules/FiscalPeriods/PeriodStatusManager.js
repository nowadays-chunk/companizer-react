import React, { useState } from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Button,
    useTheme,
    Typography
} from '@mui/material';

export const fieldsConfig = {
    period: { label: 'Period', type: 'text' },
    current_status: { label: 'Current Status', type: 'text' },
    action: { label: 'Action', type: 'select', options: [{ id: 'lock', label: 'Lock' }, { id: 'unlock', label: 'Unlock' }, { id: 'soft_close', label: 'Soft Close' }] },
    comments: { label: 'Comments', type: 'textarea' }
};

export const entityName = 'Period Status';

const PeriodStatusManager = () => {
    const theme = useTheme();
    const [periods, setPeriods] = useState([
        { id: 1, name: 'Jan 2026', status: 'Open', locked_by: null },
        { id: 2, name: 'Dec 2025', status: 'Soft Closed', locked_by: 'System' },
        { id: 3, name: 'Nov 2025', status: 'Hard Closed', locked_by: 'Admin' },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setPeriods(periods.map(p => p.id === id ? { ...p, status: newStatus } : p));
    };

    const getStatusChipProps = (status) => {
        switch (status) {
            case 'Open': return { color: 'success', variant: 'outlined' };
            case 'Soft Closed': return { color: 'warning', variant: 'outlined' };
            case 'Hard Closed': return { color: 'error', variant: 'filled' };
            default: return { color: 'default' };
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Period Status Management"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <CardContent>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: theme.palette.action.hover }}>
                                    <TableCell>Period</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Locked By</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {periods.map((period) => (
                                    <TableRow key={period.id}>
                                        <TableCell sx={{ fontWeight: 'medium' }}>{period.name}</TableCell>
                                        <TableCell>
                                            <Chip label={period.status} {...getStatusChipProps(period.status)} size="small" />
                                        </TableCell>
                                        <TableCell>{period.locked_by || '-'}</TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                {period.status === 'Open' && (
                                                    <Button
                                                        size="small"
                                                        color="warning"
                                                        onClick={() => handleStatusChange(period.id, 'Soft Closed')}
                                                    >
                                                        Soft Close
                                                    </Button>
                                                )}
                                                {period.status === 'Soft Closed' && (
                                                    <>
                                                        <Button
                                                            size="small"
                                                            color="error"
                                                            onClick={() => handleStatusChange(period.id, 'Hard Closed')}
                                                        >
                                                            Hard Close
                                                        </Button>
                                                        <Button
                                                            size="small"
                                                            color="success"
                                                            onClick={() => handleStatusChange(period.id, 'Open')}
                                                        >
                                                            Reopen
                                                        </Button>
                                                    </>
                                                )}
                                                {period.status === 'Hard Closed' && (
                                                    <Button size="small" disabled>Locked</Button>
                                                )}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PeriodStatusManager;
