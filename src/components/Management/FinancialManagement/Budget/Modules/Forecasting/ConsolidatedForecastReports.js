import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Assessment } from '@mui/icons-material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const ConsolidatedForecastReports = () => {
    const columns = [
        { field: 'region', headerName: 'Region / Entity', flex: 1 },
        { field: 'rev_fy24', headerName: 'FY24 Forecast', flex: 1, type: 'number', align: 'right', headerAlign: 'right' },
        { field: 'rev_fy25', headerName: 'FY25 Forecast', flex: 1, type: 'number', align: 'right', headerAlign: 'right', editable: true },
        { field: 'growth', headerName: 'Growth YoY', flex: 1, align: 'right', headerAlign: 'right' },
    ];

    const initialRows = [
        { id: 1, region: 'North America', rev_fy24: '14.5M', rev_fy25: '16.2M', growth: '+11.7%' },
        { id: 2, region: 'EMEA', rev_fy24: '8.2M', rev_fy25: '8.5M', growth: '+3.6%' },
        { id: 3, region: 'APAC', rev_fy24: '5.1M', rev_fy25: '6.8M', growth: '+33.3%' },
        { id: 4, region: 'LATAM', rev_fy24: '1.2M', rev_fy25: '1.4M', growth: '+16.6%' },
        { id: 5, region: 'Global Adjustment', rev_fy24: '-0.5M', rev_fy25: '-0.5M', growth: '0%' },
        { id: 6, region: 'Total Consolidated', rev_fy24: '28.5M', rev_fy25: '32.4M', growth: '+13.7%' },
    ];

    const [rows, setRows] = useState(initialRows);

    return (
        <Box sx={{ p: 3, height: 600, width: '100%' }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Assessment color="primary" /> Consolidated Forecast Reports (Interactive)
            </Typography>

            <Paper sx={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Paper>
        </Box>
    );
};

export default ConsolidatedForecastReports;
