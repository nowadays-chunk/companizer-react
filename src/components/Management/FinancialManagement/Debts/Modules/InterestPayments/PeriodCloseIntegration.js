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
    Checkbox,
    Button,
    Alert
} from '@mui/material';

const PeriodCloseIntegration = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Period Close - Interest Validation</Typography>

            <Alert severity="info" sx={{ mb: 3 }}>
                Target Close Date: Oct 31, 2023. All checks must pass to close the Interest subledger.
            </Alert>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Closing Checklist</Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon><Checkbox defaultChecked /></ListItemIcon>
                                <ListItemText primary="All Calculations finalized" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><Checkbox defaultChecked /></ListItemIcon>
                                <ListItemText primary="Accruals Posted to GL" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><Checkbox /></ListItemIcon>
                                <ListItemText primary="Pending Payments Resolved" secondary="2 payments in 'Draft' state" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><Checkbox /></ListItemIcon>
                                <ListItemText primary="Revaluation of FX Interest" />
                            </ListItem>
                        </List>
                        <Button variant="contained" disabled sx={{ mt: 2 }}>Close Subledger</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PeriodCloseIntegration;
