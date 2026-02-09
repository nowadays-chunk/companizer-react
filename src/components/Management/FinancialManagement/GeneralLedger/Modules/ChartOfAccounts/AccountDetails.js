import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Chip,
    Switch,
    FormControlLabel,
    MenuItem,
    Tabs,
    Tab
} from '@mui/material';
import { Edit, Language, Security, Public } from '@mui/icons-material';

import { fieldsConfig, collectionName, entityName } from './Modules/General/AccountDetailsConfig';

const AccountDetails = ({ accountId: propAccountId }) => {
    const { id: paramId } = useParams();
    const accountId = propAccountId || paramId;
    const [tabValue, setTabValue] = useState(0);
    const [editMode, setEditMode] = useState(false);

    return (
        <Box sx={{ p: 3 }}>
            <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Edit color="primary" sx={{ fontSize: 40 }} />
                        <Box>
                            <Typography variant="h6" fontWeight="bold">Account Details Editor</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Edit multilingual descriptions, tax settings, and account configuration
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                            variant={editMode ? 'outlined' : 'contained'}
                            onClick={() => setEditMode(!editMode)}
                        >
                            {editMode ? 'Cancel' : 'Edit'}
                        </Button>
                        {editMode && <Button variant="contained" color="primary">Save Changes</Button>}
                    </Box>
                </Box>

                <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} sx={{ mb: 3 }}>
                    <Tab label="Basic Info" />
                    <Tab label="Multilingual" />
                    <Tab label="Tax & Compliance" />
                    <Tab label="Security" />
                </Tabs>

                {tabValue === 0 && (
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Account Code"
                                fullWidth
                                defaultValue="1110"
                                disabled={!editMode}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Account Name"
                                fullWidth
                                defaultValue="Cash and Cash Equivalents"
                                disabled={!editMode}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                select
                                label="Account Type"
                                fullWidth
                                defaultValue="asset"
                                disabled={!editMode}
                            >
                                <MenuItem value="asset">Asset</MenuItem>
                                <MenuItem value="liability">Liability</MenuItem>
                                <MenuItem value="equity">Equity</MenuItem>
                                <MenuItem value="revenue">Revenue</MenuItem>
                                <MenuItem value="expense">Expense</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                select
                                label="Account Category"
                                fullWidth
                                defaultValue="current_asset"
                                disabled={!editMode}
                            >
                                <MenuItem value="current_asset">Current Asset</MenuItem>
                                <MenuItem value="fixed_asset">Fixed Asset</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                select
                                label="Natural Balance"
                                fullWidth
                                defaultValue="debit"
                                disabled={!editMode}
                            >
                                <MenuItem value="debit">Debit</MenuItem>
                                <MenuItem value="credit">Credit</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControlLabel
                                control={<Switch defaultChecked disabled={!editMode} />}
                                label="Active Account"
                            />
                        </Grid>
                    </Grid>
                )}

                {tabValue === 1 && (
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                            <Language color="primary" />
                            <Typography variant="h6">Multilingual Descriptions</Typography>
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description (English)"
                                    fullWidth
                                    multiline
                                    rows={2}
                                    defaultValue="Cash and cash equivalents including bank accounts"
                                    disabled={!editMode}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description (French)"
                                    fullWidth
                                    multiline
                                    rows={2}
                                    defaultValue="Trésorerie et équivalents de trésorerie"
                                    disabled={!editMode}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description (German)"
                                    fullWidth
                                    multiline
                                    rows={2}
                                    defaultValue="Zahlungsmittel und Zahlungsmitteläquivalente"
                                    disabled={!editMode}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description (Spanish)"
                                    fullWidth
                                    multiline
                                    rows={2}
                                    defaultValue="Efectivo y equivalentes de efectivo"
                                    disabled={!editMode}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                )}

                {tabValue === 2 && (
                    <Box>
                        <Typography variant="h6" gutterBottom>Tax & Compliance Settings</Typography>
                        <Grid container spacing={3} sx={{ mt: 1 }}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Default Tax Code"
                                    fullWidth
                                    defaultValue="TX001"
                                    disabled={!editMode}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    select
                                    label="VAT Designation"
                                    fullWidth
                                    defaultValue="none"
                                    disabled={!editMode}
                                >
                                    <MenuItem value="none">None</MenuItem>
                                    <MenuItem value="input">Input VAT</MenuItem>
                                    <MenuItem value="output">Output VAT</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControlLabel
                                    control={<Switch disabled={!editMode} />}
                                    label="Tax Recoverable"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControlLabel
                                    control={<Switch disabled={!editMode} />}
                                    label="Withholding Tax Relevant"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControlLabel
                                    control={<Switch disabled={!editMode} />}
                                    label="Reverse Charge Applicable"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControlLabel
                                    control={<Switch defaultChecked disabled={!editMode} />}
                                    label="Statutory Account"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="SAF-T Mapping Code"
                                    fullWidth
                                    defaultValue="A1110"
                                    disabled={!editMode}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="FEC Code"
                                    fullWidth
                                    defaultValue="FEC1110"
                                    disabled={!editMode}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                )}

                {tabValue === 3 && (
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                            <Security color="primary" />
                            <Typography variant="h6">Security & Access Control</Typography>
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <FormControlLabel
                                    control={<Switch disabled={!editMode} />}
                                    label="Sensitive Account"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControlLabel
                                    control={<Switch disabled={!editMode} />}
                                    label="Restricted Access"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Required Role for Access"
                                    fullWidth
                                    placeholder="e.g., Finance Manager"
                                    disabled={!editMode}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="subtitle2" gutterBottom>
                                            Multi-Entity Availability
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                                            <Chip label="US Entity" color="primary" size="small" />
                                            <Chip label="UK Entity" color="primary" size="small" />
                                            <Chip label="DE Entity" color="primary" size="small" />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default AccountDetails;
