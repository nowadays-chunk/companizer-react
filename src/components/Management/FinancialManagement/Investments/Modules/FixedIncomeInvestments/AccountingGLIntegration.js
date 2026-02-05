import React from 'react';
import { Box, Typography, Paper, Alert, List, ListItem, ListItemText } from '@mui/material';

const AccountingGLIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Accounting & GL Integration</Typography>

            <Alert severity="success" sx={{ mb: 3 }}>
                All mapping rules validated. Automated posting is active.
            </Alert>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>GL Account Mapping</Typography>
                <List>
                    <ListItem divider>
                        <ListItemText primary="Investment Asset (Amortized Cost)" secondary="Account: 1500-01" />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText primary="Investment Asset (FVTPL)" secondary="Account: 1500-02" />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText primary="Interest Income" secondary="Account: 4200-00" />
                    </ListItem>
                    <ListItem divider>
                        <ListItemText primary="Unrealized Gain/Loss (P&L)" secondary="Account: 8000-01" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Unrealized Gain/Loss (OCI)" secondary="Account: 3500-01" />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default AccountingGLIntegration;
