import React, { useState } from 'react';
import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress, Snackbar, Alert } from '@mui/material';
import { MergeType, ExpandMore } from '@mui/icons-material';

const MultiEntityConsolidation = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleRun = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 1500);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <MergeType color="primary" /> Multi-Entity Consolidation
                </Typography>
                <Button
                    variant="outlined"
                    onClick={handleRun}
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} /> : null}
                >
                    {loading ? 'Consolidating...' : 'Run Consolidation'}
                </Button>
            </Box>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="subtitle1" fontWeight="bold">Global Group (Consolidated)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Entity</TableCell>
                                <TableCell align="right">Local Budget</TableCell>
                                <TableCell align="right">Currency</TableCell>
                                <TableCell align="right">USD Equivalent</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>US Head Office</TableCell>
                                <TableCell align="right">5,000,000</TableCell>
                                <TableCell align="right">USD</TableCell>
                                <TableCell align="right">5,000,000</TableCell>
                                <TableCell>Active</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>EU Branch</TableCell>
                                <TableCell align="right">2,000,000</TableCell>
                                <TableCell align="right">EUR</TableCell>
                                <TableCell align="right">2,180,000</TableCell>
                                <TableCell>Active</TableCell>
                            </TableRow>
                            <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                                <TableCell><strong>Total</strong></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"><strong>7,180,000</strong></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </AccordionDetails>
            </Accordion>

            <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
                <Alert severity="success">Consolidation run completed successfully!</Alert>
            </Snackbar>
        </Box>
    );
};

export default MultiEntityConsolidation;
