import React, { useState } from 'react';
import { Box, Paper, Typography, Chip, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { faker } from '@faker-js/faker';

const generateTransactions = (count) => {
    return Array.from({ length: count }, (_, index) => {
        const type = faker.helpers.arrayElement(['Sales', 'Purchase']);
        const amount = parseFloat(faker.finance.amount(100, 10000, 2));
        const rate = faker.helpers.arrayElement([0.20, 0.05, 0]);
        return {
            id: index + 1,
            date: faker.date.recent().toISOString().split('T')[0],
            invoiceNo: faker.string.alphanumeric(8).toUpperCase(),
            type: type,
            entity: faker.company.name(),
            taxableAmount: amount,
            vatRate: rate * 100 + '%',
            vatAmount: parseFloat((amount * rate).toFixed(2)),
            currency: faker.finance.currencyCode(),
            status: faker.helpers.arrayElement(['Posted', 'Draft', 'Reconciled'])
        };
    });
};

const VATGSTRegister = () => {
    const [transactions] = useState(generateTransactions(20));
    const [view, setView] = useState('All');

    const handleViewChange = (event, newView) => {
        if (newView !== null) setView(newView);
    };

    const filteredRows = view === 'All' ? transactions : transactions.filter(t => t.type === view);

    const columns = [
        { field: 'date', headerName: 'Date', width: 110 },
        { field: 'invoiceNo', headerName: 'Invoice #', width: 120 },
        {
            field: 'type', headerName: 'Type', width: 100, renderCell: (params) => (
                <Chip label={params.value} color={params.value === 'Sales' ? 'success' : 'primary'} size="small" variant="outlined" />
            )
        },
        { field: 'entity', headerName: 'Counterparty', width: 200 },
        { field: 'taxableAmount', headerName: 'Taxable Amt', width: 130, type: 'number', valueFormatter: (params) => `$${params.value.toLocaleString()}` },
        { field: 'vatRate', headerName: 'Rate', width: 80 },
        { field: 'vatAmount', headerName: 'VAT Amt', width: 110, type: 'number', valueFormatter: (params) => `$${params.value.toLocaleString()}` },
        {
            field: 'status', headerName: 'Status', width: 120, renderCell: (params) => (
                <Chip label={params.value} color={params.value === 'Posted' ? 'success' : 'default'} size="small" />
            )
        }
    ];

    return (
        <Box sx={{ p: 3, height: 650, width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h5">VAT/GST Transaction Register</Typography>
                <ToggleButtonGroup value={view} exclusive onChange={handleViewChange} size="small">
                    <ToggleButton value="All">All</ToggleButton>
                    <ToggleButton value="Sales">Sales (Output)</ToggleButton>
                    <ToggleButton value="Purchase">Purchase (Input)</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Paper elevation={2} sx={{ height: 550, width: '100%' }}>
                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    pageSize={10}
                    rowsPerPageOptions={[10, 20]}
                    disableSelectionOnClick
                />
            </Paper>
        </Box>
    );
};

export default VATGSTRegister;
