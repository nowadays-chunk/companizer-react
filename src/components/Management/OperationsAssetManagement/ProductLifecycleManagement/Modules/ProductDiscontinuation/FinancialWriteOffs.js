
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar
} from '@mui/material';
import {
    AccountBalance,
    ReceiptLong
} from '@mui/icons-material';

const FinancialWriteOffs = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <AccountBalance color="primary" /> Financial Write-Offs & Accruals
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>General Ledger Postings</Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar><Avatar sx={{ bgcolor: 'error.light' }}><ReceiptLong /></Avatar></ListItemAvatar>
                                    <ListItemText
                                        primary="Inventory Obsolescence Expense"
                                        secondary="Debit: $30,000 (GL 5020)"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar><Avatar sx={{ bgcolor: 'secondary.light' }}><ReceiptLong /></Avatar></ListItemAvatar>
                                    <ListItemText
                                        primary="Inventory Asset"
                                        secondary="Credit: $30,000 (GL 1200)"
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Accruals</Typography>
                            <Typography variant="subtitle2">Disposal Costs</Typography>
                            <Typography variant="h5" sx={{ mb: 2 }}>$2,500</Typography>
                            <Typography variant="subtitle2">Contract Termination Penalties</Typography>
                            <Typography variant="h5">$0.00</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FinancialWriteOffs;
