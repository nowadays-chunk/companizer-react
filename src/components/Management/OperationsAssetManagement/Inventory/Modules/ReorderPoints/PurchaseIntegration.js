
import React from 'react';
import { Box, Typography, Card, CardContent, Button, Divider, List, ListItem, ListItemText, ListItemIcon, Grid } from '@mui/material';
import { ShoppingCart, VerifiedUser, Factory } from '@mui/icons-material';

const PurchaseIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ShoppingCart color="primary" /> Purchase & Production Integration
            </Typography>
            <Card>
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>Automated Actions</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><ShoppingCart /></ListItemIcon>
                                    <ListItemText primary="Auto-Generate Purchase Requisition" secondary="When ROP triggered for Buy items" />
                                </ListItem>
                                <Divider component="li" />
                                <ListItem>
                                    <ListItemIcon><Factory /></ListItemIcon>
                                    <ListItemText primary="Auto-Generate Production Order" secondary="When ROP triggered for Make items" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>Supplier Logic</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><VerifiedUser color="success" /></ListItemIcon>
                                    <ListItemText primary="Select Preferred Supplier" secondary="Default to primary, fallback to secondary if lead time > limit" />
                                </ListItem>
                            </List>
                            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>Configure Supplier Rules</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PurchaseIntegration;
