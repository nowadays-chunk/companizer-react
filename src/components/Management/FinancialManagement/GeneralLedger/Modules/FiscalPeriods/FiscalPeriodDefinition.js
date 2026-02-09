import React from 'react';
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
    useTheme
} from '@mui/material';

import { fieldsConfig, collectionName, entityName } from './Modules/General/FiscalPeriodDefinitionConfig';

const FiscalPeriodDefinition = () => {
    const theme = useTheme();
    const periods = [
        { code: '2026-01', name: 'January 2026', start: '2026-01-01', end: '2026-01-31', type: 'Standard', status: 'Open' },
        { code: '2026-02', name: 'February 2026', start: '2026-02-01', end: '2026-02-28', type: 'Standard', status: 'Future' },
        { code: '2026-13', name: 'Audit Adj 2026', start: '2026-12-31', end: '2026-12-31', type: 'Adjustment', status: 'Future' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Fiscal Period Definition"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <CardContent>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: theme.palette.action.hover }}>
                                    <TableCell>Period Code</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Date Range</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {periods.map((period) => (
                                    <TableRow key={period.code}>
                                        <TableCell sx={{ fontWeight: 'medium' }}>{period.code}</TableCell>
                                        <TableCell>{period.name}</TableCell>
                                        <TableCell>{period.start} to {period.end}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={period.type}
                                                color={period.type === 'Adjustment' ? 'warning' : 'success'}
                                                variant="outlined"
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell>{period.status}</TableCell>
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

export default FiscalPeriodDefinition;
