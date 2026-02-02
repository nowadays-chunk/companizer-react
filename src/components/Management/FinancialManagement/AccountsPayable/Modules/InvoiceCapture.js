import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Grid, CircularProgress, TextField, Chip, IconButton } from '@mui/material';
import { CloudUpload, DocumentScanner, CheckCircle, Delete } from '@mui/icons-material';

const InvoiceCapture = ({ onCaptureComplete }) => {
    const [file, setFile] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [ocrResult, setOcrResult] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setOcrResult(null);
            // Auto-start processing for demo feel
            processFile(selectedFile);
        }
    };

    const processFile = (file) => {
        setProcessing(true);

        // Simulate AI OCR Delay
        setTimeout(() => {
            setProcessing(false);
            setOcrResult({
                invoice_number: 'INV-' + Math.floor(Math.random() * 100000),
                vendor_name: 'Acme Corp Supply',
                date: new Date().toISOString().split('T')[0],
                amount: (Math.random() * 5000).toFixed(2),
                currency: 'USD',
                confidence: 96
            });
        }, 2000); // 2 second delay
    };

    const handleReset = () => {
        setFile(null);
        setOcrResult(null);
    };

    const handleConfirm = () => {
        if (onCaptureComplete && ocrResult) {
            onCaptureComplete(ocrResult, file);
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Box display="flex" alignItems="center" mb={2}>
                <DocumentScanner color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Smart Invoice Capture</Typography>
                <Chip label="AI Powered" size="small" color="secondary" sx={{ ml: 2 }} />
            </Box>

            <Grid container spacing={3}>
                {/* Upload Section */}
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            border: '2px dashed #ccc',
                            borderRadius: 2,
                            p: 4,
                            textAlign: 'center',
                            backgroundColor: file ? '#f0f8ff' : '#fafafa',
                            cursor: 'pointer',
                            '&:hover': { borderColor: 'primary.main' }
                        }}
                    >
                        {!file ? (
                            <>
                                <CloudUpload sx={{ fontSize: 48, color: 'text.secondary', mb: 1 }} />
                                <Typography color="textSecondary" gutterBottom>
                                    Drag & Drop Invoice PDF here
                                </Typography>
                                <Typography variant="caption" display="block" color="textSecondary" mb={2}>
                                    or
                                </Typography>
                                <Button variant="contained" component="label" size="small">
                                    Browse Files
                                    <input type="file" hidden onChange={handleFileChange} accept=".pdf,.png,.jpg" />
                                </Button>
                            </>
                        ) : (
                            <Box>
                                <DocumentScanner sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                                <Typography variant="subtitle1">{file.name}</Typography>
                                <Typography variant="caption" color="textSecondary">
                                    {(file.size / 1024).toFixed(0)} KB
                                </Typography>
                                <Box mt={2}>
                                    <IconButton onClick={handleReset} color="error" size="small">
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Grid>

                {/* Results Section */}
                <Grid item xs={12} md={7}>
                    {processing ? (
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                            <CircularProgress size={40} />
                            <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                                Extracting data from document...
                            </Typography>
                            <Typography variant="caption" color="primary">
                                Analyzing Header, Line Items, and Tables
                            </Typography>
                        </Box>
                    ) : ocrResult ? (
                        <Box sx={{ border: '1px solid #eee', borderRadius: 2, p: 2 }}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                <Typography variant="subtitle2" color="success.main" display="flex" alignItems="center">
                                    <CheckCircle sx={{ fontSize: 16, mr: 0.5 }} /> Extraction Complete
                                </Typography>
                                <Chip label={`Confidence: ${ocrResult.confidence}%`} size="small" color="success" variant="outlined" />
                            </Box>

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Detected Vendor" value={ocrResult.vendor_name} size="small" InputProps={{ readOnly: true }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Invoice #" value={ocrResult.invoice_number} size="small" InputProps={{ readOnly: true }} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField fullWidth label="Date" value={ocrResult.date} size="small" InputProps={{ readOnly: true }} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField fullWidth label="Total Amount" value={ocrResult.amount} size="small" InputProps={{ readOnly: true }} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField fullWidth label="Currency" value={ocrResult.currency} size="small" InputProps={{ readOnly: true }} />
                                </Grid>
                            </Grid>

                            <Box mt={3} display="flex" justifyContent="flex-end" gap={1}>
                                <Button variant="outlined" onClick={handleReset}>Discard</Button>
                                <Button variant="contained" onClick={handleConfirm}>Review & Save Draft</Button>
                            </Box>
                        </Box>
                    ) : (
                        <Box display="flex" alignItems="center" justifyContent="center" height="100%" color="text.secondary">
                            <Typography variant="body2">Upload a document to preview extracted data</Typography>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default InvoiceCapture;
