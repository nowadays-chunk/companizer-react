import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Card,
    CardContent,
    Divider
} from '@mui/material';

const ConsolidationTranslation = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Consolidation & Translation
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Translation Components
                        </Typography>
                        <Divider sx={{ mb: 2 }} />

                        <FormControl fullWidth margin="normal">
                            <InputLabel>Balance Sheet Rate</InputLabel>
                            <Select value="Closing" label="Balance Sheet Rate">
                                <MenuItem value="Closing">Closing Rate</MenuItem>
                                <MenuItem value="Historical">Historical Rate</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <InputLabel>P&L Rate</InputLabel>
                            <Select value="Average" label="P&L Rate">
                                <MenuItem value="Average">Average Rate</MenuItem>
                                <MenuItem value="Transaction">Transaction Date Rate</MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Cumulative Translation Adjustment (CTA)
                            </Typography>
                            <Typography variant="h3" color="primary">
                                $24,592.00
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Net gain from translation of foreign subsidiary assets/liabilities.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Paper sx={{ p: 3, mt: 3 }}>
                        <Typography variant="subtitle1" gutterBottom>Translation Impact Analysis</Typography>
                        <Typography variant="body2">
                            [Chart Placeholder: Exposure vs. CTA movement over last 12 months]
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ConsolidationTranslation;
