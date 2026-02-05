import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip
} from '@mui/material';
import { CheckCircle, Sync } from '@mui/icons-material';

const IntegrationArchitecture = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>System Connectivity</Typography>
            <Paper sx={{ p: 3 }}>
                <List>
                    <ListItem divider>
                        <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                        <ListItemText primary="Loan Agreements Module" secondary="Source of truth for rates and schedules" />
                        <Chip label="Online" color="success" size="small" />
                    </ListItem>
                    <ListItem divider>
                        <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                        <ListItemText primary="General Ledger" secondary="Auto-posting of journals" />
                        <Chip label="Online" color="success" size="small" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><Sync color="warning" /></ListItemIcon>
                        <ListItemText primary="Treasury Payment Gateway" secondary="Bank connectivity" />
                        <Chip label="Syncing..." color="warning" size="small" />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default IntegrationArchitecture;
