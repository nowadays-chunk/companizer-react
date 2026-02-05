import React from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Alert, FormControlLabel, Checkbox } from '@mui/material';
import { Warning } from '@mui/icons-material';

const ImpairmentTesting = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Impairment Testing</Typography>

            <Alert severity="warning" sx={{ mb: 3 }}>
                Impairment assessment mandated for this period due to significant decline in market value.
            </Alert>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Recoverable Amount Calculation</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" gutterBottom>Fair Value Less Costs to Sell (FVLCTS)</Typography>
                        <TextField fullWidth label="Fair Value" type="number" sx={{ mb: 2 }} />
                        <TextField fullWidth label="Costs of Disposal" type="number" sx={{ mb: 2 }} />
                        <TextField fullWidth disabled label="Net FVLCTS" value="0.00" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" gutterBottom>Value in Use (VIU)</Typography>
                        <TextField fullWidth label="PV of Future Cash Flows" type="number" sx={{ mb: 2 }} />
                        <TextField fullWidth disabled label="Calculated VIU" value="0.00" />
                    </Grid>
                </Grid>
            </Paper>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Impairment Recognition</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth disabled label="Carrying Amount" value="$ 5,110,000" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth disabled label="Recoverable Amount (Higher of)" value="$ 4,800,000" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth disabled label="Impairment Loss" value="$ 310,000" sx={{ bgcolor: '#ffebee' }} />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox />} label="I confirm this impairment is permanent and requires booking." />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="error" startIcon={<Warning />}>Post Impairment Loss</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default ImpairmentTesting;
