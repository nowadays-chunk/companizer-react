import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton } from '@mui/material';
import { Assessment, CloudUpload } from '@mui/icons-material';

const TaxAuthorityReporting = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5" fontWeight="600">Tax Authority Reporting</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Generate and file monthly/quarterly withholding returns.
                    </Typography>
                </Box>
                <Button variant="contained" startIcon={<Assessment />}>Create New Return</Button>
            </Box>

            <Paper sx={{ width: '100%', mb: 3, p: 2 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Return Name</TableCell>
                                <TableCell>Jurisdiction</TableCell>
                                <TableCell>Period</TableCell>
                                <TableCell>Due Date</TableCell>
                                <TableCell>Filing Status</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { name: 'Form 1042 (Annual)', jur: 'US - IRS', period: '2023', due: '2024-03-15', status: 'Pending' },
                                { name: 'Form 27Q (Quarterly)', jur: 'India - IT', period: 'Q4 2023', due: '2024-01-31', status: 'Filed' },
                                { name: 'CT61 (Quarterly)', jur: 'UK - HMRC', period: 'Q4 2023', due: '2024-01-14', status: 'Filed' },
                            ].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell fontWeight="500">{row.name}</TableCell>
                                    <TableCell>{row.jur}</TableCell>
                                    <TableCell>{row.period}</TableCell>
                                    <TableCell sx={{ color: row.status === 'Pending' ? 'warning.main' : 'text.primary' }}>{row.due}</TableCell>
                                    <TableCell>
                                        <Chip label={row.status} size="small" color={row.status === 'Filed' ? 'success' : 'warning'} />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button size="small" startIcon={row.status === 'Filed' ? undefined : <CloudUpload />}>
                                            {row.status === 'Filed' ? 'View Ack' : 'File Now'}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default TaxAuthorityReporting;
