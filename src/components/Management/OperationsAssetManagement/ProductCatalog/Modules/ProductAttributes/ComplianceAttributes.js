
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    FormControlLabel,
    Switch,
    TextField,
    Chip
} from '@mui/material';
import {
    Gavel,
    Warning,
    VerifiedUser
} from '@mui/icons-material';

const ComplianceAttributes = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Gavel color="primary" /> Tax & Compliance Classification
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Taxation</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch />} label="Is Taxable Attribute" />
                                    <Typography variant="caption" display="block" color="text.secondary">
                                        Does this attribute value imply a separate tax line item?
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Specific Tax Code" placeholder="e.g. SERVICE-Digital" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Regulatory Flags</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch />} label="Hazardous Material Indicator" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch />} label="Controlled Substance" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch />} label="Age Restriction Required" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Certifications</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Required certifications associated with this attribute type.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                                <Chip icon={<VerifiedUser />} label="RoHS Compliant" color="success" variant="outlined" onDelete={() => { }} />
                                <Chip icon={<VerifiedUser />} label="CE Marking" color="primary" variant="outlined" onDelete={() => { }} />
                                <Chip icon={<Warning />} label="Prop 65 Warning" color="warning" variant="outlined" onDelete={() => { }} />
                            </Box>

                            <TextField fullWidth multiline rows={2} label="Compliance Notes" placeholder="Enter internal compliance notes..." />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ComplianceAttributes;
