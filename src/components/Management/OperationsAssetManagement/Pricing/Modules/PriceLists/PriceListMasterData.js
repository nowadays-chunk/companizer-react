
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
    InputAdornment
} from '@mui/material';
import {
    Save,
    History,
    RequestQuote,
    CalendarToday
} from '@mui/icons-material';

const PriceListMasterData = () => {
    const [status, setStatus] = useState('Active');
    const [currency, setCurrency] = useState('USD');
    const [type, setType] = useState('Standard');

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <RequestQuote color="primary" /> Price List Setup
                </Typography>
                <Box>
                    <Button startIcon={<History />} sx={{ mr: 1 }}>Audit Log</Button>
                    <Button variant="contained" startIcon={<Save />}>Save Price List</Button>
                </Box>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>General Information</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth label="Price List ID" defaultValue="PL-STD-2026" disabled />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <TextField fullWidth label="Price List Name" defaultValue="Global Standard 2026" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={3}
                                        label="Description"
                                        defaultValue="Standard B2B price list for all global regions, effective Jan 1, 2026."
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Validity & Ownership</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Effective From"
                                        type="date"
                                        defaultValue="2026-01-01"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ startAdornment: <InputAdornment position="start"><CalendarToday fontSize="small" /></InputAdornment> }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Valid To"
                                        type="date"
                                        defaultValue="2026-12-31"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ startAdornment: <InputAdornment position="start"><CalendarToday fontSize="small" /></InputAdornment> }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Owner / Manager" defaultValue="Pricing Team A" />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Type</InputLabel>
                                        <Select value={type} label="Type" onChange={(e) => setType(e.target.value)}>
                                            <MenuItem value="Standard">Standard Base</MenuItem>
                                            <MenuItem value="Promotional">Promotional</MenuItem>
                                            <MenuItem value="Contract">Contract / Negotiated</MenuItem>
                                            <MenuItem value="Seasonal">Seasonal</MenuItem>
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
                            <Typography variant="h6" gutterBottom>Configuration</Typography>
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel>Status</InputLabel>
                                <Select value={status} label="Status" onChange={(e) => setStatus(e.target.value)}>
                                    <MenuItem value="Draft">Draft</MenuItem>
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Inactive">Inactive</MenuItem>
                                    <MenuItem value="Archived">Archived</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel>Currency</InputLabel>
                                <Select value={currency} label="Currency" onChange={(e) => setCurrency(e.target.value)}>
                                    <MenuItem value="USD">USD - US Dollar</MenuItem>
                                    <MenuItem value="EUR">EUR - Euro</MenuItem>
                                    <MenuItem value="GBP">GBP - British Pound</MenuItem>
                                    <MenuItem value="JPY">JPY - Japanese Yen</MenuItem>
                                </Select>
                            </FormControl>

                            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Chip label={`Status: ${status}`} color={status === 'Active' ? 'success' : 'default'} />
                                <Chip label={`Type: ${type}`} color="primary" variant="outlined" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PriceListMasterData;
