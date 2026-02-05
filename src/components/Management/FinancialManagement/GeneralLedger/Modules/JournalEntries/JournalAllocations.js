import React from 'react';
import {
    Box,
    Button,
    Grid,
    Paper,
    Typography,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider
} from '@mui/material';
import {
    PieChart,
    PlayCircleFilled,
    Add,
    ArrowForward
} from '@mui/icons-material';
import Management from '../../../../../../pages/Management';

const JournalAllocations = () => {

    // Mock Allocation Rules
    const rules = [
        { id: 1, name: 'Rent Allocation', source: 'Corporate Expenses', driver: 'Square Footage', target: 'Departments' },
        { id: 2, name: 'IT Overhead', source: 'IT Cost Center', driver: 'Headcount', target: 'All Units' },
        { id: 3, name: 'Marketing Dist.', source: 'Global Marketing', driver: 'Revenue Share', target: 'Sales Regions' },
    ];

    return (
        <Box height="100%" display="flex" flexDirection="column">
            <Paper square sx={{ p: 2, borderBottom: '1px solid #e0e0e0', bgcolor: 'background.default' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                        <Typography variant="h6" color="primary" display="flex" alignItems="center">
                            <PieChart sx={{ mr: 1 }} />
                            Cost & Revenue Allocations
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Run cycles to distribute costs across cost centers and projects.
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant="outlined" startIcon={<Add />} sx={{ mr: 1 }}>New Rule</Button>
                        <Button variant="contained" color="secondary" startIcon={<PlayCircleFilled />}>Run Allocation Cycle</Button>
                    </Box>
                </Box>
            </Paper>

            <Grid container spacing={0} sx={{ flexGrow: 1 }}>
                {/* Left Sidebar: Active Rules */}
                <Grid item xs={12} md={3} sx={{ borderRight: '1px solid #e0e0e0', height: '100%', overflowY: 'auto' }}>
                    <Box p={2}>
                        <Typography variant="subtitle2" gutterBottom color="textSecondary">ACTIVE ALLOCATION RULES</Typography>
                        <List dense>
                            {rules.map((rule) => (
                                <React.Fragment key={rule.id}>
                                    <ListItem button>
                                        <ListItemIcon><ArrowForward fontSize="small" /></ListItemIcon>
                                        <ListItemText
                                            primary={rule.name}
                                            secondary={`${rule.driver} -> ${rule.target}`}
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                </React.Fragment>
                            ))}
                        </List>
                        <Button fullWidth onClick={() => alert("Mock: Open Rule Builder")}>Manage Rules</Button>
                    </Box>
                </Grid>

                {/* Right Area: History / Results */}
                <Grid item xs={12} md={9} sx={{ height: '100%', overflow: 'hidden' }}>
                    <Management
                        module="financial-management"
                        subModule="general-ledger"
                        component="journal-entries"
                        // Filter for Allocation journals
                        initialFilters={[{ column: 'journal_category', value: 'allocation', active: true }]}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default JournalAllocations;
