import React from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Chip, Button, Stepper, Step, StepLabel } from '@mui/material';

const ReturnApprovals = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Return Approvals & Exceptions</Typography>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Pending Approval: Valuation Adjustment #402</Typography>
                <Stepper activeStep={1} alternativeLabel sx={{ mb: 3 }}>
                    <Step><StepLabel>Adjustment Proposed</StepLabel></Step>
                    <Step><StepLabel>Reviewer Check</StepLabel></Step>
                    <Step><StepLabel>Final Approval</StepLabel></Step>
                </Stepper>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                    <Button color="error">Reject</Button>
                    <Button variant="contained">Approve</Button>
                </Box>
            </Paper>

            <Typography variant="h6" gutterBottom>Audit Trail (Recent Adjustments)</Typography>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>User</TableCell>
                            <TableCell>Action</TableCell>
                            <TableCell>Detail</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>#401</TableCell>
                            <TableCell>2025-07-01 14:20</TableCell>
                            <TableCell>J.Doe</TableCell>
                            <TableCell>Manual Price Override</TableCell>
                            <TableCell>Bond XYZ Price: 98 -{'>'} 99 (Illiquid)</TableCell>
                            < TableCell > <Chip label="Approved" color="success" size="small" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>#399</TableCell>
                            <TableCell>2025-06-28 09:15</TableCell>
                            <TableCell>System</TableCell>
                            <TableCell>FX Rate Update</TableCell>
                            <TableCell>Batch import from Bloomberg</TableCell>
                            <TableCell><Chip label="Auto" size="small" /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default ReturnApprovals;
