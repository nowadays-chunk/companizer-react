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
    Storage
} from '@mui/icons-material';
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

    // Get available entities from config registry
    const availableEntities = Object.keys(configRegistry);

    useEffect(() => {
        if (entityType) {
            fetchColumns();
        }
    }, [entityType]);

    const fetchColumns = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await api.get(`/admin/entities/${entityType}/columns`);
            setColumns(data || []);
            setSelectedColumns(data || []); // Select all by default
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
            const response = await api.post('/admin/export', {
                entityType,
                format,
                columns: selectedColumns,
                dateRange: {
                    from: dateFrom,
                    to: dateTo
                }
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
                                        <MenuItem key={entity} value={entity}>
                                            {entity.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
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
                                        <Paper variant="outlined" sx={{ p: 2, maxHeight: 300, overflow: 'auto' }}>
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
