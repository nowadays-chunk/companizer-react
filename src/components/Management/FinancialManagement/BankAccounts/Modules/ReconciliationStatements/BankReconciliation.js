import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    Divider,
    useTheme
} from '@mui/material';

const BankReconciliation = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card sx={{ mb: 3 }}>
                <CardHeader
                    title="Bank & Cash Reconciliation"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                    action={
                        <Box>
                            <Button variant="outlined" sx={{ mr: 1 }}>Auto-Match</Button>
                            <Button variant="contained" color="primary">Match Selected</Button>
                        </Box>
                    }
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={2}>
                        {/* Summary Block */}
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: theme.palette.background.default, p: 2, borderRadius: 1 }}>
                                <Box>
                                    <Typography variant="body2" color="textSecondary">Statement Balance</Typography>
                                    <Typography variant="h6">$1,250,000.00</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="textSecondary">GL Balance</Typography>
                                    <Typography variant="h6">$1,245,500.00</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="error">Unreconciled Difference</Typography>
                                    <Typography variant="h6" color="error">$4,500.00</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Side by Side View */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Bank Statement Lines</Typography>
                            <TableContainer component={Paper} variant="outlined" sx={{ maxHeight: 400 }}>
                                <Table stickyHeader size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell padding="checkbox"><Checkbox /></TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Description</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow hover>
                                            <TableCell padding="checkbox"><Checkbox /></TableCell>
                                            <TableCell>Jan 15</TableCell>
                                            <TableCell>ACH Transfer - Vendor X</TableCell>
                                            <TableCell align="right">-500.00</TableCell>
                                        </TableRow>
                                        <TableRow hover>
                                            <TableCell padding="checkbox"><Checkbox /></TableCell>
                                            <TableCell>Jan 16</TableCell>
                                            <TableCell>Bank Fee</TableCell>
                                            <TableCell align="right">-25.00</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>General Ledger Transactions</Typography>
                            <TableContainer component={Paper} variant="outlined" sx={{ maxHeight: 400 }}>
                                <Table stickyHeader size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell padding="checkbox"><Checkbox /></TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Reference</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow hover>
                                            <TableCell padding="checkbox"><Checkbox /></TableCell>
                                            <TableCell>Jan 15</TableCell>
                                            <TableCell>Payment #10023</TableCell>
                                            <TableCell align="right">-500.00</TableCell>
                                        </TableRow>
                                        <TableRow hover>
                                            <TableCell padding="checkbox"><Checkbox /></TableCell>
                                            <TableCell>Jan 18</TableCell>
                                            <TableCell>Deposit #555</TableCell>
                                            <TableCell align="right">1,200.00</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default BankReconciliation;
