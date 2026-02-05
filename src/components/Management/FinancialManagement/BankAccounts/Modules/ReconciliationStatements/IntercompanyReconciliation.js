import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Divider,
    Paper,
    useTheme,
    Button
} from '@mui/material';
import { SyncAlt as SyncAltIcon } from '@mui/icons-material';

const IntercompanyReconciliation = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Intercompany Reconciliation"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={5}>
                            <Paper sx={{ p: 3, textAlign: 'center', borderTop: `4px solid ${theme.palette.primary.main}` }}>
                                <Typography variant="h6">US Entity (Parent)</Typography>
                                <Typography variant="subtitle2" color="textSecondary" gutterBottom>Receivable from UK</Typography>
                                <Typography variant="h4" color="primary">$150,000.00</Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <SyncAltIcon sx={{ fontSize: 40, color: theme.palette.text.secondary }} />
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Paper sx={{ p: 3, textAlign: 'center', borderTop: `4px solid ${theme.palette.secondary.main}` }}>
                                <Typography variant="h6">UK Entity (Sub)</Typography>
                                <Typography variant="subtitle2" color="textSecondary" gutterBottom>Payable to US</Typography>
                                <Typography variant="h4" color="secondary">$148,500.00</Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper variant="outlined" sx={{ p: 3, textAlign: 'center', bgcolor: theme.palette.error.lighter }}>
                                <Typography variant="h6" color="error">Variance: $1,500.00</Typography>
                                <Typography variant="body2" gutterBottom>Likely due to FX Rate difference or timing.</Typography>
                                <Button variant="outlined" color="error" sx={{ mt: 1 }}>Investigate Variance</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default IntercompanyReconciliation;
