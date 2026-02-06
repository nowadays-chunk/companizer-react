import React from 'react';
import { Box, Typography, Paper, Switch, FormGroup, FormControlLabel, Divider } from '@mui/material';
import { AutoAwesome } from '@mui/icons-material';

const AgingAutomation = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <AutoAwesome color="primary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Intelligent Automation</Typography>
            </Box>

            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Automated Actions</Typography>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Auto-flag expired batches for disposal"
                    />
                    <Typography variant="caption" color="textSecondary" sx={{ ml: 4, mb: 2, display: 'block' }}>
                        Automatically changes status of batches past expiry date to 'Blocked'.
                    </Typography>

                    <Divider />

                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Dynamic discounting for slow movers"
                    />
                    <Typography variant="caption" color="textSecondary" sx={{ ml: 4, mb: 2, display: 'block' }}>
                        Suggests 10% discount when item enters 61-90 day bucket.
                    </Typography>

                    <Divider />

                    <FormControlLabel
                        control={<Switch />}
                        label="Auto-create write-off journals"
                    />
                    <Typography variant="caption" color="textSecondary" sx={{ ml: 4, mb: 2, display: 'block' }}>
                        Automatically post adjustment to GL for approved obsolescence.
                    </Typography>
                </FormGroup>
            </Paper>
        </Box>
    );
};

export default AgingAutomation;
