import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button
} from '@mui/material';

const LimitManagement = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Risk Limit Management</Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
                Define global thresholds for automatic policy enforcement. Changes require dual approval.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card elevation={2}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Counterparty Limits</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField label="Max Exposure per Single Bank (USD)" defaultValue="5,000,000" fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Max Exposure per Non-Rated Entity" defaultValue="100,000" fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel>Minimum Credit Rating</InputLabel>
                                        <Select defaultValue="bbb" label="Minimum Credit Rating">
                                            <MenuItem value="a">A / A2</MenuItem>
                                            <MenuItem value="bbb">BBB / Baa2</MenuItem>
                                            <MenuItem value="bb">BB / Ba2</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card elevation={2}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>FX & Investment Limits</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField label="Max Unhedged Position (%)" defaultValue="30" fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Max Tenor for Investments (Days)" defaultValue="180" fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Max Speculative Position" defaultValue="0" disabled fullWidth />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
                <Button variant="outlined">Reset Changes</Button>
                <Button variant="contained" color="primary">Submit for Approval</Button>
            </Box>
        </Box>
    );
};

export default LimitManagement;
