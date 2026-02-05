import React, { useState } from 'react';
import { Box, Typography, Paper, Tabs, Tab, Button, Table, TableHead, TableRow, TableCell, TableBody, Chip } from '@mui/material';
import { Assessment, Download } from '@mui/icons-material';

const ComplianceReporting = () => {
    const [tabValue, setTabValue] = useState(0);

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Compliance & Regulatory Reporting</Typography>
                <Button variant="contained" startIcon={<Download />}>Export All Reports</Button>
            </Box>

            <Paper sx={{ width: '100%' }}>
                <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
                    <Tab label="VAT/GST Reports" />
                    <Tab label="WHT Reports" />
                    <Tab label="Income Tax" />
                    <Tab label="Audit Support" />
                </Tabs>

                {tabValue === 0 && (
                    <Box sx={{ p: 3 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Report Name</strong></TableCell>
                                    <TableCell><strong>Period</strong></TableCell>
                                    <TableCell><strong>Format</strong></TableCell>
                                    <TableCell><strong>Status</strong></TableCell>
                                    <TableCell align="right"><strong>Actions</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>VAT Summary Report</TableCell>
                                    <TableCell>Q1 2024</TableCell>
                                    <TableCell><Chip label="XML" size="small" /></TableCell>
                                    <TableCell><Chip label="Ready" color="success" size="small" /></TableCell>
                                    <TableCell align="right"><Button size="small" startIcon={<Download />}>Download</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>VAT Detailed Transactions</TableCell>
                                    <TableCell>Q1 2024</TableCell>
                                    <TableCell><Chip label="Excel" size="small" /></TableCell>
                                    <TableCell><Chip label="Ready" color="success" size="small" /></TableCell>
                                    <TableCell align="right"><Button size="small" startIcon={<Download />}>Download</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                )}

                {tabValue === 1 && (
                    <Box sx={{ p: 3 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Report Name</strong></TableCell>
                                    <TableCell><strong>Period</strong></TableCell>
                                    <TableCell><strong>Format</strong></TableCell>
                                    <TableCell><strong>Status</strong></TableCell>
                                    <TableCell align="right"><strong>Actions</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>WHT Certificate Summary</TableCell>
                                    <TableCell>Jan 2024</TableCell>
                                    <TableCell><Chip label="PDF" size="small" /></TableCell>
                                    <TableCell><Chip label="Ready" color="success" size="small" /></TableCell>
                                    <TableCell align="right"><Button size="small" startIcon={<Download />}>Download</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                )}

                {tabValue === 2 && (
                    <Box sx={{ p: 3 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Report Name</strong></TableCell>
                                    <TableCell><strong>Period</strong></TableCell>
                                    <TableCell><strong>Format</strong></TableCell>
                                    <TableCell><strong>Status</strong></TableCell>
                                    <TableCell align="right"><strong>Actions</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Corporate Income Tax Schedule</TableCell>
                                    <TableCell>2023</TableCell>
                                    <TableCell><Chip label="PDF" size="small" /></TableCell>
                                    <TableCell><Chip label="Ready" color="success" size="small" /></TableCell>
                                    <TableCell align="right"><Button size="small" startIcon={<Download />}>Download</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                )}

                {tabValue === 3 && (
                    <Box sx={{ p: 3 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Report Name</strong></TableCell>
                                    <TableCell><strong>Period</strong></TableCell>
                                    <TableCell><strong>Format</strong></TableCell>
                                    <TableCell><strong>Status</strong></TableCell>
                                    <TableCell align="right"><strong>Actions</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Tax Audit Trail Report</TableCell>
                                    <TableCell>2023</TableCell>
                                    <TableCell><Chip label="Excel" size="small" /></TableCell>
                                    <TableCell><Chip label="Ready" color="success" size="small" /></TableCell>
                                    <TableCell align="right"><Button size="small" startIcon={<Download />}>Download</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default ComplianceReporting;
