import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    ListItemText,
    Switch,
    IconButton,
    Button,
    Grid,
    useTheme
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import { fieldsConfig, collectionName, entityName } from './Modules/Specific/AutomationRules';

const AutomationRules = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Recurring Transfers" action={<Button size="small">Add New</Button>} />
                        <CardContent>
                            <List>
                                <ListItem divider secondaryAction={<IconButton><Edit /></IconButton>}>
                                    <ListItemText primary="Weekly Payroll Funding" secondary="Every Tuesday | $250k" />
                                </ListItem>
                                <ListItem secondaryAction={<IconButton><Edit /></IconButton>}>
                                    <ListItemText primary="Monthly Rent - NY Office" secondary="1st of Month | $45k" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Routing Rules" />
                        <CardContent>
                            <List>
                                <ListItem divider secondaryAction={<Switch defaultChecked />}>
                                    <ListItemText primary="Auto-Approve Internal < $10k" />
                                </ListItem>
                                <ListItem secondaryAction={<Switch defaultChecked />}>
                                    <ListItemText primary="Route > $1M to Board Approval" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AutomationRules;
