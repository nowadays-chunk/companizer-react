import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import { Description, Download } from '@mui/icons-material';

const TaxesWithholding = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Taxes & Withholding</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Tax Configuration</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Jurisdiction</InputLabel>
                                    <Select defaultValue="US" label="Jurisdiction">
                                        <MenuItem value="US">United States (IRS)</MenuItem>
                                        <MenuItem value="UK">United Kingdom (HMRC)</MenuItem>
                                        <MenuItem value="DE">Germany (Finanzamt)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Standard Tax Rate (%)" defaultValue="30.0" type="number" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Treaty Rate (%)" defaultValue="15.0" type="number" helperText="Based on Double Tax Treaty" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Tax ID / TIN" defaultValue="XX-XXXXXXX" />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ bgcolor: '#ffebee', mb: 3 }}>
                        <CardContent>
                            <Typography color="textSecondary">Withholding Tax Liability (YTD)</Typography>
                            <Typography variant="h4" color="error">$ 4,500.00</Typography>
                            <Typography variant="caption">Pending remittance to Authority</Typography>
                        </CardContent>
                    </Card>

                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Tax Certificates</Typography>
                        <Button startIcon={<Description />} fullWidth variant="outlined" sx={{ mb: 1, justifyContent: 'flex-start' }}>
                            Form 1042-S (2023)
                            <Download sx={{ ml: 'auto' }} />
                        </Button>
                        <Button startIcon={<Description />} fullWidth variant="outlined" sx={{ justifyContent: 'flex-start' }}>
                            W-8BEN-E (On File)
                            <Download sx={{ ml: 'auto' }} />
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TaxesWithholding;
