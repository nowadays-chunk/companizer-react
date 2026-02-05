import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Card,
    CardContent
} from '@mui/material';
import { Download, Print } from '@mui/icons-material';

const MultiCurrencyReporting = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">
                    Multi-Currency Reporting
                </Typography>
                <Box>
                    <Button startIcon={<Print />}>Print</Button>
                    <Button startIcon={<Download />} variant="contained" sx={{ ml: 1 }}>Export</Button>
                </Box>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Trial Balance (Dual Currency)
                        </Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            View balances in both transaction usage currency and functional reporting currency side-by-side.
                        </Typography>
                        <Button variant="outlined">View Report</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Currency Exposure Report
                        </Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            Analyze net exposure per currency to assess FX risk.
                        </Typography>
                        <Button variant="outlined">View Report</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            FX Movement Analysis
                        </Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            Track exchange rate impact on balance sheet items over time.
                        </Typography>
                        <Button variant="outlined">View Report</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MultiCurrencyReporting;
