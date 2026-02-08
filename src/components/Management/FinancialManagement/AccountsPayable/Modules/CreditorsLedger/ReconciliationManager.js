import React, { useState, useEffect } from 'react';
import {
    Box,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Chip,
    Alert,
    Grid,
    Card,
    CardContent,
    LinearProgress,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField
} from '@mui/material';
import {
    CheckCircle,
    Error,
    Warning,
    Refresh,
    PlayArrow,
    Description
} from '@mui/icons-material';

import { apReconcileCreditorsLedger } from '../../../../../../utils/clientQueries';

const ReconciliationManager = ({ items = [], glData = [], onReconcile, onRefresh }) => {
    const [reconciliationStatus, setReconciliationStatus] = useState({});
    const [variances, setVariances] = useState([]);
    const [showApprovalDialog, setShowApprovalDialog] = useState(false);
    const [selectedVariance, setSelectedVariance] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Optionally fetch last status on load, or just wait for user to run
        // For now, we keep it empty or mock initial state until user runs it
    }, []);

    const performReconciliation = async () => {
        setLoading(true);
        try {
            const result = await apReconcileCreditorsLedger({
                // Pass any necessary params, currently backend takes orgID from user
            });

            setReconciliationStatus({
                subledgerTotal: result.subledgerTotal,
                glTotal: result.glTotal,
                difference: result.difference,
                isReconciled: result.isReconciled,
                reconciledCount: result.reconciledCount || 0,
                unreconciledCount: result.unreconciledCount || 0,
                varianceCount: result.variances ? result.variances.length : 0
            });
            setVariances(result.variances || []);
        } catch (error) {
            console.error("Reconciliation failed", error);
        } finally {
            setLoading(false);
        }
    };

    const handleRunReconciliation = () => {
        performReconciliation();
        if (onRefresh) onRefresh();
    };

    const handleApproveVariance = (variance) => {
        setSelectedVariance(variance);
        setShowApprovalDialog(true);
    };

    const handleConfirmApproval = () => {
        // In real implementation, this would call the backend
        console.log('Approving variance:', selectedVariance);
        setShowApprovalDialog(false);
        setSelectedVariance(null);
        // performReconciliation(); // Refresh
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'reconciled':
                return <CheckCircle color="success" />;
            case 'out_of_balance':
                return <Error color="error" />;
            case 'pending_approval':
                return <Warning color="warning" />;
            default:
                return <Warning color="action" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'reconciled':
                return 'success';
            case 'out_of_balance':
                return 'error';
            case 'pending_approval':
                return 'warning';
            default:
                return 'default';
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Reconciliation Manager</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        variant="outlined"
                        startIcon={<Refresh />}
                        onClick={onRefresh}
                    >
                        Refresh
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<PlayArrow />}
                        onClick={handleRunReconciliation}
                        disabled={loading}
                    >
                        {loading ? 'Running...' : 'Run Reconciliation'}
                    </Button>
                </Box>
            </Box>

            {/* Status Alert */}
            {reconciliationStatus.isReconciled !== undefined && (
                <Alert
                    severity={reconciliationStatus.isReconciled ? 'success' : 'error'}
                    sx={{ mb: 3 }}
                >
                    {reconciliationStatus.isReconciled
                        ? 'Subledger and GL are reconciled within tolerance'
                        : `Out of balance: $${reconciliationStatus.difference?.toLocaleString()} variance detected`}
                </Alert>
            )}

            {/* Summary Cards */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Subledger Total</Typography>
                            <Typography variant="h5">
                                ${(reconciliationStatus.subledgerTotal || 0).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>GL Total</Typography>
                            <Typography variant="h5">
                                ${(reconciliationStatus.glTotal || 0).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Difference</Typography>
                            <Typography
                                variant="h5"
                                color={reconciliationStatus.isReconciled ? 'success.main' : 'error.main'}
                            >
                                ${(reconciliationStatus.difference || 0).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Reconciliation Progress</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LinearProgress
                                    variant="determinate"
                                    value={
                                        (reconciliationStatus.reconciledCount /
                                            (reconciliationStatus.reconciledCount + reconciliationStatus.unreconciledCount) * 100) || 0
                                    }
                                    sx={{ flexGrow: 1 }}
                                />
                                <Typography variant="body2">
                                    {reconciliationStatus.reconciledCount || 0}/
                                    {(reconciliationStatus.reconciledCount + reconciliationStatus.unreconciledCount) || 0}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Variances Table */}
            <Paper sx={{ mb: 3 }}>
                <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                    <Typography variant="h6">Reconciliation Variances</Typography>
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Creditor</TableCell>
                                <TableCell align="right">Subledger Balance</TableCell>
                                <TableCell align="right">GL Balance</TableCell>
                                <TableCell align="right">Variance</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Last Reconciled</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {variances.map((variance, index) => (
                                <TableRow key={index} hover>
                                    <TableCell>{variance.creditor_name}</TableCell>
                                    <TableCell align="right">
                                        ${variance.subledger_balance.toLocaleString()}
                                    </TableCell>
                                    <TableCell align="right">
                                        ${variance.gl_balance.toLocaleString()}
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            color: Math.abs(variance.variance) > 100 ? 'error.main' : 'warning.main',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        ${variance.variance.toLocaleString()}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            icon={getStatusIcon(variance.status)}
                                            label={variance.status.replace('_', ' ').toUpperCase()}
                                            color={getStatusColor(variance.status)}
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {variance.last_reconciliation_date
                                            ? new Date(variance.last_reconciliation_date).toLocaleDateString()
                                            : 'Never'}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            onClick={() => handleApproveVariance(variance)}
                                        >
                                            Clear
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {variances.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={7} align="center">
                                        <Box sx={{ py: 3 }}>
                                            <CheckCircle color="success" sx={{ fontSize: 48, mb: 1 }} />
                                            <Typography>No variances detected</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            {/* Approval Dialog */}
            <Dialog open={showApprovalDialog} onClose={() => setShowApprovalDialog(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Clear Reconciliation Variance</DialogTitle>
                <DialogContent>
                    {selectedVariance && (
                        <Box sx={{ pt: 2 }}>
                            <Typography variant="body2" gutterBottom>
                                <strong>Creditor:</strong> {selectedVariance.creditor_name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <strong>Variance Amount:</strong> ${selectedVariance.variance.toLocaleString()}
                            </Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                label="Clearing Reason"
                                placeholder="Enter reason for clearing this variance..."
                                sx={{ mt: 2 }}
                            />
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowApprovalDialog(false)}>Cancel</Button>
                    <Button onClick={handleConfirmApproval} variant="contained">
                        Confirm Clearing
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ReconciliationManager;
