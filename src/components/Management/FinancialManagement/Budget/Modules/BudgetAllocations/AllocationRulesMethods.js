import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, FormControl, InputLabel, Select, MenuItem, Slider, Button, Snackbar, Alert, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Rule, Save, Settings } from '@mui/icons-material';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/AllocationRulesMethods';

const AllocationRulesMethods = () => {
    const [method, setMethod] = useState('top-down');
    const [overhead, setOverhead] = useState(15);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [currentDriver, setCurrentDriver] = useState('');

    const handleSave = () => {
        setOpenSnackbar(true);
    };

    const handleConfigure = (driver) => {
        setCurrentDriver(driver);
        setOpenDialog(true);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Rule color="primary" /> Allocation Rules & Methods
                </Typography>
                <Button variant="contained" startIcon={<Save />} onClick={handleSave}>Save Config</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Distribution Logic</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>Default Allocation Method</InputLabel>
                                    <Select
                                        label="Default Allocation Method"
                                        value={method}
                                        onChange={(e) => setMethod(e.target.value)}
                                    >
                                        <MenuItem value="top-down">Top-Down (Corporate to Dept)</MenuItem>
                                        <MenuItem value="bottom-up">Bottom-Up (Dept Requests)</MenuItem>
                                        <MenuItem value="driver">Driver-Based</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom>Corporate Overhead Allocation ({overhead}%)</Typography>
                                <Slider
                                    value={overhead}
                                    onChange={(e, val) => setOverhead(val)}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={50}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Driver-Based Factors</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {['Headcount', 'Revenue Contribution', 'Square Footage', 'IT Usage'].map((driver) => (
                                <Box key={driver} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, bgcolor: 'background.default', borderRadius: 1 }}>
                                    <Typography variant="body2">{driver}</Typography>
                                    <Button size="small" variant="outlined" startIcon={<Settings />} onClick={() => handleConfigure(driver)}>Configure Weight</Button>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                    Configuration saved successfully!
                </Alert>
            </Snackbar>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Configure {currentDriver}</DialogTitle>
                <DialogContent>
                    <Typography gutterBottom sx={{ mt: 1 }}>Weighting Factor (0.0 - 1.0)</Typography>
                    <TextField fullWidth type="number" defaultValue="0.5" inputProps={{ step: 0.1, min: 0, max: 1 }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button variant="contained" onClick={() => setOpenDialog(false)}>Update</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AllocationRulesMethods;
