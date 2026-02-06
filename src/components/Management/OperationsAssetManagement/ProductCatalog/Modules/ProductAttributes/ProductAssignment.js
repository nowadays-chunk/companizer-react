
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
    Switch,
    IconButton,
    Chip
} from '@mui/material';
import {
    Link,
    Delete,
    AddLink,
    Category,
    Inventory2
} from '@mui/icons-material';

const ProductAssignment = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Link color="primary" /> Product & Category Assignment
                </Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Category Inheritance</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Assigning this attribute to a category will automatically apply it to all products within that category.
                            </Typography>

                            <Autocomplete
                                multiple
                                options={['Electronics', 'Computers', 'Laptops', 'Mobile Phones']}
                                renderInput={(params) => <TextField {...params} label="Assign to Categories" placeholder="Select categories" />}
                                defaultValue={['Laptops', 'Mobile Phones']}
                                sx={{ mb: 3 }}
                            />

                            <Typography variant="subtitle2" gutterBottom>Current Inheritance</Typography>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                <Chip icon={<Category />} label="Laptops" onDelete={() => { }} color="primary" variant="outlined" />
                                <Chip icon={<Category />} label="Mobile Phones" onDelete={() => { }} color="primary" variant="outlined" />
                                <Chip icon={<Category />} label="Tablets" onDelete={() => { }} color="default" variant="outlined" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Product Exceptions</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Override default assignment for specific products.
                            </Typography>

                            <Box sx={{ mb: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                <FormControlLabel control={<Switch />} label="Apply to All Products Globally" />
                            </Box>

                            <Autocomplete
                                multiple
                                options={['Prod-001', 'Prod-002', 'Prod-003']}
                                renderInput={(params) => <TextField {...params} label="Exclude Products" placeholder="Select products" />}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography variant="h6">Variant Assignment Rules</Typography>
                                <IconButton color="primary"><AddLink /></IconButton>
                            </Box>

                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product Family</TableCell>
                                            <TableCell>Condition</TableCell>
                                            <TableCell>Required?</TableCell>
                                            <TableCell>Default Value</TableCell>
                                            <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Inventory2 fontSize="small" color="action" /> Pro Series Laptops
                                            </TableCell>
                                            <TableCell>All Variants</TableCell>
                                            <TableCell><Chip label="Yes" color="success" size="small" /></TableCell>
                                            <TableCell>15.6"</TableCell>
                                            <TableCell align="right">
                                                <IconButton size="small"><Delete fontSize="small" /></IconButton>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Inventory2 fontSize="small" color="action" /> Gaming Monitors
                                            </TableCell>
                                            <TableCell>If "Curved" = Yes</TableCell>
                                            <TableCell><Chip label="Yes" color="success" size="small" /></TableCell>
                                            <TableCell>-</TableCell>
                                            <TableCell align="right">
                                                <IconButton size="small"><Delete fontSize="small" /></IconButton>
                                            </TableCell>
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

export default ProductAssignment;
