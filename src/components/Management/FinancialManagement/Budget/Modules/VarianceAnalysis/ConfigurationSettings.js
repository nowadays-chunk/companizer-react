import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, Button, Snackbar, Alert } from '@mui/material';
import { Settings, Save } from '@mui/icons-material';

const ConfigurationSettings = () => {
    const [config, setConfig] = useState({
        formula: 'standard',
        precision: '2',
        favColor: '#4caf50',
        unfavColor: '#f44336'
    });
    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        setConfig({ ...config, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        setSaved(true);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Settings color="primary" /> Configuration Settings
                </Typography>
                <Button variant="contained" startIcon={<Save />} onClick={handleSave}>Save Changes</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Calculation Logic</Typography>
                            <Box sx={{ display: 'grid', gap: 2, mt: 2 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>Variance Formula</InputLabel>
                                    <Select
                                        label="Variance Formula"
                                        name="formula"
                                        value={config.formula}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="standard">Standard (Actual - Budget)</MenuItem>
                                        <MenuItem value="period">Period-over-Period</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth size="small">
                                    <InputLabel>Rounding Precision</InputLabel>
                                    <Select
                                        label="Rounding Precision"
                                        name="precision"
                                        value={config.precision}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="0">Whole Numbers</MenuItem>
                                        <MenuItem value="2">2 Decimals</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Display Preferences</Typography>
                            <Box sx={{ display: 'grid', gap: 2, mt: 2 }}>
                                <TextField
                                    label="Favorable Color"
                                    name="favColor"
                                    value={config.favColor}
                                    onChange={handleChange}
                                    fullWidth size="small" type="color"
                                />
                                <TextField
                                    label="Unfavorable Color"
                                    name="unfavColor"
                                    value={config.unfavColor}
                                    onChange={handleChange}
                                    fullWidth size="small" type="color"
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Snackbar open={saved} autoHideDuration={3000} onClose={() => setSaved(false)}>
                <Alert severity="success">Settings saved successfully!</Alert>
            </Snackbar>
        </Box>
    );
};

export default ConfigurationSettings;
