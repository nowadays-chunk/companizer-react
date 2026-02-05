import React, { useState } from 'react';
import { 
    Box, 
    Paper, 
    Typography, 
    Grid, 
    Button, 
    TextField, 
    MenuItem,
    Card,
    CardContent,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Collapse,
    Tooltip
} from '@mui/material';
import { 
    FilterList, 
    GetApp, 
    Refresh, 
    KeyboardArrowDown, 
    KeyboardArrowRight,
    Search,
    PictureAsPdf,
    TableChart,
    Print
} from '@mui/icons-material';

const TrialBalanceStandard = () => {
    const [filterDate, setFilterDate] = useState(new Date().toISOString().split('T')[0]);
    const [periodType, setPeriodType] = useState('as-of'); // 'as-of' or 'range'
    const [viewMode, setViewMode] = useState('hierarchy'); // 'hierarchy' or 'flat'
    
    // Mock data for initial display
    const [accounts, setAccounts] = useState([
        { id: 1, name: 'Assets', type: 'Asset', code: '1000', debit: 500000, credit: 0, level: 0, children: [
            { id: 11, name: 'Current Assets', type: 'Asset', code: '1100', debit: 200000, credit: 0, level: 1, children: [
                { id: 111, name: 'Cash', type: 'Asset', code: '1110', debit: 50000, credit: 0, level: 2 },
                { id: 112, name: 'Bank', type: 'Asset', code: '1120', debit: 150000, credit: 0, level: 2 },
            ]},
            { id: 12, name: 'Fixed Assets', type: 'Asset', code: '1200', debit: 300000, credit: 0, level: 1 }
        ]},
        { id: 2, name: 'Liabilities', type: 'Liability', code: '2000', debit: 0, credit: 300000, level: 0, children: [] },
        { id: 3, name: 'Equity', type: 'Equity', code: '3000', debit: 0, credit: 200000, level: 0, children: [] },
    ]);

    const [expanded, setExpanded] = useState({});

    const toggleExpand = (id) => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const renderRow = (account) => {
        const hasChildren = account.children && account.children.length > 0;
        const isExpanded = expanded[account.id];
        
        return (
            <React.Fragment key={account.id}>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} hover>
                    <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: account.level * 3 }}>
                            {hasChildren && (
                                <IconButton size="small" onClick={() => toggleExpand(account.id)}>
                                    {isExpanded ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
                                </IconButton>
                            )}
                            {!hasChildren && <Box sx={{ width: 28 }} />}
                            <Typography variant="body2" sx={{ fontWeight: account.level === 0 ? 'bold' : 'normal' }}>
                                {account.code} - {account.name}
                            </Typography>
                        </Box>
                    </TableCell>
                    <TableCell>{account.type}</TableCell>
                    <TableCell align="right">
                        {account.debit > 0 ? account.debit.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : '-'}
                    </TableCell>
                    <TableCell align="right">
                        {account.credit > 0 ? account.credit.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : '-'}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                        {(account.debit - account.credit).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </TableCell>
                </TableRow>
                {hasChildren && (
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                                <Table size="small" aria-label="purchases">
                                    <TableBody>
                                        {account.children.map((child) => renderRow(child))}
                                    </TableBody>
                                </Table>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                )}
            </React.Fragment>
        );
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>Standard Trial Balance</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                     <Button startIcon={<Print />} variant="outlined">Print</Button>
                     <Button startIcon={<PictureAsPdf />} variant="outlined">PDF</Button>
                     <Button startIcon={<TableChart />} variant="outlined">Excel</Button>
                </Box>
            </Box>

            <Paper elevation={0} variant="outlined" sx={{ p: 2, mb: 3, backgroundColor: '#f9fafb' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={3}>
                        <TextField
                            select
                            label="Period Type"
                            fullWidth
                            size="small"
                            value={periodType}
                            onChange={(e) => setPeriodType(e.target.value)}
                        >
                            <MenuItem value="as-of">As of Date</MenuItem>
                            <MenuItem value="range">Date Range</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            type="date"
                            label="Date"
                            fullWidth
                            size="small"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                     <Grid item xs={12} md={3}>
                        <TextField
                            select
                            label="Department"
                            fullWidth
                            size="small"
                            defaultValue="all"
                        >
                            <MenuItem value="all">All Departments</MenuItem>
                            <MenuItem value="sales">Sales</MenuItem>
                            <MenuItem value="it">IT</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button 
                            variant="contained" 
                            startIcon={<Refresh />}
                            fullWidth
                            sx={{ height: 40 }}
                        >
                            Generate Report
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Total Debit</Typography>
                            <Typography variant="h4" color="primary">$500,000.00</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Total Credit</Typography>
                            <Typography variant="h4" color="secondary">$500,000.00</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined" sx={{ bgcolor: '#ecfdf5' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Difference</Typography>
                            <Typography variant="h4" color="success.main">$0.00</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <TableContainer component={Paper} variant="outlined">
                <Table>
                    <TableHead sx={{ bgcolor: '#f3f4f6' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Account</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Debit</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Credit</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Net Balance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {accounts.map(account => renderRow(account))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default TrialBalanceStandard;
