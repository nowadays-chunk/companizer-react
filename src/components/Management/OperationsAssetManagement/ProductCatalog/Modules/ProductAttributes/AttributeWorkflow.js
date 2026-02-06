
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
    Divider
} from '@mui/material';
import {
    Rule,
    History
} from '@mui/icons-material';

const AttributeWorkflow = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Rule color="primary" /> Governance & Audit Trail
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Audit Log</Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: 'primary.main' }}>JD</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Value '17 Inch' added to Selection List"
                                        secondary="Feb 6, 2026 at 10:00 AM by John Doe"
                                    />
                                    <Chip label="Modification" size="small" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: 'secondary.main' }}>AK</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Attribute moved to 'Active' status"
                                        secondary="Feb 1, 2026 at 2:15 PM by Admin"
                                    />
                                    <Chip label="Status Change" size="small" color="primary" variant="outlined" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>SYS</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Attribute Created"
                                        secondary="Jan 15, 2026"
                                    />
                                    <Chip label="Creation" size="small" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AttributeWorkflow;
