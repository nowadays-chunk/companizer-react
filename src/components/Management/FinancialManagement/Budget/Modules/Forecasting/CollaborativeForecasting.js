import React from 'react';
import { Box, Typography, Grid, Card, CardHeader, CardContent, Avatar, Badge, TextField, Button } from '@mui/material';
import { GroupWork } from '@mui/icons-material';

const CollaborativeForecasting = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <GroupWork color="primary" /> Collaborative Forecasting
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            avatar={<Avatar sx={{ bgcolor: '#ffa726' }}>RD</Avatar>}
                            title="R&D Budget Input (Q3)"
                            subheader="Due in 2 days"
                        />
                        <CardContent>
                            <Typography variant="body2" paragraph>
                                Please review the projected headcount for the new AI project. Current assumption is +5 FTEs starting Aug 1.
                            </Typography>
                            <TextField fullWidth multiline rows={3} label="Add Comment / Adjustment" defaultValue="" />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                <Button variant="contained" size="small">Submit Input</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            avatar={<Badge color="success" variant="dot"><Avatar sx={{ bgcolor: '#42a5f5' }}>MK</Avatar></Badge>}
                            title="Marketing Campaign ROI"
                            subheader="Updated 2 hours ago"
                        />
                        <CardContent>
                            <Typography variant="body2" paragraph>
                                Marketing team has adjusted the Q4 spend downwards by 5% based on Q2 performance.
                            </Typography>
                            <Button variant="outlined" size="small">View Changes</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CollaborativeForecasting;
