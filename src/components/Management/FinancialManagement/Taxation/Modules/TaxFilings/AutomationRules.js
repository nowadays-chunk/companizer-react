import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, Switch, Divider, Grid, Card, CardContent } from '@mui/material';
import { AutoMode, Notifications, Calculate, PostAdd } from '@mui/icons-material';

const AutomationRules = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Automation & Rules</Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <AutoMode color="primary" sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h6">Auto-Calculate</Typography>
                            <Typography variant="body2" color="text.secondary">On invoice creation</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <PostAdd color="success" sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h6">Auto-Post</Typography>
                            <Typography variant="body2" color="text.secondary">Tax journal entries</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Calculate color="info" sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h6">Auto-Aggregate</Typography>
                            <Typography variant="body2" color="text.secondary">Per period for filing</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Notifications color="warning" sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="h6">Auto-Remind</Typography>
                            <Typography variant="body2" color="text.secondary">Filing deadlines</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Auto-Calculate Taxes on Invoice Creation"
                            secondary="Automatically calculate and apply taxes when invoices are created"
                        />
                        <ListItemSecondaryAction>
                            <Switch defaultChecked />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Auto-Aggregate Per Period for Filing"
                            secondary="Automatically aggregate taxable transactions at period end"
                        />
                        <ListItemSecondaryAction>
                            <Switch defaultChecked />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Auto-Generate Draft Returns"
                            secondary="Automatically create draft tax returns based on period data"
                        />
                        <ListItemSecondaryAction>
                            <Switch defaultChecked />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Auto-Post Tax Journal Entries"
                            secondary="Automatically post tax liabilities and recoverables to GL"
                        />
                        <ListItemSecondaryAction>
                            <Switch defaultChecked />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Auto-Remind Filing Deadlines"
                            secondary="Send automatic reminders 7 days before filing deadlines"
                        />
                        <ListItemSecondaryAction>
                            <Switch defaultChecked />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Rule-Based Tax Rate Selection"
                            secondary="Auto-select tax rates by product/service/jurisdiction"
                        />
                        <ListItemSecondaryAction>
                            <Switch defaultChecked />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default AutomationRules;
