import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Chip,
    useTheme
} from '@mui/material';
import { TableContainer } from '@mui/material';

const ReconciliationStatus = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader title="Transfer Reconciliation" />
                <CardContent>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Transfer Ref</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Source Status</TableCell>
                                    <TableCell>Dest Status</TableCell>
                                    <TableCell>Global Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>TR-8821</TableCell>
                                    <TableCell>Jan 12</TableCell>
                                    <TableCell><Chip label="Matched" color="success" size="small" /></TableCell>
                                    <TableCell><Chip label="Matched" color="success" size="small" /></TableCell>
                                    <TableCell><Chip label="Fully Reconciled" color="primary" size="small" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>TR-8822</TableCell>
                                    <TableCell>Jan 15</TableCell>
                                    <TableCell><Chip label="Matched" color="success" size="small" /></TableCell>
                                    <TableCell><Chip label="Pending" color="warning" size="small" /></TableCell>
                                    <TableCell><Chip label="In-Transit" size="small" /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ReconciliationStatus;
