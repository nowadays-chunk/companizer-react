import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    IconButton,
    TextField,
    MenuItem
} from '@mui/material';
import { Description, Add, Edit, ContentCopy, Publish, GetApp } from '@mui/icons-material';

const AccountTemplates = () => {
    const [templates] = useState([
        { id: 1, name: 'Manufacturing COA', industry: 'Manufacturing', accounts: 342, active: true },
        { id: 2, name: 'Retail COA', industry: 'Retail', accounts: 285, active: true },
        { id: 3, name: 'SaaS Tech COA', industry: 'Technology', accounts: 198, active: true },
        { id: 4, name: 'Professional Services', industry: 'Services', accounts: 156, active: false },
    ]);

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Description color="primary" sx={{ fontSize: 40 }} />
                                <Box>
                                    <Typography variant="h5" fontWeight="bold">Account Templates</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Manage account templates, mass creation, and bulk operations
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Button variant="outlined" startIcon={<Publish />}>Bulk Upload</Button>
                                <Button variant="outlined" startIcon={<GetApp />}>Export Template</Button>
                                <Button variant="contained" startIcon={<Add />}>Create Template</Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Available Templates</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Template Name</TableCell>
                                        <TableCell>Industry</TableCell>
                                        <TableCell>Accounts</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {templates.map((template) => (
                                        <TableRow key={template.id}>
                                            <TableCell><Typography fontWeight="bold">{template.name}</Typography></TableCell>
                                            <TableCell><Chip label={template.industry} size="small" /></TableCell>
                                            <TableCell>{template.accounts}</TableCell>
                                            <TableCell>
                                                <Chip label={template.active ? 'Active' : 'Inactive'} size="small"
                                                    color={template.active ? 'success' : 'default'} />
                                            </TableCell>
                                            <TableCell>
                                                <IconButton size="small" color="primary"><Edit fontSize="small" /></IconButton>
                                                <IconButton size="small"><ContentCopy fontSize="small" /></IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Mass Operations</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                                <Button variant="outlined" fullWidth>Mass Create Accounts</Button>
                                <Button variant="outlined" fullWidth>Bulk Activation</Button>
                                <Button variant="outlined" fullWidth>Bulk Deactivation</Button>
                                <Button variant="outlined" fullWidth>Copy to Entity</Button>
                                <TextField select label="Select Industry" size="small" defaultValue="manufacturing">
                                    <MenuItem value="manufacturing">Manufacturing</MenuItem>
                                    <MenuItem value="retail">Retail</MenuItem>
                                    <MenuItem value="technology">Technology</MenuItem>
                                </TextField>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AccountTemplates;
