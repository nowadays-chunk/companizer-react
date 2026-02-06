
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
    Alert
} from '@mui/material';
import {
    ExitToApp,
    Warning,
    Send
} from '@mui/icons-material';

const DiscontinuationRequest = () => {
    const [reason, setReason] = useState('');
    const [urgency, setUrgency] = useState('Normal');

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <ExitToApp color="error" /> Product Discontinuation Request
            </Typography>

            <Alert severity="warning" sx={{ mb: 3 }}>
                Initiating discontinuation is a major lifecycle event. This will trigger impact analysis across inventory, sales, and supply chain.
            </Alert>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Request Details</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Product/Variant" placeholder="Select Product to Discontinue" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Reason Code</InputLabel>
                                        <Select value={reason} label="Reason Code" onChange={(e) => setReason(e.target.value)}>
                                            <MenuItem value="Low Demand">Low Market Demand</MenuItem>
                                            <MenuItem value="Obsolete">Technologically Obsolete</MenuItem>
                                            <MenuItem value="Compliance">Regulatory/Compliance Issue</MenuItem>
                                            <MenuItem value="Supplier">Supplier Termination</MenuItem>
                                            <MenuItem value="Cost">Cost/Margin Erosion</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Business Justification"
                                        placeholder="Detailed explanation for the phase-out..."
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Proposed Replacement Product" placeholder="Search Successor SKU" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Timing & Urgency</Typography>
                            <FormControl fullWidth sx={{ mb: 3 }}>
                                <InputLabel>Urgency Level</InputLabel>
                                <Select value={urgency} label="Urgency Level" onChange={(e) => setUrgency(e.target.value)}>
                                    <MenuItem value="Standard">Standard Phase-Out (6-12 mo)</MenuItem>
                                    <MenuItem value="Accelerated">Accelerated (3-6 mo)</MenuItem>
                                    <MenuItem value="Immediate">Immediate (Safety/Legal)</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                fullWidth
                                label="Target End Date"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                sx={{ mb: 3 }}
                            />

                            <Button variant="contained" color="error" fullWidth startIcon={<Send />} size="large">
                                Initiate Phase-Out
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DiscontinuationRequest;
