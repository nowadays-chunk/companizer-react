import React from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, MenuItem } from '@mui/material';

const RepaymentProcessing = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Repayment Processing</Typography>
            <Paper sx={{ p: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth select label="Payment Type">
                            <MenuItem value="principal">Principal</MenuItem>
                            <MenuItem value="interest">Interest</MenuItem>
                            <MenuItem value="mixed">Mixed</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Amount" type="number" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Allocation (Principal)" type="number" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Allocation (Interest)" type="number" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">Post Payment</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default RepaymentProcessing;
