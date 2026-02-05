import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import { ImportExport, CheckCircle } from '@mui/icons-material';

const IntercompanyFX = () => {
    const rows = [
        { id: 1, entity: 'US Parent Corp', type: 'Payable', currency: 'EUR', amount: 50000, rate: 0.92, status: 'Open' },
        { id: 2, entity: 'UK Subsidiary', type: 'Receivable', currency: 'GBP', amount: 25000, rate: 0.81, status: 'Open' },
        { id: 3, entity: 'Japan Branch', type: 'Payable', currency: 'JPY', amount: 1500000, rate: 149.50, status: 'Settled' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">
                    Intercompany FX Management
                </Typography>
                <Button variant="contained" startIcon={<ImportExport />}>
                    Run Netting Cycle
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Open Intercompany Positions
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Counterparty Entity</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Currency</TableCell>
                                        <TableCell align="right">Amount (FCY)</TableCell>
                                        <TableCell align="right">Exch. Rate</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.entity}</TableCell>
                                            <TableCell>{row.type}</TableCell>
                                            <TableCell>{row.currency}</TableCell>
                                            <TableCell align="right">{row.amount.toLocaleString()}</TableCell>
                                            <TableCell align="right">{row.rate}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={row.status}
                                                    size="small"
                                                    color={row.status === 'Settled' ? 'success' : 'warning'}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Button size="small">Details</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IntercompanyFX;
