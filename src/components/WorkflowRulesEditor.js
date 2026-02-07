import React, { useState, useEffect, useCallback } from 'react';
import {
    Box,
    Typography,
    Button,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    CircularProgress,
    Alert
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, Delete, Edit, Save, Cancel } from '@mui/icons-material';
import { helpersWrapper } from '../utils/clientQueries';

const WorkflowRulesEditor = ({ entityName }) => {
    const [rules, setRules] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [currentRule, setCurrentRule] = useState(null);
    const [selectedRows, setSelectedRows] = useState([]);

    const rulesHelper = helpersWrapper('entity_workflow_rules');

    // Fetch rules for selected entity
    const fetchRules = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const allRules = await rulesHelper.fetchItems();
            const filtered = allRules.filter(rule => rule.target_entity === entityName);
            setRules(filtered);
        } catch (err) {
            setError('Failed to load workflow rules: ' + err.message);
        } finally {
            setLoading(false);
        }
    }, [entityName, rulesHelper]);

    useEffect(() => {
        if (entityName) {
            fetchRules();
        }
    }, [entityName, fetchRules]);

    const handleAddRule = () => {
        setCurrentRule({
            target_entity: entityName,
            step_name: '',
            step_label: '',
            actions: '[]',
            next_step: '',
            icon: '',
            type: 'primary'
        });
        setEditDialogOpen(true);
    };

    const handleEditRule = (rule) => {
        setCurrentRule({ ...rule });
        setEditDialogOpen(true);
    };

    const handleSaveRule = async () => {
        try {
            if (currentRule.id) {
                await rulesHelper.updateItem(currentRule.id, currentRule);
            } else {
                await rulesHelper.addItem(currentRule);
            }
            setEditDialogOpen(false);
            fetchRules();
        } catch (err) {
            setError('Failed to save rule: ' + err.message);
        }
    };

    const handleDeleteRules = async () => {
        if (!window.confirm(`Delete ${selectedRows.length} rule(s)?`)) return;

        try {
            for (const id of selectedRows) {
                await rulesHelper.deleteItem(id);
            }
            setSelectedRows([]);
            fetchRules();
        } catch (err) {
            setError('Failed to delete rules: ' + err.message);
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'target_entity', headerName: 'Entity', width: 200 },
        { field: 'step_name', headerName: 'Step Name', width: 150, editable: false },
        { field: 'step_label', headerName: 'Label', width: 150 },
        { field: 'actions', headerName: 'Actions (JSON)', width: 200, flex: 1 },
        { field: 'next_step', headerName: 'Next Step', width: 150 },
        { field: 'icon', headerName: 'Icon', width: 100 },
        { field: 'type', headerName: 'Type', width: 100 },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 80,
            sortable: false,
            renderCell: (params) => (
                <IconButton size="small" onClick={() => handleEditRule(params.row)}>
                    <Edit fontSize="small" />
                </IconButton>
            )
        }
    ];

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box>
            {error && (
                <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
                    {error}
                </Alert>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">
                    Workflow Rules for: {entityName}
                </Typography>
                <Box>
                    {selectedRows.length > 0 && (
                        <Button
                            variant="outlined"
                            color="error"
                            startIcon={<Delete />}
                            onClick={handleDeleteRules}
                            sx={{ mr: 1 }}
                        >
                            Delete ({selectedRows.length})
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        startIcon={<Add />}
                        onClick={handleAddRule}
                    >
                        Add Rule
                    </Button>
                </Box>
            </Box>

            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rules}
                    columns={columns}
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowSelectionModelChange={(newSelection) => {
                        setSelectedRows(newSelection);
                    }}
                    pageSizeOptions={[10, 25, 50]}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 10 } }
                    }}
                />
            </Box>

            {/* Edit Dialog */}
            <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} maxWidth="md" fullWidth>
                <DialogTitle>
                    {currentRule?.id ? 'Edit Workflow Rule' : 'Add Workflow Rule'}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                        <TextField
                            label="Step Name"
                            value={currentRule?.step_name || ''}
                            onChange={(e) => setCurrentRule({ ...currentRule, step_name: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            label="Step Label"
                            value={currentRule?.step_label || ''}
                            onChange={(e) => setCurrentRule({ ...currentRule, step_label: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            label="Actions (JSON Array)"
                            value={currentRule?.actions || '[]'}
                            onChange={(e) => setCurrentRule({ ...currentRule, actions: e.target.value })}
                            multiline
                            rows={4}
                            fullWidth
                            helperText='e.g., ["submit", "approve", "reject"]'
                        />
                        <TextField
                            label="Next Step"
                            value={currentRule?.next_step || ''}
                            onChange={(e) => setCurrentRule({ ...currentRule, next_step: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            label="Icon"
                            value={currentRule?.icon || ''}
                            onChange={(e) => setCurrentRule({ ...currentRule, icon: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            label="Type"
                            value={currentRule?.type || 'primary'}
                            onChange={(e) => setCurrentRule({ ...currentRule, type: e.target.value })}
                            fullWidth
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditDialogOpen(false)} startIcon={<Cancel />}>
                        Cancel
                    </Button>
                    <Button onClick={handleSaveRule} variant="contained" startIcon={<Save />}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default WorkflowRulesEditor;
