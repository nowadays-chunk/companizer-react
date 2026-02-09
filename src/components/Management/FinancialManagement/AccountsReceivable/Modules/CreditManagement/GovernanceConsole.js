import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Button, List, ListItem, ListItemText, TextField, MenuItem } from '@mui/material';
import { fieldsConfig, collectionName, entityName } from './Modules/General/GovernanceConsole';

const GovernanceConsole = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Governance & Admin Console</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    {/* Approval Requests */}
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Pending Approvals (Exceptions)</Typography>
                            <TableContainer>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Type</TableCell>
                                            <TableCell>Reason</TableCell>
                                            <TableCell>Requester</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Limit Increase</TableCell>
                                            <TableCell>Seasonal spike</TableCell>
                                            <TableCell>B. Smith</TableCell>
                                            <TableCell><Button variant="contained" size="small">Approve</Button></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Block Override</TableCell>
                                            <TableCell>Strategic Client</TableCell>
                                            <TableCell>J. Doe</TableCell>
                                            <TableCell><Button variant="contained" size="small">Approve</Button></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    {/* Audit Log */}
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Recent Audit Log</Typography>
                            <List dense sx={{ bgcolor: 'grey.50', borderRadius: 1 }}>
                                <ListItem divider>
                                    <ListItemText primary="Limit changed from $100k to $150k by Admin" secondary="2025-10-12 14:30" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary={<>Risk Class updated A &rarr; B by System</>} secondary="2025-10-11 09:15" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Collateral released ($50k) by Manager" secondary="2025-10-10 16:45" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    {/* Policy Configuration */}
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Credit Policy Configuration (Admin)</Typography>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth label="Max Auto-Approval Limit" defaultValue="$50,000" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth type="number" label="Grace Period (Days)" defaultValue="5" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth select label="Mandatory Review Cycle" defaultValue="Quarterly">
                                        <MenuItem value="Quarterly">Quarterly</MenuItem>
                                        <MenuItem value="Annual">Annual</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default GovernanceConsole;
