import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Divider
} from '@mui/material';
import { Calculate, Info } from '@mui/icons-material';
import { fieldsConfig, collectionName, entityName } from './Modules/General/InterestCalculationEngine';

const InterestCalculationEngine = () => {
    const [calculation, setCalculation] = useState(null);

    const handleCalculate = () => {
        // Mock calculation result
        setCalculation({
            principal: 1000000,
            rate: 5.5,
            days: 30,
            convention: 'ACT/360',
            interest: 4583.33,
            formula: '1,000,000 * 5.5% * (30/360)'
        });
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Calculate sx={{ mr: 2, fontSize: 32, color: 'primary.main' }} />
                <Typography variant="h5">Interest Calculation Engine</Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>Calculation Parameters</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Principal Amount" type="number" defaultValue="1000000" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Annual Interest Rate (%)" type="number" defaultValue="5.5" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Rate Type</InputLabel>
                                    <Select defaultValue="fixed" label="Rate Type">
                                        <MenuItem value="fixed">Fixed</MenuItem>
                                        <MenuItem value="floating">Floating (SOFR + Margin)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Day Count Convention</InputLabel>
                                    <Select defaultValue="ACT/360" label="Day Count Convention">
                                        <MenuItem value="30/360">30/360 (US)</MenuItem>
                                        <MenuItem value="30E/360">30E/360 (Eurobond)</MenuItem>
                                        <MenuItem value="ACT/360">Actual/360</MenuItem>
                                        <MenuItem value="ACT/365">Actual/365 (Fixed)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth type="date" label="Period Start" InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth type="date" label="Period End" InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth size="large" onClick={handleCalculate}>
                                    Calculate Interest
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={7}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>Calculation Result</Typography>
                        {calculation ? (
                            <>
                                <Box sx={{ bgcolor: '#e3f2fd', p: 3, borderRadius: 2, mb: 3, textAlign: 'center' }}>
                                    <Typography variant="subtitle2" color="primary">Calculated Interest</Typography>
                                    <Typography variant="h3" fontWeight="bold">$ {calculation.interest.toLocaleString()}</Typography>
                                    <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
                                        Formula: {calculation.formula}
                                    </Typography>
                                </Box>

                                <Divider sx={{ my: 2 }} />

                                <Typography variant="subtitle2" gutterBottom>Daily Accrual Schedule (First 5 days)</Typography>
                                <TableContainer>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Date</TableCell>
                                                <TableCell align="right">Principal</TableCell>
                                                <TableCell align="right">Rate</TableCell>
                                                <TableCell align="right">Daily Accrual</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[1, 2, 3, 4, 5].map((day) => (
                                                <TableRow key={day}>
                                                    <TableCell>Day {day}</TableCell>
                                                    <TableCell align="right">{calculation.principal.toLocaleString()}</TableCell>
                                                    <TableCell align="right">{calculation.rate}%</TableCell>
                                                    <TableCell align="right">{(calculation.interest / 30).toFixed(2)}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </>
                        ) : (
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 200, opacity: 0.6 }}>
                                <Info sx={{ fontSize: 40, mb: 1 }} />
                                <Typography>Enter parameters and hit Calculate to see results</Typography>
                            </Box>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InterestCalculationEngine;
