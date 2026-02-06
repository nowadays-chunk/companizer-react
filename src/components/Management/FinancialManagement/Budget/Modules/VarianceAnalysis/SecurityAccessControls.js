import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import { Security } from '@mui/icons-material';

const SecurityAccessControls = () => {
    const roles = ['CFO', 'Controller', 'Dept Lead', 'Analyst', 'Viewer'];
    const perms = ['View Sensitive Variances', 'Approve Explanations', 'Edit Thresholds', 'Run Calculation Engine'];

    // Initial state simulation
    const [matrix, setMatrix] = useState({});

    const handleChange = (perm, role) => {
        const key = `${perm}-${role}`;
        setMatrix({ ...matrix, [key]: !matrix[key] });
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Security color="primary" /> Security & Access Controls
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
                            {perms.map((perm) => (
                                <TableRow key={perm}>
                                    <TableCell component="th" scope="row">{perm}</TableCell>
                                    {roles.map((r, idx) => {
                                        const key = `${perm}-${r}`;
                                        // Auto-check for first two roles (CFO/Controller)
                                        const isChecked = idx < 2 || matrix[key];
                                        return (
                                            <TableCell key={idx} align="center">
                                                <Checkbox
                                                    checked={!!isChecked}
                                                    onChange={() => handleChange(perm, r)}
                                                    disabled={idx < 2}
                                                />
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default SecurityAccessControls;
