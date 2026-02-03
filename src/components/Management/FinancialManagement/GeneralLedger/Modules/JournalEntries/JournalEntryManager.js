
// src/components/Management/FinancialManagement/GeneralLedger/JournalEntryManager.js

import React, { useState, useEffect, useMemo } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    Button,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    MenuItem,
    Divider,
    Tabs,
    Tab,
    Alert,
    Tooltip
} from '@mui/material';
import {
    Add as AddIcon,
    Delete as DeleteIcon,
    Save as SaveIcon,
    PostAdd as PostIcon,
    CheckCircle as CheckCircleIcon,
    ArrowBack as ArrowBackIcon,
    ContentCopy as CopyIcon
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

import { JournalEntryService } from './JournalEntryService';
import { helpersWrapper } from '../../../../../../utils/firebaseCrudHelpers';

// Mock Data for Selectors (Ideally fetched from backend/config)
const ACCOUNTS = [
    { id: '1001', code: '1001', name: 'Cash on Hand' },
    { id: '1002', code: '1002', name: 'Bank Account - Checking' },
    { id: '1100', code: '1100', name: 'Accounts Receivable' },
    { id: '2000', code: '2000', name: 'Accounts Payable' },
    { id: '4000', code: '4000', name: 'Sales Revenue' },
    { id: '5000', code: '5000', name: 'Office Supplies Expense' },
    { id: '5010', code: '5010', name: 'Rent Expense' },
    { id: '5020', code: '5020', name: 'Utilities Expense' },
];

const CURRENCIES = ['USD', 'EUR', 'GBP', 'CAD'];

const JournalEntryManager = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // If editing existing
    const [journal, setJournal] = useState(JournalEntryService.createEmptyJournal());
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);
    const [tabValue, setTabValue] = useState(0);

    // --- Initialization ---
    useEffect(() => {
        if (id && id !== 'new') {
            loadJournal(id);
        }
    }, [id]);

    const loadJournal = async (journalId) => {
        setLoading(true);
        try {
            const api = helpersWrapper('journal_entries');
            const data = await api.fetchItemById(journalId);
            if (data) {
                // Parse lines if they are stored as JSON stirng or ensure structure
                // Assuming standard structure for now
                setJournal(data);
            }
        } catch (error) {
            console.error('Failed to load journal', error);
            setStatusMessage({ type: 'error', text: 'Failed to load journal entry.' });
        } finally {
            setLoading(false);
        }
    };

    // --- Computations ---
    const totals = useMemo(() => {
        let debit = 0;
        let credit = 0;
        journal.lines.forEach(line => {
            debit += parseFloat(line.debit) || 0;
            credit += parseFloat(line.credit) || 0;
        });
        return {
            debit: Math.round(debit * 100) / 100,
            credit: Math.round(credit * 100) / 100,
            difference: Math.round((debit - credit) * 100) / 100
        };
    }, [journal.lines]);

    const isBalanced = totals.difference === 0 && (totals.debit > 0 || totals.credit > 0);

    // --- Handlers ---

    const handleHeaderChange = (field, value) => {
        setJournal(prev => ({ ...prev, [field]: value }));
    };

    const handleLineChange = (index, field, value) => {
        const newLines = [...journal.lines];

        // Special handling: if debit is set, clear credit and vice versa
        if (field === 'debit' && value > 0) newLines[index].credit = 0;
        if (field === 'credit' && value > 0) newLines[index].debit = 0;

        newLines[index] = { ...newLines[index], [field]: value };
        setJournal(prev => ({ ...prev, lines: newLines }));
    };

    const addLine = () => {
        const newLine = {
            id: Date.now(), // temp id
            account_id: '',
            description: journal.description || '', // Default to header desc
            debit: 0,
            credit: 0,
            cost_center: '',
            project_id: ''
        };
        setJournal(prev => ({ ...prev, lines: [...prev.lines, newLine] }));
    };

    const removeLine = (index) => {
        if (journal.lines.length <= 2) return; // Maintain min 2 lines
        const newLines = journal.lines.filter((_, i) => i !== index);
        setJournal(prev => ({ ...prev, lines: newLines }));
    };

    const handleSave = async (asPost = false) => {
        const validation = JournalEntryService.validateJournal(journal);
        if (!validation.isValid) {
            setStatusMessage({ type: 'error', text: validation.errors.join(' ') });
            return;
        }

        if (asPost) {
            // Simulate backend check
            const simulation = await JournalEntryService.simulatePosting(journal);
            if (!simulation.success) {
                setStatusMessage({ type: 'error', text: simulation.errors.join(' ') });
                return;
            }
        }

        setLoading(true);
        try {
            const api = helpersWrapper('journal_entries');

            let payload = { ...journal };
            // Ensure derived fields are set
            payload.total_debit = totals.debit;
            payload.total_credit = totals.credit;

            if (asPost) {
                payload = JournalEntryService.postJournal(payload);
            }

            if (payload.id) {
                await api.updateItem(payload.id, payload);
            } else {
                const newId = await api.addItem(payload);
                payload.id = newId;
            }

            setJournal(payload);
            setStatusMessage({ type: 'success', text: asPost ? 'Journal Posted Successfully!' : 'Journal Saved as Draft.' });

            if (!id && !asPost) {
                // If it was new and just saved draft, maybe replace URL to edit mode? 
                // navigate(`/apps/general-ledger/journals/${payload.id}`);
            }

        } catch (error) {
            console.error('Save failed', error);
            setStatusMessage({ type: 'error', text: 'Failed to save journal.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box p={3} pb={10}>
            {/* Header Section */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box display="flex" alignItems="center">
                    <IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h4" fontWeight="bold">
                        {journal.id ? `Edit Journal ${journal.journal_number}` : 'New Journal Entry'}
                    </Typography>
                </Box>
                <Box>
                    <Button
                        variant="outlined"
                        startIcon={<SaveIcon />}
                        onClick={() => handleSave(false)}
                        disabled={journal.status === 'posted'}
                        sx={{ mr: 1 }}
                    >
                        Save Draft
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        startIcon={<PostIcon />}
                        onClick={() => handleSave(true)}
                        disabled={!isBalanced || journal.status === 'posted'}
                    >
                        {journal.status === 'posted' ? 'Posted' : 'Post Journal'}
                    </Button>
                </Box>
            </Box>

            {statusMessage && (
                <Alert severity={statusMessage.type} onClose={() => setStatusMessage(null)} sx={{ mb: 2 }}>
                    {statusMessage.text}
                </Alert>
            )}

            <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} sx={{ mb: 3 }}>
                <Tab label="Manual Entry" />
                <Tab label="Recurrence" disabled />
                <Tab label="Audit Trail" disabled />
            </Tabs>

            {/* Journal Header Form */}
            <Paper sx={{ p: 3, mb: 3 }}>
                <Grid container spacing={3}>
                    {/* Row 1: ID, Dates */}
                    <Grid item xs={12} md={3}>
                        <TextField
                            label="Journal Number"
                            value={journal.journal_number}
                            fullWidth
                            disabled
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            type="date"
                            label="Posting Date"
                            value={journal.posting_date}
                            onChange={(e) => handleHeaderChange('posting_date', e.target.value)}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            disabled={journal.status === 'posted'}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            type="date"
                            label="Document Date"
                            value={journal.document_date}
                            onChange={(e) => handleHeaderChange('document_date', e.target.value)}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            disabled={journal.status === 'posted'}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            select
                            label="Currency"
                            value={journal.currency_code}
                            onChange={(e) => handleHeaderChange('currency_code', e.target.value)}
                            fullWidth
                            disabled={journal.status === 'posted'}
                        >
                            {CURRENCIES.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                        </TextField>
                    </Grid>

                    {/* Row 2: Classification */}
                    <Grid item xs={12} md={3}>
                        <TextField
                            select
                            label="Journal Source"
                            value={journal.journal_source || 'manual'}
                            onChange={(e) => handleHeaderChange('journal_source', e.target.value)}
                            fullWidth
                            disabled={journal.status === 'posted'}
                        >
                            <MenuItem value="manual">Manual</MenuItem>
                            <MenuItem value="accrual">Accrual</MenuItem>
                            <MenuItem value="adjustment">Adjustment</MenuItem>
                            <MenuItem value="system">System Generated</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            select
                            label="Category"
                            value={journal.journal_category || 'general'}
                            onChange={(e) => handleHeaderChange('journal_category', e.target.value)}
                            fullWidth
                            disabled={journal.status === 'posted'}
                        >
                            <MenuItem value="general">General</MenuItem>
                            <MenuItem value="reclass">Reclassification</MenuItem>
                            <MenuItem value="closing">Closing</MenuItem>
                            <MenuItem value="opening">Opening</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            label="Legal Entity"
                            value={journal.legal_entity_id || ''}
                            onChange={(e) => handleHeaderChange('legal_entity_id', e.target.value)}
                            fullWidth
                            disabled={journal.status === 'posted'}
                            helperText="Mock: Enter Entity ID"
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            label="Accounting Period"
                            value={journal.accounting_period || ''}
                            onChange={(e) => handleHeaderChange('accounting_period', e.target.value)}
                            fullWidth
                            disabled={journal.status === 'posted'}
                            placeholder="YYYY-MM"
                        />
                    </Grid>

                    {/* Row 3: Description & Ref */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Reference / Document #"
                            value={journal.reference_number}
                            onChange={(e) => handleHeaderChange('reference_number', e.target.value)}
                            fullWidth
                            disabled={journal.status === 'posted'}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Description"
                            value={journal.description}
                            onChange={(e) => handleHeaderChange('description', e.target.value)}
                            fullWidth
                            multiline
                            rows={1}
                            disabled={journal.status === 'posted'}
                        />
                    </Grid>
                </Grid>
            </Paper>

            {/* Lines Table */}
            <Paper sx={{ mb: 3, overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 600 }}>
                    <Table stickyHeader size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell width="20%">Account</TableCell>
                                <TableCell width="25%">Description</TableCell>
                                <TableCell width="12%" align="right">Debit</TableCell>
                                <TableCell width="12%" align="right">Credit</TableCell>
                                <TableCell width="10%">Cost Center</TableCell>
                                <TableCell width="10%">Project</TableCell>
                                <TableCell width="5%">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {journal.lines.map((line, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <TextField
                                            select
                                            value={line.account_id}
                                            onChange={(e) => handleLineChange(index, 'account_id', e.target.value)}
                                            fullWidth
                                            size="small"
                                            variant="standard"
                                            disabled={journal.status === 'posted'}
                                        >
                                            {ACCOUNTS.map(acc => (
                                                <MenuItem key={acc.id} value={acc.id}>
                                                    {acc.code} - {acc.name}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            value={line.description}
                                            onChange={(e) => handleLineChange(index, 'description', e.target.value)}
                                            fullWidth
                                            size="small"
                                            variant="standard"
                                            disabled={journal.status === 'posted'}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <TextField
                                            type="number"
                                            value={line.debit}
                                            onChange={(e) => handleLineChange(index, 'debit', parseFloat(e.target.value) || 0)}
                                            fullWidth
                                            size="small"
                                            variant="standard"
                                            inputProps={{ style: { textAlign: 'right' }, min: 0 }}
                                            disabled={journal.status === 'posted'}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <TextField
                                            type="number"
                                            value={line.credit}
                                            onChange={(e) => handleLineChange(index, 'credit', parseFloat(e.target.value) || 0)}
                                            fullWidth
                                            size="small"
                                            variant="standard"
                                            inputProps={{ style: { textAlign: 'right' }, min: 0 }}
                                            disabled={journal.status === 'posted'}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            value={line.cost_center}
                                            onChange={(e) => handleLineChange(index, 'cost_center', e.target.value)}
                                            fullWidth
                                            size="small"
                                            variant="standard"
                                            disabled={journal.status === 'posted'}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            value={line.project_id}
                                            onChange={(e) => handleLineChange(index, 'project_id', e.target.value)}
                                            fullWidth
                                            size="small"
                                            variant="standard"
                                            disabled={journal.status === 'posted'}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            size="small"
                                            color="error"
                                            onClick={() => removeLine(index)}
                                            disabled={journal.status === 'posted'}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box p={2} borderTop="1px solid #eee">
                    <Button startIcon={<AddIcon />} onClick={addLine} disabled={journal.status === 'posted'}>
                        Add Line
                    </Button>
                </Box>
            </Paper>

            {/* Footer Totals (Floating) */}
            <Paper
                elevation={6}
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 240, // Adjust based on sidebar width approx
                    right: 0,
                    p: 2,
                    bgcolor: isBalanced ? '#f0fff4' : '#fff0f0',
                    borderTop: '1px solid',
                    borderColor: isBalanced ? 'success.light' : 'error.light',
                    zIndex: 1000
                }}
            >
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" fontWeight="bold" color={isBalanced ? 'success.main' : 'error.main'}>
                            {isBalanced ? 'Journal Balanced' : 'Journal Out of Balance'}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="flex-end" gap={4}>
                        <Box textAlign="right">
                            <Typography variant="caption" display="block">Total Debit</Typography>
                            <Typography variant="h6">{totals.debit.toFixed(2)}</Typography>
                        </Box>
                        <Box textAlign="right">
                            <Typography variant="caption" display="block">Total Credit</Typography>
                            <Typography variant="h6">{totals.credit.toFixed(2)}</Typography>
                        </Box>
                        <Box textAlign="right">
                            <Typography variant="caption" display="block">Difference</Typography>
                            <Typography variant="h6" color={totals.difference !== 0 ? 'error.main' : 'text.primary'}>
                                {totals.difference.toFixed(2)}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default JournalEntryManager;
