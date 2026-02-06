
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
    ListItemText
} from '@mui/material';
import {
    Rule,
    CheckCircle,
    Pending
} from '@mui/icons-material';

const steps = ['Draft', 'Product Manager Review', 'Finance Approval', 'Active'];

const ProductWorkflow = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Rule color="primary" /> Workflow & Approvals
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Current Status</Typography>
                            <Box sx={{ width: '100%', py: 3 }}>
                                <Stepper activeStep={1} alternativeLabel>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                                <Button variant="outlined" color="error">Reject</Button>
                                <Button variant="contained" color="primary">Approve & Advance</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Audit Trail</Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: 'primary.main' }}>JD</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="John Doe updated Price" secondary="Today at 10:30 AM" />
                                    <Chip label="Price Change" size="small" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: 'secondary.main' }}>AS</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Alice Smith changed Status to Review" secondary="Yesterday at 4:15 PM" />
                                    <Chip label="Status Change" size="small" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>SYS</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="System Created Product" secondary="Feb 4, 2026" />
                                    <Chip label="Creation" size="small" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Required Approvals</Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckCircle color="success" />
                                    </ListItemAvatar>
                                    <ListItemText primary="Technical Review" secondary="Completed by Engineering" />
                                    <Button size="small">View</Button>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Pending color="warning" />
                                    </ListItemAvatar>
                                    <ListItemText primary="Pricing Approval" secondary="Pending Finance Director" />
                                    <Button size="small" variant="outlined">Remind</Button>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Pending color="disabled" />
                                    </ListItemAvatar>
                                    <ListItemText primary="Publication Review" secondary="Waiting for previous steps" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductWorkflow;
