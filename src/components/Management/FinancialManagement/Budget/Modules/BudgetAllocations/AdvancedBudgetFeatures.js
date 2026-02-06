import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Star } from '@mui/icons-material';

const AdvancedBudgetFeatures = () => {
    const [openDialog, setOpenDialog] = useState(null);

    const handleClose = () => setOpenDialog(null);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Star color="secondary" /> Advanced Features
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Zero-Based Budgeting (ZBB)</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Force justification for every dollar. Start from zero base for FY2026.
                            </Typography>
                            <Button variant="outlined" color="primary" onClick={() => setOpenDialog('ZBB')}>Initiate ZBB Cycle</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Activity-Based Budgeting (ABB)</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Allocate costs based on activity drivers and volume metrics.
                            </Typography>
                            <Button variant="outlined" color="primary" onClick={() => setOpenDialog('ABB')}>Configure Activity Drivers</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>CapEx Budgeting</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Separate workflow for Capital Expenditure requests &gt; $10k.
                            </Typography>
                            <Button variant="outlined" color="primary" onClick={() => setOpenDialog('CAPEX')}>Manage CapEx Limits</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Simple Dynamic Dialog */}
            <Dialog open={!!openDialog} onClose={handleClose}>
                <DialogTitle>
                    {openDialog === 'ZBB' && 'Initiate Zero-Based Budgeting'}
                    {openDialog === 'ABB' && 'Configure Activity Drivers'}
                    {openDialog === 'CAPEX' && 'Manage CapEx Limits'}
                </DialogTitle>
                <DialogContent sx={{ minWidth: 400, pt: 2 }}>
                    <Typography gutterBottom>
                        {openDialog === 'ZBB' && 'Are you sure you want to reset all department budgets to zero for the upcoming cycle?'}
                        {openDialog === 'ABB' && 'Define the primary cost drivers for allocation logic.'}
                        {openDialog === 'CAPEX' && 'Set the threshold for capital expenditure requests requiring special approval.'}
                    </Typography>
                    {openDialog === 'CAPEX' && <TextField label="Threshold Amount ($)" fullWidth margin="normal" defaultValue="10000" />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleClose}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AdvancedBudgetFeatures;
