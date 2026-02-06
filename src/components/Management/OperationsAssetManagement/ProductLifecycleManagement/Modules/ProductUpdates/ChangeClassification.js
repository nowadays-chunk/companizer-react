
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Chip,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';
import {
    LowPriority,
    ReportProblem
} from '@mui/icons-material';

const ChangeClassification = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <ReportProblem color="primary" /> Change Classification (ECO/ECN)
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Change Type</Typography>
                            <FormControl component="fieldset">
                                <RadioGroup defaultValue="eco">
                                    <FormControlLabel
                                        value="ecn"
                                        control={<Radio />}
                                        label={
                                            <Box>
                                                <Typography variant="subtitle2">Engineering Change Notice (ECN)</Typography>
                                                <Typography variant="caption" display="block">Minor change, documentation update only. No fit/form/function impact.</Typography>
                                            </Box>
                                        }
                                        sx={{ mb: 2 }}
                                    />
                                    <FormControlLabel
                                        value="eco"
                                        control={<Radio />}
                                        label={
                                            <Box>
                                                <Typography variant="subtitle2">Engineering Change Order (ECO)</Typography>
                                                <Typography variant="caption" display="block">Major change. Affects fit, form, or function. Requires full approval.</Typography>
                                            </Box>
                                        }
                                        sx={{ mb: 2 }}
                                    />
                                    <FormControlLabel
                                        value="mco"
                                        control={<Radio />}
                                        label={
                                            <Box>
                                                <Typography variant="subtitle2">Manufacturing Change Order (MCO)</Typography>
                                                <Typography variant="caption" display="block">Process change only. Product spec remains same.</Typography>
                                            </Box>
                                        }
                                    />
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Risk Assessment</Typography>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Inventory Impact</Typography>
                                <Chip label="High Risk - Obsolete Stock" color="error" size="small" />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Regulatory Compliance</Typography>
                                <Chip label="Low Risk - No Re-cert Needed" color="success" size="small" />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Supplier Readiness</Typography>
                                <Chip label="Medium Risk - Lead Time Increase" color="warning" size="small" />
                            </Box>

                            <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                <Typography variant="subtitle2" gutterBottom>Calculated Severity Score:</Typography>
                                <Typography variant="h4" color="warning.main">75/100</Typography>
                                <Typography variant="caption">Requires Level 3 Approval (Director)</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChangeClassification;
