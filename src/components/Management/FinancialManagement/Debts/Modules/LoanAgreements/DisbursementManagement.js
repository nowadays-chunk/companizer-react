import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    LinearProgress
} from '@mui/material';

const DisbursementManagement = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Disbursement Management</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>Record Drawdown</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Reference ID" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth type="date" label="Value Date" InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Amount" type="number" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Destination Bank Account" select SelectProps={{ native: true }}>
                                    <option>Operating Account (USD) - **** 1234</option>
                                    <option>Investment Account - **** 9876</option>
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth size="large">Submit Request</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2">Total Facility Utilization</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                    <Box sx={{ width: '100%', mr: 1 }}>
                                        <LinearProgress variant="determinate" value={65} sx={{ height: 10, borderRadius: 5 }} />
                                    </Box>
                                    <Box sx={{ minWidth: 35 }}>
                                        <Typography variant="body2" color="text.secondary">65%</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                    <Typography variant="caption">Drawn: $ 3,250,000</Typography>
                                    <Typography variant="caption">Undrawn: $ 1,750,000</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Drawdown History</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Ref ID</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>2023-10-15</TableCell>
                                        <TableCell>DD-003</TableCell>
                                        <TableCell align="right">$ 1,000,000</TableCell>
                                        <TableCell>Posted</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2023-06-01</TableCell>
                                        <TableCell>DD-002</TableCell>
                                        <TableCell align="right">$ 1,500,000</TableCell>
                                        <TableCell>Posted</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2023-01-20</TableCell>
                                        <TableCell>DD-001</TableCell>
                                        <TableCell align="right">$ 750,000</TableCell>
                                        <TableCell>Posted</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DisbursementManagement;
