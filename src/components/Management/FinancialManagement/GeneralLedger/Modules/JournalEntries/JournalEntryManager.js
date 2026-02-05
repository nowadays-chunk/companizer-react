
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
    const location = window.location.href; // Quick check for route context
    const isAllocation = location.includes('allocations');
    const isIntercompany = location.includes('intercompany');

    const [journal, setJournal] = useState(JournalEntryService.createEmptyJournal());

    // Set default category if creating new allocation
    useEffect(() => {
        if (!id || id === 'new') {
            if (isAllocation) {
                setJournal(prev => ({ ...prev, journal_category: 'allocation', journal_source: 'allocation' }));
            } else if (isIntercompany) {
                setJournal(prev => ({ ...prev, journal_category: 'intercompany', is_intercompany: true }));
            }
        }
    }, [id, isAllocation, isIntercompany]);

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
        (journal.lines || []).forEach(line => {
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

    const handleHeaderChange = async (field, value) => {
        // Subledger Warning
        if (field === 'journal_source' && (value === 'ar' || value === 'ap' || value === 'payroll' || value === 'inventory')) {
            setStatusMessage({ type: 'warning', text: `Warning: Journals from ${value.toUpperCase()} should typically be managed in their respective subledgers.` });
        }

        setJournal(prev => ({ ...prev, [field]: value }));

        // If currency changes, fetch new exchange rate
        if (field === 'currency_code') {
            const rate = await JournalEntryService.getExchangeRate(value);
            setJournal(prev => ({ ...prev, exchange_rate: rate }));
        }
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

    const handleValidate = () => {
        const validation = JournalEntryService.validateJournal(journal);
        if (validation.isValid) {
            setStatusMessage({ type: 'success', text: 'Validation Successful! Journal is ready.' });
        } else {
            setStatusMessage({ type: 'error', text: 'Validation Failed: ' + validation.errors.join(' | ') });
        }
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

    const handleWorkflowAction = async (action) => {
        setLoading(true);
        try {
            const api = helpersWrapper('journal_entries');
            let updatedJournal = { ...journal };

            if (action === 'submit') {
                updatedJournal = JournalEntryService.submitJournal(updatedJournal);
            } else if (action === 'approve') {
                updatedJournal = JournalEntryService.approveJournal(updatedJournal);
            } else if (action === 'reject') {
                const reason = window.prompt("Reason for rejection:"); // Simple prompt for now
                if (!reason) {
                    setLoading(false);
                    return; // Cancel
                }
                updatedJournal = JournalEntryService.rejectJournal(updatedJournal, reason);
            }

            await api.updateItem(updatedJournal.id, updatedJournal);
            setJournal(updatedJournal);
            setStatusMessage({ type: 'info', text: `Journal ${action}ed successfully.` });

        } catch (error) {
            console.error(`Failed to ${action}`, error);
            setStatusMessage({ type: 'error', text: `Failed to ${action} journal.` });
        } finally {
            setLoading(false);
        }
    };



    const handleReverse = async () => {
        if (!window.confirm("Are you sure you want to reverse this journal? A new draft journal will be created.")) return;

        setLoading(true);
        try {
            const api = helpersWrapper('journal_entries');
            const reversalDraft = JournalEntryService.reverseJournal(journal);
            const newId = await api.addItem(reversalDraft);

            // Navigate to the new reversal journal
            navigate(`/apps/general-ledger/journals/edit/${newId}`);

            // Ideally we'd also reload to show the new data, but navigation should trigger re-mount or id change effect
        } catch (error) {
            console.error("Failed to create reversal", error);
            setStatusMessage({ type: 'error', text: "Failed to create reversal entry." });
            setLoading(false);
        }
    };



    const handleGenerateRecurring = async () => {
        setLoading(true);
        try {
            const api = helpersWrapper('journal_entries');
            // Ensure we use the service to get the next occurrence object
            const nextOccurrence = JournalEntryService.generateNextOccurrence(journal);
            const newId = await api.addItem(nextOccurrence);

            setStatusMessage({ type: 'success', text: "Next occurrence generated successfully." });

            // Navigate to the new journal
            // setTimeout to allow toast to be seen? No, just go.
            navigate(`/apps/general-ledger/journals/edit/${newId}`);
        } catch (error) {
            console.error("Failed to generate recurrence", error);
            setStatusMessage({ type: 'error', text: "Failed to generate next occurrence." });
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
                    {/* DRAFT STATE ACTIONS */}
                    {(journal.status === 'draft' || journal.status === 'rejected') && (
                        <>
                            <Button
                                variant="outlined"
                                color="info"
                                onClick={handleValidate}
                                sx={{ mr: 1 }}
                            >
                                Validate
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<SaveIcon />}
                                onClick={() => handleSave(false)}
                                sx={{ mr: 1 }}
                            >
                                Save Draft
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleWorkflowAction('submit')}
                                disabled={!isBalanced}
                                sx={{ mr: 1 }}
                            >
                                Submit
                            </Button>
                        </>
                    )}

                    {/* SUBMITTED STATE ACTIONS (Approver View) */}
                    {journal.status === 'submitted' && (
                        <>
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => handleWorkflowAction('reject')}
                                sx={{ mr: 1 }}
                            >
                                Reject
                            </Button>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={() => handleWorkflowAction('approve')}
                                sx={{ mr: 1 }}
                            >
                                Approve
                            </Button>
                        </>
                    )}

                    {/* APPROVED STATE ACTIONS */}
                    {journal.status === 'approved' && (
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<PostIcon />}
                            onClick={() => handleSave(true)} // Calls post
                        >
                            Post Journal
                        </Button>
                    )}

                    {/* POSTED STATE INDICATOR & ACTIONS */}
                    {journal.status === 'posted' && (
                        <Box display="flex" align="center">
                            <Typography variant="overline" sx={{ px: 2, border: '1px solid', borderColor: 'success.main', borderRadius: 1, color: 'success.main', fontWeight: 'bold', mr: 2 }}>
                                POSTED
                            </Typography>
                            <Button
                                variant="outlined"
                                color="warning"
                                onClick={handleReverse}
                            >
                                Reverse Journal
                            </Button>
                        </Box>
                    )}
                </Box>
            </Box>

            {statusMessage && (
                <Alert severity={statusMessage.type} onClose={() => setStatusMessage(null)} sx={{ mb: 2 }}>
                    {statusMessage.text}
                </Alert>
            )}

            <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} sx={{ mb: 3 }}>
                <Tab label="Manual Entry" />
                <Tab label="Recurrence / Schedule" />
                <Tab label="Audit & History" />
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
                    <Grid item xs={12} md={3}>
                        <TextField
                            type="number"
                            label="Exchange Rate"
                            value={journal.exchange_rate}
                            onChange={(e) => handleHeaderChange('exchange_rate', parseFloat(e.target.value))}
                            fullWidth
                            disabled={journal.currency_code === 'USD' || journal.status === 'posted'}
                            inputProps={{ step: "0.0001" }}
                        />
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

            {/* TAB CONTENT: MANUAL ENTRY (0) */}
            {
                tabValue === 0 && (
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
                                    {(journal.lines || []).map((line, index) => (
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
                )
            }

            {/* TAB CONTENT: RECURRENCE (1) */}
            {
                tabValue === 1 && (
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Recurrence Settings</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    select
                                    label="Recurrence Frequency"
                                    value={journal.recurrence_frequency || 'monthly'}
                                    onChange={(e) => handleHeaderChange('recurrence_frequency', e.target.value)}
                                    fullWidth
                                    disabled={journal.status === 'posted'}
                                >
                                    <MenuItem value="monthly">Monthly</MenuItem>
                                    <MenuItem value="quarterly">Quarterly</MenuItem>
                                    <MenuItem value="yearly">Yearly</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    type="date"
                                    label="Next Run Date"
                                    value={journal.next_run_date || ''}
                                    onChange={(e) => handleHeaderChange('next_run_date', e.target.value)}
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    disabled={journal.status === 'posted'}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box display="flex" alignItems="center" height="100%">
                                    <Typography variant="body2" color="textSecondary">
                                        Enabling recurrence will create a template from this journal.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* RECURRENCE ACTIONS */}
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    disabled={!journal.next_run_date}
                                    onClick={handleGenerateRecurring}
                                >
                                    Generate Next Occurrence
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper >
                )
            }

            {/* TAB CONTENT: AUDIT (2) */}
            {
                tabValue === 2 && (
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Audit Trail & History</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Created By"
                                    value={journal.created_by || 'System User'}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Created At"
                                    value={journal.created_at || new Date().toISOString()}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Posted By"
                                    value={journal.posted_by || '-'}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Posted At"
                                    value={journal.posted_at || '-'}
                                    fullWidth
                                    disabled
                                />
                            </Grid>

                        </Grid>

                        <Divider sx={{ my: 3 }} />

                        <Typography variant="subtitle1" gutterBottom>Change Log / History</Typography>
                        <TableContainer sx={{ maxHeight: 300 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date/Time</TableCell>
                                        <TableCell>User</TableCell>
                                        <TableCell>Action</TableCell>
                                        <TableCell>Details</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* Mock History Data */}
                                    <TableRow>
                                        <TableCell>{journal.created_at || new Date().toISOString()}</TableCell>
                                        <TableCell>{journal.created_by || 'System'}</TableCell>
                                        <TableCell>Created</TableCell>
                                        <TableCell>Journal entry created</TableCell>
                                    </TableRow>
                                    {journal.status === 'submitted' && (
                                        <TableRow>
                                            <TableCell>{journal.submitted_at}</TableCell>
                                            <TableCell>Current User</TableCell>
                                            <TableCell>Submitted</TableCell>
                                            <TableCell>Submitted for approval</TableCell>
                                        </TableRow>
                                    )}
                                    {journal.status === 'approved' && (
                                        <TableRow>
                                            <TableCell>{journal.approved_at}</TableCell>
                                            <TableCell>Approver</TableCell>
                                            <TableCell>Approved</TableCell>
                                            <TableCell>Approved for posting</TableCell>
                                        </TableRow>
                                    )}
                                    {journal.status === 'posted' && (
                                        <TableRow>
                                            <TableCell>{journal.posted_at}</TableCell>
                                            <TableCell>Controller</TableCell>
                                            <TableCell>Posted</TableCell>
                                            <TableCell>Posted to General Ledger</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                )
            }

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
        </Box >
    );
};

export default JournalEntryManager;
