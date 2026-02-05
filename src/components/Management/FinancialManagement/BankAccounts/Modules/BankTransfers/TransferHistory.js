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
    IconButton,
    Button,
    Stack,
    TextField,
    Paper,
    useTheme
} from '@mui/material';

import { TableContainer } from '@mui/material';

import { Visibility, Download } from '@mui/icons-material';

const TransferHistory = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Audit Log & History"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                    action={
                        <Stack direction="row" spacing={2}>
                            <TextField size="small" placeholder="Search Reference..." />
                            <Button variant="outlined" startIcon={<Download />}>Export Log</Button>
                        </Stack>
                    }
                />
                <CardContent>
                    <TableContainer component={Paper} variant="outlined">
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ bgcolor: theme.palette.action.hover }}>
                                    <TableCell>Timestamp</TableCell>
                                    <TableCell>User</TableCell>
                                    <TableCell>Action</TableCell>
                                    <TableCell>Details</TableCell>
                                    <TableCell>View</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Feb 05, 14:10</TableCell>
                                    <TableCell>system_bot</TableCell>
                                    <TableCell>Status Change</TableCell>
                                    <TableCell>Executed -&gt; Completed</TableCell>
                                    <TableCell><IconButton size="small"><Visibility /></IconButton></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Feb 05, 10:45</TableCell>
                                    <TableCell>Sarah Connor</TableCell>
                                    <TableCell>Approval</TableCell>
                                    <TableCell>Approved Transfer #1024</TableCell>
                                    <TableCell><IconButton size="small"><Visibility /></IconButton></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TransferHistory;
