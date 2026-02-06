import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Chip, Button } from '@mui/material';
import { NotificationsActive, Warning, Info } from '@mui/icons-material';

const AgingAlerts = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4">Alerts & Notifications</Typography>
                <Button variant="outlined" startIcon={<NotificationsActive />}>Configure Rules</Button>
            </Box>

            <Paper elevation={2}>
                <List>
                    <ListItem divider>
                        <ListItemIcon>
                            <Warning color="error" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Critical Obsolescence Risk: Product A-202"
                            secondary="500 units entered 90+ day bucket today. Total value $50,000."
                        />
                        <Chip label="High Priority" color="error" size="small" />
                    </ListItem>
                    <ListItem divider>
                        <ListItemIcon>
                            <Info color="warning" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Slow Moving Warning: Category 'Spare Parts'"
                            secondary="Turnover rate dropped below 4.5x this quarter."
                        />
                        <Chip label="Medium" color="warning" size="small" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Info color="info" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Approaching Expiry: Batch 99281"
                            secondary="Expires in 30 days. Consider discounting."
                        />
                        <Chip label="Low" color="info" size="small" />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default AgingAlerts;
