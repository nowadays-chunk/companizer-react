
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button
} from '@mui/material';
import {
    Policy,
    Description
} from '@mui/icons-material';

const ComplianceRegulatory = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Policy color="primary" /> Regulatory Compliance & Records
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Record Retention (Audit Pack)</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><Description /></ListItemIcon>
                                    <ListItemText primary="Discontinuation Approval (Signed)" secondary="Retain for 7 Years" />
                                    <Button size="small">View</Button>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><Description /></ListItemIcon>
                                    <ListItemText primary="Certificate of Destruction (HazMat)" secondary="Retain Indefinitely" />
                                    <Button size="small">Upload</Button>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ComplianceRegulatory;
