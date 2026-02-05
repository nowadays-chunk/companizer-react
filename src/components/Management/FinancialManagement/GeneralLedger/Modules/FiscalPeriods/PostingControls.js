import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    FormControlLabel,
    Checkbox,
    TextField,
    Switch,
    useTheme,
    Divider
} from '@mui/material';

export const fieldsConfig = {
    allow_posting_to_previous: { label: 'Allow Posting to Previous Period', type: 'checkbox' },
    grace_period_days: { label: 'Grace Period (Days)', type: 'number' },
    backdating_limit: { label: 'Backdating Limit (Days)', type: 'number' },
    require_approval_for_closed: { label: 'Require Approval for Closed Period Posting', type: 'checkbox' }
};

export const entityName = 'Posting Control';

const PostingControls = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Posting Controls & Validation"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main }}>General Rules</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked color="primary" />}
                                    label="Allow posting to prior open periods"
                                />
                                <TextField
                                    label="Grace Period (Days after close)"
                                    type="number"
                                    defaultValue={5}
                                    variant="outlined"
                                    size="small"
                                    sx={{ maxWidth: 200 }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main }}>Exceptions & Overrides</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <FormControlLabel
                                    control={<Switch defaultChecked color="primary" />}
                                    label="Allow Managers to override closed period lock"
                                />
                                <FormControlLabel
                                    control={<Checkbox defaultChecked color="primary" />}
                                    label="Log all backdated transactions"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PostingControls;
