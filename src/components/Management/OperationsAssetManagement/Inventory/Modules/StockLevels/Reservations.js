
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Chip
} from '@mui/material';
import {
    Assignment,
    Factory
} from '@mui/icons-material';

const Reservations = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Assignment color="primary" /> Reservations & Allocations
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Sales Order Allocations</Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar><Avatar sx={{ bgcolor: 'primary.light' }}>SO</Avatar></ListItemAvatar>
                                    <ListItemText primary="Order #10234 (Customer A)" secondary="Reserved: 50 Units | Status: Ready to Pick" />
                                    <Chip label="Hard Reserved" color="success" size="small" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar><Avatar sx={{ bgcolor: 'primary.light' }}>SO</Avatar></ListItemAvatar>
                                    <ListItemText primary="Order #10235 (Customer B)" secondary="Reserved: 200 Units | Status: Partially Allocated" />
                                    <Chip label="Backorder (50)" color="warning" size="small" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Production Material Commitments</Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar><Avatar sx={{ bgcolor: 'secondary.light' }}><Factory /></Avatar></ListItemAvatar>
                                    <ListItemText primary="Work Order #WO-998" secondary="Reserved: 100 Units | Status: Staged" />
                                    <Chip label="WIP Consumption" color="info" size="small" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Reservations;
