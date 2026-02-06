import React from 'react';

import { Box, Divider, Typography, Paper, Grid, LinearProgress, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Category, MonetizationOn } from '@mui/icons-material';

const ProductCosting = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>Product Level Costing</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={2} sx={{ p: 0 }}>
                        <Box p={2} borderBottom="1px solid #eee">
                            <Typography variant="h6">Cost Breakdown by Category</Typography>
                        </Box>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: 'primary.light' }}><Category /></Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Electronics" secondary="Active Components & Boards" />
                                <Box width="30%" mr={2}>
                                    <LinearProgress variant="determinate" value={70} />
                                </Box>
                                <Typography variant="body2" fontWeight="bold">$4.2M</Typography>
                            </ListItem>
                            <Divider component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: 'secondary.light' }}><Category /></Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Mechanical Parts" secondary="Motors, Gears, Chassis" />
                                <Box width="30%" mr={2}>
                                    <LinearProgress variant="determinate" value={45} color="secondary" />
                                </Box>
                                <Typography variant="body2" fontWeight="bold">$2.8M</Typography>
                            </ListItem>
                            <Divider component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: 'warning.light' }}><Category /></Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Consumables" secondary="Packaging, Adhesives" />
                                <Box width="30%" mr={2}>
                                    <LinearProgress variant="determinate" value={20} color="warning" />
                                </Box>
                                <Typography variant="body2" fontWeight="bold">$0.5M</Typography>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <MonetizationOn color="success" sx={{ mr: 1 }} />
                            <Typography variant="h6">Top Value SKU</Typography>
                        </Box>
                        <Typography variant="h5" gutterBottom>Industrial Motor X500</Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            SKU: MTR-5500-X
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="caption">Unit Cost</Typography>
                                <Typography variant="body1" fontWeight="bold">$1,250.00</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="caption">On Hand</Typography>
                                <Typography variant="body1" fontWeight="bold">450 Units</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider sx={{ my: 1 }} />
                                <Typography variant="caption">Total Value</Typography>
                                <Typography variant="h6" color="primary">$562,500.00</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductCosting;
