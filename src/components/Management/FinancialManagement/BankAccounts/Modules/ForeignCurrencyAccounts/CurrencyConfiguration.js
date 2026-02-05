import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    FormControlLabel,
    Switch,
    Button,
    Card,
    CardContent,
    Divider,
    Alert
} from '@mui/material';
import { Save, Refresh } from '@mui/icons-material';

const CurrencyConfiguration = () => {
    const [config, setConfig] = useState({
        baseCurrency: 'USD',
        functionalCurrency: 'USD',
        reportingCurrency: 'USD',
        allowMultiCurrency: true,
        enforceRateValidation: true,
        rateTolerancePercent: 2.5,
        defaultRateProvider: 'ECB',
        revaluationFrequency: 'Monthly',
        lockRatesAfterPosting: true,
        autoPostUnrealized: false
    });

    const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CNY', 'CHF'];

    const handleChange = (field) => (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setConfig({ ...config, [field]: value });
    };

    const handleSave = () => {
        console.log('Saving Configuration:', config);
        // Save logic here
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" component="h1">
                    Account Currency Configuration
                </Typography>
                <Box>
                    <Button
                        startIcon={<Refresh />}
                        sx={{ mr: 1 }}
                        variant="outlined"
                    >
                        Reset
                    </Button>
                    <Button
                        startIcon={<Save />}
                        variant="contained"
                        onClick={handleSave}
                    >
                        Save Changes
                    </Button>
                </Box>
            </Box>

            <Alert severity="info" sx={{ mb: 3 }}>
                Configuration specific to this Foreign Currency Account entity. Changes affect how transactions are validated and posted.
            </Alert>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Currency Handling
                        </Typography>
                        <Divider sx={{ mb: 2 }} />

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Base Currency</InputLabel>
                                    <Select
                                        value={config.baseCurrency}
                                        label="Base Currency"
                                        onChange={handleChange('baseCurrency')}
                                    >
                                        {currencies.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Functional Currency</InputLabel>
                                    <Select
                                        value={config.functionalCurrency}
                                        label="Functional Currency"
                                        onChange={handleChange('functionalCurrency')}
                                    >
                                        {currencies.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={config.allowMultiCurrency}
                                            onChange={handleChange('allowMultiCurrency')}
                                        />
                                    }
                                    label="Allow Multi-Currency Transactions"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={config.lockRatesAfterPosting}
                                            onChange={handleChange('lockRatesAfterPosting')}
                                        />
                                    }
                                    label="Lock Exchange Rates After Posting"
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Validation & Controls
                        </Typography>
                        <Divider sx={{ mb: 2 }} />

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={config.enforceRateValidation}
                                            onChange={handleChange('enforceRateValidation')}
                                        />
                                    }
                                    label="Enforce Exchange Rate Validation"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Rate Tolerance (%)"
                                    type="number"
                                    value={config.rateTolerancePercent}
                                    onChange={handleChange('rateTolerancePercent')}
                                    margin="normal"
                                    disabled={!config.enforceRateValidation}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Rate Provider</InputLabel>
                                    <Select
                                        value={config.defaultRateProvider}
                                        label="Rate Provider"
                                        onChange={handleChange('defaultRateProvider')}
                                    >
                                        <MenuItem value="ECB">European Central Bank</MenuItem>
                                        <MenuItem value="OANDA">OANDA</MenuItem>
                                        <MenuItem value="Reuters">Reuters</MenuItem>
                                        <MenuItem value="Manual">Manual Entry Only</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Revaluation Settings
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Revaluation Frequency</InputLabel>
                                    <Select
                                        value={config.revaluationFrequency}
                                        label="Revaluation Frequency"
                                        onChange={handleChange('revaluationFrequency')}
                                    >
                                        <MenuItem value="Daily">Daily</MenuItem>
                                        <MenuItem value="Weekly">Weekly</MenuItem>
                                        <MenuItem value="Monthly">Monthly</MenuItem>
                                        <MenuItem value="Quarterly">Quarterly</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={config.autoPostUnrealized}
                                            onChange={handleChange('autoPostUnrealized')}
                                        />
                                    }
                                    label="Auto-Post Unrealized Gain/Loss"
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CurrencyConfiguration;
