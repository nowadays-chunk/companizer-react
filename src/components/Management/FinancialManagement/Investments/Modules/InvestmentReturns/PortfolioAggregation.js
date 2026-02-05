import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Chip, LinearProgress, Button, IconButton, Collapse, Stack } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp, Download, PieChart as PieChartIcon } from '@mui/icons-material';

const PortfolioAggregation = () => {
    const [expandedRow, setExpandedRow] = useState(null);
    
    const handleRowClick = (assetClass) => {
        setExpandedRow(expandedRow === assetClass ? null : assetClass);
    };
    
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Portfolio Aggregation</Typography>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Returns by Asset Class (YTD)</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Asset Class</TableCell>
                            <TableCell align="right">Portfolio Weight</TableCell>
                            <TableCell align="right">Invested Capital</TableCell>
                            <TableCell align="right">Total Return</TableCell>
                            <TableCell align="right">Contribution</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Fixed Income (Bonds)</TableCell>
                            <TableCell align="right">45%</TableCell>
                            <TableCell align="right">$ 4,500,000</TableCell>
                            <TableCell align="right" sx={{ color: 'success.main' }}>+ 4.2%</TableCell>
                            <TableCell align="right">+ 1.89%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Equity (Public)</TableCell>
                            <TableCell align="right">30%</TableCell>
                            <TableCell align="right">$ 3,000,000</TableCell>
                            <TableCell align="right" sx={{ color: 'success.main' }}>+ 8.5%</TableCell>
                            <TableCell align="right">+ 2.55%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Cash & Equivalents</TableCell>
                            <TableCell align="right">25%</TableCell>
                            <TableCell align="right">$ 2,500,000</TableCell>
                            <TableCell align="right" sx={{ color: 'success.main' }}>+ 2.1%</TableCell>
                            <TableCell align="right">+ 0.52%</TableCell>
                        </TableRow>
                        <TableRow sx={{ bgcolor: 'action.hover' }}>
                            <TableCell><strong>Total Portfolio</strong></TableCell>
                            <TableCell align="right"><strong>100%</strong></TableCell>
                            <TableCell align="right"><strong>$ 10,000,000</strong></TableCell>
                            <TableCell align="right" sx={{ color: 'primary.main' }}><strong>+ 4.96%</strong></TableCell>
                            <TableCell align="right">-</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default PortfolioAggregation;
