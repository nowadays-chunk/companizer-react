
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Avatar,
    Button,
    Divider
} from '@mui/material';
import {
    Gavel,
    Check,
    Close,
    AttachMoney
} from '@mui/icons-material';

const ApprovalWorkflow = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Gavel color="primary" /> Discontinuation Governance
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Required Sign-Offs (Level 3 - High Impact)</Typography>
                            <Box sx={{ mb: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, bgcolor: '#f5f5f5', borderRadius: 1, mb: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Avatar sx={{ bgcolor: 'success.main' }}><Check /></Avatar>
                                        <Box>
                                            <Typography variant="subtitle2">Product Management</Typography>
                                            <Typography variant="caption">Approved by J. Doe on Feb 01</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, border: '1px solid #1976d2', bgcolor: '#e3f2fd', borderRadius: 1, mb: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Avatar sx={{ bgcolor: 'primary.main' }}>CFO</Avatar>
                                        <Box>
                                            <Typography variant="subtitle2">Finance (Write-off Approval)</Typography>
                                            <Typography variant="caption">Pending Review ($90k Write-down)</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Button size="small" variant="contained">Sign</Button>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Avatar sx={{ bgcolor: 'grey.400' }}>SCM</Avatar>
                                        <Box>
                                            <Typography variant="subtitle2">Supply Chain</Typography>
                                            <Typography variant="caption">Waiting for Finance</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Financial Authorization</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, color: 'error.main' }}>
                                <AttachMoney />
                                <Typography variant="h5">-$90,000</Typography>
                            </Box>
                            <Typography variant="body2" paragraph>
                                Threshold for automated approval exceeded ($50k). CFO sign-off mandated by policy FIN-023.
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="caption" color="text.secondary">Audit Trail ID: DIS-2026-003</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ApprovalWorkflow;
