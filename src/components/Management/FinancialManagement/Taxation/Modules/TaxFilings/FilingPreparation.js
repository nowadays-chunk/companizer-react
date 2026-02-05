import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Stepper, Step, StepLabel, TextField, MenuItem, Table, TableHead, TableRow, TableCell, TableBody, Chip, Alert, Stack, Card, CardContent } from '@mui/material';
import { Description, CloudUpload, Preview, Send } from '@mui/icons-material';

const FilingPreparation = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Select Period', 'Review Data', 'Attach Documents', 'Generate Return', 'Submit'];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Tax Filing Preparation</Typography>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Paper>

            {activeStep === 0 && (
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>Select Filing Period</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <TextField select fullWidth label="Tax Type" defaultValue="vat">
                                <MenuItem value="vat">VAT Return</MenuItem>
                                <MenuItem value="wht">Withholding Tax</MenuItem>
                                <MenuItem value="income">Corporate Income Tax</MenuItem>
                                <MenuItem value="payroll">Payroll Tax</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField select fullWidth label="Jurisdiction" defaultValue="uk">
                                <MenuItem value="uk">United Kingdom</MenuItem>
                                <MenuItem value="us">United States</MenuItem>
                                <MenuItem value="de">Germany</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField select fullWidth label="Period" defaultValue="q1">
                                <MenuItem value="q1">Q1 2024</MenuItem>
                                <MenuItem value="q2">Q2 2024</MenuItem>
                                <MenuItem value="q3">Q3 2024</MenuItem>
                                <MenuItem value="q4">Q4 2024</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Alert severity="info">
                                Filing deadline: <strong>April 30, 2024</strong> (15 days remaining)
                            </Alert>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained" onClick={() => setActiveStep(1)}>Next</Button>
                    </Box>
                </Paper>
            )}

            {activeStep === 1 && (
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>Review Tax Data</Typography>
                    <Grid container spacing={3} sx={{ mb: 3 }}>
                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardContent>
                                    <Typography color="text.secondary" variant="body2">Output VAT</Typography>
                                    <Typography variant="h6">$45,230</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardContent>
                                    <Typography color="text.secondary" variant="body2">Input VAT</Typography>
                                    <Typography variant="h6">$12,450</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardContent>
                                    <Typography color="text.secondary" variant="body2">Net VAT Payable</Typography>
                                    <Typography variant="h6" color="error">$32,780</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardContent>
                                    <Typography color="text.secondary" variant="body2">Transactions</Typography>
                                    <Typography variant="h6">1,245</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Description</strong></TableCell>
                                <TableCell align="right"><strong>Taxable Base</strong></TableCell>
                                <TableCell align="right"><strong>Tax Amount</strong></TableCell>
                                <TableCell><strong>Rate</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Standard Rate Sales</TableCell>
                                <TableCell align="right">$226,150</TableCell>
                                <TableCell align="right">$45,230</TableCell>
                                <TableCell><Chip label="20%" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Standard Rate Purchases</TableCell>
                                <TableCell align="right">$62,250</TableCell>
                                <TableCell align="right">($12,450)</TableCell>
                                <TableCell><Chip label="20%" size="small" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Net VAT Payable</strong></TableCell>
                                <TableCell align="right"><strong>$163,900</strong></TableCell>
                                <TableCell align="right"><strong>$32,780</strong></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={() => setActiveStep(0)}>Back</Button>
                        <Button variant="contained" onClick={() => setActiveStep(2)}>Next</Button>
                    </Box>
                </Paper>
            )}

            {activeStep === 2 && (
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>Attach Supporting Documents</Typography>
                    <Alert severity="warning" sx={{ mb: 3 }}>
                        Please attach all required supporting documents before proceeding to filing.
                    </Alert>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Button variant="outlined" startIcon={<CloudUpload />} fullWidth sx={{ py: 3 }}>
                                Upload Invoices & Receipts
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" startIcon={<CloudUpload />} fullWidth sx={{ py: 3 }}>
                                Upload Withholding Certificates
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" startIcon={<CloudUpload />} fullWidth sx={{ py: 3 }}>
                                Upload Bank Statements
                            </Button>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={() => setActiveStep(1)}>Back</Button>
                        <Button variant="contained" onClick={() => setActiveStep(3)}>Next</Button>
                    </Box>
                </Paper>
            )}

            {activeStep === 3 && (
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>Generate Tax Return</Typography>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={12} md={6}>
                            <TextField select fullWidth label="Return Format" defaultValue="xml">
                                <MenuItem value="xml">XML (E-Filing)</MenuItem>
                                <MenuItem value="pdf">PDF</MenuItem>
                                <MenuItem value="excel">Excel</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField select fullWidth label="Language" defaultValue="en">
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="de">German</MenuItem>
                                <MenuItem value="fr">French</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>
                    <Stack spacing={2}>
                        <Button variant="outlined" startIcon={<Preview />}>Preview Return (PDF)</Button>
                        <Button variant="outlined" startIcon={<Description />}>Download XML File</Button>
                        <Button variant="outlined" startIcon={<Description />}>Download Excel Report</Button>
                    </Stack>
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={() => setActiveStep(2)}>Back</Button>
                        <Button variant="contained" onClick={() => setActiveStep(4)}>Next</Button>
                    </Box>
                </Paper>
            )}

            {activeStep === 4 && (
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>Submit Tax Return</Typography>
                    <Alert severity="success" sx={{ mb: 3 }}>
                        Tax return is ready for submission. Please review all details before filing.
                    </Alert>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="subtitle2">Filing Summary</Typography>
                                    <Stack spacing={1} sx={{ mt: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2">Tax Type:</Typography>
                                            <Typography variant="body2"><strong>VAT Return</strong></Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2">Period:</Typography>
                                            <Typography variant="body2"><strong>Q1 2024</strong></Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2">Net Payable:</Typography>
                                            <Typography variant="body2" color="error"><strong>$32,780</strong></Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2">Deadline:</Typography>
                                            <Typography variant="body2"><strong>April 30, 2024</strong></Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={() => setActiveStep(3)}>Back</Button>
                        <Button variant="contained" color="success" startIcon={<Send />}>Submit to Tax Authority</Button>
                    </Box>
                </Paper>
            )}
        </Box>
    );
};

export default FilingPreparation;
