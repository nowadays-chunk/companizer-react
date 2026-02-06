import React from 'react';
import { Box, Typography, Paper, Switch, List, ListItem, ListItemText, ListItemSecondaryAction, Divider } from '@mui/material';

const VATAutomation = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Automation Rules Engine</Typography>

            <Paper sx={{ maxWidth: 800 }}>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Auto-Assign Standard Rate"
                            secondary="Apply 20% VAT to all domestic sales of goods unless specified"
                        />
                        <ListItemSecondaryAction>
                            <Switch defaultChecked />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Reverse Charge Detection"
                            secondary="Auto-flag service purchases from EU vendors"
                        />
                        <ListItemSecondaryAction>
                            <Switch defaultChecked />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Block Missing VAT Codes"
                            secondary="Prevent posting of invoices without a valid tax category"
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

export default VATAutomation;
