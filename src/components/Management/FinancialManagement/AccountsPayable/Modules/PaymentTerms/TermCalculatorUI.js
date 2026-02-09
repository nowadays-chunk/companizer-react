import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, MenuItem, Grid, Button } from '@mui/material';
// import { TermCalculator } from './TermCalculator'; // No longer needed for calculation
import { calculatePaymentDueDate } from '../../../../../../utils/clientQueries';
import { fieldsConfig, collectionName } from './Modules/Specific/TermCalculatorUI';

const TermCalculatorUI = () => {
    const [baseDate, setBaseDate] = useState(new Date().toISOString().split('T')[0]);
    const [method, setMethod] = useState('fixed_days');
    const [days, setDays] = useState(30);
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {
        const config = {
            due_date_method: method,
            days_due: parseInt(days, 10),
            base_date: baseDate
        };
        // Use backend calculation
        try {
            const { data } = await calculatePaymentDueDate(config);
            if (data?.due_date) {
                setResult(new Date(data.due_date).toISOString().split('T')[0]);
            }
        } catch (error) {
            console.error("Failed to calculate due date", error);
        }
    };

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Due Date Calculator</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <TextField
                        label="Base Date"
                        type="date"
                        fullWidth
                        value={baseDate}
                        onChange={(e) => setBaseDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        select
                        label="Method"
                        fullWidth
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                    >
                        <MenuItem value="fixed_days">Net Days</MenuItem>
                        <MenuItem value="end_of_month">End of Month</MenuItem>
                        <MenuItem value="day_of_month">Day of Month</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        label="Days / Day param"
                        type="number"
                        fullWidth
                        value={days}
                        onChange={(e) => setDays(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleCalculate}>Calculate</Button>
                </Grid>
                {result && (
                    <Grid item xs={12}>
                        <Typography variant="h5" color="primary">Due Date: {result}</Typography>
                    </Grid>
                )}
            </Grid>
        </Paper>
    );
};

export default TermCalculatorUI;
