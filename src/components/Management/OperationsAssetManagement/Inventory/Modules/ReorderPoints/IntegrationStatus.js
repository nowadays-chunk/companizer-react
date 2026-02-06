
import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { Hub } from '@mui/icons-material';
import { CheckCircle, Error } from '@mui/icons-material';

const IntegrationStatus = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Hub color="primary" /> Integration Health
            </Typography>
            <Card>
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                            <ListItemText primary="Stock Levels Module" secondary="Real-time Sync Active" />
                            <Chip label="Connected" color="success" size="small" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                            <ListItemText primary="Procurement / Purchasing" secondary="PO Generation Enabled" />
                            <Chip label="Connected" color="success" size="small" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Error color="warning" /></ListItemIcon>
                            <ListItemText primary="Production Planning" secondary="Sync Latency > 5 mins" />
                            <Chip label="Degraded" color="warning" size="small" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                            <ListItemText primary="Demand Forecasting" secondary="Model V2.1 linked" />
                            <Chip label="Connected" color="success" size="small" />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export default IntegrationStatus;
