
import React from 'react';
import { Box, Typography, Grid, Paper, FormControlLabel, Switch, TextField, Button, Divider, Alert } from '@mui/material';

const AgingConfiguration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Aging Framework & Configuration</Typography>

            <Grid container spacing={3}>
                {/* 1. Aging Buckets */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Aging Bucket Definitions</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField label="Bucket 1 (Days)" defaultValue="0-15" fullWidth size="small" />
                            <TextField label="Bucket 2 (Days)" defaultValue="16-30" fullWidth size="small" />
                            <TextField label="Bucket 3 (Days)" defaultValue="31-60" fullWidth size="small" />
                            <TextField label="Bucket 4 (Days)" defaultValue="61-90" fullWidth size="small" />
                            <TextField label="Bucket 5 (Days)" defaultValue="90+" fullWidth size="small" />
                            <Button variant="outlined" size="small">Add Bucket</Button>
                        </Box>
                    </Paper>
                </Grid>

                {/* 2. Calculation Policies */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Calculation Policies</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <FormControlLabel control={<Switch defaultChecked />} label="Include Unapplied Cash in Aging" />
                            <FormControlLabel control={<Switch defaultChecked />} label="Aging by Invoice Date (vs Due Date)" />
                            <FormControlLabel control={<Switch />} label="Exclude Disputed Items" />
                            <FormControlLabel control={<Switch defaultChecked />} label="Retroactive Recalculation" />
                            <TextField
                                label="Statutory Aging Method"
                                select
                                fullWidth
                                SelectProps={{ native: true }}
                                sx={{ mt: 2 }}
                                size="small"
                            >
                                <option>FIFO (First-In, First-Out)</option>
                                <option>Specific Identification</option>
                            </TextField>
                        </Box>
                    </Paper>
                </Grid>

                {/* 3. Snapshot & Cutoff */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Snapshots & Period Close</Typography>
                        <TextField
                            label="Global Aging Cutoff Date"
                            type="date"
                            fullWidth
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            sx={{ mb: 2 }}
                        />
                        <Alert severity="info" sx={{ mb: 2 }}>
                            Last snapshot taken: 2026-01-31 (Period Close)
                        </Alert>
                        <Button variant="contained" color="primary">Create Historical Snapshot</Button>
                    </Paper>
                </Grid>

                {/* 4. Currency Settings */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Currency Views</Typography>
                        <FormControlLabel control={<Switch defaultChecked />} label="Maintain Transaction Currency Aging" />
                        <FormControlLabel control={<Switch defaultChecked />} label="Maintain Group Currency (USD) Aging" />
                        <FormControlLabel control={<Switch defaultChecked />} label="Maintain Local Currency Aging" />
                    </Paper>
                </Grid>

                {/* 13. Audit & Controls */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Audit & Versioning</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Current Policy Version: v4.2 (Active since 2025-01-01)
                        </Typography>
                        <Button variant="text" sx={{ mt: 1 }}>View Audit Log</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AgingConfiguration;
