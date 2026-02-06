import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Business } from '@mui/icons-material';

const MultiEntityAging = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <Business color="primary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Multi-Entity Aging Report</Typography>
            </Box>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Entity / Warehouse</TableCell>
                                <TableCell align="right">0-30 Days</TableCell>
                                <TableCell align="right">31-60 Days</TableCell>
                                <TableCell align="right">61-90 Days</TableCell>
                                <TableCell align="right">90+ Days</TableCell>
                                <TableCell align="right">Total Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><strong>North America HQ</strong></TableCell>
                                <TableCell align="right">$500,000</TableCell>
                                <TableCell align="right">$250,000</TableCell>
                                <TableCell align="right">$50,000</TableCell>
                                <TableCell align="right">$10,000</TableCell>
                                <TableCell align="right"><strong>$810,000</strong></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ pl: 4 }}>- NYC Warehouse</TableCell>
                                <TableCell align="right">$300,000</TableCell>
                                <TableCell align="right">$150,000</TableCell>
                                <TableCell align="right">$20,000</TableCell>
                                <TableCell align="right">$5,000</TableCell>
                                <TableCell align="right">$475,000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Europe Division</strong></TableCell>
                                <TableCell align="right">$200,000</TableCell>
                                <TableCell align="right">$100,000</TableCell>
                                <TableCell align="right">$80,000</TableCell>
                                <TableCell align="right" sx={{ color: 'error.main', fontWeight: 'bold' }}>$40,000</TableCell>
                                <TableCell align="right"><strong>$420,000</strong></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default MultiEntityAging;
