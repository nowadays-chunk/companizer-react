import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const mockConsolidation = [
    { id: 1, entity: 'Global Holdings Inc', jurisdiction: 'US', activeAudits: 2, totalExposure: 50000, status: 'Consolidated' },
    { id: 2, entity: 'Euro Subs SA', jurisdiction: 'France', activeAudits: 1, totalExposure: 12000, status: 'Consolidated' },
    { id: 3, entity: 'Asia Pac Ltd', jurisdiction: 'Singapore', activeAudits: 0, totalExposure: 0, status: 'Clear' },
];

const AuditConsolidation = () => {
    const columns = [
        { field: 'entity', headerName: 'Entity', width: 200 },
        { field: 'jurisdiction', headerName: 'Jurisdiction', width: 150 },
        { field: 'activeAudits', headerName: 'Active Cases', width: 150 },
        { field: 'totalExposure', headerName: 'Total Exposure', width: 180, valueFormatter: (params) => `$${params.toLocaleString()}` },
        { field: 'status', headerName: 'Status', width: 150 },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Multi-Entity Audit Consolidation</Typography>
            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                        <Typography variant="h6">Group Exposure</Typography>
                        <Typography variant="h4" color="error">$62,000</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                        <Typography variant="h6">Active Jurisdictions</Typography>
                        <Typography variant="h4" color="primary">2</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid rows={mockConsolidation} columns={columns} />
            </Paper>
        </Box>
    );
};

export default AuditConsolidation;
