import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Security } from '@mui/icons-material';

const DataIntegrityControls = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Data Integrity Rules</Typography>
            <Paper sx={{ p: 3 }}>
                <List>
                    <ListItem>
                        <ListItemIcon><Security /></ListItemIcon>
                        <ListItemText primary="Prevent Posting to Closed Periods" secondary="Active - Blocks modifications to finalized months." />
                        <Switch defaultChecked />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><Security /></ListItemIcon>
                        <ListItemText primary="Mandatory FX Rate Validation" secondary="Active - Requires usage of daily central bank rates." />
                        <Switch defaultChecked />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><Security /></ListItemIcon>
                        <ListItemText primary="Negative Balance Protection" secondary="Active - Prevents selling more securities than owned." />
                        <Switch defaultChecked />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default DataIntegrityControls;
