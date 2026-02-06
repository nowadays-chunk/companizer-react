import React from 'react';
import { Box, Typography, Paper, Button, Grid, TextField, Divider } from '@mui/material';
import { CloudUpload, Save } from '@mui/icons-material';

const VATReturnPreparation = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5">VAT Return Preparation (Form VAT-100)</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="outlined" startIcon={<Save />}>Save Draft</Button>
                    <Button variant="contained" startIcon={<CloudUpload />}>Submit to Gateway</Button>
                </Box>
            </Box>

            <Paper sx={{ p: 4, maxWidth: 800, margin: '0 auto' }}>
                <Typography variant="h6" gutterBottom>Box 1: VAT Due on Sales</Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Total Sales Net" defaultValue="1,500,000.00" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="VAT Due" defaultValue="300,000.00" InputProps={{ readOnly: true }} />
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" gutterBottom>Box 4: VAT Reclaimed on Purchases</Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Total Purchases Net" defaultValue="800,000.00" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="VAT Reclaimed" defaultValue="160,000.00" InputProps={{ readOnly: true }} />
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ bgcolor: '#e8f5e9', p: 2, borderRadius: 1 }}>
                    <Typography variant="h5" align="right" color="success.main">
                        Net VAT Payable: $140,000.00
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default VATReturnPreparation;
