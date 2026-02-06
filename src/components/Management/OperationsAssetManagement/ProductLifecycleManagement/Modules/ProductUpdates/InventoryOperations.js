
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import {
    Inventory,
    DeleteSweep,
    Build
} from '@mui/icons-material';

const InventoryOperations = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Inventory color="primary" /> Inventory & Supply Chain Impact
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Cutover Plan</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><Build color="warning" /></ListItemIcon>
                                    <ListItemText primary="WIP Rework Instructions" secondary="Issue work order to replace solar module on 450 units." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><DeleteSweep color="error" /></ListItemIcon>
                                    <ListItemText primary="Scrap Old Components" secondary="Dispose of 1,200 units of PN-10023." />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Warehouse Instructions</Typography>
                            <Typography variant="body2" paragraph>
                                Instructions for handling transition from Version A to Version B.
                            </Typography>
                            <Button variant="outlined" fullWidth sx={{ mb: 1 }}>Download Rework SOP</Button>
                            <Button variant="outlined" fullWidth>Create Scrap Order</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InventoryOperations;
