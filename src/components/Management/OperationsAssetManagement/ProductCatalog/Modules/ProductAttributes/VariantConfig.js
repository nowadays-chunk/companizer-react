
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    FormControlLabel,
    Switch,
    Button,
    List,
    ListItem,
    ListItemText,
    Chip
} from '@mui/material';
import {
    Style,
    AccountTree,
    LinkOff
} from '@mui/icons-material';

const VariantConfig = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Style color="primary" /> Variant & Configuration Rules
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Variant Definition</Typography>
                            <Box sx={{ mb: 2 }}>
                                <FormControlLabel control={<Switch checked />} label="Used for Product Variations" />
                                <Typography variant="caption" display="block" color="text.secondary">
                                    Enabling this allows this attribute to distinguish different SKUs within a product family (e.g. Size, Color).
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <FormControlLabel control={<Switch />} label="Visual Swatch Enabled" />
                                <Typography variant="caption" display="block" color="text.secondary">
                                    Show color squares or images instead of text on frontend.
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Dependencies</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Define when this attribute is valid or required based on other selections.
                            </Typography>

                            <List dense sx={{ bgcolor: 'background.default', borderRadius: 1 }}>
                                <ListItem>
                                    <ListItemText
                                        primary="Valid only when:"
                                        secondary={<span><strong>Material</strong> equals "Leather"</span>}
                                    />
                                    <Chip label="Constraint" size="small" color="warning" />
                                </ListItem>
                            </List>
                            <Button size="small" startIcon={<AccountTree />} sx={{ mt: 1 }}>Add Dependency</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Incompatible Combinations</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Specify values that cannot coexist with this attribute.
                            </Typography>

                            <List dense>
                                <ListItem>
                                    <LinkOff color="error" sx={{ mr: 2 }} />
                                    <ListItemText primary="Cannot adjust Size" secondary="If 'One Size Fits All' is active" />
                                </ListItem>
                            </List>
                            <Button size="small" color="error" startIcon={<LinkOff />}>Add Exclusion Rule</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default VariantConfig;
