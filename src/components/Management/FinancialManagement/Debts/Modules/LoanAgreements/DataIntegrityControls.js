import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    FormControlLabel,
    Checkbox,
    Alert
} from '@mui/material';

const DataIntegrityControls = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Data Integrity & Controls</Typography>

            <Alert severity="error" sx={{ mb: 3 }}>
                These settings affect global loan processing rules. Change with caution.
            </Alert>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Validation Rules</Typography>
                        <Grid container>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Prevent Negative Principal Balances" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Block Repayments exceeding Outstanding Amount" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Enforce Accrual/Principal Consistency" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Require Period Close before New Period Accruals" />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Immutable Records</Typography>
                        <Grid container>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox defaultChecked disabled />} label="Lock Posted Journals" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox defaultChecked disabled />} label="Archive Historical Schedules" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox defaultChecked disabled />} label="Immutable Audit Logs" />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DataIntegrityControls;
