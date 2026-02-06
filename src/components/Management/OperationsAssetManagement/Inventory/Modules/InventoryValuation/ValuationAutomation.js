import React from 'react';
import { Box, Typography, Paper, Grid, Switch, FormControlLabel } from '@mui/material';
import { AutoFixHigh } from '@mui/icons-material';

const ValuationAutomation = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <AutoFixHigh color="primary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Valuation Automation</Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={1} sx={{ p: 2 }}>
                        <FormControlLabel
                            control={<Switch defaultChecked />}
                            label={<Typography variant="h6">Auto-Calculate Landed Costs</Typography>}
                        />
                        <Typography variant="body2" color="textSecondary" ml={4}>
                            Automatically apply estimated freight and duty percentages to Goods Receipts based on supplier region.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={1} sx={{ p: 2 }}>
                        <FormControlLabel
                            control={<Switch defaultChecked />}
                            label={<Typography variant="h6">Predictive Obsolescence Detection</Typography>}
                        />
                        <Typography variant="body2" color="textSecondary" ml={4}>
                            Use AI to flag slow-moving items before they become obsolete based on sales trends.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={1} sx={{ p: 2 }}>
                        <FormControlLabel
                            control={<Switch />}
                            label={<Typography variant="h6">Auto-Post Minor Discrepancies</Typography>}
                        />
                        <Typography variant="body2" color="textSecondary" ml={4}>
                            Automatically post inventory adjustment journals for stock count variances under $100.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ValuationAutomation;
