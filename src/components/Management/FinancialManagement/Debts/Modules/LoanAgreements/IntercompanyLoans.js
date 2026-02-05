import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormControlLabel,
    Switch,
    Alert
} from '@mui/material';

const IntercompanyLoans = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Intercompany Loans</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Entity Relationships</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Lender Entity (Internal)</InputLabel>
                                    <Select label="Lender Entity (Internal)" defaultValue="">
                                        <MenuItem value="holdco">Holding Corp (Parent)</MenuItem>
                                        <MenuItem value="sub_a">Subsidary A</MenuItem>
                                        <MenuItem value="sub_b">Subsidiary B</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Borrower Entity (Internal)</InputLabel>
                                    <Select label="Borrower Entity (Internal)" defaultValue="">
                                        <MenuItem value="sub_a">Subsidary A</MenuItem>
                                        <MenuItem value="sub_b">Subsidiary B</MenuItem>
                                        <MenuItem value="local_unit">Local Operating Unit</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Switch defaultChecked />}
                                    label="Flag for Consolidation Elimination"
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Transfer Pricing</Typography>
                        <Alert severity="warning" sx={{ mb: 2 }}>
                            Ensure interest rates comply with Arm's Length Principle.
                        </Alert>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Reference Market Rate" placeholder="e.g. 5.0%" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Applied Margin" placeholder="e.g. 1.5%" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Documentation Reference" placeholder="TP Study #123" />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IntercompanyLoans;
