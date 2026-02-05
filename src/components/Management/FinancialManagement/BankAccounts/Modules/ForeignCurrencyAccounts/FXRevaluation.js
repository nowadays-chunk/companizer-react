import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    LinearProgress,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Alert
} from '@mui/material';
import { PlayArrow, Assessment, CheckCircle, Warning, Article } from '@mui/icons-material';

const FXRevaluation = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" component="h1">
                    Month-End FX Revaluation
                </Typography>
                <Button variant="contained" color="secondary" startIcon={<PlayArrow />}>
                    Run Revaluation
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Active Revaluation Run: Oct 2025
                        </Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            Revaluing all open foreign currency balances using Month-End rates as of 2025-10-31.
                        </Typography>

                        <Box sx={{ my: 3 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body2">Progress</Typography>
                                <Typography variant="body2">75%</Typography>
                            </Box>
                            <LinearProgress variant="determinate" value={75} />
                        </Box>

                        <List>
                            <ListItem>
                                <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                <ListItemText primary="Fetch Month-End Exchange Rates" secondary="Completed" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                <ListItemText primary="Identify Open Foreign Currency Balances (AP/AR/Bank)" secondary="34 Accounts Found" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><Assessment color="primary" /></ListItemIcon>
                                <ListItemText primary="Calculate Unrealized Gains/Losses" secondary="In Progress..." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><Article color="disabled" /></ListItemIcon>
                                <ListItemText primary="Generate Revaluation Journals" secondary="Pending" />
                            </ListItem>
                        </List>
                    </Paper>

                    <Alert severity="warning" sx={{ mb: 3 }}>
                        <strong>Preview Mode:</strong> Changes will not be posted to GL until you review and confirm the journal entries.
                    </Alert>

                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Simulated Impact
                        </Typography>
                        <TableContainer>
                            {/* Placeholder for table */}
                            <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 1, textAlign: 'center' }}>
                                [Simulation Results Table Placeholder]
                                <br />
                                Unrealized Gain: $12,500.00 | Unrealized Loss: ($4,200.00)
                            </Box>
                        </TableContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Total Unrealized Gain (YTD)
                            </Typography>
                            <Typography variant="h4" color="success.main">
                                $45,230.00
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Total Unrealized Loss (YTD)
                            </Typography>
                            <Typography variant="h4" color="error.main">
                                ($12,150.00)
                            </Typography>
                        </CardContent>
                    </Card>

                    <Paper sx={{ p: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            History
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Sept 2025 Revaluation" secondary="Posted - 2025-09-30" />
                            </ListItem>
                            <Divider component="li" />
                            <ListItem>
                                <ListItemText primary="Aug 2025 Revaluation" secondary="Posted - 2025-08-31" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

// Simple Mock Wrapper for TableContainer to avoid import error if not defined
const TableContainer = ({ children }) => <div>{children}</div>;

export default FXRevaluation;
