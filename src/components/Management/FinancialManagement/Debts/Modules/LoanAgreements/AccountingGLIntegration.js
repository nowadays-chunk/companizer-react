import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    Divider,
    FormControlLabel,
    Switch,
    Autocomplete,
    Alert
} from '@mui/material';

const AccountingGLIntegration = () => {
    // Mock Chart of Accounts options
    const accounts = [
        { label: '2000 - Long Term Debt', id: 2000 },
        { label: '2001 - Short Term Debt', id: 2001 },
        { label: '6000 - Interest Expense', id: 6000 },
        { label: '2100 - Accrued Interest Payable', id: 2100 },
        { label: '2200 - Deferred Financing Costs', id: 2200 },
        { label: '1000 - Cash / Bank', id: 1000 },
        { label: '8000 - FX Gain/Loss', id: 8000 },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Accounting & GL Integration</Typography>
            <Alert severity="info" sx={{ mb: 3 }}>
                Mappings here determine how automated journals are generated for this loan agreement.
            </Alert>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Balance Sheet Mappings</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            options={accounts}
                            renderInput={(params) => <TextField {...params} label="Loan Liability (Long Term)" />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            options={accounts}
                            renderInput={(params) => <TextField {...params} label="Loan Liability (Current Portion)" />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            options={accounts}
                            renderInput={(params) => <TextField {...params} label="Accrued Interest Payable" />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            options={accounts}
                            renderInput={(params) => <TextField {...params} label="Deferred Financing Costs" />}
                        />
                    </Grid>
                </Grid>
            </Paper>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>P&L Mappings</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            options={accounts}
                            renderInput={(params) => <TextField {...params} label="Interest Expense" />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            options={accounts}
                            renderInput={(params) => <TextField {...params} label="Bank Fees & Charges" />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            options={accounts}
                            renderInput={(params) => <TextField {...params} label="FX Gain/Loss (Realized)" />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            options={accounts}
                            renderInput={(params) => <TextField {...params} label="FX Gain/Loss (Unrealized)" />}
                        />
                    </Grid>
                </Grid>
            </Paper>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Automation Settings</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Switch defaultChecked />} label="Auto-generate journals for Interest Accruals" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Switch defaultChecked />} label="Auto-generate journals for Repayments" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Switch />} label="Auto-reclassify Current vs Long Term portion monthly" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Switch />} label="IFRS / GAAP Dual Reporting Mode" />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default AccountingGLIntegration;
