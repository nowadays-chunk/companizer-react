
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip
} from '@mui/material';
import {
    VerifiedUser,
    Security
} from '@mui/icons-material';

const QualityCompliance = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <VerifiedUser color="primary" /> Regulatory & Compliance
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Certifications Required</Typography>
                            <TableContainer component={Paper} elevation={0} variant="outlined">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Region</TableCell>
                                            <TableCell>Certification</TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>EU</TableCell>
                                            <TableCell>CE Marking (Low Voltage Directive)</TableCell>
                                            <TableCell><Chip label="In Review" size="small" color="primary" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>USA</TableCell>
                                            <TableCell>FCC Part 15</TableCell>
                                            <TableCell><Chip label="Pending" size="small" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Global</TableCell>
                                            <TableCell>RoHS Compliant Material</TableCell>
                                            <TableCell><Chip label="Confirmed" size="small" color="success" /></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Risk Assessment (FMEA)</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, p: 1, bgcolor: '#fff3e0', borderRadius: 1 }}>
                                <Typography variant="body2">RPN Score Max</Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>120 (Medium)</Typography>
                            </Box>

                            <Box sx={{ mt: 2 }}>
                                <Typography variant="subtitle2">Top Risk:</Typography>
                                <Typography variant="body2">Supply chain delay for solar module.</Typography>
                                <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 0.5 }}>Mitigation: Dual sourcing strategy initated.</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default QualityCompliance;
