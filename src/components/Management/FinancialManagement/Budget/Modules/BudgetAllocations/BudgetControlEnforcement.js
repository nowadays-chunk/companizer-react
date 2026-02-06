import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Alert, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { GppBad } from '@mui/icons-material';

const BudgetControlEnforcement = () => {
    const [controlType, setControlType] = useState('hard');
    const [warnThreshold, setWarnThreshold] = useState(80);
    const [blockThreshold, setBlockThreshold] = useState(100);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <GppBad color={controlType === 'hard' ? 'error' : 'warning'} /> Budget Control & Enforcement
            </Typography>

            <Alert severity={controlType === 'hard' ? 'error' : 'warning'} sx={{ mb: 3 }}>
                {controlType === 'hard'
                    ? 'Strict enforcement enabled. Overage requests are BLOCKED automatically.'
                    : 'Soft enforcement active. Managers will be warned but can proceed.'}
            </Alert>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Spending Thresholds</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel>Control Type</InputLabel>
                                <Select
                                    label="Control Type"
                                    value={controlType}
                                    onChange={(e) => setControlType(e.target.value)}
                                >
                                    <MenuItem value="soft">Soft (Warning only)</MenuItem>
                                    <MenuItem value="hard">Hard (Block transaction)</MenuItem>
                                    <MenuItem value="hybrid">Hybrid (Block > 10% overage)</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                label="Warning Threshold (%)"
                                type="number"
                                value={warnThreshold}
                                onChange={(e) => setWarnThreshold(e.target.value)}
                                size="small"
                            />
                            <TextField
                                label="Block Threshold (%)"
                                type="number"
                                value={blockThreshold}
                                onChange={(e) => setBlockThreshold(e.target.value)}
                                size="small"
                            />
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Integration Checkpoints</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {['Purchase Requisition', 'Purchase Order', 'Invoice Processing', 'Journal Entry'].map((point) => (
                                <Box key={point} sx={{ p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                    <Typography variant="body2">☑ Check at {point}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BudgetControlEnforcement;
