import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button, Breadcrumbs, Link, Paper, CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { TermTestBench } from '../components/Management/FinancialManagement/AccountsPayable/Modules/PaymentTerms/TermTestBench';
import { helpersWrapper } from '../utils/firebaseCrudHelpers';

const PaymentTermsTestBench = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [termConfig, setTermConfig] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTermConfig = async () => {
            try {
                const termsHelper = helpersWrapper('payment_terms');
                const term = await termsHelper.fetchItemById(id);
                setTermConfig(term);
            } catch (error) {
                console.error('Error loading payment term:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            loadTermConfig();
        }
    }, [id]);

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Container>
        );
    }

    if (!termConfig) {
        return (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h6" color="error">
                    Payment term not found
                </Typography>
                <Button onClick={() => navigate(-1)} sx={{ mt: 2 }}>
                    Go Back
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box mb={3}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Home</Link>
                    <Link color="inherit" href="#/management/financial-management/accounts-payable/payment-terms">Payment Terms</Link>
                    <Typography color="textPrimary">Test Bench</Typography>
                </Breadcrumbs>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                    <Box display="flex" alignItems="center">
                        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} sx={{ mr: 2 }}>
                            Back
                        </Button>
                        <Box>
                            <Typography variant="h4" component="h1">
                                Payment Terms Test Bench
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {termConfig.term_name || termConfig.code} - Testing & Simulation
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                    Simulate invoice dates and amounts to verify payment term calculations, discounts, and due dates.
                </Typography>
            </Box>

            <Paper sx={{ p: 3 }}>
                <TermTestBench termConfig={termConfig} />
            </Paper>
        </Container>
    );
};

export default PaymentTermsTestBench;
