import React, { useState } from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    useTheme,
    alpha
} from '@mui/material';

import { fieldsConfig, collectionName, entityName } from './Modules/General/AdjustmentPeriodsConfig';

const AdjustmentPeriods = () => {
    const theme = useTheme();
    const [auditPeriods, setAuditPeriods] = useState([
        { id: '2025-13', year: 'FY2025', name: 'Period 13 (Audit)', status: 'Open', posted_entries: 15 },
        { id: '2025-14', year: 'FY2025', name: 'Period 14 (Tax)', status: 'Closed', posted_entries: 5 },
    ]);

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Adjustment & Special Periods"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <CardContent>
                    <Typography gutterBottom color="textSecondary">
                        Manage Period 13/14 and special audit windows. These periods allow for adjustments without re-opening standard operational periods.
                    </Typography>

                    <Grid container spacing={3} sx={{ mt: 2 }}>
                        <Grid item xs={12} lg={6}>
                            <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.info.main, 0.1), border: `1px solid ${alpha(theme.palette.info.main, 0.3)}` }}>
                                <Typography variant="h6" color="primary" gutterBottom>Audit Window (Period 13)</Typography>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    Use this period for external auditor adjustments. Regular user posting is blocked.
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="body2" fontWeight="bold">Status: <Typography component="span" color="success.main" fontWeight="bold">Open</Typography></Typography>
                                    <Button variant="contained" size="small" color="primary">Lock Audit Period</Button>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.secondary.main, 0.1), border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}` }}>
                                <Typography variant="h6" color="secondary" gutterBottom>Tax Adjustments (Period 14)</Typography>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    For tax-specific entries that do not affect management reporting.
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="body2" fontWeight="bold">Status: <Typography component="span" color="error.main" fontWeight="bold">Closed</Typography></Typography>
                                    <Button variant="contained" size="small" disabled>Unlock</Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>Adjustment Period Log</Typography>
                        <TableContainer component={Paper} variant="outlined">
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ bgcolor: theme.palette.action.hover }}>
                                        <TableCell>Period Code</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Entries Posted</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {auditPeriods.map((p) => (
                                        <TableRow key={p.id}>
                                            <TableCell>{p.id}</TableCell>
                                            <TableCell>{p.name}</TableCell>
                                            <TableCell>{p.posted_entries}</TableCell>
                                            <TableCell>{p.status}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AdjustmentPeriods;
