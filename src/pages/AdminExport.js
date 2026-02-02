import React, { useState, useEffect } from 'react';
import {
    Container,
    Card,
    CardContent,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Box,
    Grid,
    Checkbox,
    ListItemText,
    Alert,
    CircularProgress,
    TextField,
    Chip,
    Paper,
    Stack
} from '@mui/material';
import {
    GetApp,
    TableChart,
    Description,
    Code,
    Storage,
    Delete as DeleteIcon,
    Add as AddIcon,
    ExpandMore as ExpandMoreIcon,
    Visibility as VisibilityIcon,
    ContentCopy as ContentCopyIcon
} from '@mui/icons-material';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton,
    Divider,
    Tooltip
} from '@mui/material';
import api from '../utils/apiClient';
import { configRegistry } from '../components/Management/configRegistry';

const EXPORT_FORMATS = [
    { value: 'csv', label: 'CSV', icon: <TableChart />, description: 'Comma-separated values' },
    { value: 'excel', label: 'Excel', icon: <Description />, description: 'Microsoft Excel (.xlsx)' },
    { value: 'json', label: 'JSON', icon: <Code />, description: 'JavaScript Object Notation' },
    { value: 'sql', label: 'SQL', icon: <Storage />, description: 'SQL INSERT statements' }
];

const AdminExport = () => {
    const [entityType, setEntityType] = useState('');
    const [format, setFormat] = useState('csv');
    const [columns, setColumns] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState([]);
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [loading, setLoading] = useState(false);
    const [exporting, setExporting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [rowCount, setRowCount] = useState(null);

    // Advanced Configuration State
    const [limit, setLimit] = useState('');
    const [offset, setOffset] = useState('');
    const [conditions, setConditions] = useState([]);
    const [showConfig, setShowConfig] = useState(false);

    const OPERATIONS = [
        { value: '=', label: 'Equals (=)' },
        { value: '!=', label: 'Not Equals (!=)' },
        { value: '>', label: 'Greater Than (>)' },
        { value: '>=', label: 'Greater or Equal (>=)' },
        { value: '<', label: 'Less Than (<)' },
        { value: '<=', label: 'Less or Equal (<=)' },
        { value: 'LIKE', label: 'Contains (LIKE)' },
        { value: 'IN', label: 'In List (comma sep)' }
    ];

    // Get available entities from config registry mapped to display format
    const availableEntities = Object.entries(configRegistry).map(([key, config]) => ({
        key: key,
        value: config.collectionName || key,
        label: config.entityName || key.replace(/([A-Z])/g, ' $1').trim() // Fallback handling
    })).sort((a, b) => a.label.localeCompare(b.label));

    useEffect(() => {
        if (entityType) {
            fetchColumns();
        }
    }, [entityType]);

    const fetchColumns = () => {
        setLoading(true);
        setError(null);
        try {
            // Find config by collectionName since entityType now holds collectionName
            const entityConfig = Object.values(configRegistry).find(c => c.collectionName === entityType);

            const cols = entityConfig?.fieldsConfig ? Object.keys(entityConfig.fieldsConfig) : [];
            setColumns(cols);
            setSelectedColumns(cols);
        } catch (err) {
            console.error('Failed to fetch columns:', err);
            setError('Failed to load entity columns');
            setColumns([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchPreview = async () => {
        if (!entityType) return;

        try {
            const { data } = await api.post('/admin/export/preview', {
                entityType,
                dateRange: {
                    from: dateFrom,
                    to: dateTo
                }
            });
            setRowCount(data.count);
        } catch (err) {
            console.error('Preview failed:', err);
        }
    };

    useEffect(() => {
        if (entityType) {
            fetchPreview();
        }
    }, [entityType, dateFrom, dateTo]);

    const handleExport = async () => {
        if (!entityType || selectedColumns.length === 0) {
            setError('Please select entity and at least one column');
            return;
        }

        setExporting(true);
        setError(null);
        setSuccess(false);

        try {
            // Generate full configuration payload
            const payload = generateExportConfig();

            // NOTE: The current backend likely expects the legacy flat structure.
            // We pass the payload as is, assuming the backend needs to be updated or we
            // map it to the expected structure if possible. 
            // For now, we are fulfilling the requirement to construct the JSON complexity.

            const response = await api.post('/admin/export', payload, {
            }, {
                responseType: 'blob'
            });

            // Create download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = window.document.createElement('a');
            link.href = url;

            const extension = format === 'excel' ? 'xlsx' : format;
            link.setAttribute('download', `${entityType}_export_${new Date().toISOString().split('T')[0]}.${extension}`);

            window.document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);

            setSuccess(true);
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            console.error('Export failed:', err);
            setError(err.response?.data?.message || 'Export failed. Please try again.');
        } finally {
            setExporting(false);
        }
    };

    const handleColumnToggle = (column) => {
        setSelectedColumns(prev => {
            if (prev.includes(column)) {
                return prev.filter(c => c !== column);
            } else {
                return [...prev, column];
            }
        });
    };

    const handleSelectAllColumns = () => {
        if (selectedColumns.length === columns.length) {
            setSelectedColumns([]);
        } else {
            setSelectedColumns([...columns]);
        }
    };

    const handleAddCondition = () => {
        setConditions([...conditions, { id: Date.now(), column: '', operator: '=', value: '' }]);
    };

    const handleRemoveCondition = (id) => {
        setConditions(conditions.filter(c => c.id !== id));
    };

    const handleConditionChange = (id, field, value) => {
        setConditions(conditions.map(c =>
            c.id === id ? { ...c, [field]: value } : c
        ));
    };

    const generateExportConfig = () => {
        return {
            entityType,
            format,
            columns: selectedColumns,
            dateRange: {
                from: dateFrom || null,
                to: dateTo || null
            },
            pagination: {
                limit: limit ? parseInt(limit, 10) : null,
                offset: offset ? parseInt(offset, 10) : null
            },
            conditions: conditions.filter(c => c.column && c.operator).map(({ id, ...rest }) => rest)
        };
    };

    const handleCopyConfig = () => {
        navigator.clipboard.writeText(JSON.stringify(generateExportConfig(), null, 2));
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
                Admin Export System
            </Typography>

            <Grid container spacing={3}>
                {/* Configuration Panel */}
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Export Configuration
                            </Typography>

                            {error && (
                                <Alert severity="error" sx={{ mb: 2 }}>
                                    {error}
                                </Alert>
                            )}

                            {success && (
                                <Alert severity="success" sx={{ mb: 2 }}>
                                    Export downloaded successfully!
                                </Alert>
                            )}

                            {/* Entity Selection */}
                            <FormControl fullWidth sx={{ mb: 3 }}>
                                <InputLabel>Select Entity</InputLabel>
                                <Select
                                    value={entityType}
                                    onChange={(e) => setEntityType(e.target.value)}
                                    label="Select Entity"
                                >
                                    {availableEntities.map(entity => (
                                        <MenuItem key={entity.key} value={entity.value}>
                                            {entity.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            {/* Format Selection */}
                            <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
                                Export Format
                            </Typography>
                            <Grid container spacing={2} sx={{ mb: 3 }}>
                                {EXPORT_FORMATS.map(fmt => (
                                    <Grid item xs={6} sm={3} key={fmt.value}>
                                        <Paper
                                            onClick={() => setFormat(fmt.value)}
                                            sx={{
                                                p: 2,
                                                cursor: 'pointer',
                                                border: 2,
                                                borderColor: format === fmt.value ? 'primary.main' : 'transparent',
                                                bgcolor: format === fmt.value ? 'action.selected' : 'background.paper',
                                                transition: 'all 0.2s',
                                                '&:hover': {
                                                    borderColor: 'primary.light',
                                                    bgcolor: 'action.hover'
                                                },
                                                textAlign: 'center'
                                            }}
                                        >
                                            <Box sx={{ mb: 1 }}>{fmt.icon}</Box>
                                            <Typography variant="subtitle2">{fmt.label}</Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {fmt.description}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Date Range */}
                            <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
                                Date Range (Optional)
                            </Typography>
                            <Grid container spacing={2} sx={{ mb: 3 }}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        type="date"
                                        label="From Date"
                                        value={dateFrom || ''}
                                        onChange={(e) => setDateFrom(e.target.value)}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        type="date"
                                        label="To Date"
                                        value={dateTo || ''}
                                        onChange={(e) => setDateTo(e.target.value)}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                            </Grid>

                            {/* Column Selection */}
                            {entityType && (
                                <>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                        <Typography variant="subtitle2">
                                            Select Columns ({selectedColumns.length}/{columns.length})
                                        </Typography>
                                        <Button size="small" onClick={handleSelectAllColumns}>
                                            {selectedColumns.length === columns.length ? 'Deselect All' : 'Select All'}
                                        </Button>
                                    </Box>

                                    {loading ? (
                                        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                                            <CircularProgress />
                                        </Box>
                                    ) : (
                                        <Paper variant="outlined" sx={{ p: 2, maxHeight: 300, overflow: 'auto', mb: 3 }}>
                                            <Grid container spacing={1}>
                                                {columns.map(column => (
                                                    <Grid item xs={12} sm={6} key={column}>
                                                        <Box
                                                            onClick={() => handleColumnToggle(column)}
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                p: 1,
                                                                cursor: 'pointer',
                                                                borderRadius: 1,
                                                                '&:hover': {
                                                                    bgcolor: 'action.hover'
                                                                }
                                                            }}
                                                        >
                                                            <Checkbox
                                                                checked={selectedColumns.includes(column)}
                                                                size="small"
                                                            />
                                                            <Typography variant="body2">
                                                                {column}
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Paper>
                                    )}

                                    {/* Advanced Configuration */}
                                    <Accordion sx={{ mb: 3 }} variant="outlined">
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography sx={{ fontWeight: 600 }}>Advanced Filters & Pagination</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>

                                            {/* Pagination */}
                                            <Typography variant="subtitle2" gutterBottom>Pagination</Typography>
                                            <Grid container spacing={2} sx={{ mb: 3 }}>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        label="Limit"
                                                        type="number"
                                                        fullWidth
                                                        size="small"
                                                        value={limit}
                                                        onChange={(e) => setLimit(e.target.value)}
                                                        placeholder="All"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        label="Offset"
                                                        type="number"
                                                        fullWidth
                                                        size="small"
                                                        value={offset}
                                                        onChange={(e) => setOffset(e.target.value)}
                                                        placeholder="0"
                                                    />
                                                </Grid>
                                            </Grid>

                                            <Divider sx={{ my: 2 }} />

                                            {/* Conditions */}
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                                <Typography variant="subtitle2">Conditions</Typography>
                                                <Button
                                                    startIcon={<AddIcon />}
                                                    size="small"
                                                    onClick={handleAddCondition}
                                                    disabled={selectedColumns.length === 0}
                                                >
                                                    Add Condition
                                                </Button>
                                            </Box>

                                            <Stack spacing={2}>
                                                {conditions.map((condition) => (
                                                    <Grid container spacing={1} alignItems="center" key={condition.id}>
                                                        <Grid item xs={12} sm={4}>
                                                            <FormControl fullWidth size="small">
                                                                <InputLabel>Column</InputLabel>
                                                                <Select
                                                                    value={condition.column}
                                                                    label="Column"
                                                                    onChange={(e) => handleConditionChange(condition.id, 'column', e.target.value)}
                                                                >
                                                                    {selectedColumns.map(col => (
                                                                        <MenuItem key={col} value={col}>{col}</MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={3}>
                                                            <FormControl fullWidth size="small">
                                                                <InputLabel>Operator</InputLabel>
                                                                <Select
                                                                    value={condition.operator}
                                                                    label="Operator"
                                                                    onChange={(e) => handleConditionChange(condition.id, 'operator', e.target.value)}
                                                                >
                                                                    {OPERATIONS.map(op => (
                                                                        <MenuItem key={op.value} value={op.value}>{op.label}</MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid item xs={10} sm={4}>
                                                            <TextField
                                                                fullWidth
                                                                size="small"
                                                                label="Value"
                                                                value={condition.value}
                                                                onChange={(e) => handleConditionChange(condition.id, 'value', e.target.value)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={2} sm={1}>
                                                            <IconButton
                                                                color="error"
                                                                size="small"
                                                                onClick={() => handleRemoveCondition(condition.id)}
                                                            >
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                ))}
                                                {conditions.length === 0 && (
                                                    <Typography variant="body2" color="text.secondary" align="center" sx={{ py: 2 }}>
                                                        No filters applied.
                                                    </Typography>
                                                )}
                                            </Stack>
                                        </AccordionDetails>
                                    </Accordion>
                                </>
                            )}

                            {/* Export Button */}
                            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={exporting ? <CircularProgress size={20} /> : <GetApp />}
                                    onClick={handleExport}
                                    disabled={!entityType || selectedColumns.length === 0 || exporting}
                                >
                                    {exporting ? 'Exporting...' : 'Export Data'}
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Info Panel */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Export Summary
                            </Typography>

                            <Stack spacing={2}>
                                <Box>
                                    <Typography variant="caption" color="text.secondary">
                                        Entity
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                        {entityType || 'Not selected'}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography variant="caption" color="text.secondary">
                                        Format
                                    </Typography>
                                    <Chip
                                        label={format.toUpperCase()}
                                        size="small"
                                        color="primary"
                                    />
                                </Box>

                                <Box>
                                    <Typography variant="caption" color="text.secondary">
                                        Columns
                                    </Typography>
                                    <Typography variant="body1">
                                        {selectedColumns.length} selected
                                    </Typography>
                                </Box>

                                {rowCount !== null && (
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">
                                            Estimated Rows
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                            {rowCount.toLocaleString()}
                                        </Typography>
                                    </Box>
                                )}

                                {dateFrom && (
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">
                                            Date Filter
                                        </Typography>
                                        <Typography variant="body2">
                                            {dateFrom} - {dateTo || 'Now'}
                                        </Typography>
                                    </Box>
                                )}
                            </Stack>

                            <Alert severity="info" sx={{ mt: 3 }}>
                                <Typography variant="caption">
                                    The export will download automatically once generated.
                                </Typography>
                            </Alert>

                            <Box sx={{ mt: 2, textAlign: 'center' }}>
                                <Button
                                    size="small"
                                    startIcon={<VisibilityIcon />}
                                    onClick={() => setShowConfig(!showConfig)}
                                >
                                    {showConfig ? 'Hide Configuration JSON' : 'View Configuration JSON'}
                                </Button>
                            </Box>

                            {showConfig && (
                                <Paper sx={{ mt: 2, p: 2, bgcolor: 'grey.100', overflow: 'auto' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                                        <Tooltip title="Copy Configuration">
                                            <IconButton size="small" onClick={handleCopyConfig}>
                                                <ContentCopyIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    <pre style={{ margin: 0, fontSize: '11px', whiteSpace: 'pre-wrap' }}>
                                        {JSON.stringify(generateExportConfig(), null, 2)}
                                    </pre>
                                </Paper>
                            )}
                        </CardContent>
                    </Card>

                    <Card sx={{ mt: 2 }}>
                        <CardContent>
                            <Typography variant="subtitle2" gutterBottom>
                                Format Details
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {format === 'csv' && 'UTF-8 encoded, comma-separated file suitable for Excel and other spreadsheet applications.'}
                                {format === 'excel' && 'Native Excel format (.xlsx) with formatted headers and auto-column width.'}
                                {format === 'json' && 'Pretty-printed JSON array of objects, preserving data types and nested structures.'}
                                {format === 'sql' && 'SQL INSERT statements with CREATE TABLE definition, ready for import.'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AdminExport;
