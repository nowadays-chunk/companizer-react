
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button
} from '@mui/material';
import {
    NotificationsActive,
    Warning,
    EventBusy
} from '@mui/icons-material';

const StockAlerts = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <NotificationsActive color="primary" /> Operational Alerts
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Critical Exceptions</Typography>
                            <List>
                                <ListItem sx={{ bgcolor: '#ffebee', borderRadius: 1, mb: 1 }}>
                                    <ListItemIcon><Warning color="error" /></ListItemIcon>
                                    <ListItemText primary="Low Stock Warning" secondary="SKU-101 is below minimum safety stock." />
                                    <Button size="small" color="error">Reorder</Button>
                                </ListItem>
                                <ListItem sx={{ bgcolor: '#fff3e0', borderRadius: 1, mb: 1 }}>
                                    <ListItemIcon><EventBusy color="warning" /></ListItemIcon>
                                    <ListItemText primary="Expiry Risk" secondary="Batch L-001 expires in 14 days." />
                                    <Button size="small" color="warning">Discount</Button>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StockAlerts;
