import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Domain, SwapHoriz } from '@mui/icons-material';

const IntercompanyFixedIncome = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Intercompany Holdings</Typography>
            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Group Debt Structure</Typography>
                <List>
                    <ListItem>
                        <ListItemIcon><Domain /></ListItemIcon>
                        <ListItemText primary="Parent Co -> Sub A (Loan)" secondary="Principal: $5M | Rate: 3.5% | Eliminated on Consolidation" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemIcon><SwapHoriz /></ListItemIcon>
                        <ListItemText primary="Sub A -> Sub B (Commercial Paper)" secondary="Principal: $1M | Rate: Market | Settled Quarterly" />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default IntercompanyFixedIncome;
