import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Chip, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Stack, Alert, Stepper, Step, StepLabel } from '@mui/material';
import { CheckCircle, Cancel, Comment } from '@mui/icons-material';

const WorkflowApprovals = () => {
    const [commentDialog, setCommentDialog] = useState(false);

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Workflow & Approvals</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip label="5 Pending" color="warning" size="small" />
                    <Chip label="18 Approved" color="success" size="small" />
                </Stack>
            </Box>

            <Alert severity="info" sx={{ mb: 3 }}>
                All tax filings and adjustments require approval before submission. Maker/checker separation enforced for amounts exceeding $10,000.
            </Alert>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>Approval Workflow</Typography>
                <Stepper activeStep={1}>
                    <Step><StepLabel>Draft Created</StepLabel></Step>
                    <Step><StepLabel>Tax Manager Review</StepLabel></Step>
                    <Step><StepLabel>CFO Approval</StepLabel></Step>
                    <Step><StepLabel>Filed</StepLabel></Step>
                </Stepper>
            </Paper>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Item</strong></TableCell>
                            <TableCell><strong>Type</strong></TableCell>
                            <TableCell align="right"><strong>Amount</strong></TableCell>
                            <TableCell><strong>Submitted By</strong></TableCell>
                            <TableCell><strong>Date</strong></TableCell>
                            <TableCell><strong>Status</strong></TableCell>
                            <TableCell align="right"><strong>Actions</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>VAT Return Q1 2024</TableCell>
                            <TableCell><Chip label="Filing" size="small" /></TableCell>
                            <TableCell align="right">$32,780</TableCell>
                            <TableCell>Jane Doe</TableCell>
                            <TableCell>2024-01-20</TableCell>
                            <TableCell><Chip label="Pending Approval" color="warning" size="small" /></TableCell>
                            <TableCell align="right">
                                <Button size="small" color="success" startIcon={<CheckCircle />}>Approve</Button>
                                <Button size="small" color="error" startIcon={<Cancel />}>Reject</Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tax Adjustment - Accrual</TableCell>
                            <TableCell><Chip label="Adjustment" size="small" color="info" /></TableCell>
                            <TableCell align="right">$5,200</TableCell>
                            <TableCell>John Smith</TableCell>
                            <TableCell>2024-01-18</TableCell>
                            <TableCell><Chip label="Approved" color="success" size="small" /></TableCell>
                            <TableCell align="right">
                                <Button size="small" startIcon={<Comment />}>View Comments</Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>WHT Payment Authorization</TableCell>
                            <TableCell><Chip label="Payment" size="small" color="warning" /></TableCell>
                            <TableCell align="right">$12,450</TableCell>
                            <TableCell>Sarah Johnson</TableCell>
                            <TableCell>2024-01-19</TableCell>
                            <TableCell><Chip label="Pending Approval" color="warning" size="small" /></TableCell>
                            <TableCell align="right">
                                <Button size="small" color="success" startIcon={<CheckCircle />}>Approve</Button>
                                <Button size="small" color="error" startIcon={<Cancel />}>Reject</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>

            <Dialog open={commentDialog} onClose={() => setCommentDialog(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Add Approval Comment</DialogTitle>
                <DialogContent>
                    <TextField fullWidth multiline rows={4} label="Comment" placeholder="Enter approval or rejection comments..." sx={{ mt: 2 }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setCommentDialog(false)}>Cancel</Button>
                    <Button variant="contained">Submit</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default WorkflowApprovals;
