import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, Paper, Typography, TextField, Alert } from '@mui/material';
// Imported generated defaults covering all entities
import { defaultAssets, defaultLiabilities } from './defaultSummaryConfig';

const SummaryConfiguration = () => {

    const [assetsJson, setAssetsJson] = useState(JSON.stringify(defaultAssets, null, 2));
    const [liabilitiesJson, setLiabilitiesJson] = useState(JSON.stringify(defaultLiabilities, null, 2));
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const savedAssets = localStorage.getItem('assetsConfig');
        const savedLiabilities = localStorage.getItem('liabilitiesConfig');

        if (savedAssets) setAssetsJson(savedAssets);
        if (savedLiabilities) setLiabilitiesJson(savedLiabilities);
    }, []);

    const handleSave = () => {
        try {
            // Validate JSON
            const parsedAssets = JSON.parse(assetsJson);
            const parsedLiabilities = JSON.parse(liabilitiesJson);

            // Save to localStorage
            localStorage.setItem('assetsConfig', JSON.stringify(parsedAssets, null, 2));
            localStorage.setItem('liabilitiesConfig', JSON.stringify(parsedLiabilities, null, 2));

            // Create a backup of the original input string to preserve user formatting if needed, 
            // but we are creating the source of truth, so formatted is fine.
            setAssetsJson(JSON.stringify(parsedAssets, null, 2));
            setLiabilitiesJson(JSON.stringify(parsedLiabilities, null, 2));

            setError(null);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (e) {
            setError("Invalid JSON format. Please check your syntax.");
            setSuccess(false);
        }
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
            <Typography variant="h4" gutterBottom>
                Summary Configuration
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Define the mapping for Assets and Liabilities. The keys represent the Entities (displayed in Category),
                and the values are the raw data categories that should be aggregated into that Entity.
            </Typography>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>Configuration saved successfully!</Alert>}

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
                        <Typography variant="h6" gutterBottom color="primary">
                            Assets Configuration
                        </Typography>
                        <TextField
                            multiline
                            fullWidth
                            rows={20}
                            variant="outlined"
                            value={assetsJson}
                            onChange={(e) => setAssetsJson(e.target.value)}
                            sx={{ fontFamily: 'monospace' }}
                            inputProps={{ style: { fontFamily: 'monospace' } }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
                        <Typography variant="h6" gutterBottom color="error">
                            Liabilities Configuration
                        </Typography>
                        <TextField
                            multiline
                            fullWidth
                            rows={20}
                            variant="outlined"
                            value={liabilitiesJson}
                            onChange={(e) => setLiabilitiesJson(e.target.value)}
                            sx={{ fontFamily: 'monospace' }}
                            inputProps={{ style: { fontFamily: 'monospace' } }}
                        />
                    </Paper>
                </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" color="primary" size="large" onClick={handleSave}>
                    Save Configuration
                </Button>
            </Box>
        </Container>
    );
};

export default SummaryConfiguration;
