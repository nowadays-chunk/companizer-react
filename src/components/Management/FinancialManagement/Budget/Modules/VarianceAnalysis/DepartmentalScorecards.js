import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Rating, TableSortLabel } from '@mui/material';
import { Score } from '@mui/icons-material';

const DepartmentalScorecards = () => {
    const [scores, setScores] = useState([
        { id: 1, dept: 'Sales', budgetAdherence: 4, efficiency: 5, growth: 2, total: 'B+' },
        { id: 2, dept: 'Engineering', budgetAdherence: 3, efficiency: 4, growth: 4, total: 'A-' },
        { id: 3, dept: 'Marketing', budgetAdherence: 2, efficiency: 3, growth: 5, total: 'B' },
        { id: 4, dept: 'HR', budgetAdherence: 5, efficiency: 5, growth: 3, total: 'A' },
    ]);
    const [order, setOrder] = useState('asc');

    const handleSort = () => {
        const isAsc = order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        const sorted = [...scores].sort((a, b) => {
            return isAsc
                ? a.dept.localeCompare(b.dept)
                : b.dept.localeCompare(a.dept);
        });
        setScores(sorted);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Score color="primary" /> Departmental Scorecards
            </Typography>

            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <TableSortLabel active direction={order} onClick={handleSort}>
                                        Department
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>Budget Adherence</TableCell>
                                <TableCell>Operational Efficiency</TableCell>
                                <TableCell>Strategic Growth</TableCell>
                                <TableCell align="center">Overall Grade</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {scores.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{row.dept}</TableCell>
                                    <TableCell><Rating value={row.budgetAdherence} readOnly size="small" /></TableCell>
                                    <TableCell><Rating value={row.efficiency} readOnly size="small" /></TableCell>
                                    <TableCell><Rating value={row.growth} readOnly size="small" /></TableCell>
                                    <TableCell align="center">
                                        <Typography fontWeight="bold" color={['A', 'A-'].includes(row.total) ? 'success.main' : 'warning.main'}>
                                            {row.total}
                                        </Typography>
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

export default DepartmentalScorecards;
