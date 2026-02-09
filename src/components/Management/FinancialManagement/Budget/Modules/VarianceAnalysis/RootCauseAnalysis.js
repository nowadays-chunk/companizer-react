import React, { useState } from 'react';
import { Box, Typography, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Search, Add } from '@mui/icons-material';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/RootCauseAnalysis';

const RootCauseAnalysis = () => {
    const [causes, setCauses] = useState([
        { id: 1, item: 'Travel Expenses', variance: 4500, cause: 'Unplanned Client Onsite', category: 'Operational' },
        { id: 2, item: 'Software Licenses', variance: -1200, cause: 'Delayed Hiring', category: 'Timing' },
        { id: 3, item: 'Office Supplies', variance: 300, cause: 'Price Increase', category: 'Economic' },
    ]);
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState('All');

    const filteredCauses = filter === 'All' ? causes : causes.filter(c => c.category === filter);

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Search color="primary" /> Root Cause Analysis
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <FormControl size="small" sx={{ minWidth: 120 }}>
                        <InputLabel>Category</InputLabel>
                        <Select value={filter} label="Category" onChange={(e) => setFilter(e.target.value)}>
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Operational">Operational</MenuItem>
                            <MenuItem value="Timing">Timing</MenuItem>
                            <MenuItem value="Economic">Economic</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" startIcon={<Add />} onClick={() => setOpen(true)}>Add Cause</Button>
                </Box>
            </Box>

            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Line Item</TableCell>
                                <TableCell align="right">Variance Impact</TableCell>
                                <TableCell>Identified Root Cause</TableCell>
                                <TableCell>Category</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredCauses.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.item}</TableCell>
                                    <TableCell align="right" sx={{ color: row.variance > 0 ? 'error.main' : 'success.main' }}>
                                        {row.variance > 0 ? '+' : ''}{row.variance}
                                    </TableCell>
                                    <TableCell>{row.cause}</TableCell>
                                    <TableCell>
                                        <Chip label={row.category} size="small" variant="outlined" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Log Root Cause</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2, minWidth: 400 }}>
                    <TextField label="Line Item" />
                    <TextField label="Description" multiline rows={2} />
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select label="Category" defaultValue="">
                            <MenuItem value="Operational">Operational</MenuItem>
                            <MenuItem value="Timing">Timing</MenuItem>
                            <MenuItem value="Economic">Economic</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="contained" onClick={() => setOpen(false)}>Save Log</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default RootCauseAnalysis;
