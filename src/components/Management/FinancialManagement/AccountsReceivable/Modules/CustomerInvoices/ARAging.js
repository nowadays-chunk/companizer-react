
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

const ARAging = () => {
    // Mock data for aging buckets
    const agingData = [
        { bucket: 'Current', amount: 1250000, count: 450, percentage: 65 },
        { bucket: '1-30 Days', amount: 350000, count: 120, percentage: 18 },
        { bucket: '31-60 Days', amount: 150000, count: 45, percentage: 8 },
        { bucket: '61-90 Days', amount: 85000, count: 20, percentage: 5 },
        { bucket: '90+ Days', amount: 45000, count: 12, percentage: 4 },
    ];

    return (
        <Box p={3}>
            <Typography variant="h5" gutterBottom>Accounts Receivable Aging</Typography>

            <Grid container spacing={3} mb={3}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">Total Outstanding</Typography>
                            <Typography variant="h4">$1,880,000</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">DSO (Days Sales Outstanding)</Typography>
                            <Typography variant="h4">42 Days</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Aging Bucket</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Invoice Count</TableCell>
                            <TableCell align="right">% of Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {agingData.map((row) => (
                            <TableRow key={row.bucket}>
                                <TableCell component="th" scope="row">{row.bucket}</TableCell>
                                <TableCell align="right">${row.amount.toLocaleString()}</TableCell>
                                <TableCell align="right">{row.count}</TableCell>
                                <TableCell align="right">{row.percentage}%</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ARAging;
