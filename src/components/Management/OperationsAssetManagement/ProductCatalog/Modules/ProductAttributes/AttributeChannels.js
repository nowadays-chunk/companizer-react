
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
    Autocomplete
} from '@mui/material';
import {
    Public,
    Language
} from '@mui/icons-material';

const AttributeChannels = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Public color="primary" /> Multi-Entity & Channel Support
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Channel Visibility</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch checked />} label="Visible on Storefront (Standard)" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch checked />} label="Visible on B2B Portal" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch />} label="Visible on POS" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch />} label="Include in Product Feed (Google/Amazon)" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Localization</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        multiple
                                        options={['English', 'Spanish', 'French', 'German']}
                                        renderInput={(params) => <TextField {...params} label="Available Languages" />}
                                        defaultValue={['English', 'French']}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel control={<Switch />} label="Allow Value Translation" />
                                    <Typography variant="caption" display="block" color="text.secondary">
                                        If checked, text values must be translated per language.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AttributeChannels;
