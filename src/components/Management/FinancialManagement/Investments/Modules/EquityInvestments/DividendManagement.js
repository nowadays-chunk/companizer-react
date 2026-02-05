import React from 'react';
import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Button, Card, CardContent } from '@mui/material';
import { AttachMoney, CalendarToday } from '@mui/icons-material';

const DividendManagement = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Dividend Management</Typography>
                <Button variant="contained" startIcon={<AttachMoney />}>Record New Dividend</Button>
            </Box>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>YTD Dividend Income</Typography>
                            <Typography variant="h4">$ 1,250,000</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Receivable Outstanding</Typography>
                            <Typography variant="h4">$ 450,000</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Average Yield</Typography>
                            <Typography variant="h4">4.2%</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper>
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6">Dividend History & Receivables</Typography>
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                            <TableRow>
                                <TableCell>Declaration Date</TableCell>
                                <TableCell>Investee</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell align="right">Amount Declared</TableCell>
                                <TableCell align="right">WHT %</TableCell>
                                <TableCell align="right">Net Receivable</TableCell>
                                <TableCell>Payment Date</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>2025-05-15</TableCell>
                                <TableCell>TechGlobal Inc.</TableCell>
                                <TableCell>Regular</TableCell>
                                <TableCell align="right">$ 500,000</TableCell>
                                <TableCell align="right">15%</TableCell>
                                <TableCell align="right">$ 425,000</TableCell>
                                <TableCell>2025-06-01</TableCell>
                                <TableCell align="center"><Chip label="Received" color="success" size="small" /></TableCell>
                                <TableCell><Button size="small">Details</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2025-08-01</TableCell>
                                <TableCell>GreenEnergy Ltd</TableCell>
                                <TableCell>Special</TableCell>
                                <TableCell align="right">$ 200,000</TableCell>
                                <TableCell align="right">0%</TableCell>
                                <TableCell align="right">$ 200,000</TableCell>
                                <TableCell>2025-09-15</TableCell>
                                <TableCell align="center"><Chip label="Pending" color="warning" size="small" /></TableCell>
                                <TableCell><Button size="small">Mark Paid</Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default DividendManagement;
