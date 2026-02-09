import React, { useState, useEffect } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    MenuItem,
    Button,
    InputAdornment,
    Divider,
    Alert,
    FormControlLabel,
    Checkbox
} from '@mui/material';
import { Save, Calculate, AttachMoney } from '@mui/icons-material';
import { fieldsConfig, collectionName, entityName } from './Modules/General/TransactionEntry';

const TransactionEntry = () => {
    const [formData, setFormData] = useState({
        transactionDate: new Date().toISOString().split('T')[0],
        description: '',
        currency: 'EUR',
        amount: '',
        exchangeRate: 0.92,
        baseAmount: '',
        type: 'Payment',
        reference: '',
        autoCalculate: true
    });

    useEffect(() => {
        if (formData.autoCalculate && formData.amount && formData.exchangeRate) {
            const calculated = parseFloat(formData.amount) / parseFloat(formData.exchangeRate); // Assuming Rate is USD per Foreign Unit, or similar
            // Let's assume Rate is Foreign per USD? or USD per Foreign?
            // Usually "Exchange Rate to Base" means 1 Unit Foreign = X Base.
            // If base is USD, and EUR rate is 1.08 (1 EUR = 1.08 USD).
            // Then Base Amount = Foreign Amount * Rate.

            const baseAmt = (parseFloat(formData.amount) * parseFloat(formData.exchangeRate)).toFixed(2);
            setFormData(prev => ({ ...prev, baseAmount: baseAmt }));
        }
    }, [formData.amount, formData.exchangeRate, formData.autoCalculate]);

    const handleChange = (field) => (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData({ ...formData, [field]: value });
    };

    return (
        <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
            <Typography variant="h5" gutterBottom>
                Foreign Currency Transaction Entry
            </Typography>
            <Paper sx={{ p: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" color="primary" gutterBottom>
                            Transaction Details
                        </Typography>
                        <Divider />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            select
                            label="Transaction Type"
                            value={formData.type}
                            onChange={handleChange('type')}
                        >
                            <MenuItem value="Payment">Payment</MenuItem>
                            <MenuItem value="Receipt">Receipt</MenuItem>
                            <MenuItem value="Transfer">Transfer</MenuItem>
                            <MenuItem value="Fee">Fee/Charge</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            type="date"
                            label="Date"
                            InputLabelProps={{ shrink: true }}
                            value={formData.transactionDate}
                            onChange={handleChange('transactionDate')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            value={formData.description}
                            onChange={handleChange('description')}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Reference / Check #"
                            value={formData.reference}
                            onChange={handleChange('reference')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* Spacer */}
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="subtitle2" color="primary" sx={{ mt: 2 }} gutterBottom>
                            Currency & Amounts
                        </Typography>
                        <Divider />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            select
                            label="Currency"
                            value={formData.currency}
                            onChange={handleChange('currency')}
                        >
                            <MenuItem value="EUR">EUR</MenuItem>
                            <MenuItem value="GBP">GBP</MenuItem>
                            <MenuItem value="JPY">JPY</MenuItem>
                            <MenuItem value="CAD">CAD</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            fullWidth
                            label="Amount (Foreign Currency)"
                            type="number"
                            value={formData.amount}
                            onChange={handleChange('amount')}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">{formData.currency}</InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Exchange Rate"
                            type="number"
                            helperText={`1 ${formData.currency} = ${formData.exchangeRate} USD`}
                            value={formData.exchangeRate}
                            onChange={handleChange('exchangeRate')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.autoCalculate}
                                    onChange={handleChange('autoCalculate')}
                                />
                            }
                            label="Auto-calculate Base Amount"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Alert severity="info" icon={<Calculate />}>
                            Base Amount: <strong>{formData.baseAmount || '0.00'} USD</strong>
                        </Alert>
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                        <Button variant="outlined">Cancel</Button>
                        <Button variant="contained" startIcon={<Save />}>Post Transaction</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default TransactionEntry;
