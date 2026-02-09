
import React, { useState } from 'react';
import { Box, Typography, Container, Card, CardContent, Grid, Button, TextField } from '@mui/material';
import { useTranslation } from '../../../../../../contexts/TranslationProvider';
import { fieldsConfig, collectionName } from './Modules/Specific/VendorPortalHome';

const VendorPortalHome = () => {
    const { t } = useTranslation();
    const [accessCode, setAccessCode] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        if (accessCode === 'VENDOR123') { // Mock auth
            setIsAuthenticated(true);
        } else {
            alert("Invalid Access Code (Try VENDOR123)");
        }
    };

    if (!isAuthenticated) {
        return (
            <Container maxWidth="sm">
                <Box mt={10} textAlign="center">
                    <Typography variant="h4" gutterBottom>Vendor Portal</Typography>
                    <Card>
                        <CardContent>
                            <Typography variant="body1" paragraph>
                                Please enter your secure access code to view your invoices and payment status.
                            </Typography>
                            <TextField
                                label="Access Code"
                                fullWidth
                                margin="normal"
                                value={accessCode}
                                onChange={(e) => setAccessCode(e.target.value)}
                            />
                            <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                                Enter Portal
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg">
            <Box py={5}>
                <Typography variant="h4" gutterBottom>Welcome, Vendor</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Pending Invoices</Typography>
                                <Typography variant="h3" color="primary">3</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Payments in Transit</Typography>
                                <Typography variant="h3" color="success">$12,450</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Submitted (Last 30 Days)</Typography>
                                <Typography variant="h3">12</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h5" mt={4} mb={2}>My Invoices</Typography>
                        {/* Placeholder for list */}
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary">No recent activity to display.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="center" mt={4}>
                            <Button variant="contained" size="large">Upload New Invoice</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default VendorPortalHome;
