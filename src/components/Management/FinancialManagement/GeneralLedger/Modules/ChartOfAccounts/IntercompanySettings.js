import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Card,
    CardContent,
    TextField,
    MenuItem,
    FormControlLabel,
    Switch,
    Chip,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { Business, SwapHoriz, AccountBalance, Settings } from '@mui/icons-material';

const IntercompanySettings = ({ accountId: propAccountId }) => {
    const { id: paramId } = useParams();
    const accountId = propAccountId || paramId;
    const [pairings] = useState([
        { entity: 'US Entity', account: '2510', type: 'Due To' },
        { entity: 'UK Entity', account: '2520', type: 'Due From' },
        { entity: 'DE Entity', account: '2530', type: 'Due To' },
    ]);

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                            <Business color="primary" sx={{ fontSize: 40 }} />
                            <Box>
                                <Typography variant="h6" fontWeight="bold">Intercompany & Consolidation</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Configure intercompany flags, elimination mappings, and consolidation settings
                                </Typography>
                            </Box>
                        </Box>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>Intercompany Flags</Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                                            <FormControlLabel
                                                control={<Switch defaultChecked />}
                                                label="Intercompany Account"
                                            />
                                            <FormControlLabel
                                                control={<Switch />}
                                                label="Transfer Pricing Account"
                                            />
                                            <FormControlLabel
                                                control={<Switch />}
                                                label="Consolidation Adjustment"
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>Account Pairing</Typography>
                                        <Grid container spacing={2} sx={{ mt: 1 }}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    select
                                                    label="IC Due-To Account"
                                                    fullWidth
                                                    defaultValue=""
                                                >
                                                    <MenuItem value="">None</MenuItem>
                                                    <MenuItem value="2500">2500 - IC Due To</MenuItem>
                                                    <MenuItem value="2510">2510 - IC Payable</MenuItem>
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    select
                                                    label="IC Due-From Account"
                                                    fullWidth
                                                    defaultValue=""
                                                >
                                                    <MenuItem value="">None</MenuItem>
                                                    <MenuItem value="1500">1500 - IC Due From</MenuItem>
                                                    <MenuItem value="1510">1510 - IC Receivable</MenuItem>
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    select
                                                    label="Elimination Account"
                                                    fullWidth
                                                    defaultValue=""
                                                >
                                                    <MenuItem value="">None</MenuItem>
                                                    <MenuItem value="9100">9100 - IC Elimination</MenuItem>
                                                </TextField>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12}>
                                <Paper sx={{ p: 2 }}>
                                    <Typography variant="h6" gutterBottom>Entity Pairings</Typography>
                                    <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Entity</TableCell>
                                                    <TableCell>Paired Account</TableCell>
                                                    <TableCell>Type</TableCell>
                                                    <TableCell>Actions</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {pairings.map((pairing, idx) => (
                                                    <TableRow key={idx}>
                                                        <TableCell>
                                                            <Chip label={pairing.entity} color="primary" />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography fontWeight="bold">{pairing.account}</Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Chip
                                                                label={pairing.type}
                                                                size="small"
                                                                color={pairing.type === 'Due To' ? 'secondary' : 'info'}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Button size="small" variant="outlined">Edit</Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                            <SwapHoriz color="primary" />
                                            <Typography variant="h6">Consolidation</Typography>
                                        </Box>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Group Reporting Code"
                                                    fullWidth
                                                    defaultValue="GRP-2500"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Minority Interest Mapping"
                                                    fullWidth
                                                    placeholder="e.g., MI-2500"
                                                />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                            <Settings color="secondary" />
                                            <Typography variant="h6">Advanced Settings</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                            <FormControlLabel
                                                control={<Switch />}
                                                label="Auto-Match IC Transactions"
                                            />
                                            <FormControlLabel
                                                control={<Switch defaultChecked />}
                                                label="Include in Consolidation"
                                            />
                                            <FormControlLabel
                                                control={<Switch />}
                                                label="Trigger Elimination Entry"
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IntercompanySettings;
