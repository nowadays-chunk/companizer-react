import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Chip, Button } from '@mui/material';

const WorkflowApprovals = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Workflow & Approvals</Typography>
            <Paper sx={{ p: 3 }}>
                <List>
                    <ListItem divider secondaryAction={<Button size="small">Review</Button>}>
                        <ListItemText primary="Reclassification: Term Loan B to Current" secondary="Trigger: &lt; 12 months remaining" />
                        <Chip label="Pending CFO" color="warning" size="small" />
                    </ListItem>
                    <ListItem secondaryAction={<Button size="small" disabled>Approved</Button>}>
                        <ListItemText primary="New Lease Liability Schedule" secondary="Added 2023-11-01" />
                        <Chip label="Approved" color="success" size="small" />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};
export default WorkflowApprovals;
