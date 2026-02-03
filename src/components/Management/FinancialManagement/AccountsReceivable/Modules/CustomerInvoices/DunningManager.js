
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    LinearProgress,
    List,
    ListItem,
    ListItemText,
    Divider
} from '@mui/material';

const DunningManager = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h5">Collections & Dunning Manager</Typography>
                <Button variant="contained" color="error">Run Dunning Process</Button>
            </Box>

            <Grid container spacing={3}>
                {/* KPI Cards */}
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Overdue Invoices</Typography>
                            <Typography variant="h4" color="error">142</Typography>
                            <Typography variant="caption">Total Value: $425,000</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Emails Sent (Today)</Typography>
                            <Typography variant="h4">45</Typography>
                            <Typography variant="caption">Open Rate: 68%</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Disputed Amount</Typography>
                            <Typography variant="h4" color="warning.main">$85,000</Typography>
                            <Typography variant="caption">12 Active Disputes</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Collection Effectiveness</Typography>
                            <Typography variant="h4" color="success.main">92%</Typography>
                            <Typography variant="caption">CEI Index</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Dunning Levels */}
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Dunning Runs (Last 30 Days)</Typography>
                            <TableContainer>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Run Date</TableCell>
                                            <TableCell>Level</TableCell>
                                            <TableCell>Invoices Processed</TableCell>
                                            <TableCell>Notices Sent</TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>2026-02-01</TableCell>
                                            <TableCell>Level 1 (Friendly Reminder)</TableCell>
                                            <TableCell>85</TableCell>
                                            <TableCell>85</TableCell>
                                            <TableCell><Chip label="Completed" size="small" color="success" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2026-01-28</TableCell>
                                            <TableCell>Level 2 (Overdue Notice)</TableCell>
                                            <TableCell>24</TableCell>
                                            <TableCell>24</TableCell>
                                            <TableCell><Chip label="Completed" size="small" color="success" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2026-01-25</TableCell>
                                            <TableCell>Level 3 (Demand Letter)</TableCell>
                                            <TableCell>5</TableCell>
                                            <TableCell>5</TableCell>
                                            <TableCell><Chip label="Completed" size="small" color="success" /></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Strategy Configuration Preview */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Dunning Strategy</Typography>
                            <List>
                                <ListItem disableGutters>
                                    <ListItemText primary="Level 1: 5 days overdue" secondary="Email Reminder (Friendly)" />
                                </ListItem>
                                <Divider />
                                <ListItem disableGutters>
                                    <ListItemText primary="Level 2: 15 days overdue" secondary="Email + SMS (Firm)" />
                                </ListItem>
                                <Divider />
                                <ListItem disableGutters>
                                    <ListItemText primary="Level 3: 30 days overdue" secondary="Official Letter + Interest Charge" />
                                </ListItem>
                                <Divider />
                                <ListItem disableGutters>
                                    <ListItemText primary="Level 4: 60 days overdue" secondary="Legal Action / Collection Agency" />
                                </ListItem>
                            </List>
                            <Button variant="outlined" fullWidth size="small">Configure Strategies</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DunningManager;
