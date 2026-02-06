
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
    Button,
    Chip,
    Alert
} from '@mui/material';
import {
    EditNote,
    Send,
    Warning
} from '@mui/icons-material';

const UpdateRequest = () => {
    const [type, setType] = useState('Spec Change');
    const [urgency, setUrgency] = useState('Normal');

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <EditNote color="primary" /> Product Update Request
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Request Details</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <TextField fullWidth label="Change Title" placeholder="e.g., Update Solar Panel Supplier" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <FormControl fullWidth>
                                        <InputLabel>Update Type</InputLabel>
                                        <Select value={type} label="Update Type" onChange={(e) => setType(e.target.value)}>
                                            <MenuItem value="Spec Change">Specification Change</MenuItem>
                                            <MenuItem value="Pricing">Pricing Update</MenuItem>
                                            <MenuItem value="Packaging">Packaging/Labeling</MenuItem>
                                            <MenuItem value="Supplier">Supplier Change</MenuItem>
                                            <MenuItem value="Discontinuation">Lifecycle Status</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Reason for Change"
                                        placeholder="Describe why this update is needed..."
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Impacted Products</Typography>
                            <Box sx={{ p: 2, border: '1px dashed grey', borderRadius: 1, textAlign: 'center' }}>
                                <Typography color="textSecondary">Search and add products/variants...</Typography>
                                <Button sx={{ mt: 1 }} variant="outlined" size="small">Add Product</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Priority & Urgency</Typography>
                            <FormControl fullWidth sx={{ mb: 3 }}>
                                <InputLabel>Urgency Level</InputLabel>
                                <Select value={urgency} label="Urgency Level" onChange={(e) => setUrgency(e.target.value)}>
                                    <MenuItem value="Low">Low - Next Revision</MenuItem>
                                    <MenuItem value="Normal">Normal - Standard Cycle</MenuItem>
                                    <MenuItem value="Critical">Critical - Immediate</MenuItem>
                                </Select>
                            </FormControl>

                            {urgency === 'Critical' && (
                                <Alert severity="error" icon={<Warning />} sx={{ mb: 2 }}>
                                    Critical changes require executive approval.
                                </Alert>
                            )}

                            <TextField
                                fullWidth
                                label="Requested Effective Date"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                sx={{ mb: 3 }}
                            />

                            <Button variant="contained" fullWidth startIcon={<Send />} size="large">
                                Submit Request
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UpdateRequest;
