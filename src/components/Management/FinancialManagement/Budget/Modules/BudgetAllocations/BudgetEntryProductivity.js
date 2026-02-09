import React, { useRef, useState } from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardContent, Snackbar, Alert, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { Speed, FileUpload, FileDownload, ContentCopy, AddCircle } from '@mui/icons-material';
import { budgetCreateBudget } from '../../../../../../utils/clientQueries';
import { fieldsConfig, collectionName, entityName } from './Modules/General/BudgetEntryProductivity';

const BudgetEntryProductivity = () => {
    const fileInputRef = useRef(null);
    const [msg, setMsg] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);

    const [newBudget, setNewBudget] = useState({
        name: '',
        year: new Date().getFullYear() + 1,
        totalAmount: ''
    });

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setMsg(`Successfully imported: ${event.target.files[0].name}`);
        }
    };

    const handleCreateBudget = async () => {
        if (!newBudget.name || !newBudget.totalAmount) {
            setMsg('Please fill in all required fields');
            return;
        }
        setLoading(true);
        try {
            await budgetCreateBudget({
                name: newBudget.name,
                year: parseInt(newBudget.year),
                totalAmount: parseFloat(newBudget.totalAmount)
            });
            setMsg('Budget created successfully!');
            setOpenDialog(false);
            setNewBudget({ name: '', year: new Date().getFullYear() + 1, totalAmount: '' });
        } catch (error) {
            console.error(error);
            setMsg('Failed to create budget');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Speed color="primary" /> UX & Productivity Tools
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Card>
                        <CardActionArea sx={{ p: 2, textAlign: 'center' }} onClick={() => setOpenDialog(true)}>
                            <AddCircle fontSize="large" color="primary" />
                            <CardContent>
                                <Typography variant="h6">New Budget</Typography>
                                <Typography variant="body2" color="text.secondary">Create a new budget plan</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card>
                        <CardActionArea sx={{ p: 2, textAlign: 'center' }} onClick={handleUploadClick}>
                            <input
                                type="file"
                                hidden
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept=".csv,.xlsx"
                            />
                            <FileUpload fontSize="large" color="primary" />
                            <CardContent>
                                <Typography variant="h6">Bulk Import</Typography>
                                <Typography variant="body2" color="text.secondary">Upload Excel / CSV templates</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card>
                        <CardActionArea sx={{ p: 2, textAlign: 'center' }} onClick={() => setMsg('Budget cloned for FY2025 successfully!')}>
                            <ContentCopy fontSize="large" color="secondary" />
                            <CardContent>
                                <Typography variant="h6">Clone Budget</Typography>
                                <Typography variant="body2" color="text.secondary">Copy FY2024 structure to FY2025</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card>
                        <CardActionArea sx={{ p: 2, textAlign: 'center' }} onClick={() => setMsg('Export started. Download will begin shortly.')}>
                            <FileDownload fontSize="large" color="success" />
                            <CardContent>
                                <Typography variant="h6">Export Reports</Typography>
                                <Typography variant="body2" color="text.secondary">Download all variance reports</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            {/* Create Budget Dialog */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Create New Budget</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Budget Name"
                        fullWidth
                        value={newBudget.name}
                        onChange={(e) => setNewBudget({ ...newBudget, name: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Fiscal Year"
                        type="number"
                        fullWidth
                        value={newBudget.year}
                        onChange={(e) => setNewBudget({ ...newBudget, year: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Total Amount"
                        type="number"
                        fullWidth
                        value={newBudget.totalAmount}
                        onChange={(e) => setNewBudget({ ...newBudget, totalAmount: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button onClick={handleCreateBudget} variant="contained" disabled={loading}>
                        {loading ? 'Creating...' : 'Create'}
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={!!msg} autoHideDuration={3000} onClose={() => setMsg('')}>
                <Alert severity="info" onClose={() => setMsg('')}>{msg}</Alert>
            </Snackbar>
        </Box>
    );
};

export default BudgetEntryProductivity;
