
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from '@mui/material';
import {
    VerifiedUser,
    CheckCircleOutline
} from '@mui/icons-material';

const QualityCompliance = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <VerifiedUser color="primary" /> Validation & Compliance
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Re-Certification Checklist</Typography>
                            <TableContainer>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell><CheckCircleOutline color="success" /></TableCell>
                                            <TableCell>Safety Testing (Solar Module)</TableCell>
                                            <TableCell>Electrical safety test required for new 12W module.</TableCell>
                                            <TableCell><Chip label="Passed" color="success" size="small" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><CheckCircleOutline color="disabled" /></TableCell>
                                            <TableCell>RoHS Documentation</TableCell>
                                            <TableCell>Supplier provided new declarations.</TableCell>
                                            <TableCell><Chip label="Pending" size="small" /></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default QualityCompliance;
