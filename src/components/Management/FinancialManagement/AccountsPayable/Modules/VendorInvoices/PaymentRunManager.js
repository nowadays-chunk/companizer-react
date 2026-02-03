
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, Chip } from '@mui/material';
import { helpersWrapper } from '../../../../../../utils/firebaseCrudHelpers';
import { useTranslation } from '../../../../../../contexts/TranslationProvider';

const PaymentRunManager = () => {
    const { t } = useTranslation();
    const [dueInvoices, setDueInvoices] = useState([]);
    const [invoicesHelper] = useState(() => helpersWrapper('vendor_invoices'));

    useEffect(() => {
        loadDueInvoices();
    }, []);

    const loadDueInvoices = async () => {
        try {
            const allInvoices = await invoicesHelper.fetchItems();
            // Filter for 'Approved' or 'Ready for Pay'
            const due = allInvoices.filter(inv =>
                inv.status === 'ready_for_payment' ||
                (inv.processing_step && inv.processing_step.includes('ready_for_payment'))
            );
            setDueInvoices(due);
        } catch (error) {
            console.error("Error loading invoices", error);
        }
    };

    const handleCreateBatch = () => {
        alert("Payment Batch Feature Plan: This will group selected invoices into a single payment file (SEPA/ACH).");
    };

    const markAsPaid = async (id) => {
        if (!window.confirm("Mark this invoice as Paid?")) return;
        await invoicesHelper.updateItem(id, { processing_step: 'paid', status: 'paid', payment_date: new Date().toISOString() });
        loadDueInvoices();
    };

    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="h4">Payment Run Manager</Typography>
                <Button variant="contained" color="secondary" onClick={handleCreateBatch}>
                    Create Payment Batch
                </Button>
            </Box>

            <Grid container spacing={3}>
                {dueInvoices.length === 0 ? (
                    <Typography variant="body1" sx={{ p: 2 }}>No invoices ready for payment.</Typography>
                ) : (
                    dueInvoices.map(invoice => (
                        <Grid item xs={12} md={6} lg={4} key={invoice.id}>
                            <Card>
                                <CardContent>
                                    <Box display="flex" justifyContent="space-between" mb={2}>
                                        <Typography variant="h6">{invoice.invoice_number}</Typography>
                                        <Chip label={invoice.processing_step} color="primary" size="small" />
                                    </Box>
                                    <Typography color="textSecondary">Amount: {invoice.total_amount} {invoice.currency}</Typography>
                                    <Typography color="textSecondary">Due: {invoice.due_date}</Typography>

                                    <Box mt={2}>
                                        <Button variant="outlined" color="success" fullWidth onClick={() => markAsPaid(invoice.id)}>
                                            Mark as Paid
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>
        </Box>
    );
};

export default PaymentRunManager;
