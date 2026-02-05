import React, { useState } from 'react';
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Paper,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    Breadcrumbs,
    Link,
    Alert
} from '@mui/material';
import {
    Assessment,
    ReceiptLong,
    PieChart,
    ChevronRight,
    ArrowBack
} from '@mui/icons-material';

const JournalReports = () => {
    const [activeReport, setActiveReport] = useState(null);
    const [drillLevel, setDrillLevel] = useState(0); // 0: Report, 1: Account, 2: Journal, 3: Line
    const [selectedItem, setSelectedItem] = useState(null);

    const reports = [
        { id: 'trial_balance', name: 'Trial Balance', icon: <Assessment /> },
        { id: 'journal_register', name: 'Journal Register', icon: <ReceiptLong /> },
        { id: 'account_analysis', name: 'Account Analysis', icon: <PieChart /> },
    ];

    // Mock Data
    const accounts = [
        { id: '1001', name: 'Cash', balance: 50000 },
        { id: '1100', name: 'Accounts Receivable', balance: 125000 },
        { id: '2000', name: 'Accounts Payable', balance: -45000 },
        { id: '4000', name: 'Sales', balance: -250000 },
        { id: '5000', name: 'Expenses', balance: 120000 },
    ];

    const journals = [
        { id: 'JE-001', date: '2023-01-15', desc: 'Monthly Rent', amount: 5000 },
        { id: 'JE-005', date: '2023-01-20', desc: 'Office Supplies', amount: 1500 },
        { id: 'JE-012', date: '2023-01-31', desc: 'Payroll Run', amount: 45000 },
    ];

    const handleReportSelect = (report) => {
        setActiveReport(report);
        setDrillLevel(0);
        setSelectedItem(null);
    };

    const handleDrillDown = (item, level) => {
        setSelectedItem(item);
        setDrillLevel(level);
    };

    const handleBack = () => {
        setDrillLevel(prev => prev > 0 ? prev - 1 : 0);
    };

    return (
        <Box p={3} height="100%" display="flex">
            {/* SIDEBAR */}
            <Paper sx={{ width: 280, flexShrink: 0, mr: 3 }}>
                <Box p={2}>
                    <Typography variant="h6" fontWeight="bold">Financial Reports</Typography>
                    <Typography variant="body2" color="textSecondary">Select a report to view</Typography>
                </Box>
                <Divider />
                <List>
                    {reports.map((report) => (
                        <ListItem key={report.id} disablePadding>
                            <ListItemButton
                                selected={activeReport?.id === report.id}
                                onClick={() => handleReportSelect(report)}
                            >
                                <ListItemIcon>{report.icon}</ListItemIcon>
                                <ListItemText primary={report.name} />
                                <ChevronRight color="action" />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>

            {/* MAIN CONTENT */}
            <Box flexGrow={1}>
                {activeReport ? (
                    <Paper sx={{ p: 3, height: '100%' }}>
                        {/* Breadcrumbs / Header */}
                        <Box mb={3} display="flex" alignItems="center">
                            {drillLevel > 0 && (
                                <Button startIcon={<ArrowBack />} onClick={handleBack} sx={{ mr: 2 }}>
                                    Back
                                </Button>
                            )}
                            <Box>
                                <Typography variant="h5">{activeReport.name}</Typography>
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link underline="hover" color="inherit" onClick={() => setDrillLevel(0)}>Summary</Link>
                                    {drillLevel >= 1 && <Typography color="text.primary">Account Detail</Typography>}
                                    {drillLevel >= 2 && <Typography color="text.primary">Journal Detail</Typography>}
                                </Breadcrumbs>
                            </Box>
                        </Box>

                        {/* REPORT CONTENT: LEVEL 0 (SUMMARY) */}
                        {drillLevel === 0 && (
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Account ID</TableCell>
                                            <TableCell>Account Name</TableCell>
                                            <TableCell align="right">Balance</TableCell>
                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {accounts.map(acc => (
                                            <TableRow key={acc.id} hover>
                                                <TableCell>{acc.id}</TableCell>
                                                <TableCell>{acc.name}</TableCell>
                                                <TableCell align="right">${acc.balance.toLocaleString()}</TableCell>
                                                <TableCell align="center">
                                                    <Button size="small" onClick={() => handleDrillDown(acc, 1)}>
                                                        Analyze
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}

                        {/* REPORT CONTENT: LEVEL 1 (ACCOUNT TRANSACTIONS) */}
                        {drillLevel === 1 && selectedItem && (
                            <Box>
                                <Typography variant="subtitle1" gutterBottom>
                                    Transactions for {selectedItem.name} ({selectedItem.id})
                                </Typography>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Journal ID</TableCell>
                                                <TableCell>Date</TableCell>
                                                <TableCell>Description</TableCell>
                                                <TableCell align="right">Amount</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {journals.map(j => (
                                                <TableRow key={j.id} hover onClick={() => handleDrillDown(j, 2)} sx={{ cursor: 'pointer' }}>
                                                    <TableCell color="primary">{j.id}</TableCell>
                                                    <TableCell>{j.date}</TableCell>
                                                    <TableCell>{j.desc}</TableCell>
                                                    <TableCell align="right">${j.amount.toLocaleString()}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        )}

                        {/* REPORT CONTENT: LEVEL 2 (JOURNAL DETAIL) */}
                        {drillLevel === 2 && selectedItem && (
                            <Box>
                                <Alert severity="info">
                                    Drilled down to Journal Transaction <strong>{selectedItem.id}</strong>.
                                    Here you would see the specific debits and credits for this entry.
                                </Alert>
                            </Box>
                        )}
                    </Paper>
                ) : (
                    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                        <Typography variant="h6" color="textSecondary">
                            Select a report to generate preview.
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default JournalReports;
