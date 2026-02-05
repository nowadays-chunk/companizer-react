import React from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const FairValueRevaluation = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Fair Value & Revaluation</Typography>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Record Valuation</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <TextField fullWidth label="Valuation Date" type="date" InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth label="Security" placeholder="Search..." />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField fullWidth label="Market Price (%)" type="number" />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button variant="contained" fullWidth sx={{ mt: 1 }}>Update</Button>
                    </Grid>
                </Grid>
            </Paper>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Security</TableCell>
                            <TableCell>Classification</TableCell>
                            <TableCell align="right">Previous FV</TableCell>
                            <TableCell align="right">New FV</TableCell>
                            <TableCell align="right">Unrealized G/L</TableCell>
                            <TableCell>Impact</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>2025-06-30</TableCell>
                            <TableCell>Tech Corp Bond</TableCell>
                            <TableCell>FVTPL</TableCell>
                            <TableCell align="right">98.00</TableCell>
                            <TableCell align="right">101.50</TableCell>
                            <TableCell align="right" sx={{ color: 'success.main' }}>+ 3.50</TableCell>
                            <TableCell>P&L</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2025-06-30</TableCell>
                            <TableCell>Govt Bond 10Y</TableCell>
                            <TableCell>FVOCI</TableCell>
                            <TableCell align="right">100.00</TableCell>
                            <TableCell align="right">99.20</TableCell>
                            <TableCell align="right" sx={{ color: 'error.main' }}>- 0.80</TableCell>
                            <TableCell>Equity (OCI)</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default FairValueRevaluation;
