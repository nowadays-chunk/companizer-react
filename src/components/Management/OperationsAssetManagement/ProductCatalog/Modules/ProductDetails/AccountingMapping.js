
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    Autocomplete,
    FormControlLabel,
    Switch,
    Divider
} from '@mui/material';
import {
    AccountBalance,
    ReceiptLong,
    AttachMoney
} from '@mui/icons-material';

const AccountingMapping = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <AccountBalance color="primary" /> Accounting & GL Mapping
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Revenue & Receivables</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        options={['4000 - Sales Revenue (Product)', '4100 - Service Revenue', '4200 - Subscription Revenue']}
                                        renderInput={(params) => <TextField {...params} label="Sales / Revenue Account" />}
                                        defaultValue="4000 - Sales Revenue (Product)"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        options={['4500 - Sales Returns', '4600 - Sales Discounts']}
                                        renderInput={(params) => <TextField {...params} label="Sales Returns / Allowances" />}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        options={['2100 - Deferred Revenue']}
                                        renderInput={(params) => <TextField {...params} label="Deferred Revenue Account (Unearned)" />}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Profit Centers</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Default Cost Center" defaultValue="CC-100 (Manufacturing)" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Default Profit Center" defaultValue="PC-200 (North America Sales)" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Cost & Inventory</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        options={['1200 - Inventory Asset', '1250 - Raw Materials', '1260 - Finished Goods']}
                                        renderInput={(params) => <TextField {...params} label="Inventory Asset Account" />}
                                        defaultValue="1260 - Finished Goods"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        options={['5000 - Cost of Goods Sold', '5100 - Freight In']}
                                        renderInput={(params) => <TextField {...params} label="Cost of Goods Sold (COGS) Account" />}
                                        defaultValue="5000 - Cost of Goods Sold"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        options={['5200 - Inventory Shrinkage', '5300 - Scrap Expense']}
                                        renderInput={(params) => <TextField {...params} label="Inventory Adjustment Account" />}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ my: 2 }} />
                                    <FormControlLabel control={<Switch />} label="Expense Immediately (Non-Inventory Item)" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        options={['6000 - Office Supplies', '6100 - Equipment Expense']}
                                        renderInput={(params) => <TextField {...params} label="Expense Account (If Non-Stock)" />}
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AccountingMapping;
