import React from 'react';
import { Box, Typography, Paper, Grid, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { Lan, Warning } from '@mui/icons-material';

const IntercompanyEquity = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Intercompany Equity & Eliminations</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom display="flex" alignItems="center"><Lan sx={{ mr: 1 }} /> Group Structure Map</Typography>
                        <Box sx={{ height: 300, bgcolor: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc' }}>
                            <Typography color="textSecondary">[Visualization Placeholder: Parent -> Sub A -> Sub B]</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Elimination Rules</Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Equity vs Investment" secondary="100% Elimination for unrelated parties" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText primary="Dividends" secondary="Eliminate intercompany dividends" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText primary="Cross-Holdings" secondary="Detect circular references" />
                            </ListItem>
                        </List>

                        <Box sx={{ mt: 2, p: 2, bgcolor: '#fff3e0', borderRadius: 1 }}>
                            <Typography variant="subtitle2" color="warning.main" display="flex" alignItems="center">
                                <Warning fontSize="small" sx={{ mr: 1 }} /> Cross-Holding Detected
                            </Typography>
                            <Typography variant="caption">
                                Entity A holds 5% of Parent. Circular ownership requires adjustment.
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IntercompanyEquity;
