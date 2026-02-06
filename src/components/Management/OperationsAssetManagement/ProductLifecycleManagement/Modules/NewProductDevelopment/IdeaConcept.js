
import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Chip,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider
} from '@mui/material';
import {
    Lightbulb,
    Add,
    ThumbUp,
    ThumbDown
} from '@mui/icons-material';

const IdeaConcept = () => {
    const [category, setCategory] = useState('New Product');

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Lightbulb color="primary" /> Innovation Funnel
                </Typography>
                <Button variant="contained" startIcon={<Add />}>Submit Idea</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Idea Submission</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <TextField fullWidth label="Idea Title" placeholder="e.g., Solar-Powered Backpack" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <FormControl fullWidth>
                                        <InputLabel>Category</InputLabel>
                                        <Select value={category} label="Category" onChange={(e) => setCategory(e.target.value)}>
                                            <MenuItem value="New Product">New Product</MenuItem>
                                            <MenuItem value="Line Extension">Line Extension</MenuItem>
                                            <MenuItem value="Improvement">Improvement</MenuItem>
                                            <MenuItem value="Replacement">Replacement</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Description & Problem Solved"
                                        placeholder="Describe the innovation concept..."
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Recent submissions</Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: 'primary.light' }}><Lightbulb /></Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Smart Fabric T-Shirt" secondary="Submitted by R&D - 2 days ago" />
                                    <Chip label="Under Review" size="small" color="primary" sx={{ mr: 1 }} />
                                    <Chip label="Score: 85" size="small" variant="outlined" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: 'secondary.light' }}><Lightbulb /></Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Biodegradable Packaging" secondary="Submitted by Sustainability Team - 5 days ago" />
                                    <Chip label="Approved" size="small" color="success" sx={{ mr: 1 }} />
                                    <Chip label="Score: 92" size="small" variant="outlined" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Scoring Criteria</Typography>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Market Potential</Typography>
                                <Chip icon={<ThumbUp />} label="High" color="success" size="small" sx={{ mr: 1 }} />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Feasibility</Typography>
                                <Chip icon={<ThumbUp />} label="Medium" color="warning" size="small" sx={{ mr: 1 }} />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Strategic Fit</Typography>
                                <Chip icon={<ThumbUp />} label="High" color="success" size="small" sx={{ mr: 1 }} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IdeaConcept;
