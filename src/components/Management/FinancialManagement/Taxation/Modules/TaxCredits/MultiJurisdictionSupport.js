import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Public, Business, Flag } from '@mui/icons-material';

const MultiJurisdictionSupport = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">Multi-Jurisdiction Operations</Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
                Overview of tax credits across different entities and tax jurisdictions.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={2}>
                                <Public color="primary" sx={{ mr: 1 }} />
                                <Typography variant="h6">Active Jurisdictions</Typography>
                            </Box>
                            <Divider sx={{ mb: 2 }} />
                            <List>
                                {[
                                    { name: 'United States (Federal)', count: 12, type: 'Credits Active' },
                                    { name: 'United Kingdom (HMRC)', count: 5, type: 'Credits Active' },
                                    { name: 'Singapore (IRAS)', count: 8, type: 'Credits Active' },
                                ].map((item, idx) => (
                                    <ListItem key={idx}>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: 'primary.light', colro: 'white' }}>
                                                <Flag fontSize="small" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={item.name} secondary={`${item.count} ${item.type}`} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Business color="secondary" sx={{ mr: 1 }} />
                            <Typography variant="h6">Entity Allocation</Typography>
                        </Box>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="body2" color="textSecondary">
                            Visual breakdown of credit utilization by legal entity would go here (e.g., Chart).
                        </Typography>
                        <Box sx={{ mt: 4, height: 200, bgcolor: 'action.hover', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2 }}>
                            <Typography color="textSecondary">[Chart Component Placeholder]</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MultiJurisdictionSupport;
