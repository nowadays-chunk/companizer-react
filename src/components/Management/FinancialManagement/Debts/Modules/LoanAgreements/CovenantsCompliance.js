import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    LinearProgress
} from '@mui/material';
import { fieldsConfig, collectionName, entityName } from './Modules/General/CovenantsCompliance';

const CovenantsCompliance = () => {
    const covenants = [
        { id: 1, name: 'Debt Service Coverage Ratio', threshold: '> 1.25x', current: '1.45x', status: 'Pass', nextTest: '2023-12-31' },
        { id: 2, name: 'Leverage Ratio (Debt/EBITDA)', threshold: '< 4.0x', current: '3.2x', status: 'Pass', nextTest: '2023-12-31' },
        { id: 3, name: 'Current Ratio', threshold: '> 1.0x', current: '1.1x', status: 'Warning', nextTest: '2023-12-31' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5">Covenants & Compliance</Typography>
                <Button variant="contained" color="secondary">Upload Compliance Certificate</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Financial Covenants Status</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Covenant</TableCell>
                                        <TableCell>Threshold</TableCell>
                                        <TableCell>Current Reporting</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Next Test Date</TableCell>
                                        <TableCell>Headroom</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {covenants.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell fontWeight="bold">{item.name}</TableCell>
                                            <TableCell>{item.threshold}</TableCell>
                                            <TableCell>{item.current}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={item.status}
                                                    color={item.status === 'Pass' ? 'success' : 'warning'}
                                                    size="small"
                                                />
                                            </TableCell>
                                            <TableCell>{item.nextTest}</TableCell>
                                            <TableCell sx={{ width: 150 }}>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={item.status === 'Pass' ? 80 : 95}
                                                    color={item.status === 'Pass' ? 'success' : 'warning'}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Non-Financial Covenants</Typography>
                        <ul>
                            <li><Typography>Submission of Audited Financials (Annual) - <b>Pending</b></Typography></li>
                            <li><Typography>Maintenance of Insurance - <b>Compliant</b></Typography></li>
                            <li><Typography>Change of Control Notice - <b>Compliant</b></Typography></li>
                        </ul>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Breach Management</Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            No active covenant breaches reported.
                        </Typography>
                        <Button variant="outlined" color="error">Report a Breach</Button>
                        <Button variant="outlined" sx={{ ml: 2 }}>Request Waiver</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CovenantsCompliance;
