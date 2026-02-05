import React from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Paper,
    Typography,
    Card,
    CardContent,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab';
import { History, Edit, Check, Close, Lock } from '@mui/icons-material';

const AccountAudit = ({ accountId: propAccountId }) => {
    const { id: paramId } = useParams();
    const accountId = propAccountId || paramId;
    const auditHistory = [
        {
            timestamp: '2024-02-03 14:30',
            user: 'John Smith',
            action: 'Account Modified',
            field: 'Account Name',
            oldValue: 'Cash',
            newValue: 'Cash and Cash Equivalents',
            status: 'Approved'
        },
        {
            timestamp: '2024-02-01 10:15',
            user: 'Jane Doe',
            action: 'Tax Code Updated',
            field: 'Default Tax Code',
            oldValue: 'TX000',
            newValue: 'TX001',
            status: 'Approved'
        },
        {
            timestamp: '2024-01-28 16:45',
            user: 'Mike Johnson',
            action: 'Status Changed',
            field: 'Active Status',
            oldValue: 'Inactive',
            newValue: 'Active',
            status: 'Approved'
        },
        {
            timestamp: '2024-01-15 09:00',
            user: 'Sarah Williams',
            action: 'Account Created',
            field: '-',
            oldValue: '-',
            newValue: 'New Account',
            status: 'Approved'
        }
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                            <History color="primary" sx={{ fontSize: 40 }} />
                            <Box>
                                <Typography variant="h6" fontWeight="bold">Account History & Audit Trail</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Full audit trail with field-level change history and approval workflow
                                </Typography>
                            </Box>
                        </Box>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">Version Number</Typography>
                                        <Typography variant="h4">3</Typography>
                                        <Chip label="Current Version" size="small" color="success" sx={{ mt: 1 }} />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">Total Changes</Typography>
                                        <Typography variant="h4">24</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                            Since creation
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">SOX Control</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                            <Lock color="primary" />
                                            <Typography variant="h6">Enabled</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={7}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Change History Timeline</Typography>
                        <Timeline>
                            {auditHistory.map((item, idx) => (
                                <TimelineItem key={idx}>
                                    <TimelineOppositeContent color="text.secondary" sx={{ flex: 0.3 }}>
                                        <Typography variant="caption">{item.timestamp}</Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary">
                                            {item.action.includes('Created') ? <Check /> :
                                                item.action.includes('Modified') ? <Edit /> :
                                                    <History />}
                                        </TimelineDot>
                                        {idx < auditHistory.length - 1 && <TimelineConnector />}
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={1} sx={{ p: 2 }}>
                                            <Typography variant="subtitle2" fontWeight="bold">
                                                {item.action}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                by {item.user}
                                            </Typography>
                                            {item.field !== '-' && (
                                                <Box sx={{ mt: 1 }}>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {item.field}: <s>{item.oldValue}</s> → <strong>{item.newValue}</strong>
                                                    </Typography>
                                                </Box>
                                            )}
                                            <Chip
                                                label={item.status}
                                                size="small"
                                                color="success"
                                                icon={<Check />}
                                                sx={{ mt: 1 }}
                                            />
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Field-Level Changes</Typography>
                        <TableContainer>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Field</TableCell>
                                        <TableCell>Changes</TableCell>
                                        <TableCell>Last Updated</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Account Name</TableCell>
                                        <TableCell><Chip label="3" size="small" /></TableCell>
                                        <TableCell>2024-02-03</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Tax Code</TableCell>
                                        <TableCell><Chip label="2" size="small" /></TableCell>
                                        <TableCell>2024-02-01</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Active Status</TableCell>
                                        <TableCell><Chip label="1" size="small" /></TableCell>
                                        <TableCell>2024-01-28</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Description (EN)</TableCell>
                                        <TableCell><Chip label="5" size="small" /></TableCell>
                                        <TableCell>2024-01-20</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                    <Card sx={{ mt: 2 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Approval Workflow</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="body2">Pending Approvals</Typography>
                                    <Chip label="0" size="small" color="success" />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="body2">Total Approvals</Typography>
                                    <Chip label="24" size="small" />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="body2">Rejections</Typography>
                                    <Chip label="0" size="small" />
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AccountAudit;
