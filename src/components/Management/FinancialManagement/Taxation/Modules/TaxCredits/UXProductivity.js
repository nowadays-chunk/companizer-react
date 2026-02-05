import React from 'react';
import { Box, Typography, Paper, Grid, Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { CloudUpload, Download, FileCopy, Print, TableView } from '@mui/icons-material';

const UXProductivity = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">Productivity Tools</Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
                Bulk actions, data import/export, and utility tools for tax credit management.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom display="flex" alignItems="center">
                            <CloudUpload sx={{ mr: 1 }} color="primary" /> Bulk Data Import
                        </Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            Upload CSV or Excel files to create multiple credit records or update statuses in bulk.
                        </Typography>

                        <Box sx={{ border: '2px dashed', borderColor: 'divider', borderRadius: 2, p: 4, textAlign: 'center', bgcolor: 'action.hover', cursor: 'pointer' }}>
                            <CloudUpload sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }} />
                            <Typography>Drag and drop files here or click to browse</Typography>
                        </Box>
                        <Box mt={2}>
                            <Button variant="outlined" startIcon={<Download />}>Download Template</Button>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom display="flex" alignItems="center">
                            <TableView sx={{ mr: 1 }} color="secondary" /> Export & Reports
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon><FileCopy /></ListItemIcon>
                                <ListItemText primary="Export Credit Register (Excel)" secondary="All active credits details" />
                                <Button variant="outlined" size="small">Export</Button>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemIcon><Print /></ListItemIcon>
                                <ListItemText primary="Compliance Summary (PDF)" secondary="Audit-ready document" />
                                <Button variant="outlined" size="small">Print</Button>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemIcon><Download /></ListItemIcon>
                                <ListItemText primary="Utilization Analysis (CSV)" secondary="Raw data for external BI" />
                                <Button variant="outlined" size="small">Download</Button>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UXProductivity;
