import React from 'react';
import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const CurrentNonCurrentClassification = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Current vs Non-Current Classification</Typography>
            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Reclassification Journal Preview</Typography>
                <Typography variant="body2" paragraph>
                    System automatically moves LT Debt to ST Debt when maturity falls within 12 months.
                </Typography>
                <TableContainer sx={{ border: '1px solid #ddd', borderRadius: 1 }}>
                    <Table size="small">
                        <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                            <TableRow>
                                <TableCell>Account</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell align="right">Debit</TableCell>
                                <TableCell align="right">Credit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>2500-00 LT Debt</TableCell>
                                <TableCell>Reclass Term Loan A to Current</TableCell>
                                <TableCell align="right">600,000.00</TableCell>
                                <TableCell align="right">-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2100-00 ST Debt</TableCell>
                                <TableCell>Reclass Term Loan A to Current</TableCell>
                                <TableCell align="right">-</TableCell>
                                <TableCell align="right">600,000.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="contained" sx={{ mt: 2 }}>Post Reclassification</Button>
            </Paper>
        </Box>
    );
};
export default CurrentNonCurrentClassification;
