import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton, Chip, TextField, Alert } from '@mui/material';
import { LinkOff, Link as LinkIcon, CompareArrows, CheckCircle } from '@mui/icons-material';

const MatchingEngine = ({ invoiceAmount, invoiceId }) => {
    // Mock Data for POs
    const [mockPOs, setMockPOs] = useState([
        { id: 'PO-10234', vendor: 'Acme Corp Supply', date: '2023-10-15', total: 4500.00, status: 'Open' },
        { id: 'PO-10255', vendor: 'Acme Corp Supply', date: '2023-10-20', total: 1250.00, status: 'Received' },
    ]);

    const [selectedPO, setSelectedPO] = useState(null);
    const [variance, setVariance] = useState(0);

    const handleSelectPO = (po) => {
        if (selectedPO?.id === po.id) {
            setSelectedPO(null); // Deselect
        } else {
            setSelectedPO(po);
        }
    };

    useEffect(() => {
        if (selectedPO && invoiceAmount) {
            const diff = parseFloat(invoiceAmount) - selectedPO.total;
            setVariance(diff.toFixed(2));
        } else {
            setVariance(0);
        }
    }, [selectedPO, invoiceAmount]);

    return (
        <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
            <Box display="flex" alignItems="center" mb={2}>
                <CompareArrows color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">PO Matching Engine</Typography>
            </Box>

            {!selectedPO ? (
                <Box>
                    <Typography variant="subtitle2" gutterBottom>Suggested Purchase Orders</Typography>
                    <TableContainer component={Paper} variant="outlined">
                        <Table size="small">
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
                                {mockPOs.map((po) => (
                                    <TableRow key={po.id} hover>
                                        <TableCell component="th" scope="row">{po.id}</TableCell>
                                        <TableCell>{po.vendor}</TableCell>
                                        <TableCell>{po.date}</TableCell>
                                        <TableCell align="right">${po.total.toFixed(2)}</TableCell>
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
                                ))}
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
                            Linked to <strong>{selectedPO.id}</strong>
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
                            <Typography variant="subtitle2" color="textSecondary">PURCHASE ORDER ({selectedPO.id})</Typography>
                            <Typography variant="h4">${selectedPO.total.toFixed(2)}</Typography>
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
                                >
                                    {Math.abs(variance) === 0 ? "Confirm Match" : "Request Approval"}
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
