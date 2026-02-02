import React, { useState, useEffect } from 'react';
import {
    Container,
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Chip,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Alert,
    Paper,
    Stack,
    Grid,
    Tooltip
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {
    Add,
    Edit,
    Delete,
    PlayArrow,
    Visibility,
    CheckCircle,
    Calculate,
    Warning,
    AutoFixHigh
} from '@mui/icons-material';
import api from '../utils/apiClient';
import { configRegistry } from '../components/Management/configRegistry';
import RuleEngine from '../utils/RuleEngine';

const RULE_TYPES = [
    { value: 'visibility', label: 'Visibility', icon: <Visibility />, color: 'primary' },
    { value: 'required', label: 'Required', icon: <CheckCircle />, color: 'error' },
    { value: 'calculation', label: 'Calculation', icon: <Calculate />, color: 'success' },
    { value: 'validation', label: 'Validation', icon: <Warning />, color: 'warning' },
    { value: 'auto_fill', label: 'Auto-Fill', icon: <AutoFixHigh />, color: 'info' }
];

const BusinessRulesManager = () => {
    const [entityType, setEntityType] = useState('');
    const [rules, setRules] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingRule, setEditingRule] = useState(null);
    const [testDialogOpen, setTestDialogOpen] = useState(false);
    const [testData, setTestData] = useState({});
    const [testResult, setTestResult] = useState(null);

    const availableEntities = Object.keys(configRegistry);

    useEffect(() => {
        if (entityType) {
            fetchRules();
        }
    }, [entityType]);

    const fetchRules = async () => {
        setLoading(true);
        try {
            const { data } = await api.get('/business-rules', {
                params: { entityType }
            });
            setRules(data || []);
        } catch (err) {
            console.error('Failed to fetch rules:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = () => {
        setEditingRule({
            entity_type: entityType,
            rule_name: '',
            rule_type: 'visibility',
            target_field: '',
            condition_logic: { operator: 'equals', field: '', value: '' },
            action_config: {},
            priority: 0,
            is_active: true,
            description: ''
        });
        setDialogOpen(true);
    };

    const handleEdit = (rule) => {
        setEditingRule({
            ...rule,
            condition_logic: typeof rule.condition_logic === 'string' ?
                JSON.parse(rule.condition_logic) : rule.condition_logic,
            action_config: typeof rule.action_config === 'string' ?
                JSON.parse(rule.action_config) : rule.action_config
        });
        setDialogOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this rule?')) return;

        try {
            await api.delete(`/business-rules/${id}`);
            fetchRules();
        } catch (err) {
            console.error('Failed to delete rule:', err);
            alert('Failed to delete rule');
        }
    };

    const handleSave = async () => {
        try {
            if (editingRule.id) {
                await api.put(`/business-rules/${editingRule.id}`, editingRule);
            } else {
                await api.post('/business-rules', editingRule);
            }
            setDialogOpen(false);
            setEditingRule(null);
            fetchRules();
        } catch (err) {
            console.error('Failed to save rule:', err);
            alert('Failed to save rule');
        }
    };

    const handleTest = (rule) => {
        setEditingRule(rule);
        setTestData({});
        setTestResult(null);
        setTestDialogOpen(true);
    };

    const runTest = () => {
        try {
            const result = RuleEngine.applyRules([editingRule], testData);
            setTestResult(result);
        } catch (err) {
            console.error('Test failed:', err);
            setTestResult({ error: err.message });
        }
    };

    const getRuleTypeInfo = (type) => {
        return RULE_TYPES.find(rt => rt.value === type) || RULE_TYPES[0];
    };

    const columns = [
        {
            field: 'rule_type',
            headerName: 'Type',
            width: 130,
            renderCell: (params) => {
                const typeInfo = getRuleTypeInfo(params.value);
                return (
                    <Chip
                        icon={typeInfo.icon}
                        label={typeInfo.label}
                        size="small"
                        color={typeInfo.color}
                    />
                );
            }
        },
        {
            field: 'rule_name',
            headerName: 'Rule Name',
            flex: 1,
            minWidth: 200
        },
        {
            field: 'target_field',
            headerName: 'Target Field',
            width: 150
        },
        {
            field: 'priority',
            headerName: 'Priority',
            width: 90,
            align: 'center'
        },
        {
            field: 'is_active',
            headerName: 'Active',
            width: 90,
            renderCell: (params) => (
                <Chip
                    label={params.value ? 'Active' : 'Inactive'}
                    size="small"
                    color={params.value ? 'success' : 'default'}
                />
            )
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <Box>
                    <Tooltip title="Test Rule">
                        <IconButton size="small" onClick={() => handleTest(params.row)} color="primary">
                            <PlayArrow fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                        <IconButton size="small" onClick={() => handleEdit(params.row)} color="primary">
                            <Edit fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton size="small" onClick={() => handleDelete(params.row.id)} color="error">
                            <Delete fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Box>
            ),
            sortable: false,
            filterable: false
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
                Business Rules Manager
            </Typography>

            <Alert severity="info" sx={{ mb: 3 }}>
                Configure dynamic business logic for entities without code changes. Rules control field visibility,
                required status, calculations, validations, and auto-fill behavior.
            </Alert>

            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth>
                                <InputLabel>Select Entity</InputLabel>
                                <Select
                                    value={entityType}
                                    onChange={(e) => setEntityType(e.target.value)}
                                    label="Select Entity"
                                >
                                    {availableEntities.map(entity => (
                                        <MenuItem key={entity} value={entity}>
                                            {entity.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button
                                variant="contained"
                                startIcon={<Add />}
                                onClick={handleCreate}
                                disabled={!entityType}
                                fullWidth
                            >
                                Create Rule
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {entityType && (
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Rules for {entityType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </Typography>

                        <DataGrid
                            rows={rules}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10, 25, 50]}
                            autoHeight
                            loading={loading}
                            disableSelectionOnClick
                            sx={{ mt: 2 }}
                        />
                    </CardContent>
                </Card>
            )}

            {/* Rule Editor Dialog */}
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
                <DialogTitle>
                    {editingRule?.id ? 'Edit Rule' : 'Create Rule'}
                </DialogTitle>
                <DialogContent>
                    {editingRule && (
                        <Stack spacing={2} sx={{ mt: 1 }}>
                            <TextField
                                fullWidth
                                label="Rule Name"
                                value={editingRule.rule_name}
                                onChange={(e) => setEditingRule({ ...editingRule, rule_name: e.target.value })}
                            />

                            <FormControl fullWidth>
                                <InputLabel>Rule Type</InputLabel>
                                <Select
                                    value={editingRule.rule_type}
                                    onChange={(e) => setEditingRule({ ...editingRule, rule_type: e.target.value })}
                                    label="Rule Type"
                                >
                                    {RULE_TYPES.map(type => (
                                        <MenuItem key={type.value} value={type.value}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                {type.icon}
                                                {type.label}
                                            </Box>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField
                                fullWidth
                                label="Target Field"
                                value={editingRule.target_field}
                                onChange={(e) => setEditingRule({ ...editingRule, target_field: e.target.value })}
                            />

                            <TextField
                                fullWidth
                                label="Condition Logic (JSON)"
                                multiline
                                rows={4}
                                value={JSON.stringify(editingRule.condition_logic, null, 2)}
                                onChange={(e) => {
                                    try {
                                        const parsed = JSON.parse(e.target.value);
                                        setEditingRule({ ...editingRule, condition_logic: parsed });
                                    } catch (err) {
                                        // Invalid JSON, ignore
                                    }
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Action Configuration (JSON)"
                                multiline
                                rows={4}
                                value={JSON.stringify(editingRule.action_config, null, 2)}
                                onChange={(e) => {
                                    try {
                                        const parsed = JSON.parse(e.target.value);
                                        setEditingRule({ ...editingRule, action_config: parsed });
                                    } catch (err) {
                                        // Invalid JSON, ignore
                                    }
                                }}
                            />

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        label="Priority"
                                        value={editingRule.priority}
                                        onChange={(e) => setEditingRule({ ...editingRule, priority: parseInt(e.target.value) })}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Status</InputLabel>
                                        <Select
                                            value={editingRule.is_active}
                                            onChange={(e) => setEditingRule({ ...editingRule, is_active: e.target.value })}
                                            label="Status"
                                        >
                                            <MenuItem value={true}>Active</MenuItem>
                                            <MenuItem value={false}>Inactive</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <TextField
                                fullWidth
                                label="Description (optional)"
                                multiline
                                rows={2}
                                value={editingRule.description || ''}
                                onChange={(e) => setEditingRule({ ...editingRule, description: e.target.value })}
                            />
                        </Stack>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                    <Button onClick={handleSave} variant="contained">Save</Button>
                </DialogActions>
            </Dialog>

            {/* Test Dialog */}
            <Dialog open={testDialogOpen} onClose={() => setTestDialogOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Test Rule</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} sx={{ mt: 1 }}>
                        <Alert severity="info">
                            Enter test data as JSON to see how the rule evaluates
                        </Alert>

                        <TextField
                            fullWidth
                            label="Test Data (JSON)"
                            multiline
                            rows={6}
                            value={JSON.stringify(testData, null, 2)}
                            onChange={(e) => {
                                try {
                                    const parsed = JSON.parse(e.target.value);
                                    setTestData(parsed);
                                } catch (err) {
                                    // Invalid JSON
                                }
                            }}
                            placeholder='{"status": "paid", "amount": 5000}'
                        />

                        {testResult && (
                            <Paper variant="outlined" sx={{ p: 2 }}>
                                <Typography variant="subtitle2" gutterBottom>
                                    Result:
                                </Typography>
                                <pre style={{ fontSize: '12px', overflow: 'auto' }}>
                                    {JSON.stringify(testResult, null, 2)}
                                </pre>
                            </Paper>
                        )}
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setTestDialogOpen(false)}>Close</Button>
                    <Button onClick={runTest} variant="contained" startIcon={<PlayArrow />}>
                        Run Test
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default BusinessRulesManager;
