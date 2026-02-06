import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, CircularProgress, Snackbar, Alert } from '@mui/material';
import { Update, FastForward } from '@mui/icons-material';

const RollingForecastEngine = () => {
    const [months, setMonths] = useState(['Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024']);
    const [rolling, setRolling] = useState(false);
    const [msg, setMsg] = useState('');

    const handleRoll = () => {
        setRolling(true);
        setTimeout(() => {
            const nextMonth = 'Jan 2025';
            setMonths([...months.slice(1), nextMonth]);
            setRolling(false);
            setMsg('Forecast rolled forward to next period.');
        }, 1500);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Update color="primary" /> Rolling Forecast Engine (18 Months)
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={rolling ? <CircularProgress size={20} color="inherit" /> : <FastForward />}
                    onClick={handleRoll}
                    disabled={rolling}
                >
                    {rolling ? 'Processing...' : 'Roll Forward'}
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Line Item</TableCell>
                            {months.map(m => <TableCell key={m} align="center">{m}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Revenue</TableCell>
                            {months.map((_, i) => (
                                <TableCell key={i} align="center">
                                    <TextField defaultValue={120 + i * 5 + 'k'} size="small" sx={{ width: 80 }} />
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell>COGS</TableCell>
                            {months.map((_, i) => (
                                <TableCell key={i} align="center">
                                    <TextField defaultValue={40 + i * 2 + 'k'} size="small" sx={{ width: 80 }} />
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow sx={{ bgcolor: '#e3f2fd' }}>
                            <TableCell><strong>Gross Margin</strong></TableCell>
                            {months.map((_, i) => (
                                <TableCell key={i} align="center"><strong>{80 + i * 3}k</strong></TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Snackbar open={!!msg} autoHideDuration={3000} onClose={() => setMsg('')}>
                <Alert severity="success">{msg}</Alert>
            </Snackbar>
        </Box>
    );
};

export default RollingForecastEngine;
