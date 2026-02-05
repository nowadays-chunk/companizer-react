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
    Paper,
    Checkbox,
    useTheme
} from '@mui/material';

export const fieldsConfig = {
    role: { label: 'Role', type: 'select', options: [{ id: 'admin', label: 'Admin' }, { id: 'manager', label: 'Manager' }, { id: 'user', label: 'User' }] },
    can_close: { label: 'Can Close', type: 'checkbox' },
    can_reopen: { label: 'Can Reopen', type: 'checkbox' },
    can_post_closed: { label: 'Can Post to Closed', type: 'checkbox' }
};

export const entityName = 'Period Permission';

const PeriodSecurity = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Security & Permissions"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <CardContent>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableHead>
                                <TableRow sx={{ bgcolor: theme.palette.action.hover }}>
                                    <TableCell>Role</TableCell>
                                    <TableCell align="center">Soft Close</TableCell>
                                    <TableCell align="center">Hard Close</TableCell>
                                    <TableCell align="center">Reopen</TableCell>
                                    <TableCell align="center">Post to Closed</TableCell>
                                    <TableCell align="center">Audit Only Access</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'medium' }}>Administrator</TableCell>
                                    <TableCell align="center"><Checkbox checked readOnly color="success" /></TableCell>
                                    <TableCell align="center"><Checkbox checked readOnly color="success" /></TableCell>
                                    <TableCell align="center"><Checkbox checked readOnly color="success" /></TableCell>
                                    <TableCell align="center"><Checkbox checked readOnly color="success" /></TableCell>
                                    <TableCell align="center"><Checkbox color="default" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'medium' }}>Accounting Manager</TableCell>
                                    <TableCell align="center"><Checkbox checked readOnly color="success" /></TableCell>
                                    <TableCell align="center"><Checkbox disabled /></TableCell>
                                    <TableCell align="center"><Checkbox disabled /></TableCell>
                                    <TableCell align="center"><Checkbox checked readOnly color="success" /></TableCell>
                                    <TableCell align="center"><Checkbox disabled /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'medium' }}>Staff Accountant</TableCell>
                                    <TableCell align="center"><Checkbox disabled /></TableCell>
                                    <TableCell align="center"><Checkbox disabled /></TableCell>
                                    <TableCell align="center"><Checkbox disabled /></TableCell>
                                    <TableCell align="center"><Checkbox disabled /></TableCell>
                                    <TableCell align="center"><Checkbox disabled /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'medium' }}>Auditor</TableCell>
                                    <TableCell align="center"><Checkbox disabled /></TableCell>
                                    <TableCell align="center"><Checkbox disabled /></TableCell>
                                    <TableCell align="center"><Checkbox disabled /></TableCell>
                                    <TableCell align="center"><Checkbox disabled /></TableCell>
                                    <TableCell align="center"><Checkbox checked readOnly color="success" /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PeriodSecurity;
