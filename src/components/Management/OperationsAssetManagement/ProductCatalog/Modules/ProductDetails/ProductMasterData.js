
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
    Divider
} from '@mui/material';
import {
    Save,
    Edit,
    History,
    Label,
    Category,
    BrandingWatermark,
    Event,
    Person
} from '@mui/icons-material';

const ProductMasterData = () => {
    const [status, setStatus] = useState('Active');
    const [productType, setProductType] = useState('Physical');

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Label color="primary" /> Core Product Master Data
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
                            <Typography variant="h6" gutterBottom>Basic Identity</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth label="Product ID / SKU" defaultValue="PROD-001" />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <TextField fullWidth label="Product Name" defaultValue="Enterprise Server X1" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Description"
                                        placeholder="Detailed product description..."
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Classification</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Category" InputProps={{ startAdornment: <Category fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} /> }} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Subcategory" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Brand / Manufacturer" InputProps={{ startAdornment: <BrandingWatermark fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} /> }} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Product Type</InputLabel>
                                        <Select value={productType} label="Product Type" onChange={(e) => setProductType(e.target.value)}>
                                            <MenuItem value="Physical">Physical Good</MenuItem>
                                            <MenuItem value="Digital">Digital / Download</MenuItem>
                                            <MenuItem value="Service">Service</MenuItem>
                                            <MenuItem value="Subscription">Subscription</MenuItem>
                                            <MenuItem value="Bundle">Bundle / Kit</MenuItem>
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
                            <Typography variant="h6" gutterBottom>Lifecycle Status</Typography>
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel>Status</InputLabel>
                                <Select value={status} label="Status" onChange={(e) => setStatus(e.target.value)}>
                                    <MenuItem value="Draft">Draft</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Discontinued">Discontinued</MenuItem>
                                    <MenuItem value="Archived">Archived</MenuItem>
                                </Select>
                            </FormControl>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                <Chip label={status} color={status === 'Active' ? 'success' : 'default'} />
                                <Chip label={productType} color="primary" variant="outlined" />
                            </Box>
                        </CardContent>
                    </Card>

                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Dates & Ownership</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField type="date" fullWidth label="Launch Date" InputLabelProps={{ shrink: true }} InputProps={{ startAdornment: <Event fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} /> }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="date" fullWidth label="End-of-Life Date" InputLabelProps={{ shrink: true }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Product Owner" InputProps={{ startAdornment: <Person fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} /> }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductMasterData;
