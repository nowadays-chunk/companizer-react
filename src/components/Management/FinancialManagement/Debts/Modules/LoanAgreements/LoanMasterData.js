import React from 'react';
import { Box, Typography, Grid, TextField, Paper, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const LoanMasterData = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Loan Master Data</Typography>
            <Paper sx={{ p: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Loan Agreement ID" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Reference Number" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Lender / Counterparty" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Loan Type</InputLabel>
                            <Select label="Loan Type">
                                <MenuItem value="term">Term Loan</MenuItem>
                                <MenuItem value="revolver">Revolving Credit</MenuItem>
                                <MenuItem value="bond">Bond / Debenture</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Original Principal Amount" type="number" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Currency</InputLabel>
                            <Select label="Currency">
                                <MenuItem value="USD">USD</MenuItem>
                                <MenuItem value="EUR">EUR</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth type="date" label="Start Date" InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth type="date" label="Maturity Date" InputLabelProps={{ shrink: true }} />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default LoanMasterData;
