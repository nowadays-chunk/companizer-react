import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Paper,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Chip,
    useTheme
} from '@mui/material';
import { AccountBalance, Description, CheckCircle } from '@mui/icons-material';

const ExecutionConnectivity = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Bank Connectivity Status" />
                        <CardContent>
                            <List>
                                <ListItem divider>
                                    <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                    <ListItemText primary="Chase Bank (ACH/Wire)" secondary="Connected - Ready" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                                    <ListItemText primary="HSBC (SWIFT)" secondary="Connected - Last Sync: 2 mins ago" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Payment File Generation" />
                        <CardContent>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" gutterBottom>Pending Batch #1024</Typography>
                                <Chip label="15 Transfers" size="small" sx={{ mr: 1 }} />
                                <Chip label="$32,500.00" size="small" variant="outlined" />
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button variant="outlined" startIcon={<Description />}>Generate NACHA File</Button>
                                <Button variant="outlined" startIcon={<AccountBalance />}>Send via API</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ExecutionConnectivity;
