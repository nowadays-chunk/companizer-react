import React from 'react';
import { Box, Typography, Button, Paper, Grid, TextField, InputAdornment, MenuItem } from '@mui/material';
import { Edit, AttachMoney } from '@mui/icons-material';

const CostAdjustments = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4">Cost Adjustments</Typography>
                <Button variant="contained" color="primary" startIcon={<Edit />}>New Adjustment</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Landed Cost Allocation</Typography>
                        <Typography variant="body2" color="textSecondary" mb={3}>
                            Allocate freight, duty, and insurance costs to receipt batches.
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Select Goods Receipt" select>
                                    <MenuItem value="GR-1002">GR-1002 (Electronics Shipment)</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Freight Cost"
                                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Customs Duty"
                                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth>Allocate Costs</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Manual Corrections</Typography>
                        <Typography variant="body2" color="textSecondary" mb={3}>
                            Correct valuation discrepancies due to system errors or audits.
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Product/SKU" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Current Unit Cost"
                                    disabled
                                    defaultValue="12.50"
                                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="New Unit Cost"
                                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Reason for Correction" multiline rows={2} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CostAdjustments;
