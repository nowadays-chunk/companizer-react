import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    Chip,
    IconButton,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Alert
} from '@mui/material';
import {
    AccountTree,
    Add,
    Edit,
    Delete,
    ExpandMore,
    ChevronRight,
    ContentCopy,
    CloudUpload,
    FileDownload,
    History
} from '@mui/icons-material';

import { fieldsConfig, collectionName, entityName } from './Modules/General/AccountHierarchyConfig';

const AccountHierarchy = () => {
    const [expandedNodes, setExpandedNodes] = useState(['root']);
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMode, setDialogMode] = useState('create'); // create, edit, clone

    // Mock hierarchical data
    const [accountTree] = useState([
        {
            id: '1000',
            code: '1000',
            name: 'Assets',
            type: 'asset',
            is_summary: true,
            children: [
                {
                    id: '1100',
                    code: '1100',
                    name: 'Current Assets',
                    type: 'asset',
                    is_summary: true,
                    children: [
                        { id: '1110', code: '1110', name: 'Cash and Cash Equivalents', type: 'asset', is_summary: false },
                        { id: '1120', code: '1120', name: 'Accounts Receivable', type: 'asset', is_summary: false },
                        { id: '1130', code: '1130', name: 'Inventory', type: 'asset', is_summary: false }
                    ]
                },
                {
                    id: '1200',
                    code: '1200',
                    name: 'Fixed Assets',
                    type: 'asset',
                    is_summary: true,
                    children: [
                        { id: '1210', code: '1210', name: 'Property, Plant & Equipment', type: 'asset', is_summary: false },
                        { id: '1220', code: '1220', name: 'Accumulated Depreciation', type: 'asset', is_summary: false }
                    ]
                }
            ]
        },
        {
            id: '2000',
            code: '2000',
            name: 'Liabilities',
            type: 'liability',
            is_summary: true,
            children: [
                {
                    id: '2100',
                    code: '2100',
                    name: 'Current Liabilities',
                    type: 'liability',
                    is_summary: true,
                    children: [
                        { id: '2110', code: '2110', name: 'Accounts Payable', type: 'liability', is_summary: false },
                        { id: '2120', code: '2120', name: 'Accrued Expenses', type: 'liability', is_summary: false }
                    ]
                }
            ]
        },
        {
            id: '3000',
            code: '3000',
            name: 'Equity',
            type: 'equity',
            is_summary: true,
            children: [
                { id: '3100', code: '3100', name: 'Share Capital', type: 'equity', is_summary: false },
                { id: '3200', code: '3200', name: 'Retained Earnings', type: 'equity', is_summary: false }
            ]
        },
        {
            id: '4000',
            code: '4000',
            name: 'Revenue',
            type: 'revenue',
            is_summary: true,
            children: [
                { id: '4100', code: '4100', name: 'Sales Revenue', type: 'revenue', is_summary: false },
                { id: '4200', code: '4200', name: 'Service Revenue', type: 'revenue', is_summary: false }
            ]
        },
        {
            id: '5000',
            code: '5000',
            name: 'Expenses',
            type: 'expense',
            is_summary: true,
            children: [
                { id: '5100', code: '5100', name: 'Cost of Goods Sold', type: 'expense', is_summary: false },
                { id: '5200', code: '5200', name: 'Operating Expenses', type: 'expense', is_summary: false }
            ]
        }
    ]);

    const toggleNode = (nodeId) => {
        setExpandedNodes(prev =>
            prev.includes(nodeId)
                ? prev.filter(id => id !== nodeId)
                : [...prev, nodeId]
        );
    };

    const handleCreateAccount = () => {
        setDialogMode('create');
        setSelectedAccount(null);
        setDialogOpen(true);
    };

    const handleEditAccount = (account) => {
        setDialogMode('edit');
        setSelectedAccount(account);
        setDialogOpen(true);
    };

    const handleCloneAccount = (account) => {
        setDialogMode('clone');
        setSelectedAccount(account);
        setDialogOpen(true);
    };

    const renderTreeNode = (node, level = 0) => {
        const isExpanded = expandedNodes.includes(node.id);
        const hasChildren = node.children && node.children.length > 0;

        return (
            <Box key={node.id} sx={{ ml: level * 3 }}>
                <Paper
                    elevation={1}
                    sx={{
                        p: 1.5,
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        '&:hover': { bgcolor: 'action.hover' }
                    }}
                >
                    {hasChildren ? (
                        <IconButton size="small" onClick={() => toggleNode(node.id)}>
                            {isExpanded ? <ExpandMore /> : <ChevronRight />}
                        </IconButton>
                    ) : (
                        <Box sx={{ width: 40 }} />
                    )}

                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', minWidth: 80 }}>
                            {node.code}
                        </Typography>
                        <Typography variant="body1">{node.name}</Typography>
                        <Chip
                            label={node.type}
                            size="small"
                            color={
                                node.type === 'asset' ? 'success' :
                                    node.type === 'liability' ? 'error' :
                                        node.type === 'equity' ? 'primary' :
                                            node.type === 'revenue' ? 'info' :
                                                'warning'
                            }
                        />
                        {node.is_summary && <Chip label="Summary" size="small" variant="outlined" />}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <IconButton size="small" color="primary" onClick={() => handleEditAccount(node)}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="secondary" onClick={() => handleCloneAccount(node)}>
                            <ContentCopy fontSize="small" />
                        </IconButton>
                        <IconButton size="small" onClick={() => handleCreateAccount()}>
                            <Add fontSize="small" />
                        </IconButton>
                    </Box>
                </Paper>

                {hasChildren && isExpanded && (
                    <Box sx={{ ml: 2 }}>
                        {node.children.map(child => renderTreeNode(child, level + 1))}
                    </Box>
                )}
            </Box>
        );
    };

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                {/* Header */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <AccountTree color="primary" sx={{ fontSize: 40 }} />
                                <Box>
                                    <Typography variant="h5" fontWeight="bold">
                                        Account Hierarchy Manager
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Manage parent/child account structure, groupings, and versioning
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Button variant="outlined" startIcon={<CloudUpload />}>
                                    Import
                                </Button>
                                <Button variant="outlined" startIcon={<FileDownload />}>
                                    Export
                                </Button>
                                <Button variant="outlined" startIcon={<History />}>
                                    History
                                </Button>
                                <Button variant="contained" startIcon={<Add />} onClick={handleCreateAccount}>
                                    New Account
                                </Button>
                            </Box>
                        </Box>

                        <Alert severity="info" sx={{ mb: 2 }}>
                            <strong>Versioned Accounts:</strong> All changes are tracked using append-only versioning.
                            Historical account structures are preserved for audit purposes.
                        </Alert>
                    </Paper>
                </Grid>

                {/* Tree View */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Account Tree Structure
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            {accountTree.map(node => renderTreeNode(node, 0))}
                        </Box>
                    </Paper>
                </Grid>

                {/* Quick Stats */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Account Summary
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Total Accounts</Typography>
                                    <Typography variant="h4">247</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Summary Accounts</Typography>
                                    <Typography variant="h5">42</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Posting Accounts</Typography>
                                    <Typography variant="h5">205</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Active Templates</Typography>
                                    <Typography variant="h5">12</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>

                    <Card sx={{ mt: 2 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Quick Actions
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
                                <Button variant="outlined" fullWidth>
                                    Expand All
                                </Button>
                                <Button variant="outlined" fullWidth>
                                    Collapse All
                                </Button>
                                <Button variant="outlined" fullWidth>
                                    View Inactive
                                </Button>
                                <Button variant="outlined" fullWidth>
                                    Bulk Operations
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Create/Edit Dialog */}
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
                <DialogTitle>
                    {dialogMode === 'create' ? 'Create New Account' :
                        dialogMode === 'edit' ? 'Edit Account' :
                            'Clone Account'}
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={6}>
                            <TextField label="Account Code" fullWidth required />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Account Name" fullWidth required />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel>Account Type</InputLabel>
                                <Select label="Account Type">
                                    <MenuItem value="asset">Asset</MenuItem>
                                    <MenuItem value="liability">Liability</MenuItem>
                                    <MenuItem value="equity">Equity</MenuItem>
                                    <MenuItem value="revenue">Revenue</MenuItem>
                                    <MenuItem value="expense">Expense</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel>Parent Account</InputLabel>
                                <Select label="Parent Account">
                                    <MenuItem value="1000">1000 - Assets</MenuItem>
                                    <MenuItem value="2000">2000 - Liabilities</MenuItem>
                                    <MenuItem value="3000">3000 - Equity</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Description" fullWidth multiline rows={2} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                    <Button variant="contained">
                        {dialogMode === 'create' ? 'Create' : dialogMode === 'edit' ? 'Save' : 'Clone'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AccountHierarchy;
