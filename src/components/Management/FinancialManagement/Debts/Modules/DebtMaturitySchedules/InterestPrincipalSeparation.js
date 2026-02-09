import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Tooltip } from '@mui/material';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/InterestPrincipalSeparation';

const InterestPrincipalSeparation = () => {
    // Mock Data
    const distribution = [
        { month: 'Nov', principal: 100, interest: 20 },
        { month: 'Dec', principal: 100, interest: 18 },
        { month: 'Jan', principal: 1200, interest: 15 }, // Big component
        { month: 'Feb', principal: 100, interest: 12 },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Interest vs Principal Reporting</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ bgcolor: '#e3f2fd' }}>
                        <CardContent>
                            <Typography color="textSecondary">Total Principal Due (Next 12M)</Typography>
                            <Typography variant="h4">$ 1.5M</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ bgcolor: '#fce4ec' }}>
                        <CardContent>
                            <Typography color="textSecondary">Total Interest Due (Next 12M)</Typography>
                            <Typography variant="h4">$ 65k</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Monthly Payment Composition</Typography>
                        <Box sx={{ mt: 3, height: 200, display: 'flex', alignItems: 'flex-end', gap: 2, px: 4 }}>
                            {distribution.map((d, i) => (
                                <Box key={i} sx={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                    {/* Interest Segment */}
                                    <Tooltip title={`Interest: $${d.interest}k`}>
                                        <Box sx={{
                                            width: '100%',
                                            height: `${d.interest / 15}%`, // Scaled
                                            bgcolor: '#ad1457',
                                            borderRadius: '4px 4px 0 0',
                                            mb: 0.5
                                        }} />
                                    </Tooltip>
                                    {/* Principal Segment */}
                                    <Tooltip title={`Principal: $${d.principal}k`}>
                                        <Box sx={{
                                            width: '100%',
                                            height: `${d.principal / 15}%`, // Scaled
                                            bgcolor: '#1565c0',
                                            borderRadius: 2
                                        }} />
                                    </Tooltip>
                                    <Typography variant="caption" align="center" sx={{ mt: 1 }}>{d.month}</Typography>
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}><Box sx={{ width: 12, height: 12, bgcolor: '#1565c0', mr: 1 }} /><Typography variant="caption">Principal</Typography></Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}><Box sx={{ width: 12, height: 12, bgcolor: '#ad1457', mr: 1 }} /><Typography variant="caption">Interest</Typography></Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
export default InterestPrincipalSeparation;
