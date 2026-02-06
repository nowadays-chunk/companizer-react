import React, { useState } from 'react';
import {
    Box,
    Typography,
    Chip,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    MenuItem,
    Stack,
    Paper
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import PolicyIcon from '@mui/icons-material/Policy';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const initialRows = [
    { id: 1, policyName: 'Investment Policy', status: 'Active', effectiveDate: '2025-01-01', reviewDate: '2026-01-01', owner: 'CFO Office' },
    { id: 2, policyName: 'Risk Management Framework', status: 'Draft', effectiveDate: '2025-06-01', reviewDate: '2026-06-01', owner: 'Risk Team' },
    { id: 3, policyName: 'Cash Handling Policy', status: 'Active', effectiveDate: '2024-01-01', reviewDate: '2024-12-31', owner: 'Treasury' },
    { id: 4, policyName: 'Debt Issuance Guidelines', status: 'Archived', effectiveDate: '2020-01-01', reviewDate: '2023-01-01', owner: 'Finance' },
];

const PolicyManager = () => {
    const [rows, setRows] = useState(initialRows);
    const [open, setOpen] = useState(false);
    const [newPolicy, setNewPolicy] = useState({ policyName: '', status: 'Draft', owner: '' });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = () => {
        const id = rows.length + 1;
        const date = new Date().toISOString().split('T')[0];
        const created = {
            id,
            ...newPolicy,
            effectiveDate: date,
            reviewDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
        };
        setRows([...rows, created]);
        handleClose();
        setNewPolicy({ policyName: '', status: 'Draft', owner: '' });
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'policyName', headerName: 'Policy Name', width: 250, editable: true },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
            renderCell: (params) => {
                let color = 'default';
                if (params.value === 'Active') color = 'success';
                if (params.value === 'Draft') color = 'warning';
                if (params.value === 'Archived') color = 'error';
                return <Chip label={params.value} color={color} size="small" variant="outlined" />;
            }
        },
        { field: 'effectiveDate', headerName: 'Effective Date', width: 150 },
        { field: 'reviewDate', headerName: 'Review Date', width: 150 },
        { field: 'owner', headerName: 'Owner', width: 180 },
    ];

    return (
        <Box sx={{ width: '100%', p: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PolicyIcon color="primary" /> Treasury Policies
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={handleOpen}
                >
                    New Policy
                </Button>
            </Box>

            <Paper elevation={2} sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    slots={{ toolbar: GridToolbar }}
                />
            </Paper>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create New Policy</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} sx={{ mt: 1, minWidth: 300 }}>
                        <TextField
                            autoFocus
                            label="Policy Name"
                            fullWidth
                            value={newPolicy.policyName}
                            onChange={(e) => setNewPolicy({ ...newPolicy, policyName: e.target.value })}
                        />
                        <TextField
                            select
                            label="Status"
                            fullWidth
                            value={newPolicy.status}
                            onChange={(e) => setNewPolicy({ ...newPolicy, status: e.target.value })}
                        >
                            <MenuItem value="Draft">Draft</MenuItem>
                            <MenuItem value="Active">Active</MenuItem>
                        </TextField>
                        <TextField
                            label="Owner / Dept"
                            fullWidth
                            value={newPolicy.owner}
                            onChange={(e) => setNewPolicy({ ...newPolicy, owner: e.target.value })}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave} variant="contained">Create</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default PolicyManager;
