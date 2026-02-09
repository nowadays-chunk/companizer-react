import React, { useState, useEffect } from 'react';
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
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    MenuItem,
    Grid,
    Chip,
    Alert
} from '@mui/material';
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Calculate as CalculateIcon
} from '@mui/icons-material';
import {
    apPaymentTermsList,
    apPaymentTermsCreate,
    apPaymentTermsUpdate,
    apPaymentTermsDelete,
    apPaymentTermsCalculateDueDate,
    apPaymentTermsApplyDiscount,
    apPaymentTermsManageInstallments,
    apPaymentTermsTestConfiguration
} from '../../../../../../utils/clientQueries';

const PaymentTermsManager = () => {
    const [terms, setTerms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [editingTerm, setEditingTerm] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        due_date_method: 'fixed_days',
        days_due: 30,
        cutoff_day: null,
        discount_percentage: 0,
        discount_days: 0
    });

    // Load payment terms on mount
    useEffect(() => {
        loadPaymentTerms();
    }, []);

    const loadPaymentTerms = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await apPaymentTermsList();
            setTerms(data || []);
        } catch (err) {
            console.error('Error loading payment terms:', err);
            setError('Failed to load payment terms');
        } finally {
            setLoading(false);
        }
    };

    const handleOpenDialog = (term = null) => {
        if (term) {
            setEditingTerm(term);
            setFormData({
                name: term.name || '',
                description: term.description || '',
                due_date_method: term.due_date_method || 'fixed_days',
                days_due: term.days_due || 30,
                cutoff_day: term.cutoff_day || null,
                discount_percentage: term.discount_percentage || 0,
                discount_days: term.discount_days || 0
            });
        } else {
            setEditingTerm(null);
            setFormData({
                name: '',
                description: '',
                due_date_method: 'fixed_days',
                days_due: 30,
                cutoff_day: null,
                discount_percentage: 0,
                discount_days: 0
            });
        }
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEditingTerm(null);
        setFormData({
            name: '',
            description: '',
            due_date_method: 'fixed_days',
            days_due: 30,
            cutoff_day: null,
            discount_percentage: 0,
            discount_days: 0
        });
    };

    const handleSave = async () => {
        setError(null);
        setSuccess(null);

        try {
            if (editingTerm) {
                await apPaymentTermsUpdate(editingTerm.id, formData);
                setSuccess('Payment term updated successfully');
            } else {
                await apPaymentTermsCreate(formData);
                setSuccess('Payment term created successfully');
            }
            handleCloseDialog();
            loadPaymentTerms();
        } catch (err) {
            console.error('Error saving payment term:', err);
            setError('Failed to save payment term');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this payment term?')) {
            return;
        }

        setError(null);
        setSuccess(null);

        try {
            await apPaymentTermsDelete(id);
            setSuccess('Payment term deleted successfully');
            loadPaymentTerms();
        } catch (err) {
            console.error('Error deleting payment term:', err);
            setError('Failed to delete payment term');
        }
    };

    const handleCalculateDueDate = async (term) => {
        const baseDate = prompt('Enter invoice date (YYYY-MM-DD):', new Date().toISOString().split('T')[0]);
        if (!baseDate) return;

        try {
            const result = await apPaymentTermsCalculateDueDate({
                baseDate,
                config: {
                    due_date_method: term.due_date_method,
                    days_due: term.days_due,
                    cutoff_day: term.cutoff_day
                }
            });
            alert(`Calculated Due Date: ${new Date(result.dueDate).toLocaleDateString()}`);
        } catch (err) {
            console.error('Error calculating due date:', err);
            setError('Failed to calculate due date');
        }
    };

    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4" fontWeight="bold">
                    Payment Terms Management
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => handleOpenDialog()}
                >
                    Add Payment Term
                </Button>
            </Box>

            {error && (
                <Alert severity="error" onClose={() => setError(null)} sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            {success && (
                <Alert severity="success" onClose={() => setSuccess(null)} sx={{ mb: 2 }}>
                    {success}
                </Alert>
            )}

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Method</TableCell>
                            <TableCell>Days Due</TableCell>
                            <TableCell>Discount</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={6} align="center">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : terms.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} align="center">
                                    No payment terms found. Click "Add Payment Term" to create one.
                                </TableCell>
                            </TableRow>
                        ) : (
                            terms.map((term) => (
                                <TableRow key={term.id}>
                                    <TableCell>{term.name}</TableCell>
                                    <TableCell>{term.description}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={term.due_date_method?.replace('_', ' ')}
                                            size="small"
                                            color="primary"
                                            variant="outlined"
                                        />
                                    </TableCell>
                                    <TableCell>{term.days_due} days</TableCell>
                                    <TableCell>
                                        {term.discount_percentage > 0
                                            ? `${term.discount_percentage}% in ${term.discount_days} days`
                                            : 'None'}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            size="small"
                                            color="info"
                                            onClick={() => handleCalculateDueDate(term)}
                                            title="Calculate Due Date"
                                        >
                                            <CalculateIcon />
                                        </IconButton>
                                        <IconButton
                                            size="small"
                                            color="primary"
                                            onClick={() => handleOpenDialog(term)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            size="small"
                                            color="error"
                                            onClick={() => handleDelete(term.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Add/Edit Dialog */}
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
                <DialogTitle>
                    {editingTerm ? 'Edit Payment Term' : 'Add Payment Term'}
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                fullWidth
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                fullWidth
                                multiline
                                rows={2}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                select
                                label="Due Date Method"
                                fullWidth
                                required
                                value={formData.due_date_method}
                                onChange={(e) => setFormData({ ...formData, due_date_method: e.target.value })}
                            >
                                <MenuItem value="fixed_days">Fixed Days (Net X)</MenuItem>
                                <MenuItem value="end_of_month">End of Month</MenuItem>
                                <MenuItem value="day_of_month">Specific Day of Month</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Days Due"
                                type="number"
                                fullWidth
                                required
                                value={formData.days_due}
                                onChange={(e) => setFormData({ ...formData, days_due: parseInt(e.target.value) || 0 })}
                            />
                        </Grid>
                        {formData.due_date_method === 'end_of_month' && (
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Cutoff Day"
                                    type="number"
                                    fullWidth
                                    value={formData.cutoff_day || ''}
                                    onChange={(e) => setFormData({ ...formData, cutoff_day: parseInt(e.target.value) || null })}
                                    helperText="If invoice day > cutoff, move to next month"
                                />
                            </Grid>
                        )}
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Discount Percentage"
                                type="number"
                                fullWidth
                                value={formData.discount_percentage}
                                onChange={(e) => setFormData({ ...formData, discount_percentage: parseFloat(e.target.value) || 0 })}
                                inputProps={{ step: 0.1, min: 0, max: 100 }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Discount Days"
                                type="number"
                                fullWidth
                                value={formData.discount_days}
                                onChange={(e) => setFormData({ ...formData, discount_days: parseInt(e.target.value) || 0 })}
                                helperText="Days within which discount applies"
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleSave} variant="contained" color="primary">
                        {editingTerm ? 'Update' : 'Create'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default PaymentTermsManager;
