import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import { CalendarMonth, Event } from '@mui/icons-material';

const DeadlineCalendar = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Filing Deadline Calendar</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#ffebee' }}>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                                <Event color="error" />
                                <Typography variant="h6">March 2024</Typography>
                            </Stack>
                            <Stack spacing={1}>
                                <Box>
                                    <Chip label="Mar 15" size="small" color="error" sx={{ mb: 0.5 }} />
                                    <Typography variant="body2"><strong>WHT Feb 2024</strong></Typography>
                                    <Typography variant="caption" color="text.secondary">Withholding Tax Return</Typography>
                                </Box>
                                <Box>
                                    <Chip label="Mar 31" size="small" color="error" sx={{ mb: 0.5 }} />
                                    <Typography variant="body2"><strong>VAT Feb 2024</strong></Typography>
                                    <Typography variant="caption" color="text.secondary">Value Added Tax Return</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#fff3e0' }}>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                                <Event color="warning" />
                                <Typography variant="h6">April 2024</Typography>
                            </Stack>
                            <Stack spacing={1}>
                                <Box>
                                    <Chip label="Apr 15" size="small" color="warning" sx={{ mb: 0.5 }} />
                                    <Typography variant="body2"><strong>WHT Mar 2024</strong></Typography>
                                    <Typography variant="caption" color="text.secondary">Withholding Tax Return</Typography>
                                </Box>
                                <Box>
                                    <Chip label="Apr 30" size="small" color="warning" sx={{ mb: 0.5 }} />
                                    <Typography variant="body2"><strong>VAT Q1 2024</strong></Typography>
                                    <Typography variant="caption" color="text.secondary">Quarterly VAT Return</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#e8f5e9' }}>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                                <Event color="success" />
                                <Typography variant="h6">June 2024</Typography>
                            </Stack>
                            <Stack spacing={1}>
                                <Box>
                                    <Chip label="Jun 30" size="small" color="success" sx={{ mb: 0.5 }} />
                                    <Typography variant="body2"><strong>Income Tax 2023</strong></Typography>
                                    <Typography variant="caption" color="text.secondary">Annual Corporate Income Tax</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ p: 3, mt: 3 }}>
                <Typography variant="h6" gutterBottom>Upcoming Deadlines (Next 90 Days)</Typography>
                <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#ffebee', borderRadius: 1 }}>
                        <Box>
                            <Typography variant="body1"><strong>WHT Feb 2024</strong></Typography>
                            <Typography variant="caption">Withholding Tax Return - United States</Typography>
                        </Box>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Chip label="5 days" color="error" size="small" />
                            <Typography variant="body2">Mar 15, 2024</Typography>
                        </Stack>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#fff3e0', borderRadius: 1 }}>
                        <Box>
                            <Typography variant="body1"><strong>VAT Q1 2024</strong></Typography>
                            <Typography variant="caption">Quarterly VAT Return - United Kingdom</Typography>
                        </Box>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Chip label="15 days" color="warning" size="small" />
                            <Typography variant="body2">Apr 30, 2024</Typography>
                        </Stack>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#e8f5e9', borderRadius: 1 }}>
                        <Box>
                            <Typography variant="body1"><strong>Income Tax 2023</strong></Typography>
                            <Typography variant="caption">Annual Corporate Income Tax - United States</Typography>
                        </Box>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Chip label="45 days" color="success" size="small" />
                            <Typography variant="body2">Jun 30, 2024</Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
};

export default DeadlineCalendar;
