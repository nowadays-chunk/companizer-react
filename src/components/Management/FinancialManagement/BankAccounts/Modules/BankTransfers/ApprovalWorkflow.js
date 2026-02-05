import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Chip,
    Paper,
    useTheme,
    Typography
} from '@mui/material';

// Helper component for TableContainer since it was missing in imports
import { TableContainer } from '@mui/material';

const ApprovalWorkflow = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Approval Workflow"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                    action={<Button color="error" variant="outlined">Emergency Override</Button>}
                />
                <CardContent>
                    <TableContainer component={Paper} variant="outlined" sx={{ mb: 4 }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ bgcolor: theme.palette.action.hover }}>
                                    <TableCell>Request Date</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Requester</TableCell>
                                    <TableCell>Required Level</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Feb 05, 10:30 AM</TableCell>
                                    <TableCell>External Wire</TableCell>
                                    <TableCell>$50,000.00</TableCell>
                                    <TableCell>John Doe</TableCell>
                                    <TableCell><Chip label="CFO Level" color="secondary" size="small" /></TableCell>
                                    <TableCell>
                                        <Button size="small" variant="contained" color="success" sx={{ mr: 1 }}>Approve</Button>
                                        <Button size="small" variant="outlined" color="error">Reject</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ApprovalWorkflow;
