
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Stepper,
    Step,
    StepLabel,
    Button,
    Chip,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider
} from '@mui/material';
import {
    Rule,
    CheckCircle,
    Pending,
    History
} from '@mui/icons-material';

const steps = ['Draft', 'Review', 'Active', 'Archived'];

const CategoryWorkflow = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Rule color="primary" /> Workflow & Governance
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Lifecycle Status</Typography>
                            <Box sx={{ width: '100%', py: 3 }}>
                                <Stepper activeStep={2} alternativeLabel>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                                <Button variant="outlined" color="warning">Deactivate Category</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Change History</Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: 'secondary.main' }}>AK</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Admin User updated Name" secondary="Today at 09:12 AM" />
                                    <Chip label="Edit" size="small" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: 'primary.main' }}>JD</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="John Doe approved activation" secondary="Yesterday at 2:30 PM" />
                                    <Chip label="Status" size="small" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>SYS</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Category Created" secondary="Feb 1, 2026" />
                                    <Chip label="Create" size="small" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Pending Actions</Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Pending color="warning" />
                                    </ListItemAvatar>
                                    <ListItemText primary="Review Hierarchy Change" secondary="Parent changed from 'Hardware' to 'Components'" />
                                    <Box>
                                        <Button size="small" color="success">Approve</Button>
                                        <Button size="small" color="error">Reject</Button>
                                    </Box>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryWorkflow;
