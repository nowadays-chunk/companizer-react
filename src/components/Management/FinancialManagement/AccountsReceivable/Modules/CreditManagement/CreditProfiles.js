import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Grid, TextField, MenuItem, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, List, ListItem, ListItemText, Alert, Button } from '@mui/material';

import { arApproveCreditProfile } from '../../../../../../utils/clientQueries';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/CreditProfiles';

const CreditProfiles = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [customerId, setCustomerId] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleApproveProfile = async () => {
        if (!customerId) {
            setMessage({ type: 'error', text: 'Please enter a Customer ID to approve.' });
            return;
        }
        setLoading(true);
        try {
            await arApproveCreditProfile({ profileId: customerId, approvedBy: 'current-user-id' });
            setMessage({ type: 'success', text: 'Credit Profile Approved Successfully' });
        } catch (error) {
            console.error(error);
            setMessage({ type: 'error', text: 'Failed to approve profile' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4">Credit Profiles & Master Data</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                        label="Customer/Profile ID"
                        variant="outlined"
                        size="small"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleApproveProfile}
                        disabled={loading}
                    >
                        {loading ? 'Approving...' : 'Approve Profile'}
                    </Button>
                </Box>
            </Box>

            {message && <Alert severity={message.type} sx={{ mb: 3 }} onClose={() => setMessage(null)}>{message.text}</Alert>}

            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                <Tabs value={activeTab} onChange={handleTabChange} aria-label="credit profiles tabs">
                    <Tab label="Credit Profile" />
                    <Tab label="Corporate Hierarchy" />
                    <Tab label="Credit Limits" />
                </Tabs>
            </Box>

            {activeTab === 0 && (
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Master Data</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth select label="Credit Segment" defaultValue="Enterprise">
                                    <MenuItem value="Enterprise">Enterprise</MenuItem>
                                    <MenuItem value="Wholesale">Wholesale</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth select label="Scoring Category" defaultValue="Strategic">
                                    <MenuItem value="Strategic">Strategic</MenuItem>
                                    <MenuItem value="Standard">Standard</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Credit Currency" defaultValue="USD" disabled />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth type="date" label="Effective Date" InputLabelProps={{ shrink: true }} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )}

            {activeTab === 1 && (
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Parent/Child Exposure Aggregation</Typography>
                        <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 1 }}>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary={<Typography variant="subtitle1" fontWeight="bold">🏢 Global Corp (Parent)</Typography>}
                                        secondary="Group Limit: $1,000,000"
                                    />
                                </ListItem>
                                <Box sx={{ pl: 4 }}>
                                    <List disablePadding>
                                        <ListItem dense>
                                            <ListItemText primary="🏭 US Entity - Limit: $400k" />
                                        </ListItem>
                                        <ListItem dense>
                                            <ListItemText primary="🏭 EU Entity - Limit: $300k" />
                                        </ListItem>
                                        <ListItem dense>
                                            <ListItemText primary="🏭 APAC Entity - Limit: $300k" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </List>
                        </Box>
                    </CardContent>
                </Card>
            )}

            {activeTab === 2 && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ bgcolor: 'grey.100' }}>
                                <TableCell>Limit Type</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Expiry</TableCell>
                                <TableCell>Backed By</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Global Limit</TableCell>
                                <TableCell>$500,000</TableCell>
                                <TableCell>-</TableCell>
                                <TableCell>Unsecured</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Seasonal Temp</TableCell>
                                <TableCell>$50,000</TableCell>
                                <TableCell>2025-12-31</TableCell>
                                <TableCell>None</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Insured Portion</TableCell>
                                <TableCell>$300,000</TableCell>
                                <TableCell>2026-06-30</TableCell>
                                <TableCell>Allianz Policy #1234</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    );
};

export default CreditProfiles;
