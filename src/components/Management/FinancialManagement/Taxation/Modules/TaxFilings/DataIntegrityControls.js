import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, Switch, Divider, Alert, Button, Stack, Chip } from '@mui/material';
import { Add, Security, CheckCircle } from '@mui/icons-material';

const DataIntegrityControls = () => {
    const [rules, setRules] = useState({
        preventFilingWithoutPost: true,
        validateTaxableBase: true,
        preventDoublePayment: true,
        blockAfterClose: true
    });

    const activeRules = Object.values(rules).filter(Boolean).length;

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Data Integrity & Controls</Typography>
                <Stack direction="row" spacing={1}>
                    <Chip label={`${activeRules} Active Rules`} color="success" icon={<CheckCircle />} size="small" />
                    <Button variant="outlined" startIcon={<Add />} size="small">Add Rule</Button>
                </Stack>
            </Box>

            <Alert severity="success" sx={{ mb: 3 }}>
                All integrity rules are functioning correctly. Last validation: {new Date().toLocaleString()}
            </Alert>

            <Paper>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Prevent Filing Without Posting"
                            secondary="Block tax filing if required transactions are not posted to GL"
                        />
                        <ListItemSecondaryAction>
                            <Switch
                                checked={rules.preventFilingWithoutPost}
                                onChange={(e) => setRules({ ...rules, preventFilingWithoutPost: e.target.checked })}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Validate Taxable Base vs GL Balances"
                            secondary="Ensure taxable base matches GL account balances"
                        />
                        <ListItemSecondaryAction>
                            <Switch
                                checked={rules.validateTaxableBase}
                                onChange={(e) => setRules({ ...rules, validateTaxableBase: e.target.checked })}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Prevent Double Payment / Double Filing"
                            secondary="Block duplicate payments or filings for the same period"
                        />
                        <ListItemSecondaryAction>
                            <Switch
                                checked={rules.preventDoublePayment}
                                onChange={(e) => setRules({ ...rules, preventDoublePayment: e.target.checked })}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Block Changes After Period Close"
                            secondary="Prevent modifications to tax data after period is closed"
                        />
                        <ListItemSecondaryAction>
                            <Switch
                                checked={rules.blockAfterClose}
                                onChange={(e) => setRules({ ...rules, blockAfterClose: e.target.checked })}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default DataIntegrityControls;
