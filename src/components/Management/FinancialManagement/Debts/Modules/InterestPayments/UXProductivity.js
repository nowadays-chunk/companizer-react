import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Card,
    CardContent
} from '@mui/material';
import { UploadFile, Calculate, ContentCopy } from '@mui/icons-material';

const UXProductivity = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Productivity & Batch Tools</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <UploadFile sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h6">Bulk Import</Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                Upload CSV of interest payments to create multiple drafts at once.
                            </Typography>
                            <Button variant="contained">Upload CSV</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Calculate sx={{ fontSize: 50, color: 'secondary.main', mb: 2 }} />
                            <Typography variant="h6">Quick Calculator</Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                Ad-hoc interest check without creating a record.
                            </Typography>
                            <Button variant="outlined">Launch</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <ContentCopy sx={{ fontSize: 50, color: 'action.active', mb: 2 }} />
                            <Typography variant="h6">Duplicate Previous</Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                Clone last month's payments for this mont.
                            </Typography>
                            <Button variant="outlined">Clone</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UXProductivity;
