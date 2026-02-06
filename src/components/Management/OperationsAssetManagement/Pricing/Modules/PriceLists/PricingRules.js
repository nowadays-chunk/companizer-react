
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    List,
    ListItem,
    ListItemText,
    Chip,
    Divider
} from '@mui/material';
import {
    Gavel,
    Add,
    TrendingFlat
} from '@mui/icons-material';

const PricingRules = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Gavel color="primary" /> Calculation Rules & Logic
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Rounding Rules</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Rounding Method" defaultValue="Round to Nearest 0.99" />
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <TextField size="small" label="Input" value="123.45" disabled />
                                        <TrendingFlat />
                                        <TextField size="small" label="Result" value="123.99" color="success" focused />
                                    </div>
                                </Grid>
                            </Grid>

                            <Box sx={{ mt: 3 }}>
                                <Typography variant="h6" gutterBottom>Volume Pricing (Tiers)</Typography>
                                <List dense sx={{ bgcolor: 'background.default', borderRadius: 1 }}>
                                    <ListItem>
                                        <ListItemText primary="Qty 1 - 99" secondary="Standard Price" />
                                        <Chip label="100%" size="small" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary="Qty 100 - 499" secondary="5% Discount" />
                                        <Chip label="95%" size="small" color="primary" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary="Qty 500+" secondary="10% Discount" />
                                        <Chip label="90%" size="small" color="primary" />
                                    </ListItem>
                                </List>
                                <Button startIcon={<Add />} size="small" sx={{ mt: 1 }}>Add Tier</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Prioritization</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Determine which price takes precedence when multiple rules apply.
                            </Typography>

                            <List>
                                <ListItem>
                                    <Chip label="1" size="small" sx={{ mr: 1, fontWeight: 'bold' }} />
                                    <ListItemText primary="Contract / Negotiated Price" />
                                </ListItem>
                                <ListItem>
                                    <Chip label="2" size="small" sx={{ mr: 1, fontWeight: 'bold' }} />
                                    <ListItemText primary="Flash Sale / Promo" />
                                </ListItem>
                                <ListItem>
                                    <Chip label="3" size="small" sx={{ mr: 1, fontWeight: 'bold' }} />
                                    <ListItemText primary="Tiered Volume Price" />
                                </ListItem>
                                <ListItem>
                                    <Chip label="4" size="small" sx={{ mr: 1, fontWeight: 'bold' }} />
                                    <ListItemText primary="Standard List Price" />
                                </ListItem>
                            </List>

                            <Box sx={{ mt: 2, p: 2, border: '1px dashed grey', borderRadius: 1 }}>
                                <FormControlLabel control={<Checkbox checked />} label="Apply Best Price Logic" />
                                <Typography variant="caption" display="block" color="text.secondary">
                                    If enabled, system will always award the customer the lowest calculate price among applicable rules.
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PricingRules;
