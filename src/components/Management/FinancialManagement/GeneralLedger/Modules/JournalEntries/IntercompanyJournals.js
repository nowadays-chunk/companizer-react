import React from 'react';
import {
    Box,
    Button,
    Grid,
    Paper,
    Typography,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    IconButton,
    Tooltip
} from '@mui/material';
import {
    Business,
    CompareArrows,
    CheckCircle,
    Warning
} from '@mui/icons-material';
import Management from '../../../../../../pages/Management';

const IntercompanyJournals = () => {
    // This could also be a custom view, but we'll wrap Management with some IC specific KPIs

    // Mock KPIs
    const kpis = [
        { label: 'Out of Balance (IC)', value: '$12,450.00', color: 'error.main', icon: <Warning /> },
        { label: 'Pending Settlement', value: '$45,000.00', color: 'warning.main', icon: <CompareArrows /> },
        { label: 'Eliminated (YTD)', value: '$1.2M', color: 'success.main', icon: <CheckCircle /> },
    ];

    return (
        <Box height="100%" display="flex" flexDirection="column">
            {/* KPI Header */}
            <Paper square sx={{ p: 2, borderBottom: '1px solid #e0e0e0', bgcolor: 'background.default' }}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" color="primary" display="flex" alignItems="center">
                            <Business sx={{ mr: 1 }} />
                            Intercompany Center
                        </Typography>
                    </Grid>
                    {kpis.map((kpi, idx) => (
                        <Grid item xs={12} md={3} key={idx}>
                            <Box display="flex" alignItems="center">
                                <Box sx={{ color: kpi.color, mr: 1 }}>{kpi.icon}</Box>
                                <Box>
                                    <Typography variant="caption" color="textSecondary">{kpi.label}</Typography>
                                    <Typography variant="subtitle1" fontWeight="bold">{kpi.value}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Paper>

            {/* Main Content */}
            <Box flexGrow={1} overflow="hidden">
                <Management
                    module="financial-management"
                    subModule="general-ledger"
                    component="journal-entries"
                    // Filter for Intercompany journals
                    initialFilters={[{ column: 'is_intercompany', value: 'true', active: true }]}
                />
            </Box>
        </Box>
    );
};

export default IntercompanyJournals;
