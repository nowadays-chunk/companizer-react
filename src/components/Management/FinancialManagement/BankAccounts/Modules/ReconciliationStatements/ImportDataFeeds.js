import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Button,
    Paper,
    Divider,
    useTheme
} from '@mui/material';
import { CloudUpload as CloudUploadIcon, Link as LinkIcon } from '@mui/icons-material';

const ImportDataFeeds = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Import & Data Feeds"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>Manual Import</Typography>
                            <Paper
                                variant="outlined"
                                sx={{
                                    p: 4,
                                    textAlign: 'center',
                                    borderStyle: 'dashed',
                                    bgcolor: theme.palette.background.default,
                                    cursor: 'pointer',
                                    '&:hover': { bgcolor: theme.palette.action.hover }
                                }}
                            >
                                <CloudUploadIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
                                <Typography variant="h6" color="textPrimary">Drag and drop statement files here</Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                    Supported formats: CSV, OFX, QIF, MT940
                                </Typography>
                                <Button variant="contained" color="primary">Browse Files</Button>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>Active Bank Feeds</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Paper variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <LinkIcon color="primary" sx={{ mr: 2 }} />
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight="medium">Chase Bank - Operating</Typography>
                                            <Typography variant="caption" color="textSecondary">Last Synced: Today, 09:30 AM</Typography>
                                        </Box>
                                    </Box>
                                    <Button size="small" variant="outlined" color="error">Disconnect</Button>
                                </Paper>
                                <Paper variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <LinkIcon color="primary" sx={{ mr: 2 }} />
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight="medium">Silicon Valley Bank - Payroll</Typography>
                                            <Typography variant="caption" color="textSecondary">Last Synced: Yesterday</Typography>
                                        </Box>
                                    </Box>
                                    <Button size="small" variant="outlined" color="error">Disconnect</Button>
                                </Paper>
                            </Box>
                            <Button variant="outlined" startIcon={<LinkIcon />} sx={{ mt: 2 }} fullWidth>Connect New Feed</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ImportDataFeeds;
