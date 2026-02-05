import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Button,
    Typography,
    Paper,
    useTheme
} from '@mui/material';
import { PictureAsPdf, Assessment, TableChart } from '@mui/icons-material';

const ReconciliationReports = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Reconciliation Reports"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <PictureAsPdf color="error" sx={{ fontSize: 48, mb: 1 }} />
                                <Typography variant="h6" gutterBottom>Bank Rec Statement</Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    Formal PDF statement for auditors.
                                </Typography>
                                <Button variant="outlined">Generate PDF</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Assessment color="primary" sx={{ fontSize: 48, mb: 1 }} />
                                <Typography variant="h6" gutterBottom>Variance Analysis</Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    Trend analysis of unreconciled items.
                                </Typography>
                                <Button variant="outlined">View Report</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <TableChart color="success" sx={{ fontSize: 48, mb: 1 }} />
                                <Typography variant="h6" gutterBottom>Outstanding Items</Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    Detailed list of all open reconciling items.
                                </Typography>
                                <Button variant="outlined">Export CSV</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ReconciliationReports;
