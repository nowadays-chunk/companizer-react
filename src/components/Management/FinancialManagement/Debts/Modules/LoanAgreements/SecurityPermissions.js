import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    FormControlLabel,
    Switch,
    FormGroup,
    Divider
} from '@mui/material';

const SecurityPermissions = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Security & Permissions</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Access Control</Typography>
                        <FormGroup>
                            <FormControlLabel control={<Switch defaultChecked />} label="Restricted Access (Sensitive Loan)" />
                            <FormControlLabel control={<Switch />} label="Read-Only for General Finance Users" />
                            <FormControlLabel control={<Switch defaultChecked />} label="Requires Executive Approval for Edits" />
                        </FormGroup>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="subtitle2" gutterBottom>Allowed Roles</Typography>
                        <FormGroup>
                            <FormControlLabel control={<Switch defaultChecked disabled />} label="Treasury Admin" />
                            <FormControlLabel control={<Switch defaultChecked />} label="CFO" />
                            <FormControlLabel control={<Switch />} label="External Auditor" />
                        </FormGroup>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Data Masking</Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            Control visibility of sensitive fields for non-privileged users.
                        </Typography>
                        <FormGroup>
                            <FormControlLabel control={<Switch />} label="Mask Counterparty Name" />
                            <FormControlLabel control={<Switch />} label="Mask Interest Rate / Margins" />
                            <FormControlLabel control={<Switch />} label="Mask Attachment Contents" />
                        </FormGroup>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SecurityPermissions;
