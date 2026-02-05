import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputAdornment
} from '@mui/material';
import { Key } from '@mui/icons-material';

const IntegrationSettings = () => {
    const [provider, setProvider] = useState('ECB');

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                FX Data Integration Settings
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Rate Provider Source</Typography>
                        <RadioGroup
                            value={provider}
                            onChange={(e) => setProvider(e.target.value)}
                        >
                            <FormControlLabel value="ECB" control={<Radio />} label="European Central Bank (Free, Daily)" />
                            <FormControlLabel value="OANDA" control={<Radio />} label="OANDA (Premium, Real-time)" />
                            <FormControlLabel value="OpenEx" control={<Radio />} label="Open Exchange Rates" />
                        </RadioGroup>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>API Configuration</Typography>

                        {provider !== 'ECB' && (
                            <Box sx={{ mt: 2 }}>
                                <TextField
                                    fullWidth
                                    label="API Key / Access Token"
                                    type="password"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Key /></InputAdornment>,
                                    }}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="API Endpoint URL"
                                    defaultValue="https://api.oanda.com/v3/..."
                                    sx={{ mb: 2 }}
                                />
                                <Button variant="outlined">Test Connection</Button>
                            </Box>
                        )}
                        {provider === 'ECB' && (
                            <Typography color="textSecondary" sx={{ mt: 2 }}>
                                No API Key required for Public Data.
                            </Typography>
                        )}
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained">Save Integration Settings</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IntegrationSettings;
