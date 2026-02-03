
import React, { useState } from 'react';
import { Box, Typography, Paper, Button, Grid, TextField, Alert } from '@mui/material';
import { CloudUpload, Scanner } from '@mui/icons-material';

const InvoiceCapture = ({ onCaptureComplete }) => {
    const [file, setFile] = useState(null);
    const [extractedData, setExtractedData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            // Simulate OCR extraction
            simulateOCR(uploadedFile);
        }
    };

    const simulateOCR = (file) => {
        setLoading(true);
        // Mock OCR processing
        setTimeout(() => {
            const mockData = {
                invoice_number: 'INV-' + Math.floor(Math.random() * 10000),
                vendor_name: 'Sample Vendor Corp',
                invoice_date: new Date().toISOString().split('T')[0],
                due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                total_amount: (Math.random() * 10000).toFixed(2),
                currency: 'USD',
                tax_amount: (Math.random() * 1000).toFixed(2),
            };
            setExtractedData(mockData);
            setLoading(false);
        }, 2000);
    };

    const handleConfirm = () => {
        if (onCaptureComplete && extractedData) {
            onCaptureComplete(extractedData, file);
        }
    };

    const handleReset = () => {
        setFile(null);
        setExtractedData(null);
    };

    return (
        <Box>
            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Upload Invoice Document
                </Typography>
                <Box
                    sx={{
                        border: '2px dashed',
                        borderColor: 'primary.main',
                        borderRadius: 2,
                        p: 4,
                        textAlign: 'center',
                        bgcolor: 'background.default',
                        cursor: 'pointer',
                        '&:hover': {
                            bgcolor: 'action.hover',
                        },
                    }}
                >
                    <input
                        accept="image/*,application/pdf"
                        style={{ display: 'none' }}
                        id="invoice-file-upload"
                        type="file"
                        onChange={handleFileUpload}
                    />
                    <label htmlFor="invoice-file-upload">
                        <Box sx={{ cursor: 'pointer' }}>
                            <CloudUpload sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                            <Typography variant="body1" gutterBottom>
                                Click to upload or drag and drop
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                PDF, PNG, JPG up to 10MB
                            </Typography>
                        </Box>
                    </label>
                </Box>
                {file && (
                    <Alert severity="info" sx={{ mt: 2 }}>
                        File selected: {file.name}
                    </Alert>
                )}
            </Paper>

            {loading && (
                <Paper sx={{ p: 3, mb: 3 }}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Scanner sx={{ animation: 'pulse 1.5s ease-in-out infinite' }} />
                        <Typography>Processing invoice with OCR...</Typography>
                    </Box>
                </Paper>
            )}

            {extractedData && !loading && (
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Extracted Data
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                        Review and edit the extracted information below
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Invoice Number"
                                value={extractedData.invoice_number}
                                onChange={(e) => setExtractedData({ ...extractedData, invoice_number: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Vendor Name"
                                value={extractedData.vendor_name}
                                onChange={(e) => setExtractedData({ ...extractedData, vendor_name: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                type="date"
                                label="Invoice Date"
                                value={extractedData.invoice_date}
                                onChange={(e) => setExtractedData({ ...extractedData, invoice_date: e.target.value })}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                type="date"
                                label="Due Date"
                                value={extractedData.due_date}
                                onChange={(e) => setExtractedData({ ...extractedData, due_date: e.target.value })}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                type="number"
                                label="Total Amount"
                                value={extractedData.total_amount}
                                onChange={(e) => setExtractedData({ ...extractedData, total_amount: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                type="number"
                                label="Tax Amount"
                                value={extractedData.tax_amount}
                                onChange={(e) => setExtractedData({ ...extractedData, tax_amount: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="Currency"
                                value={extractedData.currency}
                                onChange={(e) => setExtractedData({ ...extractedData, currency: e.target.value })}
                            />
                        </Grid>
                    </Grid>
                    <Box display="flex" gap={2} mt={3}>
                        <Button variant="contained" color="primary" onClick={handleConfirm}>
                            Confirm & Create Invoice
                        </Button>
                        <Button variant="outlined" onClick={handleReset}>
                            Reset
                        </Button>
                    </Box>
                </Paper>
            )}
        </Box>
    );
};

export default InvoiceCapture;
