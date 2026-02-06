
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
    Alert,
    Step,
    Stepper,
    StepLabel
} from '@mui/material';
import {
    FactCheck,
    CloudUpload
} from '@mui/icons-material';

const MasterDataCreation = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <FactCheck color="primary" /> ERP Handoff & Creation
            </Typography>

            <Alert severity="warning" sx={{ mb: 3 }}>
                This action will formalize the product in the master database and make it available for transactions.
            </Alert>

            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Handoff Validations</Typography>
                    <Stepper activeStep={2} alternativeLabel>
                        <Step completed><StepLabel>All Gates Passed</StepLabel></Step>
                        <Step completed><StepLabel>Data Completeness Check</StepLabel></Step>
                        <Step active><StepLabel>ERP Sync</StepLabel></Step>
                    </Stepper>
                </CardContent>
            </Card>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Data to be Created</Typography>
                            <Typography variant="body2">• <strong>Product Record:</strong> SKU-2026-001 (Solar Backpack)</Typography>
                            <Typography variant="body2">• <strong>BOM:</strong> BOM-2026-001-A</Typography>
                            <Typography variant="body2">• <strong>Price List Item:</strong> $129.99 (Standard List)</Typography>
                            <Typography variant="body2">• <strong>Supplier Links:</strong> 2 Active Suppliers</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <CloudUpload sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                            <Typography variant="h6" gutterBottom>Ready to Launch</Typography>
                            <Button variant="contained" color="primary" size="large">Generate Product Master</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MasterDataCreation;
