import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Paper,
    LinearProgress,
    Button,
    useTheme
} from '@mui/material';

const IntercompanyManager = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Intercompany Settlement" subheader="Month-End Clearing" />
                        <CardContent>
                            <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2">US Entity -&gt; UK Subsidiary</Typography>
                                    <Typography variant="body2" fontWeight="bold">$450,000.00</Typography>
                                </Box>
                                <LinearProgress variant="determinate" value={75} />
                            </Box>
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2">Asia Branch -&gt; US Entity</Typography>
                                    <Typography variant="body2" fontWeight="bold">$120,000.00</Typography>
                                </Box>
                                <LinearProgress variant="determinate" value={30} color="secondary" />
                            </Box>

                            <Button variant="contained" sx={{ mt: 3 }}>Net & Settle</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IntercompanyManager;
