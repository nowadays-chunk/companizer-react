
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    Autocomplete,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    FormControlLabel,
    Checkbox,
    Chip,
    IconButton
} from '@mui/material';
import {
    GroupWork,
    Public,
    Store,
    Delete
} from '@mui/icons-material';

const PriceAssignment = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <GroupWork color="primary" /> Price List Assignments
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Target Audience</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Define who matches this price list.
                            </Typography>

                            <Autocomplete
                                multiple
                                options={['Retail Customers', 'Wholesale Partners', 'VIP Members', 'Employees']}
                                renderInput={(params) => <TextField {...params} label="Customer Groups" />}
                                defaultValue={['Wholesale Partners']}
                                sx={{ mb: 2 }}
                            />

                            <Autocomplete
                                multiple
                                options={['North America', 'EMEA', 'APAC', 'LATAM']}
                                renderInput={(params) => <TextField {...params} label="Regions" />}
                                defaultValue={['North America', 'EMEA']}
                                sx={{ mb: 2 }}
                            />

                            <Autocomplete
                                multiple
                                options={['US Entity', 'UK Entity', 'Global Holdings']}
                                renderInput={(params) => <TextField {...params} label="Legal Entities" />}
                                defaultValue={['US Entity']}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Sales Channels</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <FormControlLabel control={<Checkbox checked />} label="B2B Portal" />
                                <FormControlLabel control={<Checkbox checked />} label="Direct Sales (Field)" />
                                <FormControlLabel control={<Checkbox />} label="E-Commerce Storefront" />
                                <FormControlLabel control={<Checkbox />} label="Retail POS" />
                            </Box>

                            <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                <Typography variant="subtitle2" gutterBottom>Fallback Strategy</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    If no specific price is found in this list, fallback to: <strong>Global Base List (Default)</strong>
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Specific Account Overrides</Typography>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Customer Name</TableCell>
                                            <TableCell>Account ID</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Acme Corp</TableCell>
                                            <TableCell>CUST-001</TableCell>
                                            <TableCell><Chip label="Assigned" color="success" size="small" /></TableCell>
                                            <TableCell align="right"><IconButton size="small"><Delete /></IconButton></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Globex Inc</TableCell>
                                            <TableCell>CUST-099</TableCell>
                                            <TableCell><Chip label="Assigned" color="success" size="small" /></TableCell>
                                            <TableCell align="right"><IconButton size="small"><Delete /></IconButton></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PriceAssignment;
