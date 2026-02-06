import React from 'react';
import { Box, Typography, Paper, Button, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Download, Description } from '@mui/icons-material';

const VATAuditSupport = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5">Audit Support & SAF-T</Typography>
                <Button variant="contained" startIcon={<Download />}>Export SAF-T XML</Button>
            </Box>

            <Paper>
                <List>
                    <ListItem divider button>
                        <ListItemIcon><Description /></ListItemIcon>
                        <ListItemText primary="VAT Transaction Log (Q1 2025)" secondary="Immutable audit trail of all posted entries" />
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon><Description /></ListItemIcon>
                        <ListItemText primary="Missing VAT Codes Report" secondary="Exception report for unclassified transactions" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><Description /></ListItemIcon>
                        <ListItemText primary="Manual Adjustments History" secondary="Log of all manual interventions and overrides" />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default VATAuditSupport;
