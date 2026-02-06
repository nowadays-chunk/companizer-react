import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';

const DepreciationSchedule = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4">Depreciation Schedule</Typography>
                <Button variant="contained" startIcon={<CalendarToday />}>Run Monthly Posted</Button>
            </Box>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Period</TableCell>
                                <TableCell>Fiscal Year</TableCell>
                                <TableCell align="right">Opening NBV</TableCell>
                                <TableCell align="right">Depreciation Amount</TableCell>
                                <TableCell align="right">Closing NBV</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Jan 2024</TableCell>
                                <TableCell>FY24</TableCell>
                                <TableCell align="right">$100,000.00</TableCell>
                                <TableCell align="right">$833.33</TableCell>
                                <TableCell align="right">$99,166.67</TableCell>
                                <TableCell>Posted</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Feb 2024</TableCell>
                                <TableCell>FY24</TableCell>
                                <TableCell align="right">$99,166.67</TableCell>
                                <TableCell align="right">$833.33</TableCell>
                                <TableCell align="right">$98,333.34</TableCell>
                                <TableCell>Posted</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Mar 2024</TableCell>
                                <TableCell>FY24</TableCell>
                                <TableCell align="right">$98,333.34</TableCell>
                                <TableCell align="right">$833.33</TableCell>
                                <TableCell align="right">$97,500.01</TableCell>
                                <TableCell>Scheduled</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default DepreciationSchedule;
