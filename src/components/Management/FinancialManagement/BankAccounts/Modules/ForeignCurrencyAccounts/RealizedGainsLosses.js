import React from 'react';
import {
    Box,
    Typography,
    Paper,
    Grid,
    Card,
    CardContent,
    Stack,
    Chip
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const RealizedGainsLosses = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'date', headerName: 'Settlement Date', width: 130 },
        { field: 'transaction', headerName: 'Transaction', width: 200 },
        { field: 'currency', headerName: 'Currency', width: 100 },
        { field: 'originalRate', headerName: 'Orig. Rate', width: 110, type: 'number' },
        { field: 'settlementRate', headerName: 'Settle. Rate', width: 110, type: 'number' },
        {
            field: 'gainLoss',
            headerName: 'Realized G/L (USD)',
            width: 150,
            type: 'number',
            renderCell: (params) => (
                <Typography color={params.value >= 0 ? 'success.main' : 'error.main'} fontWeight="bold">
                    {params.value}
                </Typography>
            )
        },
        { field: 'status', headerName: 'Status', width: 120, renderCell: (params) => <Chip label={params.value} size="small" /> }
    ];

    const rows = [
        { id: 1, date: '2025-10-25', transaction: 'Inv #1024 - Payment', currency: 'EUR', originalRate: 0.90, settlementRate: 0.92, gainLoss: 250.00, status: 'Posted' },
        { id: 2, date: '2025-10-26', transaction: 'Inv #1025 - Payment', currency: 'GBP', originalRate: 0.80, settlementRate: 0.82, gainLoss: -120.50, status: 'Posted' },
        { id: 3, date: '2025-10-26', transaction: 'Transfer Out', currency: 'JPY', originalRate: 145.00, settlementRate: 149.00, gainLoss: 45.00, status: 'Posted' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Realized FX Gains & Losses
            </Typography>

            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Net Realized Gain/Loss (MTD)</Typography>
                            <Typography variant="h4" color="success.main">+$1,245.00</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Count of FX Settlements</Typography>
                            <Typography variant="h4">45</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </Paper>
        </Box>
    );
};

export default RealizedGainsLosses;
