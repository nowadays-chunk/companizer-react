import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    FormControlLabel,
    Switch,
    Typography,
    Divider,
    Grid
} from '@mui/material';

const ReconciliationSettings = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Settings & Security"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>Security Controls</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <FormControlLabel control={<Switch defaultChecked />} label="Prevent Deletion of Reconciled Items" />
                                <FormControlLabel control={<Switch defaultChecked />} label="Mask Account Numbers in Reports" />
                                <FormControlLabel control={<Switch defaultChecked />} label="Require MFA for Approval" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>Multi-Currency</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <FormControlLabel control={<Switch defaultChecked />} label="Auto-calculate FX Variation" />
                                <FormControlLabel control={<Switch />} label="Use Daily Spot Rate for Matching" />
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ReconciliationSettings;
