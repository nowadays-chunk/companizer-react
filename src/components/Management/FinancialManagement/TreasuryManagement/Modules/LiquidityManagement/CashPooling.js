import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Avatar,
    Divider
} from '@mui/material';
import CallSplitIcon from '@mui/icons-material/CallSplit'; // Branching/Pooling
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const poolParticipants = [
    { entity: 'US Parent (Head)', balance: 2500000, contribution: 0 },
    { entity: 'UK Sub', balance: 0, contribution: 450000 },
    { entity: 'DE Sub', balance: 0, contribution: 320000 },
    { entity: 'FR Sub', balance: 0, contribution: -120000 }, // Deficit
];

const CashPooling = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box display="flex" alignItems="center" gap={2} mb={3}>
                <Avatar sx={{ bgcolor: 'secondary.main' }}><AccountTreeIcon /></Avatar>
                <Typography variant="h5">Global Cash Pooling (ZBA)</Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#e3f2fd', mb: 2 }}>
                        <CardContent>
                            <Typography variant="overline" color="textSecondary">Pool Header Balance</Typography>
                            <Typography variant="h4" color="primary.main">$3,150,000</Typography>
                            <Typography variant="caption">Chase NY Main Account</Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Pooling Structure</Typography>
                            <Typography variant="body2" paragraph>
                                <strong>Type:</strong> Zero Balance Account (ZBA)
                            </Typography>
                            <Typography variant="body2" paragraph>
                                <strong>Frequency:</strong> End of Day Sweep
                            </Typography>
                            <Typography variant="body2" paragraph>
                                <strong>Currency:</strong> USD (Multi-currency notional)
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h6" gutterBottom>Participant Positions (Pre/Post Sweep)</Typography>
                    <Table size="medium">
                        <TableHead>
                            <TableRow>
                                <TableCell>Entity Name</TableCell>
                                <TableCell align="right">EOD Balance</TableCell>
                                <TableCell align="right">Swept Amount</TableCell>
                                <TableCell align="right">Net Position</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {poolParticipants.map(p => (
                                <TableRow key={p.entity}>
                                    <TableCell sx={{ fontWeight: p.entity.includes('Head') ? 'bold' : 'normal' }}>
                                        {p.entity}
                                    </TableCell>
                                    <TableCell align="right" sx={{ color: p.contribution >= 0 ? 'text.primary' : 'error.main' }}>
                                        {p.entity.includes('Head') ? '-' : (p.contribution).toLocaleString()}
                                    </TableCell>
                                    <TableCell align="right" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                                        {p.entity.includes('Head') ? '-' : (p.contribution * -1).toLocaleString()}
                                    </TableCell>
                                    <TableCell align="right">
                                        {p.entity.includes('Head') ? (p.balance + 650000).toLocaleString() : '0'}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CashPooling;
