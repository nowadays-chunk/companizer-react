import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    Chip,
    LinearProgress,
    Paper,
    useTheme,
    Divider
} from '@mui/material';

export const fieldsConfig = {
    rule_name: { label: 'Rule Name', type: 'text' },
    trigger_days: { label: 'Days Before Close', type: 'number' },
    notification_email: { label: 'Email Receipt', type: 'text' }
};

export const entityName = 'Period Automation';

const PeriodAutomation = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Automation & Scheduling"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main }}>Scheduled Tasks</Typography>
                            <List>
                                <ListItem
                                    sx={{
                                        bgcolor: theme.palette.action.hover,
                                        borderRadius: 1,
                                        mb: 1,
                                        border: `1px solid ${theme.palette.divider}`
                                    }}
                                >
                                    <ListItemText
                                        primary={<Typography fontWeight="medium">Auto-Lock Warning</Typography>}
                                        secondary="Notify users 3 days before close"
                                    />
                                    <Chip label="Active" color="success" size="small" />
                                </ListItem>
                                <ListItem
                                    sx={{
                                        bgcolor: theme.palette.action.hover,
                                        borderRadius: 1,
                                        border: `1px solid ${theme.palette.divider}`
                                    }}
                                >
                                    <ListItemText
                                        primary={<Typography fontWeight="medium">Soft Close Automation</Typography>}
                                        secondary="Auto-switch to soft close on Day 1"
                                    />
                                    <Chip label="Inactive" color="default" size="small" />
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main }}>SLA Timers</Typography>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    bgcolor: theme.palette.info.light,
                                    color: theme.palette.info.contrastText,
                                    border: `1px solid ${theme.palette.info.main}`
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="subtitle1" fontWeight="medium" color="primary.dark">Standard Close SLA</Typography>
                                    <Typography variant="subtitle1" fontWeight="bold" color="primary.dark">5 Days</Typography>
                                </Box>
                                <Typography variant="caption" display="block" sx={{ mb: 2, color: 'primary.dark' }}>
                                    Target completion: Work Day 5
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={40}
                                    color="primary"
                                    sx={{ height: 8, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.5)' }}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PeriodAutomation;
