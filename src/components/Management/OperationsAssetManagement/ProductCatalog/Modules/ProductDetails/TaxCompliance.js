
import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    FormControlLabel,
    Switch,
    Autocomplete,
    Alert
} from '@mui/material';
import {
    Policy,
    Public,
    Gavel
} from '@mui/icons-material';

const TaxCompliance = () => {
    const [taxable, setTaxable] = useState(true);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Gavel color="primary" /> Tax & Compliance Setup
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Tax Configuration</Typography>
                            <FormControlLabel
                                control={<Switch checked={taxable} onChange={(e) => setTaxable(e.target.checked)} />}
                                label="Subject to Tax (VAT/GST/Sales Tax)"
                                sx={{ mb: 2 }}
                            />

                            {taxable && (
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Autocomplete
                                            options={['Standard Rate', 'Reduced Rate', 'Zero Rated', 'Exempt']}
                                            renderInput={(params) => <TextField {...params} label="Tax Class / Category" />}
                                            defaultValue="Standard Rate"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Product Specific Tax Rate (%)" placeholder="Override standard rate if applicable" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel control={<Switch />} label="Subject to Withholding Tax" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel control={<Switch />} label="Subject to Excise / Luxury Tax" />
                                    </Grid>
                                </Grid>
                            )}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>International & Customs</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="HS / HTS Code" placeholder="e.g. 8471.30" InputProps={{ startAdornment: <Public fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} /> }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Country of Origin" defaultValue="United States" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="ECCN (Export Control Classification)" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Regulatory Flags</Typography>
                            <Alert severity="info" sx={{ mb: 2 }}>This product contains Lithium Ion batteries. UN 3481 regulations apply.</Alert>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <FormControlLabel control={<Switch checked />} label="Hazmat / Dangerous Goods" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <FormControlLabel control={<Switch />} label="Perishable / Expiry Tracking" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <FormControlLabel control={<Switch checked />} label="RoHS Compliant" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TaxCompliance;
