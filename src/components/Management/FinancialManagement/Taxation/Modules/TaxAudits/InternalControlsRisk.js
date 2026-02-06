import React from 'react';
import { Box, Typography, Paper, Grid, LinearProgress, Table, TableHead, TableRow, TableCell, TableBody, Chip } from '@mui/material';

const risks = [
    { area: 'Transfer Pricing', risk: 'High', score: 85, controls: 'Weak' },
    { area: 'VAT Compliance', risk: 'Low', score: 20, controls: 'Strong' },
    { area: 'R&D Credits', risk: 'Medium', score: 45, controls: 'Moderate' },
];

const InternalControlsRisk = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Internal Controls & Risk Management</Typography>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Audit Risk Heatmap</Typography>
                <Grid container spacing={3}>
                    {risks.map((item) => (
                        <Grid item xs={12} key={item.area}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography>{item.area}</Typography>
                                <Typography fontWeight="bold" color={item.risk === 'High' ? 'error' : item.risk === 'Medium' ? 'warning.main' : 'success.main'}>
                                    {item.risk} ({item.score}/100)
                                </Typography>
                            </Box>
                            <LinearProgress
                                variant="determinate"
                                value={item.score}
                                color={item.risk === 'High' ? 'error' : item.risk === 'Medium' ? 'warning' : 'success'}
                                sx={{ height: 10, borderRadius: 5 }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Paper>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Risk Area</TableCell>
                            <TableCell>Control Efficacy</TableCell>
                            <TableCell>Recommendation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {risks.map((row) => (
                            <TableRow key={row.area}>
                                <TableCell>{row.area}</TableCell>
                                <TableCell>
                                    <Chip label={row.controls} color={row.controls === 'Strong' ? 'success' : row.controls === 'Weak' ? 'error' : 'warning'} size="small" />
                                </TableCell>
                                <TableCell>
                                    {row.controls === 'Weak' ? 'Implement automated validation' : row.controls === 'Moderate' ? 'Review manual processes' : 'Maintain current controls'}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default InternalControlsRisk;
