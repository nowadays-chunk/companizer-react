import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider
} from '@mui/material';
import { RequestQuote, AccountBalanceWallet } from '@mui/icons-material';

const FeesAndCharges = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Fees & FX Charges
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 0 }}>
                        <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderBottom: 1, borderColor: 'divider' }}>
                            <Typography variant="subtitle1">Recent Charges</Typography>
                        </Box>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: 'error.light' }}>
                                        <RequestQuote />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Wire Transfer Fee - INTLEUR"
                                    secondary="Oct 24, 2025"
                                />
                                <Typography variant="body1" fontWeight="bold">-$25.00</Typography>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: 'warning.light' }}>
                                        <AccountBalanceWallet />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="FX Conversion Spread"
                                    secondary="Oct 24, 2025 • Embedded in Rate"
                                />
                                <Typography variant="body1" color="textSecondary" fontWeight="bold">~$14.50</Typography>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: 'error.light' }}>
                                        <RequestQuote />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Unscheduled Overdraft Interest (JPY)"
                                    secondary="Oct 20, 2025"
                                />
                                <Typography variant="body1" fontWeight="bold">-$4.32</Typography>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Fee Analysis</Typography>
                        <Typography variant="body2" paragraph>
                            Total Bank Fees YTD: <strong>$450.00</strong>
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Est. FX Spreads YTD: <strong>$1,200.00</strong>
                        </Typography>

                        <Box sx={{ p: 2, bgcolor: '#e3f2fd', borderRadius: 1 }}>
                            <Typography variant="caption" color="primary">
                                Tip: Consolidating payments to 'US Parent Corp' could save approx. $150/year in wire fees.
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeesAndCharges;
