import React from 'react';
import { Box, Typography, Paper, Grid, Alert, Button, Table, TableRow, TableCell, TableHead, TableBody, TableContainer } from '@mui/material';

const MaturityRedemption = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Maturity & Redemption</Typography>

            <Alert severity="info" sx={{ mb: 3 }}>
                3 Assignments approaching maturity in next 90 days. Total Redemption Value: $2.5M
            </Alert>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Redemption & Call Options</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Security</TableCell>
                                <TableCell>Maturity Date</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell align="right">Face Value</TableCell>
                                <TableCell align="right">Redemption Price</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Corp Bond A 2025</TableCell>
                                <TableCell>2025-11-20</TableCell>
                                <TableCell>Bullet</TableCell>
                                <TableCell align="right">1,000,000</TableCell>
                                <TableCell align="right">100.00</TableCell>
                                <TableCell><Button size="small" variant="outlined">Plan Cashflow</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Muni Bond 5%</TableCell>
                                <TableCell>2025-12-15</TableCell>
                                <TableCell>Callable</TableCell>
                                <TableCell align="right">500,000</TableCell>
                                <TableCell align="right">102.00</TableCell>
                                <TableCell><Button size="small" variant="contained" color="warning">Exercise Call</Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default MaturityRedemption;
