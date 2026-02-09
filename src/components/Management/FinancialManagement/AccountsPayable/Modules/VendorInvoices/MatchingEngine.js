import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton, Chip, TextField, Alert } from '@mui/material';
import { LinkOff, Link as LinkIcon, CompareArrows, CheckCircle } from '@mui/icons-material';
import { fetchDocuments, apMatchInvoice } from '../../../../../../utils/clientQueries';
import { fieldsConfig, collectionName } from './Modules/General/MatchingEngine';

const MatchingEngine = ({ invoiceAmount, invoiceId }) => {
    const [purchaseOrders, setPurchaseOrders] = useState([]);
    const [selectedPO, setSelectedPO] = useState(null);
    const [variance, setVariance] = useState(0);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    // Fetch Open POs
    useEffect(() => {
        const loadPOs = async () => {
            // Assuming 'purchase_orders' is the collection name
            const results = await fetchDocuments('purchase_orders', { status: 'Open' }); // Filter by status if API supports it
            // Fallback if API doesn't support params yet, or just all POs
            setPurchaseOrders(results || []);
        };
        loadPOs();
    }, []);

    const handleSelectPO = (po) => {
        if (selectedPO?.id === po.id) {
            setSelectedPO(null); // Deselect
        } else {
            setSelectedPO(po);
        }
    };

    useEffect(() => {
        if (selectedPO && invoiceAmount) {
            const diff = parseFloat(invoiceAmount) - selectedPO.total_amount; // Assuming snake_case from DB
            setVariance(diff.toFixed(2));
        } else {
            setVariance(0);
        }
    }, [selectedPO, invoiceAmount]);

    const handleConfirmMatch = async () => {
        if (!selectedPO) return;
        setLoading(true);
        try {
            await apMatchInvoice({
                invoiceId,
                purchaseOrderId: selectedPO.id,
                variance: parseFloat(variance)
            });
            setMessage({ type: 'success', text: 'Invoice matched successfully!' });
            // Optionally refresh or redirect
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to match invoice.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
            <Box display="flex" alignItems="center" mb={2}>
                <CompareArrows color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">PO Matching Engine</Typography>
            </Box>

            {message && (
                <Alert severity={message.type} sx={{ mb: 2 }} onClose={() => setMessage(null)}>
                    {message.text}
                </Alert>
            )}

            {!selectedPO ? (
                <Box>
                    <Typography variant="subtitle2" gutterBottom>Suggested Purchase Orders</Typography>
                    <TableContainer component={Paper} variant="outlined" sx={{ maxHeight: 300 }}>
                        <Table size="small" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>PO Number</TableCell>
                                    <TableCell>Vendor</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {purchaseOrders.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">No open Purchase Orders found.</TableCell>
                                    </TableRow>
                                ) : (
                                    purchaseOrders.map((po) => (
                                        <TableRow key={po.id} hover>
                                            <TableCell component="th" scope="row">{po.po_number || po.id}</TableCell>
                                            <TableCell>{po.vendor_name || 'N/A'}</TableCell>
                                            <TableCell>{new Date(po.created_at).toLocaleDateString()}</TableCell>
                                            <TableCell align="right">${parseFloat(po.total_amount || 0).toFixed(2)}</TableCell>
                                            <TableCell><Chip size="small" label={po.status} color={po.status === 'Received' ? 'success' : 'default'} /></TableCell>
                                            <TableCell align="center">
                                                <Button
                                                    size="small"
                                                    variant="outlined"
                                                    startIcon={<LinkIcon />}
                                                    onClick={() => handleSelectPO(po)}
                                                >
                                                    Match
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            ) : (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Alert severity="info" action={
                            <Button color="inherit" size="small" onClick={() => setSelectedPO(null)}>Unlink</Button>
                        }>
                            Linked to <strong>{selectedPO.po_number || selectedPO.id}</strong>
                        </Alert>
                    </Grid>

                    {/* Comparison View */}
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <Typography variant="subtitle2" color="textSecondary">INVOICE</Typography>
                            <Typography variant="h4">${parseFloat(invoiceAmount || 0).toFixed(2)}</Typography>
                            <Typography variant="caption">Total Amount</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <Typography variant="subtitle2" color="textSecondary">PURCHASE ORDER ({selectedPO.po_number || selectedPO.id})</Typography>
                            <Typography variant="h4">${parseFloat(selectedPO.total_amount || 0).toFixed(2)}</Typography>
                            <Typography variant="caption">Total Value</Typography>
                        </Paper>
                    </Grid>

                    {/* Variance Analysis */}
                    <Grid item xs={12}>
                        <Box p={2} sx={{ bgcolor: Math.abs(variance) > 0 ? '#fff3e0' : '#e8f5e9', borderRadius: 1, border: '1px solid', borderColor: Math.abs(variance) > 0 ? 'warning.main' : 'success.main' }}>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        Variance: {variance > 0 ? '+' : ''}{variance}
                                    </Typography>
                                    <Typography variant="body2">
                                        {Math.abs(variance) === 0 ? "Perfect Match (3-Way)" : "Price/Quantity Discrepancy Detected"}
                                    </Typography>
                                </Box>
                                <Button
                                    variant="contained"
                                    color={Math.abs(variance) > 0 ? "warning" : "success"}
                                    startIcon={Math.abs(variance) === 0 ? <CheckCircle /> : null}
                                    onClick={handleConfirmMatch}
                                    disabled={loading}
                                >
                                    {loading ? "Processing..." : (Math.abs(variance) === 0 ? "Confirm Match" : "Request Approval")}
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Paper>
    );
};

export default MatchingEngine;
