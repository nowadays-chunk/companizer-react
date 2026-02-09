import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Grid,
    Card,
    CardContent
} from '@mui/material';
import {
    Report,
    CheckCircle,
    Warning,
    TrendingUp,
    Download,
    Add
} from '@mui/icons-material';
import { fieldsConfig, collectionName } from './Modules/Specific/DisputeManager';

const DisputeManager = ({ items = [], onRaiseDispute, onResolveDispute }) => {
    const [filterStatus, setFilterStatus] = useState('all');
    const [showRaiseDialog, setShowRaiseDialog] = useState(false);
    const [showResolveDialog, setShowResolveDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [disputeForm, setDisputeForm] = useState({
        reason_code: '',
        amount: '',
        description: ''
    });

    const getDisputedItems = () => {
        if (!items || items.length === 0) return [];

        let filtered = items.filter(item =>
            item.is_disputed ||
            item.dispute_status !== 'none'
        );

        if (filterStatus !== 'all') {
            filtered = filtered.filter(item => item.dispute_status === filterStatus);
        }

        return filtered;
    };

    const disputedItems = getDisputedItems();

    const calculateSummary = () => {
        const total = disputedItems.length;
        const totalAmount = disputedItems.reduce((sum, item) =>
            sum + parseFloat(item.dispute_amount || item.original_amount || 0), 0
        );

        const byStatus = disputedItems.reduce((acc, item) => {
            const status = item.dispute_status || 'none';
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});

        const byReason = disputedItems.reduce((acc, item) => {
            const reason = item.dispute_reason_code || 'Unknown';
            acc[reason] = (acc[reason] || 0) + 1;
            return acc;
        }, {});

        return { total, totalAmount, byStatus, byReason };
    };

    const summary = calculateSummary();

    const handleRaiseDispute = (item) => {
        setSelectedItem(item);
        setDisputeForm({
            reason_code: '',
            amount: item.original_amount || '',
            description: ''
        });
        setShowRaiseDialog(true);
    };

    const handleConfirmRaise = () => {
        if (onRaiseDispute) {
            onRaiseDispute(selectedItem, disputeForm);
        }
        setShowRaiseDialog(false);
        setSelectedItem(null);
    };

    const handleResolveDispute = (item) => {
        setSelectedItem(item);
        setShowResolveDialog(true);
    };

    const handleConfirmResolve = () => {
        if (onResolveDispute) {
            onResolveDispute(selectedItem);
        }
        setShowResolveDialog(false);
        setSelectedItem(null);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'raised':
                return 'error';
            case 'under_review':
                return 'warning';
            case 'resolved':
                return 'success';
            case 'escalated':
                return 'error';
            default:
                return 'default';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'raised':
                return <Report />;
            case 'under_review':
                return <Warning />;
            case 'resolved':
                return <CheckCircle />;
            case 'escalated':
                return <TrendingUp />;
            default:
                return null;
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Dispute Manager</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel>Filter Status</InputLabel>
                        <Select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            label="Filter Status"
                        >
                            <MenuItem value="all">All Disputes</MenuItem>
                            <MenuItem value="raised">Raised</MenuItem>
                            <MenuItem value="under_review">Under Review</MenuItem>
                            <MenuItem value="resolved">Resolved</MenuItem>
                            <MenuItem value="escalated">Escalated</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        startIcon={<Add />}
                        onClick={() => handleRaiseDispute({})}
                    >
                        Raise Dispute
                    </Button>
                </Box>
            </Box>

            {/* Summary Cards */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Total Disputes</Typography>
                            <Typography variant="h4">{summary.total}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Disputed Amount</Typography>
                            <Typography variant="h4" color="error.main">
                                ${summary.totalAmount.toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Active Disputes</Typography>
                            <Typography variant="h4" color="warning.main">
                                {(summary.byStatus.raised || 0) + (summary.byStatus.under_review || 0)}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Resolved</Typography>
                            <Typography variant="h4" color="success.main">
                                {summary.byStatus.resolved || 0}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Disputes Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Creditor</TableCell>
                            <TableCell>Invoice/Doc Number</TableCell>
                            <TableCell align="right">Dispute Amount</TableCell>
                            <TableCell>Reason Code</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Raised Date</TableCell>
                            <TableCell>Workflow Stage</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {disputedItems.map((item, index) => (
                            <TableRow key={index} hover>
                                <TableCell>{item.creditor_name || 'Unknown'}</TableCell>
                                <TableCell>{item.source_document_number || item.creditor_id}</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'error.main' }}>
                                    ${(item.dispute_amount || item.original_amount || 0).toLocaleString()}
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        label={item.dispute_reason_code || 'Not Specified'}
                                        size="small"
                                        variant="outlined"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        icon={getStatusIcon(item.dispute_status)}
                                        label={(item.dispute_status || 'none').replace('_', ' ').toUpperCase()}
                                        color={getStatusColor(item.dispute_status)}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    {item.dispute_raised_date
                                        ? new Date(item.dispute_raised_date).toLocaleDateString()
                                        : '-'}
                                </TableCell>
                                <TableCell>{item.dispute_workflow_stage || '-'}</TableCell>
                                <TableCell align="center">
                                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                                        {item.dispute_status !== 'resolved' && (
                                            <Button
                                                size="small"
                                                variant="outlined"
                                                color="success"
                                                onClick={() => handleResolveDispute(item)}
                                            >
                                                Resolve
                                            </Button>
                                        )}
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            onClick={() => {/* View details */ }}
                                        >
                                            View
                                        </Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                        {disputedItems.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={8} align="center">
                                    <Box sx={{ py: 3 }}>
                                        <CheckCircle color="success" sx={{ fontSize: 48, mb: 1 }} />
                                        <Typography>No disputes found</Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Raise Dispute Dialog */}
            <Dialog open={showRaiseDialog} onClose={() => setShowRaiseDialog(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Raise Dispute</DialogTitle>
                <DialogContent>
                    <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel>Reason Code</InputLabel>
                            <Select
                                value={disputeForm.reason_code}
                                onChange={(e) => setDisputeForm({ ...disputeForm, reason_code: e.target.value })}
                                label="Reason Code"
                            >
                                <MenuItem value="pricing">Pricing Issue</MenuItem>
                                <MenuItem value="quantity">Quantity Issue</MenuItem>
                                <MenuItem value="quality">Quality Issue</MenuItem>
                                <MenuItem value="delivery">Delivery Issue</MenuItem>
                                <MenuItem value="documentation">Documentation Issue</MenuItem>
                                <MenuItem value="duplicate">Duplicate Invoice</MenuItem>
                                <MenuItem value="unauthorized">Unauthorized Charge</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            label="Dispute Amount"
                            type="number"
                            value={disputeForm.amount}
                            onChange={(e) => setDisputeForm({ ...disputeForm, amount: e.target.value })}
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Description"
                            value={disputeForm.description}
                            onChange={(e) => setDisputeForm({ ...disputeForm, description: e.target.value })}
                            placeholder="Provide detailed description of the dispute..."
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowRaiseDialog(false)}>Cancel</Button>
                    <Button onClick={handleConfirmRaise} variant="contained" color="error">
                        Raise Dispute
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Resolve Dispute Dialog */}
            <Dialog open={showResolveDialog} onClose={() => setShowResolveDialog(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Resolve Dispute</DialogTitle>
                <DialogContent>
                    {selectedItem && (
                        <Box sx={{ pt: 2 }}>
                            <Typography variant="body2" gutterBottom>
                                <strong>Creditor:</strong> {selectedItem.creditor_name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <strong>Dispute Amount:</strong> ${(selectedItem.dispute_amount || 0).toLocaleString()}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <strong>Reason:</strong> {selectedItem.dispute_reason_code}
                            </Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                label="Resolution Notes"
                                placeholder="Enter resolution details..."
                                sx={{ mt: 2 }}
                            />
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowResolveDialog(false)}>Cancel</Button>
                    <Button onClick={handleConfirmResolve} variant="contained" color="success">
                        Confirm Resolution
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default DisputeManager;
