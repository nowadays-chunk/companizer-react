
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider
} from '@mui/material';
import {
    ManageSearch,
    Person
} from '@mui/icons-material';

const AuditHistory = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <ManageSearch color="primary" /> Audit Trail
            </Typography>

            <Card>
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar><Person /></Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Status Changed to 'In Review'"
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" variant="body2" color="text.primary">Alice Engineer</Typography>
                                        {" — Feb 5, 2026 09:12 AM"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar><Person /></Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Document 'spec_v2.pdf' Uploaded"
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" variant="body2" color="text.primary">Bob Technician</Typography>
                                        {" — Feb 4, 2026 02:45 PM"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar><Person /></Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Request Created"
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" variant="body2" color="text.primary">Bob Technician</Typography>
                                        {" — Feb 4, 2026 02:30 PM"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AuditHistory;
