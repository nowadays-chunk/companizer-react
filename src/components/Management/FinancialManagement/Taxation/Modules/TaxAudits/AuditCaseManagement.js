import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Button,
    Grid,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    MenuItem,
    IconButton
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, Edit, Visibility, Delete } from '@mui/icons-material';
import { faker } from '@faker-js/faker';

const generateMockCases = (count) => {
    return Array.from({ length: count }, () => ({
        id: faker.string.uuid(),
        caseId: `AUD-${faker.string.numeric(4)}`,
        type: faker.helpers.arrayElement(['VAT', 'Corporate Tax', 'Withholding', 'Transfer Pricing']),
        authority: faker.company.name(),
        period: '2025',
        status: faker.helpers.arrayElement(['Planned', 'Active', 'Closed', 'Appealed']),
        risk: faker.helpers.arrayElement(['Low', 'Medium', 'High']),
        owner: faker.person.fullName()
    }));
};

const AuditCaseManagement = () => {
    const [cases, setCases] = useState(generateMockCases(15));
    const [openDialog, setOpenDialog] = useState(false);
    const [newCase, setNewCase] = useState({
        type: '',
        authority: '',
        risk: 'Low'
    });

    const columns = [
        { field: 'caseId', headerName: 'Case ID', width: 150 },
        { field: 'type', headerName: 'Audit Type', width: 200 },
        { field: 'authority', headerName: 'Tax Authority', width: 250 },
        { field: 'period', headerName: 'Period', width: 100 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            renderCell: (params) => {
                const colorMap = {
                    'Planned': 'default',
                    'Active': 'primary',
                    'Closed': 'success',
                    'Appealed': 'warning'
                };
                return <Chip label={params.value} color={colorMap[params.value] || 'default'} size="small" />;
            }
        },
        {
            field: 'risk',
            headerName: 'Risk',
            width: 120,
            renderCell: (params) => {
                const colorMap = {
                    'Low': 'success',
                    'Medium': 'warning',
                    'High': 'error'
                };
                return <Chip label={params.value} color={colorMap[params.value] || 'default'} variant="outlined" size="small" />;
            }
        },
        { field: 'owner', headerName: 'Owner', width: 200 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <Box>
                    <IconButton size="small" color="primary"><Visibility /></IconButton>
                    <IconButton size="small"><Edit /></IconButton>
                </Box>
            )
        }
    ];

    const handleAddCase = () => {
        const created = {
            id: faker.string.uuid(),
            caseId: `AUD-${faker.string.numeric(4)}`,
            type: newCase.type,
            authority: newCase.authority,
            period: '2026',
            status: 'Planned',
            risk: newCase.risk,
            owner: 'Current User'
        };
        setCases([created, ...cases]);
        setOpenDialog(false);
    };

    return (
        <Box sx={{ height: 600, width: '100%', p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" component="h2">
                    Audit Case Management
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() => setOpenDialog(true)}
                >
                    New Audit Case
                </Button>
            </Box>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 2, bgcolor: '#e3f2fd' }}>
                        <Typography variant="subtitle2" color="textSecondary">Active Cases</Typography>
                        <Typography variant="h4">{cases.filter(c => c.status === 'Active').length}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 2, bgcolor: '#ffebee' }}>
                        <Typography variant="subtitle2" color="textSecondary">High Risk</Typography>
                        <Typography variant="h4" color="error">{cases.filter(c => c.risk === 'High').length}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 2, bgcolor: '#fff3e0' }}>
                        <Typography variant="subtitle2" color="textSecondary">Appeals</Typography>
                        <Typography variant="h4">{cases.filter(c => c.status === 'Appealed').length}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 2, bgcolor: '#e8f5e9' }}>
                        <Typography variant="subtitle2" color="textSecondary">Closed (YTD)</Typography>
                        <Typography variant="h4">{cases.filter(c => c.status === 'Closed').length}</Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Paper elevation={2} sx={{ height: 450, width: '100%' }}>
                <DataGrid
                    rows={cases}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </Paper>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>New Audit Case</DialogTitle>
                <DialogContent sx={{ pt: 2, width: 400 }}>
                    <TextField
                        label="Audit Type"
                        fullWidth
                        select
                        value={newCase.type}
                        onChange={(e) => setNewCase({ ...newCase, type: e.target.value })}
                        sx={{ mb: 2, mt: 1 }}
                    >
                        <MenuItem value="VAT">VAT</MenuItem>
                        <MenuItem value="Corporate Tax">Corporate Tax</MenuItem>
                        <MenuItem value="Withholding">Withholding</MenuItem>
                    </TextField>
                    <TextField
                        label="Tax Authority"
                        fullWidth
                        value={newCase.authority}
                        onChange={(e) => setNewCase({ ...newCase, authority: e.target.value })}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Risk Rating"
                        fullWidth
                        select
                        value={newCase.risk}
                        onChange={(e) => setNewCase({ ...newCase, risk: e.target.value })}
                    >
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button variant="contained" onClick={handleAddCase}>Create</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AuditCaseManagement;
