import React, { useState } from 'react';
import { Container, Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton, Breadcrumbs, Link, Tabs, Tab } from '@mui/material';
import { CheckCircle, Cancel, Visibility, AccessTime } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const InvoiceApprovalCenter = () => {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);

    // Mock Data
    const pendingInvoices = [
        { id: '1', number: 'INV-2024-001', vendor: 'Acme Corp', amount: 4500.00, date: '2023-11-01', status: 'Manager Review', due: '2 Days' },
        { id: '2', number: 'INV-2024-005', vendor: 'Globex Inc', amount: 12000.00, date: '2023-11-03', status: 'Finance Review', due: '5 Days' },
        { id: '3', number: 'INV-2024-008', vendor: 'Soylent Corp', amount: 850.00, date: '2023-11-05', status: 'Manager Review', due: 'Today' },
    ];

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box mb={3}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Home</Link>
                    <Link color="inherit" href="/analysis/financial-management/accounts-payable/vendor-invoices">Vendor Invoices</Link>
                    <Typography color="textPrimary">Approvals</Typography>
                </Breadcrumbs>
                <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
                    Approval Center
                </Typography>
            </Box>

            <Paper sx={{ width: '100%', mb: 2 }}>
                <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
                    <Tab label="My Approvals (3)" />
                    <Tab label="Team Queue" />
                    <Tab label="History" />
                </Tabs>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Invoice #</TableCell>
                                <TableCell>Vendor</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Deadline</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pendingInvoices.map((invoice) => (
                                <TableRow key={invoice.id} hover>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="body2" fontWeight="bold">{invoice.number}</Typography>
                                    </TableCell>
                                    <TableCell>{invoice.vendor}</TableCell>
                                    <TableCell>{invoice.date}</TableCell>
                                    <TableCell align="right">${invoice.amount.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={invoice.status}
                                            color={invoice.status.includes('Finance') ? 'secondary' : 'primary'}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Box display="flex" alignItems="center" color={invoice.due === 'Today' ? 'error.main' : 'text.secondary'}>
                                            <AccessTime fontSize="small" sx={{ mr: 0.5 }} />
                                            {invoice.due}
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton color="primary" onClick={() => navigate(`/management/financial-management/accounts-payable/vendor-invoices/${invoice.id}`)}>
                                            <Visibility />
                                        </IconButton>
                                        <IconButton color="success">
                                            <CheckCircle />
                                        </IconButton>
                                        <IconButton color="error">
                                            <Cancel />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
};

export default InvoiceApprovalCenter;
