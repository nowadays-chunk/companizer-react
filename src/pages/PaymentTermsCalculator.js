import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button, Breadcrumbs, Link, Paper } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { TermCalculator } from '../components/Management/FinancialManagement/AccountsPayable/Modules/PaymentTerms/TermCalculator';

const PaymentTermsCalculator = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Box mb={3}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Home</Link>
                    <Link color="inherit" href="#/management/financial-management/accounts-payable/payment-terms">Payment Terms</Link>
                    <Typography color="textPrimary">Calculator</Typography>
                </Breadcrumbs>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                    <Box display="flex" alignItems="center">
                        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} sx={{ mr: 2 }}>
                            Back
                        </Button>
                        <Box>
                            <Typography variant="h4" component="h1">
                                Payment Terms Calculator
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Quick Date Calculator Utility
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                    Calculate due dates and payment schedules based on different payment term configurations.
                </Typography>
            </Box>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Quick Calculator
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    This utility allows you to quickly calculate payment due dates without creating a full payment term configuration.
                </Typography>
                {/* You can add a simple calculator UI here or reuse TermCalculator component */}
                <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                    <Typography variant="body2" color="textSecondary">
                        Calculator interface coming soon. For now, please use the Test Bench feature available on individual Payment Terms records.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default PaymentTermsCalculator;
