import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    TextField,
    MenuItem,
    Button,
    Typography,
    Paper,
    useTheme
} from '@mui/material';

export const fieldsConfig = {
    report_type: { label: 'Report', type: 'select', options: [{ id: 'tb', label: 'Trial Balance' }, { id: 'bs', label: 'Balance Sheet' }] },
    period: { label: 'Period', type: 'text' },
    version: { label: 'Version', type: 'select', options: [{ id: 'live', label: 'Live' }, { id: 'snap_1', label: 'Snapshot 1 (Pre-adj)' }] }
};

export const entityName = 'Fiscal Report';

const FiscalReporting = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Fiscal Reporting Tools"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <CardContent>
                    <Grid container spacing={3} alignItems="flex-end" sx={{ mb: 4 }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                select
                                fullWidth
                                label="Fiscal Period"
                                defaultValue="Jan 2026"
                                variant="outlined"
                            >
                                <MenuItem value="Jan 2026">Jan 2026</MenuItem>
                                <MenuItem value="Dec 2025">Dec 2025</MenuItem>
                                <MenuItem value="Nov 2025">Nov 2025</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                select
                                fullWidth
                                label="Snapshot Version"
                                defaultValue="Current (Live)"
                                variant="outlined"
                            >
                                <MenuItem value="Current (Live)">Current (Live)</MenuItem>
                                <MenuItem value="Hard Close V1">Hard Close V1</MenuItem>
                                <MenuItem value="Audit Final V2">Audit Final V2</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ height: 56 }}
                            >
                                Load Report
                            </Button>
                        </Grid>
                    </Grid>

                    <Paper
                        variant="outlined"
                        sx={{
                            p: 6,
                            textAlign: 'center',
                            bgcolor: theme.palette.background.default,
                            borderStyle: 'dashed',
                            borderColor: theme.palette.text.disabled
                        }}
                    >
                        <Typography color="textSecondary" gutterBottom>
                            Select a period and version to view the immutable snapshot of the Trial Balance.
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            Locked versions ensure compliance and audit traceability.
                        </Typography>
                    </Paper>
                </CardContent>
            </Card>
        </Box>
    );
};

export default FiscalReporting;
