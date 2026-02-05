import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    Tabs,
    Tab,
    TextField,
    Switch,
    FormControlLabel,
    MenuItem
} from '@mui/material';
import { Settings, Security, Backup, Rule } from '@mui/icons-material';

const CoAAdmin = () => {
    const [tabValue, setTabValue] = useState(0);

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Settings color="primary" sx={{ fontSize: 40 }} />
                                <Box>
                                    <Typography variant="h5" fontWeight="bold">Admin Console & Configuration</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Global CoA templates, entity rules, and workflow configuration
                                    </Typography>
                                </Box>
                            </Box>
                            <Button variant="contained">Save Configuration</Button>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper>
                        <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
                            <Tab label="Global Settings" />
                            <Tab label="Entity Rules" />
                            <Tab label="Workflow Binding" />
                            <Tab label="Data Export" />
                        </Tabs>

                        {tabValue === 0 && (
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" gutterBottom>Global CoA Configuration</Typography>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    <Grid item xs={12} md={6}>
                                        <TextField select label="Default Account Structure" fullWidth>
                                            <MenuItem value="simple">Simple (Account Only)</MenuItem>
                                            <MenuItem value="segmented">Multi-Segment</MenuItem>
                                            <MenuItem value="hierarchical">Hierarchical</MenuItem>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField select label="Versioning Strategy" fullWidth>
                                            <MenuItem value="append">Append-Only</MenuItem>
                                            <MenuItem value="replace">Replace</MenuItem>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel control={<Switch defaultChecked />} label="Enable Account Auto-Numbering" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel control={<Switch />} label="Require Approval for Account Creation" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel control={<Switch defaultChecked />} label="Enable SOX Controls" />
                                    </Grid>
                                </Grid>
                            </Box>
                        )}

                        {tabValue === 1 && (
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" gutterBottom>Entity-Specific Rules</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Configure entity-specific account rules and mappings
                                </Typography>
                                <Grid container spacing={2} sx={{ mt: 2 }}>
                                    <Grid item xs={12} md={6}>
                                        <TextField select label="Select Entity" fullWidth>
                                            <MenuItem value="entity1">US Entity</MenuItem>
                                            <MenuItem value="entity2">UK Entity</MenuItem>
                                            <MenuItem value="entity3">DE Entity</MenuItem>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField select label="Chart Version" fullWidth>
                                            <MenuItem value="v1">Version 1.0</MenuItem>
                                            <MenuItem value="v2">Version 2.0 (Current)</MenuItem>
                                        </TextField>
                                    </Grid>
                                </Grid>
                            </Box>
                        )}

                        {tabValue === 2 && (
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" gutterBottom>Workflow Binding</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Configure approval workflows for account governance
                                </Typography>
                                <Grid container spacing={2} sx={{ mt: 2 }}>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Switch defaultChecked />}
                                            label="Require approval for new accounts"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Switch defaultChecked />}
                                            label="Require approval for account modifications"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Switch />}
                                            label="Require approval for account deactivation"
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        )}

                        {tabValue === 3 && (
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" gutterBottom>Global Export</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Backup color="primary" sx={{ fontSize: 40, mb: 1 }} />
                                                <Typography variant="h6" gutterBottom>Export CoA Data</Typography>
                                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                                    Export entire chart of accounts with all configuration
                                                </Typography>
                                                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                                                    <Button variant="outlined" size="small">Excel</Button>
                                                    <Button variant="outlined" size="small">CSV</Button>
                                                    <Button variant="outlined" size="small">JSON</Button>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Rule color="secondary" sx={{ fontSize: 40, mb: 1 }} />
                                                <Typography variant="h6" gutterBottom>Export Rules</Typography>
                                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                                    Export validation rules and workflow configuration
                                                </Typography>
                                                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                                                    <Button variant="outlined" size="small">Export</Button>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Box>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    );
};

export default CoAAdmin;
