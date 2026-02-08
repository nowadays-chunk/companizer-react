import React, { useState, useEffect } from 'react';
import {
    Box,
    Paper,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Chip,
    Grid,
    Card,
    CardContent,
    TextField
} from '@mui/material';
import {
    Download,
    Print,
    Email,
    Visibility
} from '@mui/icons-material';

import { apGenerateCreditorStatement } from '../../../../../../utils/clientQueries';

const VendorStatement = ({ items = [], vendors = [] }) => {
    const [selectedVendor, setSelectedVendor] = useState('');
    const [periodStart, setPeriodStart] = useState('');
    const [periodEnd, setPeriodEnd] = useState('');
    const [statement, setStatement] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchStatement = async () => {
            if (!selectedVendor || !periodStart || !periodEnd) {
                setStatement(null);
                return;
            }

            setLoading(true);
            try {
                const result = await apGenerateCreditorStatement({
                    creditorId: selectedVendor,
                    startDate: periodStart,
                    endDate: periodEnd
                });
                setStatement(result);
            } catch (error) {
                console.error("Failed to generate statement", error);
                setStatement(null);
            } finally {
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(() => {
            fetchStatement();
        }, 500); // Debounce

        return () => clearTimeout(timeoutId);
    }, [selectedVendor, periodStart, periodEnd]);

    const handleDownload = () => {
        if (!statement) return;

        const headers = ['Date', 'Document Number', 'Type', 'Debit', 'Credit', 'Balance'];
        const rows = statement.periodItems.map(item => [
            new Date(item.posting_date).toLocaleDateString(),
            item.source_document_number || item.creditor_id,
            item.transaction_type,
            item.transaction_type === 'vendor_invoice' ? item.original_amount : '',
            item.transaction_type === 'credit_note' ? item.original_amount : '',
            item.balance || item.original_amount
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `vendor_statement_${selectedVendor}_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    const handlePrint = () => {
        window.print();
    };

    const handleEmail = () => {
        // In real implementation, this would trigger an email workflow
        alert('Email functionality would be implemented here');
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Vendor Statement</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        variant="outlined"
                        startIcon={<Print />}
                        onClick={handlePrint}
                        disabled={!statement}
                    >
                        Print
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<Email />}
                        onClick={handleEmail}
                        disabled={!statement}
                    >
                        Email
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<Download />}
                        onClick={handleDownload}
                        disabled={!statement}
                    >
                        Download
                    </Button>
                </Box>
            </Box>

            {/* Filters */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <InputLabel>Select Vendor</InputLabel>
                        <Select
                            value={selectedVendor}
                            onChange={(e) => setSelectedVendor(e.target.value)}
                            label="Select Vendor"
                        >
                            <MenuItem value="">Select a vendor...</MenuItem>
                            {items.map((item, index) => (
                                <MenuItem key={index} value={item.vendor_id || item.creditor_id}>
                                    {item.creditor_name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Period Start"
                        value={periodStart}
                        onChange={(e) => setPeriodStart(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Period End"
                        value={periodEnd}
                        onChange={(e) => setPeriodEnd(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
            </Grid>

            {statement && (
                <>
                    {/* Summary Cards */}
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={12} md={2.4}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Opening Balance</Typography>
                                    <Typography variant="h6">
                                        ${statement.openingBalance.toLocaleString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={2.4}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Total Debits</Typography>
                                    <Typography variant="h6" color="error.main">
                                        ${statement.totalDebits.toLocaleString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={2.4}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Total Credits</Typography>
                                    <Typography variant="h6" color="success.main">
                                        ${statement.totalCredits.toLocaleString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={2.4}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Total Payments</Typography>
                                    <Typography variant="h6" color="primary.main">
                                        ${statement.totalPayments.toLocaleString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={2.4}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Closing Balance</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        ${statement.closingBalance.toLocaleString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Period Transactions */}
                    <Paper sx={{ mb: 3 }}>
                        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                            <Typography variant="h6">Period Transactions</Typography>
                        </Box>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Document Number</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell align="right">Debit</TableCell>
                                        <TableCell align="right">Credit</TableCell>
                                        <TableCell align="right">Balance</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {statement.periodItems.map((item, index) => (
                                        <TableRow key={index} hover>
                                            <TableCell>
                                                {new Date(item.posting_date).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell>{item.source_document_number || item.creditor_id}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={item.transaction_type?.replace('_', ' ').toUpperCase()}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            </TableCell>
                                            <TableCell align="right">
                                                {['vendor_invoice', 'debit_note'].includes(item.transaction_type)
                                                    ? `$${(item.original_amount || 0).toLocaleString()}`
                                                    : '-'}
                                            </TableCell>
                                            <TableCell align="right">
                                                {item.transaction_type === 'credit_note'
                                                    ? `$${(item.original_amount || 0).toLocaleString()}`
                                                    : '-'}
                                            </TableCell>
                                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                                                ${(item.balance || item.original_amount || 0).toLocaleString()}
                                            </TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={item.open_item_status || 'Open'}
                                                    color={item.open_item_status === 'cleared' ? 'success' : 'warning'}
                                                    size="small"
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                    {/* Open Items */}
                    <Paper>
                        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                            <Typography variant="h6">Open Items</Typography>
                        </Box>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Due Date</TableCell>
                                        <TableCell>Document Number</TableCell>
                                        <TableCell align="right">Original Amount</TableCell>
                                        <TableCell align="right">Paid Amount</TableCell>
                                        <TableCell align="right">Outstanding</TableCell>
                                        <TableCell>Days Overdue</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {statement.openItems.map((item, index) => (
                                        <TableRow key={index} hover>
                                            <TableCell>
                                                {item.due_date ? new Date(item.due_date).toLocaleDateString() : '-'}
                                            </TableCell>
                                            <TableCell>{item.source_document_number || item.creditor_id}</TableCell>
                                            <TableCell align="right">
                                                ${(item.original_amount || 0).toLocaleString()}
                                            </TableCell>
                                            <TableCell align="right">
                                                ${(item.cleared_amount || 0).toLocaleString()}
                                            </TableCell>
                                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                                                ${(item.residual_amount || item.original_amount || 0).toLocaleString()}
                                            </TableCell>
                                            <TableCell>
                                                {item.days_overdue > 0 ? (
                                                    <Chip
                                                        label={`${item.days_overdue} days`}
                                                        color="error"
                                                        size="small"
                                                    />
                                                ) : (
                                                    <Chip label="Current" color="success" size="small" />
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {statement.openItems.length === 0 && (
                                        <TableRow>
                                            <TableCell colSpan={6} align="center">
                                                No open items
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </>
            )}

            {!statement && (
                <Paper sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h6" color="textSecondary">
                        {loading ? 'Generating Statement...' : 'Select a vendor and period to generate statement'}
                    </Typography>
                </Paper>
            )}
        </Box>
    );
};

export default VendorStatement;
