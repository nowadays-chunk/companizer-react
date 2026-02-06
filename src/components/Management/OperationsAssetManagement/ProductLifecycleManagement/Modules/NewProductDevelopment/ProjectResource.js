
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Avatar,
    AvatarGroup,
    LinearProgress
} from '@mui/material';
import {
    CalendarMonth,
    AssignmentInd
} from '@mui/icons-material';

const ProjectResource = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <CalendarMonth color="primary" /> Project & Resources
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Timeline</Typography>
                            <Box sx={{ position: 'relative', my: 2 }}>
                                <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>Overall Progress: 45%</Typography>
                                <LinearProgress variant="determinate" value={45} sx={{ height: 10, borderRadius: 5 }} />
                            </Box>

                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="subtitle2">Start Date</Typography>
                                    <Typography variant="body2">Jan 01, 2026</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="subtitle2">Target Launch</Typography>
                                    <Typography variant="body2">Sep 15, 2026</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="subtitle2">Days Remaining</Typography>
                                    <Typography variant="body2">215 Days</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Critical Path Tasks</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Typography variant="body2">• Finalize Plastic Mold Tooling (Due: Feb 28)</Typography>
                                <Typography variant="body2">• Secure Battery Supplier Contract (Due: Mar 15)</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Team Assignment</Typography>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Engineering</Typography>
                                <AvatarGroup max={4} sx={{ justifyContent: 'start' }}>
                                    <Avatar>A</Avatar>
                                    <Avatar>B</Avatar>
                                    <Avatar>C</Avatar>
                                </AvatarGroup>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Marketing</Typography>
                                <AvatarGroup max={4} sx={{ justifyContent: 'start' }}>
                                    <Avatar>D</Avatar>
                                    <Avatar>E</Avatar>
                                </AvatarGroup>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2">Supply Chain</Typography>
                                <AvatarGroup max={4} sx={{ justifyContent: 'start' }}>
                                    <Avatar>F</Avatar>
                                </AvatarGroup>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProjectResource;
