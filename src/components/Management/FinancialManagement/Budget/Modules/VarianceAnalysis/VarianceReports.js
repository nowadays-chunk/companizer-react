import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardContent, Snackbar, Alert, TextField, MenuItem } from '@mui/material';
import { BarChart, Description, FileDownload } from '@mui/icons-material';

const VarianceReports = () => {
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');
    const [month, setMonth] = useState('2024-07');

    const handleDownload = (reportName) => {
        setMsg(`Downloading ${reportName} for ${month}...`);
        setOpen(true);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <BarChart color="primary" /> Variance Reports
                </Typography>
                <TextField
                    type="month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    size="small"
                    label="Report Period"
                    InputLabelProps={{ shrink: true }}
                />
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardActionArea sx={{ p: 2, textAlign: 'center' }} onClick={() => handleDownload('Monthly Variance Pack')}>
                            <Description fontSize="large" color="primary" />
                            <CardContent>
                                <Typography variant="h6">Monthly Variance Pack</Typography>
                                <Typography variant="body2" color="text.secondary">Standard PDF export for ExCo</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardActionArea sx={{ p: 2, textAlign: 'center' }} onClick={() => handleDownload('Raw Data Export')}>
                            <FileDownload fontSize="large" color="success" />
                            <CardContent>
                                <Typography variant="h6">Raw Data Export</Typography>
                                <Typography variant="body2" color="text.secondary">CSV dump of all line items</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                <Alert severity="info" onClose={() => setOpen(false)}>{msg}</Alert>
            </Snackbar>
        </Box>
    );
};

export default VarianceReports;
