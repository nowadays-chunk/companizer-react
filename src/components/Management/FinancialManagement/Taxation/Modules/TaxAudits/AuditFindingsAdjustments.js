import React, { useState } from 'react';
import {
    Box,
    Typography,
    Paper,
    Button,
    Grid,
    Card,
    CardContent
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { faker } from '@faker-js/faker';
import { Add, TrendingUp, TrendingDown } from '@mui/icons-material';

const generateMockFindings = (count) => {
    return Array.from({ length: count }, () => {
        const type = faker.helpers.arrayElement(['Underpayment', 'Overpayment', 'Documentation Issue']);
        const amount = Number(faker.finance.amount({ min: 1000, max: 50000 }));
        return {
            id: faker.string.uuid(),
            reference: `FIND-${faker.string.numeric(4)}`,
            category: type,
            description: faker.lorem.sentence(),
            period: '2024 Q3',
            amount: type === 'Documentation Issue' ? 0 : amount,
            adjustment: type === 'Underpayment' ? amount : (type === 'Overpayment' ? -amount : 0),
            status: faker.helpers.arrayElement(['Draft', 'Proposed', 'Accepted', 'Disputed'])
        };
    });
};

const AuditFindingsAdjustments = () => {
    const [findings, setFindings] = useState(generateMockFindings(10));

    // Calculate totals
    const totalExposure = findings.reduce((acc, curr) => acc + (curr.adjustment > 0 ? curr.adjustment : 0), 0);
    const totalRefunds = findings.reduce((acc, curr) => acc + (curr.adjustment < 0 ? Math.abs(curr.adjustment) : 0), 0);
    const netImpact = totalExposure - totalRefunds;

    const columns = [
        { field: 'reference', headerName: 'Ref', width: 120 },
        { field: 'category', headerName: 'Category', width: 150 },
        { field: 'description', headerName: 'Description', width: 300 },
        { field: 'period', headerName: 'Period', width: 100 },
        {
            field: 'amount',
            headerName: 'Base Amount',
            width: 130,
            valueFormatter: (params) => `$${params.toLocaleString()}`
        },
        {
            field: 'adjustment',
            headerName: 'Adjustment',
            width: 130,
            renderCell: (params) => (
                <Typography
                    color={params.value > 0 ? 'error' : (params.value < 0 ? 'success.main' : 'textSecondary')}
                    fontWeight="bold"
                >
                    {params.value > 0 ? '+' : ''}{params.value.toLocaleString()}
                </Typography>
            )
        },
        { field: 'status', headerName: 'Status', width: 120 }
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h5">
                    Audit Findings & Adjustments
                </Typography>
                <Button variant="contained" startIcon={<Add />}>
                    Record Finding
                </Button>
            </Box>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#ffebee' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <TrendingUp color="error" />
                                <Typography color="textSecondary">Total Exposure</Typography>
                            </Box>
                            <Typography variant="h4" color="error.main" sx={{ mt: 1 }}>
                                ${totalExposure.toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#e8f5e9' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <TrendingDown color="success" />
                                <Typography color="textSecondary">Recoverable / Refunds</Typography>
                            </Box>
                            <Typography variant="h4" color="success.main" sx={{ mt: 1 }}>
                                ${totalRefunds.toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ border: '1px solid #ddd' }}>
                        <CardContent>
                            <Typography color="textSecondary">Net Financial Impact</Typography>
                            <Typography variant="h4" sx={{ mt: 1 }}>
                                ${netImpact.toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper elevation={2} sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={findings}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                />
            </Paper>
        </Box>
    );
};

export default AuditFindingsAdjustments;
