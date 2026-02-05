import React, { useState } from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    useTheme,
    Link
} from '@mui/material';

export const fieldsConfig = {
    entity_id: { label: 'Entity', type: 'select', options: [{ id: '1', label: 'US Corp' }, { id: '2', label: 'EU Branch' }] },
    calendar_id: { label: 'Calendar', type: 'text' },
    override_status: { label: 'Override Status', type: 'checkbox' }
};

export const entityName = 'Multi-Entity Period';

const MultiEntityPeriods = () => {
    const theme = useTheme();
    const [entities] = useState([
        { id: 1, name: 'Global HQ (US)', calendar: 'Standard US', current_period: '2026-01', status: 'Open' },
        { id: 2, name: 'EMEA Branch (UK)', calendar: 'Standard UK', current_period: '2026-01', status: 'Soft Closed' },
        { id: 3, name: 'Manufacturing Unit', calendar: '4-4-5 Retail', current_period: '2026-01', status: 'Open' },
    ]);

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Multi-Entity Period Management"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                    action={
                        <Button variant="contained" color="primary">
                            Global Soft Close
                        </Button>
                    }
                />
                <CardContent>
                    <Typography color="textSecondary" paragraph>
                        Monitor and control fiscal periods across all legal entities. You can apply a global lock or manage exceptions per entity.
                    </Typography>

                    <TableContainer component={Paper} variant="outlined" sx={{ mt: 3 }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ bgcolor: theme.palette.action.hover }}>
                                    <TableCell>Entity Name</TableCell>
                                    <TableCell>Active Calendar</TableCell>
                                    <TableCell>Current Period</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {entities.map((entity) => (
                                    <TableRow key={entity.id}>
                                        <TableCell sx={{ fontWeight: 'bold' }}>{entity.name}</TableCell>
                                        <TableCell>{entity.calendar}</TableCell>
                                        <TableCell>{entity.current_period}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={entity.status}
                                                color={entity.status === 'Open' ? 'success' : 'warning'}
                                                variant="outlined"
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Link href="#" color="primary" underline="hover">Manage</Link>
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

export default MultiEntityPeriods;
