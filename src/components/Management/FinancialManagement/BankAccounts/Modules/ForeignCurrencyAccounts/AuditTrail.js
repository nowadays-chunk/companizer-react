import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Chip
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const AuditTrail = () => {
    const columns = [
        { field: 'id', headerName: 'Audit ID', width: 90 },
        { field: 'timestamp', headerName: 'Date/Time', width: 180 },
        { field: 'user', headerName: 'User', width: 150 },
        { field: 'action', headerName: 'Action', width: 200 },
        { field: 'details', headerName: 'Details', width: 300 },
        {
            field: 'severity', headerName: 'Severity', width: 100, renderCell: (params) => (
                <Chip label={params.value} color={params.value === 'Critical' ? 'error' : 'default'} size="small" variant="outlined" />
            )
        }
    ];

    const rows = [
        { id: 101, timestamp: '2025-10-27 10:14:22', user: 'j.smith', action: 'Rate Override', details: 'Manual override of EUR/USD spot rate from 1.08 to 1.09', severity: 'High' },
        { id: 102, timestamp: '2025-10-27 09:30:00', user: 'system', action: 'Daily Rate Import', details: 'Successfully imported 14 rates from ECB', severity: 'Info' },
        { id: 103, timestamp: '2025-10-26 16:45:11', user: 'm.doe', action: 'Config Change', details: 'Changed Rate Provider from OANDA to ECB', severity: 'Critical' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                FX System Audit Log
            </Typography>
            <Paper sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10, 25]}
                    disableSelectionOnClick
                />
            </Paper>
        </Box>
    );
};

export default AuditTrail;
