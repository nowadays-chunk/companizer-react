import React, { useState } from 'react';
import {
    Box,
    Typography,
    Paper,
    Grid,
    Card,
    CardContent,
    Button,
    LinearProgress
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { faker } from '@faker-js/faker';
import { Warning, AccessTime } from '@mui/icons-material';

const generateItems = (count) => Array.from({ length: count }, () => {
    const base = Number(faker.finance.amount({ min: 1000, max: 20000 }));
    const penaltyRate = faker.number.int({ min: 5, max: 25 });
    const penalty = (base * penaltyRate) / 100;
    const interest = (base * 0.05); // 5% interest

    return {
        id: faker.string.uuid(),
        assessmentId: `ASM-${faker.string.numeric(4)}`,
        type: faker.helpers.arrayElement(['Late Filing', 'Underpayment', 'Negligence']),
        date: faker.date.recent().toLocaleDateString(),
        dueDate: faker.date.future().toLocaleDateString(),
        baseTax: base,
        penalty: penalty,
        interest: interest,
        total: base + penalty + interest,
        status: faker.helpers.arrayElement(['Unpaid', 'Paid', 'Disputed'])
    };
});

const PenaltiesInterestAssessments = () => {
    const [items] = useState(generateItems(8));

    const totalPenalties = items.reduce((sum, item) => sum + item.penalty, 0);
    const totalInterest = items.reduce((sum, item) => sum + item.interest, 0);

    const columns = [
        { field: 'assessmentId', headerName: 'ID', width: 100 },
        { field: 'type', headerName: 'Type', width: 150 },
        { field: 'date', headerName: 'Date', width: 110 },
        { field: 'dueDate', headerName: 'Due Date', width: 110 },
        {
            field: 'baseTax',
            headerName: 'Base Tax',
            width: 130,
            valueFormatter: (params) => `$${params.toLocaleString()}`
        },
        {
            field: 'penalty',
            headerName: 'Penalty',
            width: 130,
            valueFormatter: (params) => `$${params.toLocaleString()}`
        },
        {
            field: 'interest',
            headerName: 'Interest',
            width: 130,
            valueFormatter: (params) => `$${params.toLocaleString()}`
        },
        {
            field: 'total',
            headerName: 'Total Due',
            width: 150,
            headerClassName: 'super-app-theme--header',
            valueFormatter: (params) => `$${params.toLocaleString()}`
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            renderCell: (params) => (
                <Typography color={params.value === 'Unpaid' ? 'error' : 'success.main'}>
                    {params.value}
                </Typography>
            )
        }
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Penalties, Interest & Assessments</Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ bgcolor: '#fff3e0' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <Warning color="warning" />
                                <Typography variant="h6">Penalty Exposure</Typography>
                            </Box>
                            <Typography variant="h3">${totalPenalties.toLocaleString()}</Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>Average {(totalPenalties / items.length).toFixed(0)} per assessment</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ bgcolor: '#e3f2fd' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <AccessTime color="info" />
                                <Typography variant="h6">Accrued Interest</Typography>
                            </Box>
                            <Typography variant="h3">${totalInterest.toLocaleString()}</Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>Accruing daily based on statutory rates</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper elevation={2} sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={items}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                />
            </Paper>
        </Box>
    );
};

export default PenaltiesInterestAssessments;
