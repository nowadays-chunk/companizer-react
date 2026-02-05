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
    Switch
} from '@mui/material';
import { VerifiedUser, GppGood } from '@mui/icons-material';

const SystemSafeguards = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Data Integrity & Safeguards
            </Typography>

            <Paper sx={{ p: 3, maxWidth: 800 }}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: 'success.main', display: 'flex', alignItems: 'center' }}>
                    <GppGood sx={{ mr: 1 }} /> System Health: Optimal
                </Typography>
                <Typography variant="body2" paragraph color="textSecondary">
                    All integrity checks passed. Last scan: 10 mins ago.
                </Typography>

                <List>
                    <ListItem divider>
                        <ListItemText
                            primary="Duplicate Transaction Detection"
                            secondary="Prevents posting of transactions with identical Reference ID, Amount, and Date."
                        />
                        <Switch defaultChecked />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText
                            primary="Significant Rate Deviation Alert"
                            secondary="Warns if an entered rate deviates >10% from the system spot rate."
                        />
                        <Switch defaultChecked />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText
                            primary="Negative Balance Prevention"
                            secondary="Blocks transfers that would result in a negative currency balance (unless Overdraft enabled)."
                        />
                        <Switch defaultChecked />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Immutable Historical Rates"
                            secondary="Prevents modification of exchange rates that have been used in posted journals."
                        />
                        <ListItemIcon><VerifiedUser color="disabled" /></ListItemIcon>
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default SystemSafeguards;
