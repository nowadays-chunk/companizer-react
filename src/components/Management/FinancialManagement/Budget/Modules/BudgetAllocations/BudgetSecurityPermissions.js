import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import { Security } from '@mui/icons-material';

const BudgetSecurityPermissions = () => {
    const roles = ['Admin', 'Finance Manager', 'Dept Head', 'Viewer'];
    const permissions = ['Create Budget', 'Approve Budget', 'View Sensitive Salaries', 'Edit Revisions'];

    // Matrix state: true/false for each role/permission combo. 
    // Initializing with some dummy logic
    const [matrix, setMatrix] = useState(() => {
        const initial = {};
        roles.forEach((r, rIdx) => {
            permissions.forEach((p, pIdx) => {
                const key = `${r}-${p}`;
                if (r === 'Admin') initial[key] = true;
                else if (r === 'Viewer' && p.startsWith('View')) initial[key] = true;
                else if (rIdx < 2 && pIdx < 3) initial[key] = true;
                else initial[key] = false;
            });
        });
        return initial;
    });

    const handleToggle = (r, p) => {
        // Admin permissions are locked for demo
        if (r === 'Admin') return;
        const key = `${r}-${p}`;
        setMatrix({ ...matrix, [key]: !matrix[key] });
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Security color="primary" /> Security & Permission Matrix
            </Typography>

            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Permission / Role</TableCell>
                                {roles.map(r => <TableCell key={r} align="center">{r}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {permissions.map((perm) => (
                                <TableRow key={perm}>
                                    <TableCell component="th" scope="row">{perm}</TableCell>
                                    {roles.map((r) => (
                                        <TableCell key={r} align="center">
                                            <Checkbox
                                                checked={matrix[`${r}-${perm}`] || false}
                                                onChange={() => handleToggle(r, perm)}
                                                disabled={r === 'Admin'}
                                                color={r === 'Admin' ? 'default' : 'primary'}
                                            />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography variant="caption" sx={{ p: 1, display: 'block', color: 'text.secondary' }}>* Admin permissions are locked by system policy.</Typography>
            </Paper>
        </Box>
    );
};

export default BudgetSecurityPermissions;
