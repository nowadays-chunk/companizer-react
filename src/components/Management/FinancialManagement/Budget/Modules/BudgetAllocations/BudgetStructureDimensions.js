import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip, Button, TextField, Divider, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { AccountTree, Add, Edit, Delete } from '@mui/icons-material';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/BudgetStructureDimensions';

const BudgetStructureDimensions = () => {
    const [dimensions, setDimensions] = useState([
        { id: 1, name: 'Department', type: 'Primary', status: 'Active' },
        { id: 2, name: 'Cost Center', type: 'Primary', status: 'Active' },
        { id: 3, name: 'Project', type: 'Secondary', status: 'Active' },
        { id: 4, name: 'Location', type: 'Secondary', status: 'Active' }
    ]);

    const [open, setOpen] = useState(false);
    const [currentDim, setCurrentDim] = useState({ name: '', type: 'Primary', status: 'Active' });
    const [isEdit, setIsEdit] = useState(false);

    const handleOpen = (dim = null) => {
        if (dim) {
            setCurrentDim(dim);
            setIsEdit(true);
        } else {
            setCurrentDim({ name: '', type: 'Primary', status: 'Active' });
            setIsEdit(false);
        }
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleSave = () => {
        if (isEdit) {
            setDimensions(dimensions.map(d => d.id === currentDim.id ? currentDim : d));
        } else {
            setDimensions([...dimensions, { ...currentDim, id: Date.now() }]);
        }
        setOpen(false);
    };

    const handleDelete = (id) => {
        setDimensions(dimensions.filter(d => d.id !== id));
    };

    const scenarios = ['Base Case', 'Optimistic', 'Conservative'];

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccountTree color="primary" /> Budget Structure & Dimensions
                </Typography>
                <Button variant="contained" startIcon={<Add />} onClick={() => handleOpen()}>Add Dimension</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Allocation Dimensions</Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Grid container spacing={2}>
                                {dimensions.map((dim) => (
                                    <Grid item xs={12} sm={6} key={dim.id}>
                                        <Box sx={{ p: 2, border: '1px solid #eee', borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box>
                                                <Typography variant="subtitle1" fontWeight="bold">{dim.name}</Typography>
                                                <Typography variant="body2" color="text.secondary">{dim.type}</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Chip label={dim.status} color={dim.status === 'Active' ? 'success' : 'default'} size="small" variant="outlined" />
                                                <Button size="small" startIcon={<Edit />} onClick={() => handleOpen(dim)}>Edit</Button>
                                                <Button size="small" color="error" startIcon={<Delete />} onClick={() => handleDelete(dim.id)}>Del</Button>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Fiscal Setup</Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <TextField label="Current Fiscal Year" defaultValue="2024" fullWidth size="small" />
                                <TextField label="Reporting Currency" defaultValue="USD" fullWidth size="small" />
                                <Box>
                                    <Typography variant="subtitle2" gutterBottom>Active Scenarios</Typography>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        {scenarios.map(s => <Chip key={s} label={s} size="small" onDelete={() => { }} />)}
                                        <Chip icon={<Add />} label="Add" size="small" onClick={() => { }} clickable />
                                    </Box>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{isEdit ? 'Edit Dimension' : 'Add New Dimension'}</DialogTitle>
                <DialogContent sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2, minWidth: 300 }}>
                    <TextField
                        label="Dimension Name"
                        fullWidth
                        value={currentDim.name}
                        onChange={(e) => setCurrentDim({ ...currentDim, name: e.target.value })}
                    />
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select
                            value={currentDim.type}
                            label="Type"
                            onChange={(e) => setCurrentDim({ ...currentDim, type: e.target.value })}
                        >
                            <MenuItem value="Primary">Primary</MenuItem>
                            <MenuItem value="Secondary">Secondary</MenuItem>
                            <MenuItem value="Reporting">Reporting</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Status</InputLabel>
                        <Select
                            value={currentDim.status}
                            label="Status"
                            onChange={(e) => setCurrentDim({ ...currentDim, status: e.target.value })}
                        >
                            <MenuItem value="Active">Active</MenuItem>
                            <MenuItem value="Inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default BudgetStructureDimensions;
