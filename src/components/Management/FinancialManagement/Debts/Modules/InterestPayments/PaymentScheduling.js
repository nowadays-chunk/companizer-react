import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Chip,
    Button,
    IconButton
} from '@mui/material';
import { Event, NotificationsActive, ChevronLeft, ChevronRight, CalendarMonth } from '@mui/icons-material';
import { fieldsConfig, collectionName, entityName } from './Modules/General/PaymentScheduling';

const PaymentScheduling = () => {
    const upcomingPayments = [
        { id: 1, loan: 'Loan Agreement #1023', amount: 15450, date: '2023-11-15', status: 'Scheduled' },
        { id: 2, loan: 'Intercompany Note A', amount: 2300, date: '2023-11-30', status: 'Pending Review' },
        { id: 3, loan: 'Equipment Fin #55', amount: 890, date: '2023-12-01', status: 'Scheduled' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5">Payment Scheduling</Typography>
                <Button variant="outlined" startIcon={<CalendarMonth />}>
                    Sync to Outlook/Google
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h6">November 2023</Typography>
                            <Box>
                                <IconButton><ChevronLeft /></IconButton>
                                <IconButton><ChevronRight /></IconButton>
                            </Box>
                        </Box>

                        {/* Mock Calendar Grid */}
                        <Grid container spacing={1}>
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <Grid item xs={1.7} key={day}>
                                    <Box sx={{ textAlign: 'center', fontWeight: 'bold', mb: 1 }}>{day}</Box>
                                </Grid>
                            ))}
                            {[...Array(30)].map((_, i) => (
                                <Grid item xs={1.7} key={i}>
                                    <Box sx={{
                                        height: 80,
                                        border: '1px solid #eee',
                                        p: 1,
                                        bgcolor: i === 14 ? '#e3f2fd' : 'white',
                                        position: 'relative'
                                    }}>
                                        <Typography variant="caption">{i + 1}</Typography>
                                        {i === 14 && (
                                            <Chip label="$15k Due" size="small" color="primary" sx={{ position: 'absolute', bottom: 5, left: 5, fontSize: '0.6rem', height: 16 }} />
                                        )}
                                        {i === 29 && (
                                            <Chip label="$2.3k Due" size="small" color="warning" sx={{ position: 'absolute', bottom: 5, left: 5, fontSize: '0.6rem', height: 16 }} />
                                        )}
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ mb: 3, bgcolor: '#fff3e0' }}>
                        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                            <NotificationsActive color="warning" sx={{ mr: 2 }} />
                            <Box>
                                <Typography variant="h6">Action Required</Typography>
                                <Typography variant="body2">2 payments require approval this week.</Typography>
                            </Box>
                        </CardContent>
                    </Card>

                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Upcoming Payments</Typography>
                        <List>
                            {upcomingPayments.map((payment) => (
                                <ListItem key={payment.id} divider>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: 'primary.light' }}><Event /></Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={payment.loan}
                                        secondary={`Due: ${payment.date}`}
                                    />
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant="subtitle2">${payment.amount.toLocaleString()}</Typography>
                                        <Typography variant="caption" color={payment.status === 'Scheduled' ? 'success.main' : 'warning.main'}>
                                            {payment.status}
                                        </Typography>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                        <Button fullWidth onClick={() => alert('View All')}>View Full Schedule</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PaymentScheduling;
