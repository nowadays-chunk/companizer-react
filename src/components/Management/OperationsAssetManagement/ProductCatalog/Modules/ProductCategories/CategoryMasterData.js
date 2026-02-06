
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
    Avatar
} from '@mui/material';
import {
    Category,
    Save,
    History,
    Event,
    Person,
    Label
} from '@mui/icons-material';

const CategoryMasterData = () => {
    const [status, setStatus] = useState('Active');
    const [type, setType] = useState('Physical');

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Category color="primary" /> Category Master Data
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
                            <Typography variant="h6" gutterBottom>Identity & Definition</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth label="Category ID" defaultValue="CAT-Elect-001" disabled />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <TextField fullWidth label="Category Name (English)" defaultValue="Electronics" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Description"
                                        defaultValue="Consumer electronics including phones, laptops, and accessories."
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Slug / URL Key" defaultValue="electronics" helperText="Used for SEO friendly URLs" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Classification</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Category Type</InputLabel>
                                        <Select value={type} label="Category Type" onChange={(e) => setType(e.target.value)}>
                                            <MenuItem value="Physical">Physical Goods</MenuItem>
                                            <MenuItem value="Digital">Digital / Downloadable</MenuItem>
                                            <MenuItem value="Service">Services</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Display Order" type="number" defaultValue="10" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Status & Ownership</Typography>
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
                            </Box>

                            <TextField
                                fullWidth
                                label="Category Owner"
                                defaultValue="Sarah Keaton"
                                InputProps={{ startAdornment: <Person fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} /> }}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Lifecycle</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField type="date" fullWidth label="Launch Date" InputLabelProps={{ shrink: true }} InputProps={{ startAdornment: <Event fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} /> }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="date" fullWidth label="End-of-Life Date" InputLabelProps={{ shrink: true }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryMasterData;
