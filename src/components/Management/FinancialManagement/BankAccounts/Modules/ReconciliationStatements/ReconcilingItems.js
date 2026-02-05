import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Chip,
    Paper,
    useTheme
} from '@mui/material';

const ReconcilingItems = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Reconciling Items Management"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                    action={<Button variant="contained" color="warning">Create Adjustment Journal</Button>}
                />
                <CardContent>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableHead>
                                <TableRow sx={{ bgcolor: theme.palette.action.hover }}>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell align="right">Amount</TableCell>
                                    <TableCell>Aging</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>2026-01-05</TableCell>
                                    <TableCell>Outstanding Check #4421</TableCell>
                                    <TableCell>Check</TableCell>
                                    <TableCell align="right">-1,200.00</TableCell>
                                    <TableCell>28 Days</TableCell>
                                    <TableCell><Chip label="Open" color="error" size="small" /></TableCell>
                                    <TableCell><Button size="small">Void</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2026-01-20</TableCell>
                                    <TableCell>Deposit in Transit</TableCell>
                                    <TableCell>Deposit</TableCell>
                                    <TableCell align="right">5,400.00</TableCell>
                                    <TableCell>13 Days</TableCell>
                                    <TableCell><Chip label="Verified" color="info" size="small" /></TableCell>
                                    <TableCell><Button size="small">Details</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2026-01-29</TableCell>
                                    <TableCell>Unidentified Wire Transfer</TableCell>
                                    <TableCell>Suspense</TableCell>
                                    <TableCell align="right">950.00</TableCell>
                                    <TableCell>4 Days</TableCell>
                                    <TableCell><Chip label="Investigating" color="warning" size="small" /></TableCell>
                                    <TableCell><Button size="small">Reclass</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ReconcilingItems;
