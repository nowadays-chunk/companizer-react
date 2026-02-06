import React from 'react';
import { Box, Typography, Paper, Switch, List, ListItem, ListItemText, ListItemSecondaryAction, Divider } from '@mui/material';

const AuditSecurityAccess = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Security & Access Control</Typography>

            <Paper sx={{ maxWidth: 600 }}>
                <List>
                    <ListItem>
                        <ListItemText primary="Restrict Sensitive Documents" secondary="Only Audit Managers can view findings" />
                        <ListItemSecondaryAction>
                            <Switch defaultChecked />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Two-Factor Authentication" secondary="Require 2FA for external auditor access" />
                        <ListItemSecondaryAction>
                            <Switch defaultChecked />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Read-Only Mode" secondary="Lock all historical audits" />
                        <ListItemSecondaryAction>
                            <Switch />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default AuditSecurityAccess;
