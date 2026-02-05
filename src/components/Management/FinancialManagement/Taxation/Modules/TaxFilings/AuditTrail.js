import React from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Chip, Tabs, Tab, Stack } from '@mui/material';
import { History, Description } from '@mui/icons-material';

const AuditTrail = () => {
    const [tabValue, setTabValue] = React.useState(0);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Audit Trail & Documentation</Typography>

            <Paper sx={{ width: '100%' }}>
                <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
                    <Tab label="Change Log" icon={<History />} iconPosition="start" />
                    <Tab label="Documents" icon={<Description />} iconPosition="start" />
                </Tabs>

                {tabValue === 0 && (
                    <Box sx={{ p: 3 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Timestamp</strong></TableCell>
                                    <TableCell><strong>User</strong></TableCell>
                                    <TableCell><strong>Action</strong></TableCell>
                                    <TableCell><strong>Item</strong></TableCell>
                                    <TableCell><strong>Changes</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>2024-01-25 14:30</TableCell>
                                    <TableCell>John Smith</TableCell>
                                    <TableCell><Chip label="Approved" color="success" size="small" /></TableCell>
                                    <TableCell>VAT Return Q1 2024</TableCell>
                                    <TableCell>Status: Draft → Approved</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2024-01-24 10:15</TableCell>
                                    <TableCell>Jane Doe</TableCell>
                                    <TableCell><Chip label="Modified" color="info" size="small" /></TableCell>
                                    <TableCell>Tax Rate - VAT Standard</TableCell>
                                    <TableCell>Rate: 19% → 20%</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2024-01-23 16:45</TableCell>
                                    <TableCell>System</TableCell>
                                    <TableCell><Chip label="Calculated" color="primary" size="small" /></TableCell>
                                    <TableCell>Tax Calculation Batch</TableCell>
                                    <TableCell>Processed 1,245 transactions</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2024-01-22 09:00</TableCell>
                                    <TableCell>Sarah Johnson</TableCell>
                                    <TableCell><Chip label="Filed" color="success" size="small" /></TableCell>
                                    <TableCell>WHT Return Jan 2024</TableCell>
                                    <TableCell>Confirmation: TAX-2024-001</TableCell>
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
                                    <TableCell><strong>Document Name</strong></TableCell>
                                    <TableCell><strong>Type</strong></TableCell>
                                    <TableCell><strong>Related To</strong></TableCell>
                                    <TableCell><strong>Uploaded By</strong></TableCell>
                                    <TableCell><strong>Date</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>VAT_Return_Q1_2024.xml</TableCell>
                                    <TableCell><Chip label="Filing" size="small" /></TableCell>
                                    <TableCell>VAT Return Q1 2024</TableCell>
                                    <TableCell>Jane Doe</TableCell>
                                    <TableCell>2024-01-25</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>WHT_Certificates_Jan2024.pdf</TableCell>
                                    <TableCell><Chip label="Certificate" size="small" color="info" /></TableCell>
                                    <TableCell>WHT Return Jan 2024</TableCell>
                                    <TableCell>Sarah Johnson</TableCell>
                                    <TableCell>2024-01-22</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Payment_Confirmation_32780.pdf</TableCell>
                                    <TableCell><Chip label="Payment" size="small" color="success" /></TableCell>
                                    <TableCell>VAT Payment Q1 2024</TableCell>
                                    <TableCell>John Smith</TableCell>
                                    <TableCell>2024-02-10</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                )}
            </Paper>

            <Paper sx={{ p: 3, mt: 3, bgcolor: '#f5f5f5' }}>
                <Typography variant="subtitle2" gutterBottom>Audit Features</Typography>
                <Stack spacing={1}>
                    <Typography variant="body2">✓ Track all tax calculations & adjustments</Typography>
                    <Typography variant="body2">✓ Versioned tax filings</Typography>
                    <Typography variant="body2">✓ Attach invoices, certificates, payment proofs</Typography>
                    <Typography variant="body2">✓ Approval and filing history</Typography>
                    <Typography variant="body2">✓ Audit-ready reports</Typography>
                    <Typography variant="body2">✓ Change log for tax rates and exemptions</Typography>
                </Stack>
            </Paper>
        </Box>
    );
};

export default AuditTrail;
