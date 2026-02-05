import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, LinearProgress } from '@mui/material';
import { PlayArrow, History, Assessment, CheckCircle } from '@mui/icons-material';

const CreditCalculationEngine = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState([
        { id: 'CALC-009', date: '2025-04-15 10:00', target: 'FY2025 Q1', status: 'Completed', amount: '$12,500.00' },
        { id: 'CALC-008', date: '2025-01-15 09:30', target: 'FY2024 Q4', status: 'Completed', amount: '$45,200.00' },
        { id: 'CALC-007', date: '2024-10-15 11:15', target: 'FY2024 Q3', status: 'Warning', amount: '$0.00' },
    ]);

    const handleRunCalculation = () => {
        setIsProcessing(true);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsProcessing(false);
                    // Add new log
                    const newLog = {
                        id: `CALC-0${logs.length + 7}`,
                        date: new Date().toISOString().slice(0, 16).replace('T', ' '),
                        target: 'FY2025 Q2',
                        status: 'Completed',
                        amount: '$18,250.00'
                    };
                    setLogs([newLog, ...logs]);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">Credit Calculation Engine</Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
                Run automated tax credit calculations based on eligible transactions.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom display="flex" alignItems="center">
                            <PlayArrow color="primary" sx={{ mr: 1 }} /> Run Calculation
                        </Typography>
                        <Box component="form" noValidate autoComplete="off">
                            <Box mb={2}>
                                <TextField fullWidth label="Fiscal Year" defaultValue="2025" variant="outlined" margin="dense" />
                            </Box>
                            <Box mb={2}>
                                <TextField fullWidth label="Period" defaultValue="Q1" variant="outlined" margin="dense" />
                            </Box>
                            <Box mb={3}>
                                <TextField fullWidth label="Entity" defaultValue="Global Corp LLC" variant="outlined" margin="dense" />
                            </Box>

                            {isProcessing ? (
                                <Box sx={{ width: '100%', mb: 2 }}>
                                    <LinearProgress variant="determinate" value={progress} />
                                    <Typography variant="caption" color="textSecondary" align="center" display="block" mt={1}>
                                        Processing transaction data... {progress}%
                                    </Typography>
                                </Box>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    size="large"
                                    startIcon={<PlayArrow />}
                                    onClick={handleRunCalculation}
                                >
                                    Start Processing
                                </Button>
                            )}
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 0, height: '100%', overflow: 'hidden' }}>
                        <Box p={3} borderBottom="1px solid" borderColor="divider">
                            <Typography variant="h6" display="flex" alignItems="center">
                                <History color="action" sx={{ mr: 1 }} /> Calculation Logs
                            </Typography>
                        </Box>
                        <TableContainer sx={{ maxHeight: 400 }}>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Run ID</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Target</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell align="right">Credits Found</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {logs.map((row, index) => (
                                        <TableRow key={index} hover selected={index === 0 && row.id.includes(logs.length + 6)}>
                                            <TableCell sx={{ fontFamily: 'monospace' }}>{row.id}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.target}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={row.status}
                                                    color={row.status === 'Completed' ? 'success' : 'warning'}
                                                    size="small"
                                                    variant="outlined"
                                                    icon={row.status === 'Completed' ? <CheckCircle /> : undefined}
                                                />
                                            </TableCell>
                                            <TableCell align="right" sx={{ fontWeight: 600 }}>{row.amount}</TableCell>
                                            <TableCell align="right">
                                                <Button size="small" startIcon={<Assessment />}>Report</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CreditCalculationEngine;
