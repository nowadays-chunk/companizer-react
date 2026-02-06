
import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Chip,
    Button,
    Switch,
    FormControlLabel
} from '@mui/material';
import {
    Tune,
    Save,
    History,
    Category,
    Label
} from '@mui/icons-material';

const AttributeMasterData = () => {
    const [status, setStatus] = useState('Active');
    const [type, setType] = useState('Text');
    const [category, setCategory] = useState('Technical');

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Tune color="primary" /> Attribute Master Data
                </Typography>
                <Box>
                    <Button startIcon={<History />} sx={{ mr: 1 }}>History</Button>
                    <Button variant="contained" startIcon={<Save />}>Save Changes</Button>
                </Box>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Definition</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth label="Attribute ID" defaultValue="ATTR-TECH-001" disabled />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <TextField fullWidth label="Attribute Name" defaultValue="Screen Size" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={3}
                                        label="Description"
                                        defaultValue="Diagonal screen size in inches."
                                        helperText="Internal description for product managers"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Default Value" defaultValue="0" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Unit of Measure (UOM)" defaultValue="inches" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Configuration</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Data Type</InputLabel>
                                        <Select value={type} label="Data Type" onChange={(e) => setType(e.target.value)}>
                                            <MenuItem value="Text">Text</MenuItem>
                                            <MenuItem value="Numeric">Numeric</MenuItem>
                                            <MenuItem value="Boolean">Boolean (Yes/No)</MenuItem>
                                            <MenuItem value="Date">Date</MenuItem>
                                            <MenuItem value="Selection">Single Selection</MenuItem>
                                            <MenuItem value="MultiSelect">Multi-Select</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Classification</InputLabel>
                                        <Select value={category} label="Classification" onChange={(e) => setCategory(e.target.value)}>
                                            <MenuItem value="Technical">Technical Spec</MenuItem>
                                            <MenuItem value="Commercial">Commercial/Marketing</MenuItem>
                                            <MenuItem value="Regulatory">Regulatory/Compliance</MenuItem>
                                            <MenuItem value="Logistical">Logistical/Shipping</MenuItem>
                                            <MenuItem value="Financial">Financial/Costing</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Status & Flags</Typography>
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel>Status</InputLabel>
                                <Select value={status} label="Status" onChange={(e) => setStatus(e.target.value)}>
                                    <MenuItem value="Draft">Draft</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Inactive">Inactive</MenuItem>
                                    <MenuItem value="Archived">Archived</MenuItem>
                                </Select>
                            </FormControl>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                                <Chip label={status} color={status === 'Active' ? 'success' : 'default'} />
                                <Chip label={category} color="primary" variant="outlined" />
                            </Box>

                            <Box sx={{ mt: 2 }}>
                                <FormControlLabel control={<Switch checked />} label="Mandatory Attribute" />
                                <Typography variant="caption" display="block" color="text.secondary">Required for all assigned products</Typography>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <FormControlLabel control={<Switch />} label="Allow Filtering" />
                                <Typography variant="caption" display="block" color="text.secondary">Use in layered navigation</Typography>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <FormControlLabel control={<Switch />} label="Show on Frontend" />
                            </Box>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Labels</Typography>
                            <TextField fullWidth label="Frontend Label (EN)" defaultValue="Screen Size" sx={{ mb: 2 }} />
                            <TextField fullWidth label="Frontend Label (FR)" defaultValue="Taille de l'écran" />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AttributeMasterData;
