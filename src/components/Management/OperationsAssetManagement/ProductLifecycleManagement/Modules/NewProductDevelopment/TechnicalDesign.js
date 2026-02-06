
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import {
    Architecture,
    UploadFile,
    ChangeCircle
} from '@mui/icons-material';

const TechnicalDesign = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Architecture color="primary" /> Design & Specifications
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography variant="h6">Design Files (v2.1)</Typography>
                                <Button variant="outlined" startIcon={<UploadFile />}>Upload Revision</Button>
                            </Box>
                            <TableContainer component={Paper} variant="outlined">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>File Name</TableCell>
                                            <TableCell>Type</TableCell>
                                            <TableCell>Version</TableCell>
                                            <TableCell>Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>main_assembly.cad</TableCell>
                                            <TableCell>CAD Model</TableCell>
                                            <TableCell>2.1</TableCell>
                                            <TableCell>2026-02-01</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>fabric_pattern_A.dxf</TableCell>
                                            <TableCell>Drawing</TableCell>
                                            <TableCell>1.5</TableCell>
                                            <TableCell>2026-01-28</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Bill of Materials (BOM) Preview</Typography>
                            <TableContainer component={Paper} elevation={0}>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Part #</TableCell>
                                            <TableCell>Description</TableCell>
                                            <TableCell>Qty</TableCell>
                                            <TableCell>Source</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>PN-10023</TableCell>
                                            <TableCell>Solar Panel Module 10W</TableCell>
                                            <TableCell>1</TableCell>
                                            <TableCell>External</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>PN-50044</TableCell>
                                            <TableCell>Zipper YKK Waterproof</TableCell>
                                            <TableCell>3</TableCell>
                                            <TableCell>External</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button sx={{ mt: 1 }}>Manage Full BOM</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Engineering Change Orders</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><ChangeCircle color="warning" /></ListItemIcon>
                                    <ListItemText primary="ECO-2026-05" secondary="Material change for strap durability" />
                                </ListItem>
                            </List>
                            <Button variant="outlined" fullWidth size="small">Request Change</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TechnicalDesign;
