import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, CircularProgress, Snackbar, Alert } from '@mui/material';
import { Update, FastForward } from '@mui/icons-material';
import { budgetForecast } from '../../../../../../utils/clientQueries';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/RollingForecastEngine';

const RollingForecastEngine = () => {
    const [months, setMonths] = useState(['Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024']);
    const [rolling, setRolling] = useState(false);
    const [msg, setMsg] = useState('');
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchForecast = async () => {
            setLoading(true);
            try {
                // Mock budgetId for now, or fetch from context
                const data = await budgetForecast({ budgetId: 'default-budget', months: 6 });
                setForecastData(data);
            } catch (error) {
                console.error(error);
                setMsg('Failed to load forecast data');
            } finally {
                setLoading(false);
            }
        };
        fetchForecast();
    }, []);

    const handleRoll = async () => {
        setRolling(true);
        try {
            // Simulate rolling with API call
            const data = await budgetForecast({ budgetId: 'default-budget', months: 6, offset: 1 });
            setForecastData(data);

            const nextMonth = 'Jan 2025'; // Ideally calculated dynamically
            setMonths([...months.slice(1), nextMonth]);
            setMsg('Forecast rolled forward to next period.');
        } catch (error) {
            console.error(error);
            setMsg('Failed to roll forecast.');
        } finally {
            setRolling(false);
        }
    };

    if (loading && !forecastData) return <Box p={3}><CircularProgress /></Box>;

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
                                    <TextField
                                        defaultValue={`$${((forecastData?.revenue?.[i] || 120000) / 1000).toFixed(0)}k`}
                                        size="small" sx={{ width: 80 }}
                                    />
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell>COGS</TableCell>
                            {months.map((_, i) => (
                                <TableCell key={i} align="center">
                                    <TextField
                                        defaultValue={`$${((forecastData?.expenses?.[i] || 40000) / 1000).toFixed(0)}k`}
                                        size="small" sx={{ width: 80 }}
                                    />
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow sx={{ bgcolor: '#e3f2fd' }}>
                            <TableCell><strong>Gross Margin</strong></TableCell>
                            {months.map((_, i) => {
                                const rev = forecastData?.revenue?.[i] || 120000;
                                const exp = forecastData?.expenses?.[i] || 40000;
                                return <TableCell key={i} align="center"><strong>{((rev - exp) / 1000).toFixed(0)}k</strong></TableCell>
                            })}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Snackbar open={!!msg} autoHideDuration={3000} onClose={() => setMsg('')}>
                <Alert severity={msg.includes('Failed') ? 'error' : 'success'} onClose={() => setMsg('')}>{msg}</Alert>
            </Snackbar>
        </Box>
    );
};

export default RollingForecastEngine;
