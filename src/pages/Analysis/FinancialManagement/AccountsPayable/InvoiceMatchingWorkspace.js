import React from 'react';
import { Container, Box, Typography, Button, Breadcrumbs, Link, Grid, Paper } from '@mui/material';
import MatchingEngine from '../../../../components/Management/FinancialManagement/AccountsPayable/Modules/MatchingEngine';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const InvoiceMatchingWorkspace = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock data - in real app would fetch by ID
    const mockInvoice = {
        id: id,
        number: 'INV-2024-001',
        vendor: 'Acme Corp Supply',
        amount: 4500.00,
        date: '2023-10-25',
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Box mb={3}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Home</Link>
                    <Link color="inherit" href="/analysis/financial-management/accounts-payable/vendor-invoices">Vendor Invoices</Link>
                    <Typography color="textPrimary">Matching Workspace</Typography>
                </Breadcrumbs>

                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                    <Box display="flex" alignItems="center">
                        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} sx={{ mr: 2 }}>
                            Back
                        </Button>
                        <Box>
                            <Typography variant="h4" component="h1">
                                Match Invoice #{mockInvoice.number}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {mockInvoice.vendor} | ${mockInvoice.amount.toFixed(2)}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Button variant="contained" color="primary" disabled>
                            Complete Match
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} lg={8}>
                    <MatchingEngine invoiceId={id} invoiceAmount={mockInvoice.amount} />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>Invoice Details</Typography>
                        <Typography variant="body2" paragraph>
                            <strong>Vendor:</strong> {mockInvoice.vendor}<br />
                            <strong>Date:</strong> {mockInvoice.date}<br />
                            <strong>Terms:</strong> Net 30
                        </Typography>
                        {/* Placeholder for PDF Viewer */}
                        <Box sx={{ bgcolor: '#eee', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 1 }}>
                            <Typography color="textSecondary">PDF Preview Unavailable</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default InvoiceMatchingWorkspace;
