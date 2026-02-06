
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    Chip,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton
} from '@mui/material';
import {
    Add,
    Delete,
    Edit,
    Inventory,
    Layers,
    ShoppingBasket
} from '@mui/icons-material';

const ProductVariants = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Layers color="primary" /> Variants & Configurations
                </Typography>
                <Button variant="contained" startIcon={<Add />}>Add Variant</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Product Attributes & Options</Typography>
                            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                <Chip label="Size: S, M, L, XL" onDelete={() => { }} color="primary" variant="outlined" />
                                <Chip label="Color: Red, Blue, Black" onDelete={() => { }} color="primary" variant="outlined" />
                                <Chip icon={<Add />} label="Add Option" onClick={() => { }} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Variant List</Typography>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>SKU</TableCell>
                                            <TableCell>Attributes</TableCell>
                                            <TableCell>Price Impact</TableCell>
                                            <TableCell>Inventory</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>PROD-001-S-RED</TableCell>
                                            <TableCell>Size: S, Color: Red</TableCell>
                                            <TableCell>+$0.00</TableCell>
                                            <TableCell><Chip size="small" label="In Stock (50)" color="success" /></TableCell>
                                            <TableCell>
                                                <IconButton size="small"><Edit /></IconButton>
                                                <IconButton size="small"><Delete /></IconButton>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>PROD-001-M-BLUE</TableCell>
                                            <TableCell>Size: M, Color: Blue</TableCell>
                                            <TableCell>+$0.00</TableCell>
                                            <TableCell><Chip size="small" label="Low Stock (5)" color="warning" /></TableCell>
                                            <TableCell>
                                                <IconButton size="small"><Edit /></IconButton>
                                                <IconButton size="small"><Delete /></IconButton>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography variant="h6">Bill of Materials (BOM) & Bundles</Typography>
                                <Button startIcon={<Add />} size="small">Add Component</Button>
                            </Box>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Component</TableCell>
                                            <TableCell>Quantity</TableCell>
                                            <TableCell>Cost</TableCell>
                                            <TableCell>Type</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Inventory fontSize="small" color="action" /> Base Unit
                                                </Box>
                                            </TableCell>
                                            <TableCell>1</TableCell>
                                            <TableCell>$150.00</TableCell>
                                            <TableCell>Material</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <ShoppingBasket fontSize="small" color="action" /> Accessory Kit
                                                </Box>
                                            </TableCell>
                                            <TableCell>2</TableCell>
                                            <TableCell>$25.00</TableCell>
                                            <TableCell>Kit</TableCell>
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

export default ProductVariants;
