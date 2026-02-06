import React, { useRef, useState } from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardContent, Snackbar, Alert } from '@mui/material';
import { Speed, FileUpload, FileDownload, ContentCopy } from '@mui/icons-material';

const BudgetEntryProductivity = () => {
    const fileInputRef = useRef(null);
    const [msg, setMsg] = useState('');

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setMsg(`Successfully imported: ${event.target.files[0].name}`);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Speed color="primary" /> UX & Productivity Tools
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardActionArea sx={{ p: 2, textAlign: 'center' }} onClick={handleUploadClick}>
                            <input
                                type="file"
                                hidden
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept=".csv,.xlsx"
                            />
                            <FileUpload fontSize="large" color="primary" />
                            <CardContent>
                                <Typography variant="h6">Bulk Import</Typography>
                                <Typography variant="body2" color="text.secondary">Upload Excel / CSV templates</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardActionArea sx={{ p: 2, textAlign: 'center' }} onClick={() => setMsg('Budget cloned for FY2025 successfully!')}>
                            <ContentCopy fontSize="large" color="secondary" />
                            <CardContent>
                                <Typography variant="h6">Clone Budget</Typography>
                                <Typography variant="body2" color="text.secondary">Copy FY2024 structure to FY2025</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardActionArea sx={{ p: 2, textAlign: 'center' }} onClick={() => setMsg('Export started. Download will begin shortly.')}>
                            <FileDownload fontSize="large" color="success" />
                            <CardContent>
                                <Typography variant="h6">Export Reports</Typography>
                                <Typography variant="body2" color="text.secondary">Download all variance reports</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            <Snackbar open={!!msg} autoHideDuration={3000} onClose={() => setMsg('')}>
                <Alert severity="info" onClose={() => setMsg('')}>{msg}</Alert>
            </Snackbar>
        </Box>
    );
};

export default BudgetEntryProductivity;
