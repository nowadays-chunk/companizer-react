import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Button, Grid, FormControlLabel, Checkbox, TextField, Divider, Alert } from '@mui/material';
import { PictureAsPdf, TextSnippet, TableView } from '@mui/icons-material';

const ReportingDisclosure = () => {
    const [noteText, setNoteText] = useState(`NOTE 14: BORROWINGS\n\nAs of December 31, 2023, the Group's total interest-bearing loans and borrowings amounted to $4.5 million. The maturity profile is as follows:\n\n- Current: $1.2 million\n- Non-Current: $3.3 million\n\nThe Group has complied with all financial covenants during the reporting period.`);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Reporting & Disclosure Generator</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>Report Builder</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="subtitle2" color="primary" gutterBottom>Contents to Include:</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Maturity Schedule Table" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Fair Value Disclosures" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Covenant Compliance Statement" />
                            <FormControlLabel control={<Checkbox />} label="Undrawn Facilities Details" />
                            <FormControlLabel control={<Checkbox />} label="Interest Rate Sensitivity" />
                        </Box>
                        <Box sx={{ mt: 3 }}>
                            <TextField label="Reporting Date" type="date" fullWidth defaultValue="2023-12-31" sx={{ mb: 2 }} />
                            <Button variant="contained" fullWidth>Generate Draft</Button>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Typography variant="h6">Generated Note Preview (IFRS/GAAP)</Typography>
                            <Box>
                                <Button startIcon={<TextSnippet />} sx={{ mr: 1 }}>Copy Text</Button>
                                <Button variant="outlined" startIcon={<PictureAsPdf />}>Export PDF</Button>
                            </Box>
                        </Box>
                        <TextField
                            fullWidth
                            multiline
                            rows={15}
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            sx={{ fontFamily: 'monospace', bgcolor: '#fafafa' }}
                        />
                        <Alert severity="info" sx={{ mt: 2 }}>
                            This text is auto-generated based on the current live data in the Maturity Modules. Please review before publishing.
                        </Alert>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Standard Auditor Schedules</Typography>
                        <List sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                            <ListItem disablePadding sx={{ width: 'auto' }}>
                                <Button variant="outlined" startIcon={<TableView />}>Detailed Repayment Schedule (XLSX)</Button>
                            </ListItem>
                            <ListItem disablePadding sx={{ width: 'auto' }}>
                                <Button variant="outlined" startIcon={<TableView />}>Interest Accrual Roll-forward (XLSX)</Button>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
export default ReportingDisclosure;
