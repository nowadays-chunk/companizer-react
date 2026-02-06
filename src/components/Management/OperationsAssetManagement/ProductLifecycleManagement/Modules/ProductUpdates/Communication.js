
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
    ListItemIcon,
    ListItemText
} from '@mui/material';
import {
    Campaign,
    Email,
    Notifications
} from '@mui/icons-material';

const Communication = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Campaign color="primary" /> Communications
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Notification Plan</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><Email color="primary" /></ListItemIcon>
                                    <ListItemText primary="Distributor Notice" secondary="Draft sent to Sales Director. Scheduled for Feb 10." />
                                    <Button size="small" variant="outlined">Preview</Button>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><Notifications color="warning" /></ListItemIcon>
                                    <ListItemText primary="Internal Alert" secondary="Manufacturing notified of cutover date." />
                                    <Button size="small" color="success">Sent</Button>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Templates</Typography>
                            <Button fullWidth sx={{ justifyContent: 'flex-start', mb: 1 }}>Standard ECN Notification</Button>
                            <Button fullWidth sx={{ justifyContent: 'flex-start', mb: 1 }}>Product Recall Notice</Button>
                            <Button fullWidth sx={{ justifyContent: 'flex-start' }}>End-of-Life Advisory</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Communication;
