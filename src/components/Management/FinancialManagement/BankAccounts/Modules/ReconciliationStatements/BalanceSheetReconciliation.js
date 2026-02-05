import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    ListItemText,
    Typography,
    LinearProgress,
    Chip,
    Button,
    useTheme
} from '@mui/material';

const BalanceSheetReconciliation = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Balance Sheet Reconciliation"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <CardContent>
                    <List>
                        <ListItem divider sx={{ flexDirection: 'column', alignItems: 'flex-start', py: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 1 }}>
                                <Typography variant="h6">Payroll Clearing (2200)</Typography>
                                <Chip label="In Progress" color="warning" size="small" />
                            </Box>
                            <Typography variant="body2" color="textSecondary" gutterBottom>
                                Reconciling Ledger vs Payroll Provider Reports
                            </Typography>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={60} sx={{ flexGrow: 1, mr: 2 }} />
                                <Button size="small" variant="outlined">Continue</Button>
                            </Box>
                        </ListItem>

                        <ListItem divider sx={{ flexDirection: 'column', alignItems: 'flex-start', py: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 1 }}>
                                <Typography variant="h6">Sales Tax Payable (2400)</Typography>
                                <Chip label="Ready for Review" color="info" size="small" />
                            </Box>
                            <Typography variant="body2" color="textSecondary" gutterBottom>
                                Monthly Sales Tax Return Verification
                            </Typography>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={100} sx={{ flexGrow: 1, mr: 2 }} color="success" />
                                <Button size="small" variant="contained" color="primary">Review</Button>
                            </Box>
                        </ListItem>

                        <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', py: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 1 }}>
                                <Typography variant="h6">Prepaid Expenses (1400)</Typography>
                                <Chip label="Not Started" color="default" size="small" />
                            </Box>
                            <Typography variant="body2" color="textSecondary" gutterBottom>
                                Amortization Schedule Check
                            </Typography>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={0} sx={{ flexGrow: 1, mr: 2 }} />
                                <Button size="small" variant="outlined">Start</Button>
                            </Box>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export default BalanceSheetReconciliation;
