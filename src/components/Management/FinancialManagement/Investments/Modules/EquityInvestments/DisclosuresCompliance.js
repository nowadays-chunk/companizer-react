import React from 'react';
import { Box, Typography, Paper, Grid, Accordion, AccordionSummary, AccordionDetails, Chip, Button } from '@mui/material';
import { ExpandMore, Description } from '@mui/icons-material';

const DisclosuresCompliance = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">Disclosures & Compliance</Typography>
                <Button variant="contained" startIcon={<Description />}>Generate Note Disclosure</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Auto-Generated Disclosure Notes</Typography>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography>Note 14: Financial Investments (IFRS 9)</Typography>
                                <Chip label="Generated" color="success" size="small" sx={{ ml: 2 }} />
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    Equity investments are measured at FVTPL unless irrevocably elected at FVOCI...
                                </Typography>
                                <Typography variant="body2" sx={{ fontFamily: 'monospace', bgcolor: '#f5f5f5', p: 1 }}>
                                    Total FVTPL Assets: $ 12,500,000<br />
                                    Level 1 Hierarchy: $ 10,000,000<br />
                                    Level 3 Hierarchy: $ 2,500,000
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography>Note 22: Investments in Associates (IAS 28)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" color="textSecondary">
                                    Summarized financial information for material associates...
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Compliance Checklist</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Chip label="Fair Value Hierarchy Validated" color="success" />
                            <Chip label="Significant Judgements Documented" color="warning" />
                            <Chip label="Related Party Flagged" color="success" />
                            <Chip label="Risk Disclosures Updated" color="default" />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DisclosuresCompliance;
