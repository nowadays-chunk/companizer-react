import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, TextField, Button, Divider, Alert } from '@mui/material';

const IntercompanyTreasury = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Intercompany & Treasury Settlement</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Initiate Settlement</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Paying Entity" select SelectProps={{ native: true }}>
                                    <option>Subsidiary A (UK)</option>
                                    <option>Subsidiary B (DE)</option>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Receiving Entity" select SelectProps={{ native: true }}>
                                    <option>Parent Corp (US)</option>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Amount" type="number" defaultValue="200000" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Settlement Date" type="date" defaultValue="2023-12-31" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Reference / Note" multiline rows={2} defaultValue="Q4 Intercompany Loan Repayment" />
                            </Grid>
                            <Grid item xs={12}>
                                <Alert severity="info" sx={{ mb: 2 }}>
                                    This will trigger simultaneous Journal Entries in both entities and calculate FX Gain/Loss if applicable.
                                </Alert>
                                <Button variant="contained" fullWidth>Execute Settlement</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography color="textSecondary">Net Group Position</Typography>
                            <Typography variant="h4" color="primary">Zero Balanced</Typography>
                            <Typography variant="caption">All eliminations match.</Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Pending Settlements</Typography>
                            <Box sx={{ p: 1, bgcolor: '#f5f5f5', borderRadius: 1, mb: 1 }}>
                                <Typography variant="subtitle2">Sub A -&gt; Parent</Typography>
                                <Typography variant="body2">$ 200,000 (Dec 31)</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};
export default IntercompanyTreasury;
