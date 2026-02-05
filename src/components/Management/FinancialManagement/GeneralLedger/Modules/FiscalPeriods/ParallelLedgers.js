import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Button,
    Chip,
    useTheme,
    Paper,
    Divider
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const fieldsConfig = {
    ledger_name: { label: 'Ledger Name', type: 'text' },
    standard: { label: 'Accounting Standard', type: 'text' },
    period_status: { label: 'Period Status', type: 'text' }
};

export const entityName = 'Parallel Ledger';

const ParallelLedgers = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Parallel Books & Ledgers"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={4}>
                        {/* Statutory Ledger */}
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 3, borderLeft: `6px solid ${theme.palette.primary.main}` }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold">Statutory Ledger (GAAP)</Typography>
                                        <Typography variant="body2" color="textSecondary">Primary legal reporting ledger</Typography>
                                    </Box>
                                    <Chip label="Period: Open" color="success" size="small" />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="body2"><strong>Current Period:</strong> Jan 2026</Typography>
                                    <Typography variant="body2"><strong>Close Deadline:</strong> Feb 5, 2026</Typography>
                                </Box>
                                <Divider sx={{ my: 2 }} />
                                <Button size="small" endIcon={<ArrowForwardIcon />}>View Detailed Status</Button>
                            </Paper>
                        </Grid>

                        {/* IFRS Ledger */}
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 3, borderLeft: `6px solid ${theme.palette.secondary.main}` }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold">Group Ledger (IFRS)</Typography>
                                        <Typography variant="body2" color="textSecondary">Consolidated group reporting</Typography>
                                    </Box>
                                    <Chip label="Period: Soft Closed" color="warning" size="small" />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="body2"><strong>Current Period:</strong> Jan 2026</Typography>
                                    <Typography variant="body2"><strong>Close Deadline:</strong> Feb 10, 2026</Typography>
                                </Box>
                                <Divider sx={{ my: 2 }} />
                                <Button size="small" color="secondary" endIcon={<ArrowForwardIcon />}>View Detailed Status</Button>
                            </Paper>
                        </Grid>

                        {/* Tax Ledger */}
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 3, borderLeft: `6px solid ${theme.palette.error.main}` }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold">Tax Ledger</Typography>
                                        <Typography variant="body2" color="textSecondary">Tax basis accounting</Typography>
                                    </Box>
                                    <Chip label="Period: Hard Closed" color="error" size="small" />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="body2"><strong>Current Period:</strong> Dec 2025</Typography>
                                    <Typography variant="body2"><strong>Next Open:</strong> Jan 2026 (Locked)</Typography>
                                </Box>
                                <Divider sx={{ my: 2 }} />
                                <Button size="small" color="error" endIcon={<ArrowForwardIcon />}>View Detailed Status</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ParallelLedgers;
