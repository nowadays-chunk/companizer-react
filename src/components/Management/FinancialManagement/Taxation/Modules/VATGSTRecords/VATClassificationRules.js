import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Chip, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

const rules = [
    { id: 1, name: 'Standard Goods', code: 'STD', rate: '20%', type: 'Domestic' },
    { id: 2, name: 'Basic Foodstuffs', code: 'ZERO', rate: '0%', type: 'Exempt' },
    { id: 3, name: 'B2B Services (EU)', code: 'RC-EU', rate: '0%', type: 'Reverse Charge' },
    { id: 4, name: 'Export Goods', code: 'EXP', rate: '0%', type: 'Export' }
];

const VATClassificationRules = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5">VAT Classification & Rules</Typography>
                <Button variant="contained" startIcon={<Add />}>New Rule</Button>
            </Box>

            <Grid container spacing={3}>
                {rules.map((rule) => (
                    <Grid item xs={12} md={6} lg={3} key={rule.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>{rule.name}</Typography>
                                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                    <Chip label={rule.code} size="small" color="primary" />
                                    <Chip label={rule.rate} size="small" color="secondary" />
                                </Box>
                                <Typography variant="body2" color="textSecondary">
                                    Type: {rule.type}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default VATClassificationRules;
