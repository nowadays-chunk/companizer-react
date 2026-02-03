import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Grid, TextField, MenuItem, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, List, ListItem, ListItemText } from '@mui/material';

const CreditProfiles = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Credit Profiles & Master Data</Typography>

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
