
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button
} from '@mui/material';
import {
    Description,
    HourglassTopSharp,
    AttachMoney
} from '@mui/icons-material';

const ProductConcept = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Description color="primary" /> Concept Definition
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Value Proposition</Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                defaultValue="A sustainable, high-performance backpack for urban commuters that charges devices via solar power."
                                label="Core Value Prop"
                                sx={{ mb: 3 }}
                            />

                            <Typography variant="h6" gutterBottom>Target Market</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Primary Segment" defaultValue="Urban Professionals (25-45)" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Geographic Focus" defaultValue="North America, Europe" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Feature Set</Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon><HourglassTopSharp color="primary" /></ListItemIcon>
                                    <ListItemText primary="Integrated 10W Solar Panel" secondary="Flexible, durable thin-film technology" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><HourglassTopSharp color="primary" /></ListItemIcon>
                                    <ListItemText primary="Waterproof Recycled Fabric" secondary="Made from 100% ocean plastic" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><HourglassTopSharp color="primary" /></ListItemIcon>
                                    <ListItemText primary="Anti-Theft Design" secondary="Hidden zippers and RFID blocking pocket" />
                                </ListItem>
                            </List>
                            <Button size="small" startIcon={<HourglassTopSharp />}>Add Feature</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Business Case</Typography>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2">Projected Retail Price</Typography>
                                <Typography variant="h4">$129.99</Typography>
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2">Target Margin</Typography>
                                <Typography variant="h4" color="success.main">65%</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2">Annual Volume Est.</Typography>
                                <Typography variant="h4">50k units</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductConcept;
