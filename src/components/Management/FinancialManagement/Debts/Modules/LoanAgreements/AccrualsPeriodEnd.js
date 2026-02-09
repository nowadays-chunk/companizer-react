import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    LinearProgress,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider
} from '@mui/material';
import { CheckCircle, Pending, DateRange } from '@mui/icons-material';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/AccrualsPeriodEnd';

const AccrualsPeriodEnd = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Accruals & Period-End Processing</Typography>
                <Button variant="contained" size="large" startIcon={<DateRange />}>
                    Run Month-End Close
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Interest Accrual Calculation</Typography>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="body2" color="textSecondary">Current Period: October 2023</Typography>
                            <Typography variant="h4" sx={{ my: 1 }}>$ 1,250.45</Typography>
                            <Typography variant="body2" color="textSecondary">Accrued Interest (Estimated)</Typography>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="subtitle2" gutterBottom>Process Status</Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                <ListItemText
                                    primary="Daily Interest Calculation"
                                    secondary="Calculated up to Oct 31, 2023"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                <ListItemText
                                    primary="Rate Validation"
                                    secondary="SOFR rates fetched successfully"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><Pending color="warning" /></ListItemIcon>
                                <ListItemText
                                    primary="Journal Entry Posting"
                                    secondary="Pending Approval"
                                />
                            </ListItem>
                        </List>
                    </Paper>

                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Reconciliation</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">GL Balance (2100)</Typography>
                                <Typography variant="h6">$ 12,500.00</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">Loan Subledger Balance</Typography>
                                <Typography variant="h6">$ 12,500.00</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Alert severity="success">Balances match. No discrepancies found.</Alert>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Next Interest Payment</Typography>
                            <Typography variant="h5">Nov 15, 2023</Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                Days Remaining: 14
                            </Typography>
                            <LinearProgress variant="determinate" value={50} sx={{ mt: 2 }} />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Period Settings</Typography>
                            <Button fullWidth sx={{ justifyContent: 'flex-start', mt: 1 }}>
                                Preview Accrual Journal
                            </Button>
                            <Button fullWidth sx={{ justifyContent: 'flex-start', mt: 1 }}>
                                Reverse Last Accrual
                            </Button>
                            <Button fullWidth sx={{ justifyContent: 'flex-start', mt: 1 }}>
                                View Calculation Log
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

// Helper component for Alert to avoid import clashes if any
const Alert = ({ severity, children, sx }) => (
    <Box sx={{
        p: 2,
        bgcolor: severity === 'success' ? '#edf7ed' : '#e5f6fd',
        color: severity === 'success' ? '#1e4620' : '#014361',
        borderRadius: 1,
        ...sx
    }}>
        {children}
    </Box>
);

export default AccrualsPeriodEnd;
