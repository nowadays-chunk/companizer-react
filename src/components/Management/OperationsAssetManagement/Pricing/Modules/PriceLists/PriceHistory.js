
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Chip,
    Divider,
    Button
} from '@mui/material';
import {
    History,
    CompareArrows,
    Restore
} from '@mui/icons-material';

const PriceHistory = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <History color="primary" /> Versioning & Audit History
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography variant="h6">Version Log</Typography>
                                <Button startIcon={<CompareArrows />}>Compare Selected</Button>
                            </Box>

                            <List>
                                <ListItem secondaryAction={<Button size="small" startIcon={<Restore />}>Restore</Button>}>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: 'primary.main' }}>v3</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Summer Campaign Adjustment"
                                        secondary="Published: Feb 15, 2026 by Sarah Jenkins"
                                    />
                                    <Chip label="Current Active" color="success" size="small" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>v2</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Annual Price Increase (5%)"
                                        secondary="Published: Jan 01, 2026 by Admin"
                                    />
                                    <Chip label="Archived" size="small" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>v1</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Initial Load"
                                        secondary="Published: Dec 15, 2025 by System Integration"
                                    />
                                    <Chip label="Archived" size="small" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Impact Statistics</Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="subtitle2" color="text.secondary">Prices Modified</Typography>
                                <Typography variant="h4">1,250</Typography>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="subtitle2" color="text.secondary">Avg. Increase</Typography>
                                <Typography variant="h4" color="error.main">+4.2%</Typography>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="subtitle2" color="text.secondary">Approvals Required</Typography>
                                <Typography variant="h4">2</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PriceHistory;
