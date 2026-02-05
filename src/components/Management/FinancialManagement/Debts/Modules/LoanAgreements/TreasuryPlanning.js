import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Card,
    CardContent
} from '@mui/material';

const TreasuryPlanning = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Treasury & Cash Planning</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Projected Cash Outflows (Next 6 Months)</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Month</TableCell>
                                        <TableCell align="right">Principal</TableCell>
                                        <TableCell align="right">Interest</TableCell>
                                        <TableCell align="right">Fees</TableCell>
                                        <TableCell align="right">Total Outflow</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Nov 2023</TableCell>
                                        <TableCell align="right">50,000</TableCell>
                                        <TableCell align="right">12,500</TableCell>
                                        <TableCell align="right">-</TableCell>
                                        <TableCell align="right">62,500</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Dec 2023</TableCell>
                                        <TableCell align="right">50,000</TableCell>
                                        <TableCell align="right">12,400</TableCell>
                                        <TableCell align="right">1,000</TableCell>
                                        <TableCell align="right">63,400</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Jan 2024</TableCell>
                                        <TableCell align="right">50,000</TableCell>
                                        <TableCell align="right">12,300</TableCell>
                                        <TableCell align="right">-</TableCell>
                                        <TableCell align="right">62,300</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="subtitle2" color="textSecondary">Next Major Outflow</Typography>
                            <Typography variant="h4">$ 62,500</Typography>
                            <Typography variant="body2">Due: Nov 15</Typography>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="textSecondary">Liquidity Impact</Typography>
                            <Typography variant="body2" paragraph>
                                The scheduled repayments will consume approximately <strong>2.5%</strong> of current unrestricted cash reserves.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TreasuryPlanning;
