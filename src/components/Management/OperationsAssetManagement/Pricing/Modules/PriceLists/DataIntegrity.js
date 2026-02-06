
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
    ListItemIcon,
    Button
} from '@mui/material';
import {
    VerifiedUser,
    CheckCircle,
    Error
} from '@mui/icons-material';

const DataIntegrity = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <VerifiedUser color="primary" /> Data Integrity & Controls
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Health Checks</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                    <ListItemText primary="Duplicate Price Entries" secondary="None found" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                    <ListItemText primary="Active Price List Overlap" secondary="No conflicts detected for this region" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><Error color="error" /></ListItemIcon>
                                    <ListItemText primary="Missing Prices" secondary="3 SKUs missing prices in this list" />
                                    <Button size="small" color="error">View SKUs</Button>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Safeguards</Typography>
                            <Typography variant="body2" paragraph>
                                • <strong>Deletion Prevention:</strong> Active price lists cannot be deleted, only Archived.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                • <strong>Date Locking:</strong> Cannot modify prices for past dates.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                • <strong>Negative Price Check:</strong> System prevents price submission below 0.00.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DataIntegrity;
