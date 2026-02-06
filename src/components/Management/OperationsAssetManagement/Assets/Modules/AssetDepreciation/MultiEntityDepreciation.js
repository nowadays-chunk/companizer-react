import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Language } from '@mui/icons-material';

const MultiEntityDepreciation = () => {
    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" mb={3}>
                <Language color="primary" sx={{ fontSize: 30, mr: 2 }} />
                <Typography variant="h4">Consolidated Depreciation</Typography>
            </Box>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Entity</TableCell>
                                <TableCell>Currency</TableCell>
                                <TableCell align="right">Total Assets Cost</TableCell>
                                <TableCell align="right">YTD Depreciation (Local)</TableCell>
                                <TableCell align="right">YTD Depreciation (USD)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>US Head Office</TableCell>
                                <TableCell>USD</TableCell>
                                <TableCell align="right">$50,000,000</TableCell>
                                <TableCell align="right">$2,500,000</TableCell>
                                <TableCell align="right">$2,500,000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>UK Branch</TableCell>
                                <TableCell>GBP</TableCell>
                                <TableCell align="right">£10,000,000</TableCell>
                                <TableCell align="right">£800,000</TableCell>
                                <TableCell align="right">$1,000,000 (est)</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default MultiEntityDepreciation;
