
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Stack,
    Chip,
    Avatar
} from '@mui/material';
import {
    GppBad,
    Block,
    Recycling,
    CheckCircle
} from '@mui/icons-material';

const StockStatus = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Block color="error" /> Stock Status Management
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Inventory Categorization</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{ p: 2, border: '1px solid #eee', borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Avatar sx={{ bgcolor: 'success.light', color: 'success.main' }}><CheckCircle /></Avatar>
                                            <Box>
                                                <Typography variant="subtitle2">Unrestricted Use</Typography>
                                                <Typography variant="caption">Available for Sale/Production</Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="h6">850</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{ p: 2, border: '1px solid #ffeebb', bgcolor: '#fff8e1', borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Avatar sx={{ bgcolor: 'warning.light', color: 'warning.dark' }}><GppBad /></Avatar>
                                            <Box>
                                                <Typography variant="subtitle2">Quality Inspection</Typography>
                                                <Typography variant="caption">Pending QC Release</Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="h6">50</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{ p: 2, border: '1px solid #ffcdd2', bgcolor: '#ffebee', borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Avatar sx={{ bgcolor: 'error.light', color: 'error.main' }}><Block /></Avatar>
                                            <Box>
                                                <Typography variant="subtitle2">Blocked / Hold</Typography>
                                                <Typography variant="caption">Regulatory or Defect Hold</Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="h6">20</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{ p: 2, border: '1px solid #eee', borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Avatar sx={{ bgcolor: 'grey.300', color: 'grey.700' }}><Recycling /></Avatar>
                                            <Box>
                                                <Typography variant="subtitle2">Scrap / Recyle</Typography>
                                                <Typography variant="caption">Pending Disposition</Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="h6">5</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Quick Actions</Typography>
                            <Stack direction="column" spacing={1}>
                                <Chip label="Release from QC" onClick={() => { }} color="primary" variant="outlined" />
                                <Chip label="Block Stock" onClick={() => { }} color="error" variant="outlined" />
                                <Chip label="Move to Scrap" onClick={() => { }} color="default" variant="outlined" />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StockStatus;
