import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    Button,
    InputAdornment,
    Divider,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Alert
} from '@mui/material';

const PaymentProcessing = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Payment Processing</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Payment Execution Details</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Payment Reference" defaultValue="IP-2023-11-001" disabled />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Value Date" type="date" defaultValue="2023-11-15" />
                            </Grid>

                            <Grid item xs={12}>
                                <Divider textAlign="left"><Typography variant="caption">Amount Breakdown</Typography></Divider>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    label="Gross Interest"
                                    defaultValue="15000.00"
                                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    label="Withholding Tax"
                                    defaultValue="1500.00"
                                    color="secondary"
                                    InputProps={{ startAdornment: <InputAdornment position="start">-$</InputAdornment> }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    label="Net Payment Amount"
                                    defaultValue="13500.00"
                                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                    focused
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Divider textAlign="left"><Typography variant="caption">Banking Details</Typography></Divider>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Source Bank Account</InputLabel>
                                    <Select defaultValue="op_usd" label="Source Bank Account">
                                        <MenuItem value="op_usd">Operating Account (USD) - Chase Bank **** 1234</MenuItem>
                                        <MenuItem value="op_eur">Operating Account (EUR) - BNP Paribas **** 5678</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField fullWidth label="Beneficiary Details" multiline rows={2} defaultValue="LENDER CORP INC.&#10;ACCT: 987654321, ROUTING: 123456789" />
                            </Grid>

                            <Grid item xs={12} sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                                <Button variant="outlined">Save Draft</Button>
                                <Button variant="contained" color="primary">Initiate Payment</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Validation Report</Typography>
                        <Alert severity="success" sx={{ mb: 1 }}>Accrual Balance Sufficient</Alert>
                        <Alert severity="success" sx={{ mb: 1 }}>Period is Open</Alert>
                        <Alert severity="warning">Large Amount - CFO Approval Required</Alert>
                    </Paper>

                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Attachments</Typography>
                        <Button variant="outlined" fullWidth sx={{ mb: 1 }}>Add Invoice / Statement</Button>
                        <Typography variant="caption" color="textSecondary">No documents attached.</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PaymentProcessing;
