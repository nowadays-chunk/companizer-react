import React from 'react';
import { Box, Typography, Paper, Alert, List, ListItem, ListItemText, ListItemSecondaryAction, Chip } from '@mui/material';

const ReverseChargeVAT = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Reverse Charge Mechanism</Typography>

            <Alert severity="info" sx={{ mb: 3 }}>
                Self-assessment applied to 14 cross-border service transactions this period.
            </Alert>

            <Paper>
                <List>
                    <ListItem divider>
                        <ListItemText
                            primary="Consulting Services (Google Ireland)"
                            secondary="Inv #INV-2025-001 | Net: $10,000"
                        />
                        <ListItemSecondaryAction>
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography variant="body2" color="error">+ Output VAT: $2,000</Typography>
                                <Typography variant="body2" color="success">- Input VAT: $2,000</Typography>
                                <Chip label="Net Zero" size="small" sx={{ mt: 0.5 }} />
                            </Box>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Software License (AWS EMEA)"
                            secondary="Inv #AWS-99382 | Net: $5,400"
                        />
                        <ListItemSecondaryAction>
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography variant="body2" color="error">+ Output VAT: $1,080</Typography>
                                <Typography variant="body2" color="success">- Input VAT: $1,080</Typography>
                                <Chip label="Net Zero" size="small" sx={{ mt: 0.5 }} />
                            </Box>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default ReverseChargeVAT;
