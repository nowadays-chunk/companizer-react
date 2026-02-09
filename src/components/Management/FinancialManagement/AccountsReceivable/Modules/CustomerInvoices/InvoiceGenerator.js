
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Paper,
    Button,
    Grid,
    TextField,
    MenuItem,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    Select,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox
} from '@mui/material';
import { fieldsConfig, collectionName } from './Modules/General/InvoiceGenerator';

const InvoiceGenerator = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box p={3}>
            <Typography variant="h5" gutterBottom>Invoice Generator</Typography>
            <Paper square>
                <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
                    <Tab label="Bulk Invoice Creation" />
                    <Tab label="Recurring Billing" />
                    <Tab label="Subscription Management" />
                </Tabs>
            </Paper>

            <Box p={3} component={Paper}>
                {tabValue === 0 && <BulkInvoiceCreation />}
                {tabValue === 1 && <RecurringBilling />}
                {tabValue === 2 && <SubscriptionManagement />}
            </Box>
        </Box>
    );
};

const BulkInvoiceCreation = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h6">Bulk Creation Criteria</Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    Generate invoices based on unbilled shipments, timesheets, or project milestones.
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                    <InputLabel>Source Type</InputLabel>
                    <Select defaultValue="shipment">
                        <MenuItem value="shipment">Shipments (Goods Issue)</MenuItem>
                        <MenuItem value="timesheet">Approved Timesheets</MenuItem>
                        <MenuItem value="milestone">Project Milestones</MenuItem>
                        <MenuItem value="contract">Sales Contracts</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    label="Customer Group"
                    fullWidth
                    select
                    defaultValue="all"
                >
                    <MenuItem value="all">All Customers</MenuItem>
                    <MenuItem value="retail">Retail</MenuItem>
                    <MenuItem value="wholesale">Wholesale</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    label="Cut-off Date"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-end" gap={2}>
                    <Button variant="outlined">Preview Run</Button>
                    <Button variant="contained" color="primary">Generate Invoices</Button>
                </Box>
            </Grid>
        </Grid>
    );
};

const RecurringBilling = () => {
    const mockRecurring = [
        { id: 1, customer: 'Acme Corp', frequency: 'Monthly', nextRun: '2026-03-01', amount: 5000, status: 'Active' },
        { id: 2, customer: 'Wayne Ent', frequency: 'Quarterly', nextRun: '2026-04-01', amount: 15000, status: 'Active' },
    ];

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h6">Recurring Billing Schedules</Typography>
                <Button variant="contained">Create Schedule</Button>
            </Box>
            <TableContainer component={Paper} variant="outlined">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer</TableCell>
                            <TableCell>Frequency</TableCell>
                            <TableCell>Next Run Date</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockRecurring.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.customer}</TableCell>
                                <TableCell>{row.frequency}</TableCell>
                                <TableCell>{row.nextRun}</TableCell>
                                <TableCell>${row.amount.toLocaleString()}</TableCell>
                                <TableCell>
                                    <Chip label={row.status} color="success" size="small" />
                                </TableCell>
                                <TableCell>
                                    <Button size="small">Run Now</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

const SubscriptionManagement = () => {
    return (
        <Box>
            <Typography variant="h6">Subscription Overview</Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
                Manage ongoing subscriptions, upgrades, downgrades, and renewals.
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Active Subscriptions</Typography>
                            <Typography variant="h4">1,240</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Renewals this Month</Typography>
                            <Typography variant="h4">85</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Churn Rate</Typography>
                            <Typography variant="h4">2.4%</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>MRR</Typography>
                            <Typography variant="h4">$125k</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InvoiceGenerator;
