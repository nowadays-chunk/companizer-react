import React from 'react';
import { Box, Typography, Paper, Switch, FormControlLabel, Divider } from '@mui/material';
import { AutoFixHigh } from '@mui/icons-material';

const DepreciationAutomation = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <AutoFixHigh color="primary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Automation Settings</Typography>
            </Box>

            <Paper elevation={2} sx={{ p: 4 }}>
                <FormControlLabel
                    control={<Switch defaultChecked />}
                    label={<Typography variant="h6">Auto-Post Monthly Depreciation</Typography>}
                />
                <Typography color="textSecondary" sx={{ ml: 4, mb: 3 }}>
                    Automatically generates and posts GL journals on the last day of the fiscal period.
                </Typography>

                <Divider />
                <Box mt={3}>
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label={<Typography variant="h6">Predictive End-of-Life</Typography>}
                    />
                    <Typography color="textSecondary" sx={{ ml: 4, mb: 3 }}>
                        Use historical maintenance data to predict when assets should be retired before full depreciation.
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default DepreciationAutomation;
