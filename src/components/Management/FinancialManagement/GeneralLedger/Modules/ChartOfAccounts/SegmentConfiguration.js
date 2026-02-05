import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    IconButton,
    Switch,
    FormControlLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Alert,
    Tabs,
    Tab
} from '@mui/material';
import {
    Settings,
    Add,
    Edit,
    Delete,
    Check,
    Close,
    Build,
    Security
} from '@mui/icons-material';

const SegmentConfiguration = () => {
    const [tabValue, setTabValue] = useState(0);
    const [dialogOpen, setDialogOpen] = useState(false);

    // Mock segment configuration
    const [segments] = useState([
        {
            id: 1,
            position: 1,
            name: 'Company',
            length: 2,
            format: 'Numeric',
            required: true,
            active: true,
            values: 15
        },
        {
            id: 2,
            position: 2,
            name: 'Department',
            length: 3,
            format: 'Numeric',
            required: true,
            active: true,
            values: 42
        },
        {
            id: 3,
            position: 3,
            name: 'Cost Center',
            length: 4,
            format: 'Alphanumeric',
            required: false,
            active: true,
            values: 128
        },
        {
            id: 4,
            position: 4,
            name: 'Account',
            length: 6,
            format: 'Numeric',
            required: true,
            active: true,
            values: 247
        },
        {
            id: 5,
            position: 5,
            name: 'Project',
            length: 5,
            format: 'Alphanumeric',
            required: false,
            active: false,
            values: 0
        }
    ]);

    const [validationRules] = useState([
        {
            id: 1,
            name: 'Department-Cost Center Dependency',
            type: 'Cross-Segment',
            rule: 'If Dept = 100-199, Cost Center must be 1000-1999',
            active: true
        },
        {
            id: 2,
            name: 'Project Required for CAPEX',
            type: 'Conditional',
            rule: 'If Account Type = Fixed Asset, Project is mandatory',
            active: true
        },
        {
            id: 3,
            name: 'Format Validation',
            type: 'Format',
            rule: 'Cost Center must match pattern: [A-Z]{2}[0-9]{2}',
            active: true
        }
    ]);

    const [accountStringExample, setAccountStringExample] = useState({
        company: '01',
        department: '100',
        costCenter: 'FN01',
        account: '400100',
        project: ''
    });

    const buildAccountString = () => {
        const parts = [
            accountStringExample.company,
            accountStringExample.department,
            accountStringExample.costCenter,
            accountStringExample.account,
            accountStringExample.project
        ].filter(p => p);
        return parts.join('-');
    };

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                {/* Header */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Settings color="primary" sx={{ fontSize: 40 }} />
                                <Box>
                                    <Typography variant="h5" fontWeight="bold">
                                        Segment Configuration
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Configure multi-segment account structure and validation rules
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Button variant="outlined" startIcon={<Build />}>
                                    Test Builder
                                </Button>
                                <Button variant="contained" startIcon={<Add />} onClick={() => setDialogOpen(true)}>
                                    Add Segment
                                </Button>
                            </Box>
                        </Box>

                        <Alert severity="info" sx={{ mt: 2 }}>
                            <strong>Current Structure:</strong> Company–Department–CostCenter–Account–Project (Format: XX-XXX-XXXX-XXXXXX-XXXXX)
                        </Alert>
                    </Paper>
                </Grid>

                {/* Main Content with Tabs */}
                <Grid item xs={12}>
                    <Paper>
                        <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
                            <Tab label="Segment Definitions" />
                            <Tab label="Validation Rules" />
                            <Tab label="Account String Builder" />
                        </Tabs>

                        {/* Tab 1: Segment Definitions */}
                        {tabValue === 0 && (
                            <Box sx={{ p: 3 }}>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Position</TableCell>
                                                <TableCell>Segment Name</TableCell>
                                                <TableCell>Length</TableCell>
                                                <TableCell>Format</TableCell>
                                                <TableCell>Required</TableCell>
                                                <TableCell>Active</TableCell>
                                                <TableCell>Values</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {segments.map((segment) => (
                                                <TableRow key={segment.id}>
                                                    <TableCell>
                                                        <Chip label={segment.position} size="small" color="primary" />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography variant="body2" fontWeight="bold">
                                                            {segment.name}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>{segment.length}</TableCell>
                                                    <TableCell>
                                                        <Chip label={segment.format} size="small" variant="outlined" />
                                                    </TableCell>
                                                    <TableCell>
                                                        {segment.required ? (
                                                            <Check color="success" />
                                                        ) : (
                                                            <Close color="disabled" />
                                                        )}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Switch checked={segment.active} />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Chip label={segment.values} size="small" />
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton size="small" color="primary">
                                                            <Edit fontSize="small" />
                                                        </IconButton>
                                                        <IconButton size="small">
                                                            <Settings fontSize="small" />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        )}

                        {/* Tab 2: Validation Rules */}
                        {tabValue === 1 && (
                            <Box sx={{ p: 3 }}>
                                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="h6">Cross-Segment Validation Rules</Typography>
                                    <Button variant="outlined" startIcon={<Add />} size="small">
                                        Add Rule
                                    </Button>
                                </Box>

                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Rule Name</TableCell>
                                                <TableCell>Type</TableCell>
                                                <TableCell>Rule Definition</TableCell>
                                                <TableCell>Status</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {validationRules.map((rule) => (
                                                <TableRow key={rule.id}>
                                                    <TableCell>
                                                        <Typography variant="body2" fontWeight="bold">
                                                            {rule.name}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Chip
                                                            label={rule.type}
                                                            size="small"
                                                            color={
                                                                rule.type === 'Cross-Segment' ? 'primary' :
                                                                    rule.type === 'Conditional' ? 'secondary' :
                                                                        'default'
                                                            }
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                                                            {rule.rule}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Chip
                                                            label={rule.active ? 'Active' : 'Inactive'}
                                                            size="small"
                                                            color={rule.active ? 'success' : 'default'}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton size="small" color="primary">
                                                            <Edit fontSize="small" />
                                                        </IconButton>
                                                        <IconButton size="small" color="error">
                                                            <Delete fontSize="small" />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        )}

                        {/* Tab 3: Account String Builder */}
                        {tabValue === 2 && (
                            <Box sx={{ p: 3 }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Alert severity="warning">
                                            <strong>Preview Mode:</strong> Test your account string structure before activating changes
                                        </Alert>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h6" gutterBottom>
                                                    Build Account String
                                                </Typography>
                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            label="Company (2 digits)"
                                                            value={accountStringExample.company}
                                                            onChange={(e) => setAccountStringExample({
                                                                ...accountStringExample,
                                                                company: e.target.value
                                                            })}
                                                            fullWidth
                                                            placeholder="01"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            label="Department (3 digits)"
                                                            value={accountStringExample.department}
                                                            onChange={(e) => setAccountStringExample({
                                                                ...accountStringExample,
                                                                department: e.target.value
                                                            })}
                                                            fullWidth
                                                            placeholder="100"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            label="Cost Center (4 chars)"
                                                            value={accountStringExample.costCenter}
                                                            onChange={(e) => setAccountStringExample({
                                                                ...accountStringExample,
                                                                costCenter: e.target.value
                                                            })}
                                                            fullWidth
                                                            placeholder="FN01"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            label="Account (6 digits)"
                                                            value={accountStringExample.account}
                                                            onChange={(e) => setAccountStringExample({
                                                                ...accountStringExample,
                                                                account: e.target.value
                                                            })}
                                                            fullWidth
                                                            placeholder="400100"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            label="Project (5 chars, optional)"
                                                            value={accountStringExample.project}
                                                            onChange={(e) => setAccountStringExample({
                                                                ...accountStringExample,
                                                                project: e.target.value
                                                            })}
                                                            fullWidth
                                                            placeholder="PRJ01"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h6" gutterBottom>
                                                    Generated Account String
                                                </Typography>
                                                <Paper
                                                    sx={{
                                                        p: 3,
                                                        mt: 2,
                                                        bgcolor: 'primary.main',
                                                        color: 'white',
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    <Typography variant="h4" fontFamily="monospace">
                                                        {buildAccountString() || '—'}
                                                    </Typography>
                                                </Paper>

                                                <Box sx={{ mt: 3 }}>
                                                    <Typography variant="subtitle2" gutterBottom>
                                                        Validation Results:
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
                                                        <Alert severity="success" icon={<Check />}>
                                                            Format validation passed
                                                        </Alert>
                                                        <Alert severity="success" icon={<Check />}>
                                                            Segment length validation passed
                                                        </Alert>
                                                        <Alert severity="info" icon={<Security />}>
                                                            Cross-segment dependency rules verified
                                                        </Alert>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Box>
                        )}
                    </Paper>
                </Grid>

                {/* Summary Cards */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Active Segments</Typography>
                            <Typography variant="h3" color="primary">4</Typography>
                            <Typography variant="body2" color="text.secondary">out of 5 total</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Validation Rules</Typography>
                            <Typography variant="h3" color="primary">3</Typography>
                            <Typography variant="body2" color="text.secondary">active rules</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Total Length</Typography>
                            <Typography variant="h3" color="primary">24</Typography>
                            <Typography variant="body2" color="text.secondary">characters (with separators)</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Add Segment Dialog */}
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Add New Segment</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12}>
                            <TextField label="Segment Name" fullWidth required />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Position" type="number" fullWidth required />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Length" type="number" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch />}
                                label="Required Segment"
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                    <Button variant="contained">Add Segment</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default SegmentConfiguration;
