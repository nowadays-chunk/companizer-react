import React from 'react';
import { Box, Typography, Button, Container, Breadcrumbs, Link } from '@mui/material';
import InvoiceCapture from '../../../../components/Management/FinancialManagement/AccountsPayable/Modules/InvoiceCapture';
import { useNavigate } from 'react-router-dom';

const InvoiceCaptureHub = () => {
    const navigate = useNavigate();

    const handleCaptureComplete = (data, file) => {
        // In a real app, this would upload the file and creates a draft
        console.log("Captured Data:", data);
        console.log("File:", file);

        // Navigate to the details page (assuming 'new' or ID)
        // Passing state to pre-fill the form
        navigate('/management/financial-management/accounts-payable/vendor-invoices/new', { state: { ocrData: data } });
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box mb={3}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Home</Link>
                    <Link color="inherit" href="/analysis/financial-management/accounts-payable/vendor-invoices">Vendor Invoices</Link>
                    <Typography color="textPrimary">Capture Hub</Typography>
                </Breadcrumbs>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                    <Typography variant="h4" component="h1">
                        Invoice Capture Hub
                    </Typography>
                    <Button variant="outlined" onClick={() => navigate(-1)}>
                        Back to List
                    </Button>
                </Box>
                <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                    Upload, scan, or import invoices to automatically extract data and create drafts.
                </Typography>
            </Box>

            <InvoiceCapture onCaptureComplete={handleCaptureComplete} />

            {/* Placeholder for recent captures or other input methods */}
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    Recent Activity
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    No recent captures found. Upload an invoice to get started.
                </Typography>
            </Box>
        </Container>
    );
};

export default InvoiceCaptureHub;
