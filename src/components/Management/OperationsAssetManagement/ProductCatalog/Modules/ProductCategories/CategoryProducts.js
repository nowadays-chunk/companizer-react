
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    InputAdornment
} from '@mui/material';
import {
    Inventory2,
    Search,
    FilterList,
    Add,
    Delete
} from '@mui/icons-material';

const CategoryProducts = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Inventory2 color="primary" /> Assigned Products
                </Typography>
                <Button variant="contained" startIcon={<Add />}>Assign Products</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                                <TextField
                                    size="small"
                                    placeholder="Search products..."
                                    InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }}
                                    sx={{ flexGrow: 1 }}
                                />
                                <Button startIcon={<FilterList />} variant="outlined">Filters</Button>
                            </Box>

                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product Name</TableCell>
                                            <TableCell>SKU</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Type</TableCell>
                                            <TableCell>Assignment Date</TableCell>
                                            <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'medium' }}>Enterprise Server X1</TableCell>
                                            <TableCell>PROD-001</TableCell>
                                            <TableCell><Chip label="Active" color="success" size="small" /></TableCell>
                                            <TableCell>Primary</TableCell>
                                            <TableCell>2026-01-15</TableCell>
                                            <TableCell align="right">
                                                <Button size="small" color="error">Remove</Button>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'medium' }}>Pro Workstation Z4</TableCell>
                                            <TableCell>PROD-055</TableCell>
                                            <TableCell><Chip label="Active" color="success" size="small" /></TableCell>
                                            <TableCell>Primary</TableCell>
                                            <TableCell>2026-02-01</TableCell>
                                            <TableCell align="right">
                                                <Button size="small" color="error">Remove</Button>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'medium' }}>Standard Keyboard</TableCell>
                                            <TableCell>ACC-099</TableCell>
                                            <TableCell><Chip label="Draft" color="default" size="small" /></TableCell>
                                            <TableCell>Secondary</TableCell>
                                            <TableCell>2026-02-04</TableCell>
                                            <TableCell align="right">
                                                <Button size="small" color="error">Remove</Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card sx={{ bgcolor: 'background.default' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Rules-Based Assignment (Smart Categories)</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Automatically assign products to this category if they match specific conditions.
                            </Typography>
                            <Box sx={{ p: 2, border: '1px dashed grey', borderRadius: 1 }}>
                                <Typography variant="body1">
                                    IF <strong>Brand</strong> equals "TechCorp"
                                    AND <strong>Price</strong> is greater than $500
                                </Typography>
                            </Box>
                            <Button size="small" sx={{ mt: 1 }}>Edit Rules</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryProducts;
