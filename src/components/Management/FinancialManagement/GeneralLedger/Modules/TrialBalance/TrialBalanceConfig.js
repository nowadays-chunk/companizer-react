import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Switch,
    FormControlLabel,
    FormGroup,
    Divider,
    Button
} from '@mui/material';
import { Save } from '@mui/icons-material';

const TrialBalanceConfig = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>Configuration</Typography>
                <Button variant="contained" startIcon={<Save />}>Save Settings</Button>
            </Box>

            <Paper elevation={0} variant="outlined" sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Display Settings</Typography>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Show Zero Balance Accounts" />
                    <FormControlLabel control={<Switch defaultChecked />} label="Show Account Codes" />
                    <FormControlLabel control={<Switch />} label="Group by Account Category" />
                </FormGroup>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" gutterBottom>Validation Rules</Typography>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Highlight Out-of-Balance" />
                    <FormControlLabel control={<Switch defaultChecked />} label="Enforce Period Lock checks" />
                </FormGroup>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" gutterBottom>Export Preferences</Typography>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Include Company Logo" />
                    <FormControlLabel control={<Switch />} label="Include Disclaimer Footer" />
                </FormGroup>
            </Paper>
        </Box>
    );
};

export default TrialBalanceConfig;
