import React, { useState } from 'react';
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
    useTheme,
    Alert,
    CircularProgress
} from '@mui/material';
import { bankMatchTransaction, bankAutoReconcile } from '../../../../../../utils/clientQueries';
import { fieldsConfig, collectionName, entityName } from './Modules/General/BankReconciliation';

const BankReconciliation = () => {
    const theme = useTheme();
    const [selectedBankTx, setSelectedBankTx] = useState([]);
    const [selectedGlTx, setSelectedGlTx] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    // Mock data with IDs
    const bankTransactions = [
        { id: 'btx-001', date: 'Jan 15', description: 'ACH Transfer - Vendor X', amount: -500.00 },
        { id: 'btx-002', date: 'Jan 16', description: 'Bank Fee', amount: -25.00 }
    ];

    const glTransactions = [
        { id: 'gtx-001', date: 'Jan 15', reference: 'Payment #10023', amount: -500.00 },
        { id: 'gtx-002', date: 'Jan 18', reference: 'Deposit #555', amount: 1200.00 }
    ];

    const handleBankSelect = (id) => {
        setSelectedBankTx(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const handleGlSelect = (id) => {
        setSelectedGlTx(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const handleMatch = async () => {
        if (selectedBankTx.length !== 1 || selectedGlTx.length !== 1) {
            setMessage({ type: 'warning', text: 'Please select exactly one Bank Transaction and one GL Transaction to match manually.' });
            return;
        }
        setLoading(true);
        try {
            await bankMatchTransaction({
                bankTransactionId: selectedBankTx[0],
                glTransactionId: selectedGlTx[0]
            });
            setMessage({ type: 'success', text: 'Transactions matched successfully' });
            setSelectedBankTx([]);
            setSelectedGlTx([]);
        } catch (error) {
            console.error(error);
            setMessage({ type: 'error', text: 'Failed to match transactions' });
        } finally {
            setLoading(false);
        }
    };

    const handleAutoMatch = async () => {
        setLoading(true);
        try {
            await bankAutoReconcile({ accountId: 'default-account-id' }); // Placeholder account ID
            setMessage({ type: 'success', text: 'Auto-reconciliation completed successfully' });
        } catch (error) {
            console.error(error);
            setMessage({ type: 'error', text: 'Auto-reconciliation failed' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            {message && <Alert severity={message.type} sx={{ mb: 3 }} onClose={() => setMessage(null)}>{message.text}</Alert>}

            <Card sx={{ mb: 3 }}>
                <CardHeader
                    title="Bank & Cash Reconciliation"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                    action={
                        <Box>
                            <Button
                                variant="outlined"
                                sx={{ mr: 1 }}
                                onClick={handleAutoMatch}
                                disabled={loading}
                            >
                                {loading ? 'Running...' : 'Auto-Match'}
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleMatch}
                                disabled={loading}
                            >
                                Match Selected
                            </Button>
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
                                            <TableCell padding="checkbox"></TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Description</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {bankTransactions.map((tx) => (
                                            <TableRow hover key={tx.id} selected={selectedBankTx.includes(tx.id)}>
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={selectedBankTx.includes(tx.id)}
                                                        onChange={() => handleBankSelect(tx.id)}
                                                    />
                                                </TableCell>
                                                <TableCell>{tx.date}</TableCell>
                                                <TableCell>{tx.description}</TableCell>
                                                <TableCell align="right">{tx.amount.toFixed(2)}</TableCell>
                                            </TableRow>
                                        ))}
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
                                            <TableCell padding="checkbox"></TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Reference</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {glTransactions.map((tx) => (
                                            <TableRow hover key={tx.id} selected={selectedGlTx.includes(tx.id)}>
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={selectedGlTx.includes(tx.id)}
                                                        onChange={() => handleGlSelect(tx.id)}
                                                    />
                                                </TableCell>
                                                <TableCell>{tx.date}</TableCell>
                                                <TableCell>{tx.reference}</TableCell>
                                                <TableCell align="right">{tx.amount.toFixed(2)}</TableCell>
                                            </TableRow>
                                        ))}
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
