import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Button,
    Card,
    CardContent
} from '@mui/material';
import { Edit, AttachFile, History, Person } from '@mui/icons-material';

const AuditTrailDoc = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Audit Trail & Documentation</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Change Log</Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar><Edit /></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Interest Rate Amended"
                                    secondary="Changed from 5.5% to 6.0% by AdminUser on Oct 20, 2023"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar><Person /></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Status Updated to Active"
                                    secondary="Approved by TreasuryManager on Oct 15, 2023"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar><History /></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Loan Created"
                                    secondary="Initial Draft by User1 on Oct 10, 2023"
                                />
                            </ListItem>
                        </List>
                        <Button variant="text">View Full Log</Button>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Attached Documents</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card variant="outlined">
                                    <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <AttachFile sx={{ mr: 1, color: 'text.secondary' }} />
                                            <Typography variant="body2">Signed_Agreement_v1.pdf</Typography>
                                        </Box>
                                        <Button size="small">Download</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card variant="outlined">
                                    <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <AttachFile sx={{ mr: 1, color: 'text.secondary' }} />
                                            <Typography variant="body2">Covenant_Certificate_Q3.pdf</Typography>
                                        </Box>
                                        <Button size="small">Download</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Button variant="outlined" fullWidth sx={{ mt: 2 }}>Upload Document</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AuditTrailDoc;
