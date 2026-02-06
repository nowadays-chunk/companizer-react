
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Breadcrumbs,
    Link,
    Paper
} from '@mui/material';
import {
    Warehouse,
    Place,
    HomeWork
} from '@mui/icons-material';

const WarehouseMgmt = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Warehouse color="primary" /> Warehouse & Location Management
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Stock by Warehouse</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: '1px solid #eee' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <HomeWork color="action" />
                                    <Box>
                                        <Typography variant="subtitle1">Main DC (Texas)</Typography>
                                        <Typography variant="caption">Distribution Center</Typography>
                                    </Box>
                                </Box>
                                <Typography variant="h6">850 Units</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Warehouse color="action" />
                                    <Box>
                                        <Typography variant="subtitle1">East Coast Hub</Typography>
                                        <Typography variant="caption">Regional Warehouse</Typography>
                                    </Box>
                                </Box>
                                <Typography variant="h6">400 Units</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Bin Level Detail (Texas DC)</Typography>
                            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                                <Link underline="hover" color="inherit">Zone A (Picking)</Link>
                                <Link underline="hover" color="inherit">Aisle 04</Link>
                                <Typography color="text.primary">Bin 32-B</Typography>
                            </Breadcrumbs>

                            <Paper variant="outlined" sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                                <Typography variant="subtitle2" display="flex" alignItems="center" gap={1}><Place fontSize="small" /> Location Contents</Typography>
                                <Typography variant="body1" sx={{ mt: 1 }}><strong>Product:</strong> Solar Panel Basic</Typography>
                                <Typography variant="body1"><strong>Qty:</strong> 50 Units</Typography>
                                <Typography variant="caption" color="text.secondary">Last Cycle Count: 2 days ago</Typography>
                            </Paper>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WarehouseMgmt;
