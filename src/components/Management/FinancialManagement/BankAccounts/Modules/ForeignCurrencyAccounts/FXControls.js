import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    FormControlLabel,
    Switch,
    TextField,
    Button,
    Divider
} from '@mui/material';
import { Security } from '@mui/icons-material';

const FXControls = () => {
    const [controls, setControls] = useState({
        requireDualApproval: true,
        maxDailySpotLimit: 100000,
        maxForwardTenorDays: 180,
        restrictedCurrencies: 'RUB, IRR',
        allowManualRateOverride: false
    });

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Security sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h5">
                    FX Risk Controls & Permissions
                </Typography>
            </Box>

            <Paper sx={{ p: 3, maxWidth: 800 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6">Transaction Limits</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Max Daily Spot Volume (USD Eqv)"
                            type="number"
                            value={controls.maxDailySpotLimit}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Max Forward Contract Tenor (Days)"
                            type="number"
                            value={controls.maxForwardTenorDays}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Divider sx={{ my: 1 }} />
                        <Typography variant="h6" sx={{ mt: 1 }}>Workflow Policies</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Switch checked={controls.requireDualApproval} />}
                            label="Require Dual Approval for All FX Payments > $10,000"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Switch checked={controls.allowManualRateOverride} />}
                            label="Allow Users to Manually Override System Exchange Rates"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Restricted Currencies (Block transactions)"
                            helperText="Comma separated ISO codes"
                            value={controls.restrictedCurrencies}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Button variant="contained">Update Controls</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default FXControls;
